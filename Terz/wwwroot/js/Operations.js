function EvalueteEx(expressions, dataframe, fields) {
    if (fields == null) {
        var reducedExpression = solve(expressions, usingDataFrames.filter(function (x) { return x.name = dataframe })[0].table);
        return math.eval(reducedExpression);
    }
    else {
        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name = dataframe })[0].table));
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
    var solvedExpression = solveSum(expression, dataFrame);
    solvedExpression = solveCount(solvedExpression, dataFrame);
    return solvedExpression;
}

function solveSum(expression, dataFrame) {
    var returnExpression = expression;
    let pattern = /(?=sum\().+?(?<=\))/g;
    let res = pattern.exec(expression);
    while (res != null) {
        var soma = 0;
        var sumExp = res[0];
        var field = sumExp.substr(5, sumExp.length - 7);
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
        var field = countExp.substr(7, countExp.length - 9);
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

function considerRow(fields, fieldsValues,header,row) {
   
    for (var i = 0; i < fields.length; i++) {
        var pos = header.indexOf(fields[i]);
        if (row[pos] != fieldsValues[i]) {
            return false;
        }
    }

    return true;
}