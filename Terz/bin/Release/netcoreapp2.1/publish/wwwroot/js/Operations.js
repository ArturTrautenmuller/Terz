var test;

function EvalueteEx(expressions, dataframe, fields) {
    if (fields == null) {


        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == dataframe.join(",") })[0].table));
   
        var reducedExpression = solve(expressions, tempDf);
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
                var res = math.eval(solve(expressions[l], filterdDf));
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


function solve(expression, dataFrame) {
    var solvedExpression = solveWhere(expression, dataFrame);
   
    solvedExpression = solveSum(solvedExpression, dataFrame);
    solvedExpression = solveCount(solvedExpression, dataFrame);
    solvedExpression = solveMin(solvedExpression, dataFrame);
    solvedExpression = solveMax(solvedExpression, dataFrame);
    console.log("exp");
    console.log(solvedExpression);
    return solvedExpression;
}

function solveWhere(expression, dataFrame) {
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
    var returnExpression = expression;
    let pattern = /(?=sum\().+?(?<=\))/g;
    let res = pattern.exec(expression);
    while (res != null) {
        var soma = 0;
        var sumExp = res[0];
     //   var field = sumExp.substr(5, sumExp.length - 7);
        var fPattern = /\[.+?\]/g;
        var fRes = fPattern.exec(sumExp);
        var field = fRes[0].replace('[', '').replace(']', '');
        var headers = dataFrame[0];
        var pos = headers.indexOf(field);
        
        for (var i = 1; i < dataFrame.length; i++) {
         
            soma += parseFloat(dataFrame[i][pos]);
        }
        console.log(sumExp);
        returnExpression = returnExpression.replace(sumExp, soma);
        
        console.log(res);
        res = pattern.exec(expression);
        
    }


    return returnExpression;
    
}



function solveCount(expression, dataFrame) {
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

function solveMin(expression, dataFrame){
    var returnExpression = expression;
    let pattern = /(?=min\().+?(?<=\))/g;
    let res = pattern.exec(expression);
    while (res != null) {
        
        var minExp = res[0];
       // var field = minExp.substr(5, minExp.length - 7);
        var fPattern = /\[.+?\]/g;
        var fRes = fPattern.exec(minExp);
        var field = fRes[0].replace('[', '').replace(']', '');
        var headers = dataFrame[0];
        var pos = headers.indexOf(field);
        var min = parseFloat(dataFrame[1][pos]);

        for (var i = 2; i < dataFrame.length; i++) {

            if (parseFloat(dataFrame[i][pos]) < min) {
                min = parseFloat(dataFrame[i][pos]);
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
    var returnExpression = expression;
    let pattern = /(?=max\().+?(?<=\))/g;
    let res = pattern.exec(expression);
    while (res != null) {

        var maxExp = res[0];
      //  var field = maxExp.substr(5, maxExp.length - 7);
        var fPattern = /\[.+?\]/g;
        var fRes = fPattern.exec(maxExp);
        var field = fRes[0].replace('[', '').replace(']', '');
        var headers = dataFrame[0];
        var pos = headers.indexOf(field);
        var max = parseFloat(dataFrame[1][pos]);

        for (var i = 2; i < dataFrame.length; i++) {

            if (parseFloat(dataFrame[i][pos]) > max) {
                max = parseFloat(dataFrame[i][pos]);
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