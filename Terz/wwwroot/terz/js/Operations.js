var test;

function EvalueteEx(expressions, dataframe, fields) {
    if (fields == null) {


        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == dataframe.join(",") })[0].table));
   
        var reducedExpression = solve(expressions, tempDf, dataframe.join(","),fields,null);
        return math.eval(reducedExpression);
    }
    else {
       
        
        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == dataframe.join(",") })[0].table));
       
        console.log(tempDf);
        var reducedDf = [];
        reducedDf.push(fields);
        for (var i = 1; i < tempDf.length; i++) {
            var row = [];
            for (var j = 0; j < fields.length; j++) {
                var pos = tempDf[0].indexOf(fields[j]);
                row.push(tempDf[i][pos]);
            }
            reducedDf.push(row);
        }

        let set = new Set(reducedDf.map(JSON.stringify));
        var distinctDf = Array.from(set).map(JSON.parse);
       

        for (var j = 1; j < distinctDf.length; j++) {
            
            
            var filterdDf = [];
            var header = tempDf[0];
            filterdDf.push(header);
            for (var k = 1; k < tempDf.length; k++) {
                var row = tempDf[k];
                if (considerRow(fields, distinctDf[j], header, row)) {
                    filterdDf.push(row);
                }
            }
          
            for (var l = 0; l < expressions.length; l++) {
                var res = math.eval(solve(expressions[l], filterdDf, dataframe.join(","), fields, distinctDf[j]));
                distinctDf[j].push(res);
            }
           
        }

        for (var m = 0; m < expressions.length; m++) {
            distinctDf[0].push(expressions[m]);
        }
        

        return distinctDf;

    }

    return 0;
}

function applySelectionsOp(name) {
    var dfSelections = selections.filter(function (x) { return x.dataFrame == name });
    var pos = usingDataFrames.map(function (e) { return e.name; }).indexOf(name);
    var completeTable = AllDFS.filter(function (x) { return x.name == name })[0].table;
    var filteredTable = [];
    var headers = completeTable[0];
    filteredTable.push(completeTable[0]);
    for (var i = 1; i < completeTable.length; i++) {
        var row = completeTable[i];
        var selectRow = true;
        for (j = 0; j < dfSelections.length; j++) {
            var selection = dfSelections[j];
            if (selection.value.length != 0) {
                var fieldPos = headers.indexOf(selection.field);
                if (!selection.value.includes(row[fieldPos])) {
                    selectRow = false;
                }
            }
        }

        if (selectRow) {
            filteredTable.push(row);
        }
    }
    console.log(filteredTable);
    usingDataFrames[pos].table = filteredTable;

}

function solve(expression, dataFrame,dataFrameName,fields,groupedRow) {
    
    var solvedExpression = removeBlank(expression);
    
    var solvedExpression = solveExternalDF(solvedExpression, fields, groupedRow)
   
    solvedExpression = solveIgnoreAll(solvedExpression, dataFrameName, fields, groupedRow);
    
    solvedExpression = solveIgnore(solvedExpression, dataFrameName, fields, groupedRow);
   
    solvedExpression = solveWhere(solvedExpression, dataFrame);
    
    solvedExpression = solveSum(solvedExpression, dataFrame);
    solvedExpression = solveCount(solvedExpression, dataFrame);
    solvedExpression = solveMin(solvedExpression, dataFrame);
    solvedExpression = solveMax(solvedExpression, dataFrame);
   
    return solvedExpression;
}

function removeBlank(expression) {
    var returnExpression = expression;
    let pattern = /(?=\().+?(?<=\))/g;
    let res = pattern.exec(expression);

    while (res != null) {
        var iExpression = res[0];
        var tExpression = iExpression.replaceAll('( [ ', '([').replaceAll('] )','])');
        returnExpression = returnExpression.replace(iExpression, tExpression);

        res = pattern.exec(expression);
    }

    return returnExpression;

}

function solveIgnoreAll(expression, dataFrameName, fields, groupedRow) {

    if (!expression.includes("ignoreAll(")) return expression;

    var selectionsBackup = JSON.parse(JSON.stringify(selections));
    selections = [];
    applySelectionsOp(dataFrameName);
    tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == dataFrameName })[0].table));
    var dataFrame;
    if (fields == null) {
        dataFrame = tempDf
    }
    else {
        var filterdDf = [];
        var header = tempDf[0];
        filterdDf.push(header);
        for (var k = 1; k < tempDf.length; k++) {
            var row = tempDf[k];
            if (considerRow(fields, groupedRow, header, row)) {
                filterdDf.push(row);
            }
        }

        dataFrame = filterdDf;
    }
    var returnExpression = expression;
    let pattern = /[^\s]+\.ignoreAll\(\)/g;
    let res = pattern.exec(expression);
    while (res != null) {
        var iExpression = res[0];
       
       
        var baseExp = iExpression.replace(".ignoreAll()", '');

        var iSolvedExpression = solveWhere(baseExp, dataFrame);
        iSolvedExpression = solveSum(iSolvedExpression, dataFrame);
        iSolvedExpression = solveCount(iSolvedExpression, dataFrame);
        iSolvedExpression = solveMin(iSolvedExpression, dataFrame);
        iSolvedExpression = solveMax(iSolvedExpression, dataFrame);

        returnExpression = returnExpression.replace(iExpression, iSolvedExpression);

        res = pattern.exec(expression);
    }
    selections = JSON.parse(JSON.stringify(selectionsBackup));
    applySelectionsOp(dataFrameName);
    return returnExpression;
}

function solveIgnore(expression, dataFrameName, fields, groupedRow) {

    if (!expression.includes("ignore(")) return expression;

    var selectionsBackup = JSON.parse(JSON.stringify(selections));
    var returnExpression = expression;
    let pattern = /[^\s]+\.ignore\(.+?\)/g;
    let res = pattern.exec(expression);
    while (res != null) {
        var iExpression = res[0];
        let iPattern = /ignore\(.+?\)/g;
        let iRes = iPattern.exec(iExpression)[0];
        var ignoreFields = iRes.replace('ignore(', '').replace(')', '').split(',');

        //filtrar
        var _selectionsBackup = JSON.parse(JSON.stringify(selectionsBackup));

        for (var k = 0; k < ignoreFields.length; k++) {
            var pos = _selectionsBackup.findIndex(i => i.field == ignoreFields[k] && i.dataFrame == dataFrameName);
            if (pos != -1) {
                _selectionsBackup[pos].value = [];
            }
        }

        selections = _selectionsBackup;

        applySelectionsOp(dataFrameName);
        tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == dataFrameName })[0].table));
        var dataFrame;
        if (fields == null) {
            dataFrame = tempDf
        }
        else {
            var filterdDf = [];
            var header = tempDf[0];
            filterdDf.push(header);
            for (var k = 1; k < tempDf.length; k++) {
                var row = tempDf[k];
                if (considerRow(fields, groupedRow, header, row)) {
                    filterdDf.push(row);
                }
            }

            dataFrame = filterdDf;
        }

        //


        var baseExp = iExpression.replace("." + iRes, '');

        var iSolvedExpression = solveWhere(baseExp, dataFrame);
        iSolvedExpression = solveSum(iSolvedExpression, dataFrame);
        iSolvedExpression = solveCount(iSolvedExpression, dataFrame);
        iSolvedExpression = solveMin(iSolvedExpression, dataFrame);
        iSolvedExpression = solveMax(iSolvedExpression, dataFrame);

        returnExpression = returnExpression.replace(iExpression, iSolvedExpression);

        res = pattern.exec(expression);
    }
    selections = JSON.parse(JSON.stringify(selectionsBackup));
    applySelectionsOp(dataFrameName);
    return returnExpression;
}

function solveExternalDF(expression, fields, groupedRow) {

    if (!expression.includes("externalDF(")) return expression;

    var returnExpression = expression;
    let pattern = /[^\s]+\.externalDF\(.+?\)/g;
    let res = pattern.exec(expression);
    while (res != null) {
        var eExpression = res[0];
        let ePattern = /externalDF\(.+?\)/g;
        let eRes = ePattern.exec(eExpression)[0];
        var dfs = eRes.replace('externalDF(', '').replace(')', '');

        
        var externalDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == dfs })[0].table));
        


        var baseExp = eExpression.replace("." + eRes, '');


        var eSolvedExpression = solveIgnoreAll(baseExp, dfs, fields, groupedRow);
        eSolvedExpression = solveIgnore(eSolvedExpression, dfs, fields, groupedRow);
        eSolvedExpression = solveWhere(eSolvedExpression, externalDf);
        eSolvedExpression = solveSum(eSolvedExpression, externalDf);
        eSolvedExpression = solveCount(eSolvedExpression, externalDf);
        eSolvedExpression = solveMin(eSolvedExpression, externalDf);
        eSolvedExpression = solveMax(eSolvedExpression, externalDf);

        returnExpression = returnExpression.replace(eExpression, eSolvedExpression);

        res = pattern.exec(expression);
    }
    
    return returnExpression;
}

function solveWhere(expression, dataFrame) {
    if (!expression.includes("where(")) return expression;

    var returnExpression = expression;
    let pattern = /[^\s]+\.where\(.+?\)/g;
    let res = pattern.exec(expression);
    while (res != null) {
        var whereExpression = res[0];
        var wDataFrame = JSON.parse(JSON.stringify(dataFrame));
        var headers = dataFrame[0];
       
        let wPattern = /where\(.+?\)/g;
        let wRes = wPattern.exec(whereExpression);
        var wExp = wRes[0];
        var params = wExp.replace('where(', '').replace(')', '');

        let paramsSplit = /\[.+?\}/g;
        let param = paramsSplit.exec(params);
        while (param != null) {
            
            let fPattern = /\[.+?\]/g;
            var wField = fPattern.exec(param)[0].replace('[', '').replace(']', '');
            let vPattern = /'.+?'/g;
           
            var values = [];
            var wValue = vPattern.exec(param);
            while (wValue != null) {
                values.push(wValue[0].replace('\'', '').replace('\'', '').toString());
                wValue = vPattern.exec(param);
            }
            var fPos = headers.indexOf(wField);
            var wnDataFrame = [];
            wnDataFrame.push(headers);
            var exculdes = param.toString().includes("-=");

           
            
            for (var k = 1; k < wDataFrame.length; k++) {
                var row = wDataFrame[k];
                if (exculdes) {
                    if (!values.includes(row[fPos])) {
                        wnDataFrame.push(row);
                    }
                }
                else {
                    if (values.includes(row[fPos])) {
                        wnDataFrame.push(row);
                    }
                }
                
            }

            wDataFrame = wnDataFrame;
            param = paramsSplit.exec(params);

        }

        var baseExp = whereExpression.replace("."+wExp, '');
        var wSolvedExpression = solveSum(baseExp, wDataFrame);
        wSolvedExpression = solveCount(wSolvedExpression, wDataFrame);
        wSolvedExpression = solveMin(wSolvedExpression, wDataFrame);
        wSolvedExpression = solveMax(wSolvedExpression, wDataFrame);
        console.log(wSolvedExpression);
        console.log(whereExpression);
        console.log(returnExpression);
        returnExpression = returnExpression.replace(whereExpression, wSolvedExpression);
        console.log(wDataFrame);
        res = pattern.exec(expression);


    }

    console.log("where")
    console.log(returnExpression);
    return returnExpression;
}



function solveSum(expression, dataFrame) {
    if (!expression.includes("sum(")) return expression;

    var returnExpression = expression;
    let pattern = /(?=sum\().+?(?<=\))/g;
    let res = pattern.exec(expression);
    while (res != null) {
        var soma = 0;
        var sumExp = res[0];
     //   var field = sumExp.substr(5, sumExp.length - 7);
     //   var fPattern = /\[.+?\]/g;
     //   var fRes = fPattern.exec(sumExp);
      //  var field = fRes[0].replace('[', '').replace(']', '');
        var headers = dataFrame[0];
     //   var pos = headers.indexOf(field);

        var _innerExp = sumExp.replace('sum(', '').slice(0, -1);
        var isMultExp = false;
        var operators = ['+', '-', '*', '/', '^', '{', '}'];
        for (var i = 0; i < operators.length; i++) {
            if (_innerExp.includes(operators[i])) {
                isMultExp = true;
            }
        }

        if (isMultExp) {

            let _fPattern = /\[.+?\]/g;
            let _fRes = _fPattern.exec(_innerExp);
            var allFields = [];
            while (_fRes != null) {


                var oFields = {};
                oFields["field"] = _fRes[0].replace('[', '').replace(']', '');
                oFields["pos"] = headers.indexOf(oFields["field"]);
                //  let nfPattern = /\[.+?\]/g;
                allFields.push(oFields);
                // _innerExp = _innerExp.replace("[" + oFields["field"] + "]","1");
                _fRes = _fPattern.exec(_innerExp);


            }




            for (var i = 1; i < dataFrame.length; i++) {
                var innerExp = sumExp.replace('sum(', '').slice(0, -1);
                // let fPattern = /\[.+?\]/g;
                // let fRes = fPattern.exec(innerExp);
                for (var j = 0; j < allFields.length; j++) {
                    var field = allFields[j].field;
                    console.log("eval campo " + field);
                    var pos = allFields[j].pos;
                    innerExp = innerExp.replace("[" + field + "]", parseFloat(dataFrame[i][pos]));
                    console.log("eval inner " + innerExp);
                    //let nfPattern = /\[.+?\]/g;
                    // fRes = nfPattern.exec(innerExp);

                    // console.log(fRes);
                }

                console.log("eval : " + innerExp);
                soma += math.eval(innerExp.replaceAll('{', '(').replaceAll('}', ')'));
            }
        }
        else {
            var field = _innerExp.replace('[', '').replace(']','');
            var pos = headers.indexOf(field);
            for (var i = 1; i < dataFrame.length; i++) {
                
                soma += parseFloat(dataFrame[i][pos]);
            }
        }
        console.log(sumExp);
        returnExpression = returnExpression.replace(sumExp, soma);
        
        console.log(res);
        res = pattern.exec(expression);
        
    }


    return returnExpression;
    
}



function solveCount(expression, dataFrame) {
    if (!expression.includes("count(")) return expression;

    var returnExpression = expression;
    let pattern = /(?=count\().+?(?<=\))/g;
    let res = pattern.exec(expression);
    while (res != null) {
        var total = 0;
        var countExp = res[0];
       // var field = countExp.substr(7, countExp.length - 9);
        var fPattern = /\[.+?\]/g;
        var fRes = fPattern.exec(countExp);
        var field = fRes[0].replace('[', '').replace(']', '');
        console.log(field);
        var headers = dataFrame[0];
        var pos = headers.indexOf(field);

        for (var i = 1; i < dataFrame.length; i++) {
            if (dataFrame[i][pos] != null) {
                total++;
            }
            
        }
        console.log(countExp);
        returnExpression = returnExpression.replace(countExp, total);

        console.log(res);
        res = pattern.exec(expression);

    }

    return returnExpression;
}

function solveMin(expression, dataFrame) {
    if (!expression.includes("min(")) return expression;

    var returnExpression = expression;
    let pattern = /(?=min\().+?(?<=\))/g;
    let res = pattern.exec(expression);
    while (res != null) {
        
        var minExp = res[0];
        var min;
       // var field = minExp.substr(5, minExp.length - 7);
     //   var fPattern = /\[.+?\]/g;
    //    var fRes = fPattern.exec(minExp);
     //   var field = fRes[0].replace('[', '').replace(']', '');
        var headers = dataFrame[0];
     //   var pos = headers.indexOf(field);

        var __innerExp = minExp.replace('min(', '').slice(0, -1);

        var isMultExp = false;
        var operators = ['+', '-', '*', '/', '^', '{', '}'];
        for (var i = 0; i < operators.length; i++) {
            if (__innerExp.includes(operators[i])) {
                isMultExp = true;
            }
        }

        if (isMultExp) {

            let __fPattern = /\[.+?\]/g;
            let __fRes = __fPattern.exec(__innerExp);
            var allFields = [];
            while (__fRes != null) {


                var oFields = {};
                oFields["field"] = __fRes[0].replace('[', '').replace(']', '');
                oFields["pos"] = headers.indexOf(oFields["field"]);
                //  let nfPattern = /\[.+?\]/g;
                allFields.push(oFields);
                // _innerExp = _innerExp.replace("[" + oFields["field"] + "]","1");
                __fRes = __fPattern.exec(__innerExp);


            }


            var _innerExp = minExp.replace('min(', '').slice(0, -1);
            //  let _fPattern = /\[.+?\]/g;
            //  let _fRes = _fPattern.exec(_innerExp);
            for (var i = 0; i < allFields.length; i++) {
                // var field = _fRes[0].replace('[', '').replace(']', '');
                // console.log("eval campo " + field);
                // var pos = headers.indexOf(field);
                _innerExp = _innerExp.replace("[" + allFields[i].field + "]", parseFloat(dataFrame[1][allFields[i].pos]));
                console.log("eval inner " + _innerExp);
                // let nfPattern = /\[.+?\]/g;
                //_fRes = nfPattern.exec(_innerExp);

                // console.log(_fRes);
            }




            min = parseFloat(math.eval(_innerExp));


            for (var i = 2; i < dataFrame.length; i++) {
                var innerExp = minExp.replace('min(', '').slice(0, -1);
                //    let fPattern = /\[.+?\]/g;
                //   let fRes = fPattern.exec(innerExp);
                for (var j = 0; j < allFields.length; j++) {
                    //  var field = fRes[0].replace('[', '').replace(']', '');
                    // console.log("eval campo " + field);
                    // var pos = headers.indexOf(field);
                    innerExp = innerExp.replace("[" + allFields[j].field + "]", parseFloat(dataFrame[i][allFields[j].pos]));
                    console.log("eval inner " + innerExp);
                    //   let nfPattern = /\[.+?\]/g;
                    //   fRes = nfPattern.exec(innerExp);

                    //   console.log(fRes);
                }

                console.log("eval : " + innerExp);
                var innerExpEval = parseFloat(math.eval(innerExp));
                if (innerExpEval < min) {
                    min = innerExpEval;
                }

            }
        }
        else {
            var field = __innerExp.replace('[', '').replace(']', '');
            var pos = headers.indexOf(field);
            min = parseFloat(dataFrame[1][pos]);
            for (var i = 2; i < dataFrame.length; i++) {
                var value = parseFloat(dataFrame[i][pos]);
                if (value < min) {
                    min = value;
                }

            }
        }

      

        returnExpression = returnExpression.replace(minExp, min);
        console.log(returnExpression);
        console.log(res);
        res = pattern.exec(expression);

    }


    return returnExpression;
}

function solveMax(expression, dataFrame) {
    if (!expression.includes("max(")) return expression;

    var returnExpression = expression;
    let pattern = /(?=max\().+?(?<=\))/g;
    let res = pattern.exec(expression);
    while (res != null) {

        var maxExp = res[0];
        var max;
        // var field = maxExp.substr(5, maxExp.length - 7);
        //   var fPattern = /\[.+?\]/g;
        //    var fRes = fPattern.exec(maxExp);
        //   var field = fRes[0].replace('[', '').replace(']', '');
        var headers = dataFrame[0];
        //   var pos = headers.indexOf(field);

        var __innerExp = maxExp.replace('max(', '').slice(0, -1);

        var isMultExp = false;
        var operators = ['+', '-', '*', '/', '^', '{', '}'];
        for (var i = 0; i < operators.length; i++) {
            if (__innerExp.includes(operators[i])) {
                isMultExp = true;
            }
        }

        if (isMultExp) {

            let __fPattern = /\[.+?\]/g;
            let __fRes = __fPattern.exec(__innerExp);
            var allFields = [];
            while (__fRes != null) {


                var oFields = {};
                oFields["field"] = __fRes[0].replace('[', '').replace(']', '');
                oFields["pos"] = headers.indexOf(oFields["field"]);
                //  let nfPattern = /\[.+?\]/g;
                allFields.push(oFields);
                // _innerExp = _innerExp.replace("[" + oFields["field"] + "]","1");
                __fRes = __fPattern.exec(__innerExp);


            }


            var _innerExp = maxExp.replace('max(', '').slice(0, -1);
            //  let _fPattern = /\[.+?\]/g;
            //  let _fRes = _fPattern.exec(_innerExp);
            for (var i = 0; i < allFields.length; i++) {
                // var field = _fRes[0].replace('[', '').replace(']', '');
                // console.log("eval campo " + field);
                // var pos = headers.indexOf(field);
                _innerExp = _innerExp.replace("[" + allFields[i].field + "]", parseFloat(dataFrame[1][allFields[i].pos]));
                console.log("eval inner " + _innerExp);
                // let nfPattern = /\[.+?\]/g;
                //_fRes = nfPattern.exec(_innerExp);

                // console.log(_fRes);
            }




            max = parseFloat(math.eval(_innerExp));


            for (var i = 2; i < dataFrame.length; i++) {
                var innerExp = maxExp.replace('max(', '').slice(0, -1);
                //    let fPattern = /\[.+?\]/g;
                //   let fRes = fPattern.exec(innerExp);
                for (var j = 0; j < allFields.length; j++) {
                    //  var field = fRes[0].replace('[', '').replace(']', '');
                    // console.log("eval campo " + field);
                    // var pos = headers.indexOf(field);
                    innerExp = innerExp.replace("[" + allFields[j].field + "]", parseFloat(dataFrame[i][allFields[j].pos]));
                    console.log("eval inner " + innerExp);
                    //   let nfPattern = /\[.+?\]/g;
                    //   fRes = nfPattern.exec(innerExp);

                    //   console.log(fRes);
                }

                console.log("eval : " + innerExp);
                var innerExpEval = parseFloat(math.eval(innerExp));
                if (innerExpEval > max) {
                    max = innerExpEval;
                }

            }
        }
        else {
            var field = __innerExp.replace('[', '').replace(']', '');
            var pos = headers.indexOf(field);
            max = parseFloat(dataFrame[1][pos]);
            for (var i = 2; i < dataFrame.length; i++) {
                var value = parseFloat(dataFrame[i][pos]);
                if (value > max) {
                    max = value;
                }

            }
        }



        returnExpression = returnExpression.replace(maxExp, max);
        console.log(returnExpression);
        console.log(res);
        res = pattern.exec(expression);

    }


    return returnExpression;
}

function considerRow(fields, fieldsValues,header,row) {
   
    for (var i = 0; i < fields.length; i++) {
        var pos = header.indexOf(fields[i]);
        if (row[pos] != fieldsValues[i]) {
            return false;
        }
    }

    return true;
}

function findkeys(aheaders, bheaders) {
    var keys = [];
    for (var i = 0; i < aheaders.length; i++) {
        if (bheaders.includes(aheaders[i])) {
            keys.push(aheaders[i]);
        }
    }
    return keys;
}
function findKey(aheaders, bheaders) {
   
    for (var i = 0; i < aheaders.length; i++) {
        if (bheaders.includes(aheaders[i])) {
            return aheaders[i];
        }
    }
}

var sqltest;
var keytest;
function fulljoin(a, b) {
    var aheaders = a[0];
    var bheaders = b[0];

    var ta = "a" + Math.floor(Math.random() * 1000000000);
    var tb = "b" + Math.floor(Math.random() * 1000000000);

    alasql("CREATE TABLE " + ta + " (" + aheaders.join() + ")");
    alasql("CREATE TABLE " + tb + " (" + bheaders.join() + ")");



    for (var i = 1; i < a.length; i++) {
        row = a[i].join("','");
        var values = "'" + row + "'";
        alasql("INSERT INTO " + ta + " VALUES (" + values + ")");
    }

    for (var i = 1; i < b.length; i++) {
        row = b[i].join("','");
        var values = "'" + row + "'";
        alasql("INSERT INTO " + tb + " VALUES (" + values + ")");
    }

    var key = findKey(aheaders, bheaders);
    var keys = findkeys(aheaders, bheaders);
    var resultheader = Array.from(new Set(aheaders.concat(bheaders)));

    var keyexp = "";
    for (var i = 0; i < keys.length; i++) {
        if (i == 0) {
            keyexp += " on ";
        }
        keyexp += ta + "." + keys[i] + " = " + tb + "." + keys[i];
        if (i != keys.length - 1) {
            keyexp += " and ";
        }
    }
   

    //var resultSql = alasql("SELECT * FROM " + ta + " join " + tb + " on " + ta + "." + key + " = " + tb + "." + key);
    var resultSql = alasql("SELECT * FROM " + ta + " join " + tb + keyexp);

    sqltest = resultSql;
    keytest = key;

    var result = [];
    result.push(resultheader);
    for (var i = 0; i < resultSql.length; i++) {
        var row = [];
        var sqlRow = resultSql[i];
        for (var j = 0; j < resultheader.length; j++) {
            row.push(sqlRow[resultheader[j]]);
        }
        result.push(row);
    }

    alasql.exec("DROP TABLE IF EXISTS " + ta, [], function (res) {
        console.log('removed');
    });
    alasql.exec("DROP TABLE IF EXISTS " + tb, [], function (res) {
        console.log('removed');
    });
    return result;
}

function fixData(data) {
    var dmy = data.split(" ")[0];
    var hms;
    if (data.split(" ")[1] == null || data.split(" ")[1] == "") {
        hms = "00:00:00";
    }
    else {
        hms = data.split(" ")[1];
    }

    var d, m, y;
    if (dmy.includes("/")) {
        var arrayDMY = dmy.split("/");
        d = arrayDMY[0];
        m = arrayDMY[1];
        y = arrayDMY[2];

        dmy = y + "-" + m + "-" + d;
    }

    return dmy + " " + hms;
}

function compare(a, b) {

    var keyA = a.date,
        keyB = b.date;
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
}

function compareMapDate(a, b) {

    var keyA = new Date(a.date),
        keyB = new Date(b.date);
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
}