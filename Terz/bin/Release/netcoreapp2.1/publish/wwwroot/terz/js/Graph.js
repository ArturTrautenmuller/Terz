function buildGraphs(sheetOrder) {
    var sheet = reportData.config.sheets.filter(function (x) { return x.order == sheetOrder })[0];
    var graphs = sheet.graphs;
    var gLenght;
    if (graphs == null) {
        gLenght = 0;
    }
    else {
        gLenght = graphs.length;
    }
    if (sheet.style != null) {
        if (sheet.style.backgroundColor != null) {
            document.getElementsByTagName("body")[0].style.backgroundColor = sheet.style.backgroundColor;
        }
        else {
            document.getElementsByTagName("body")[0].style.backgroundColor = "#ffffff";
        }
    }
   
    else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#ffffff";
    }
    

    for (var i = 0; i < gLenght; i++) {
        var graph = graphs[i];

        var graphContainer = document.createElement("div");
        graphContainer.setAttribute("id", "gc" + graph.id);
        graphContainer.style.border = "2px solid lightgrey";
        graphContainer.style.borderRadius = "7px";
        graphContainer.style.marginLeft = graph.style.x;
        graphContainer.style.marginTop = graph.style.y;
        graphContainer.style.width = graph.style.width;
        graphContainer.style.height = graph.style.height;
        graphContainer.setAttribute("class", "resize-drag");

        if (graph.objectType != 'table') {

            var graphTitle = document.createElement("div");
            var graphTitleLabel = document.createElement("label");
            graphTitleLabel.style.fontSize = "18px";
            graphTitleLabel.appendChild(document.createTextNode(graph.title));
            graphTitle.appendChild(graphTitleLabel);

            var expandButton = document.createElement("a");
            var expandIcon = document.createElement("i");
            

            if (ExpandedGraph == graph.id) {
                expandIcon.setAttribute("class", "fas fa-compress-alt");
                expandButton.setAttribute("onclick", "restoreGraph()");
            }
            else {
                expandIcon.setAttribute("class", "fas fa-expand-alt");
                expandButton.setAttribute("onclick", "expandGraph('" + graph.id + "')");
            }
            expandButton.appendChild(expandIcon);
            expandButton.style.float = "right";
            expandButton.style.fontSize = "18px";
            expandButton.style.marginRight = "12px";
            graphTitle.appendChild(expandButton);

            graphContainer.appendChild(graphTitle);
        }
        var graphDiv = document.createElement("div");
        
       // graphDiv.style.position = "absolute";
       
        graphDiv.setAttribute("id", "g" + graph.id);
 
        if (['bubble', 'sankey', 'org','timeline'].includes(graph.objectType)) {
            graphDiv.style.height = "90%";
        }
       /* if (['bar', 'pie', 'line', 'network', 'table', 'bubble', 'sankey', 'timeline', 'linedate', 'pyramid', 'compare', 'gaugi', 'variance', 'waterfall'].includes(graph.objectType)) {
           
        }*/
        graphContainer.style.backgroundColor = graph.style.backgroundColor;

        graphContainer.appendChild(graphDiv);

        document.getElementById("Graphs").appendChild(graphContainer);

        try {
            switch (graph.objectType) {

                case 'bar': { buildBarChart(graph); break; }
                case 'pie': { buildPieChart(graph); break; }
                case 'line': { buildLineChart(graph); break; }
                case 'tree': { buildTreeMap(graph); break; }
                case 'network': { buildNetWorkGraph(graph); break; }
                case 'table': { buildTable(graph); break; }
                case 'bubble': { buildBubbleChart(graph); break; }
                case 'map': { buildMapChart(graph); break; }
                case 'sankey': { buildSankeyChart(graph); break; }
                case 'org': { buildOrgChart(graph); break; }
                case 'timeline': { buildTimeLineChart(graph); break; }
                case 'linedate': { buildLineDateChart(graph); break; }
                case 'maptimeline': { buildMapTimeLineChart(graph); break; }
                case 'radarcalendar': { buildCalendarRadarChart(graph); break; }
                case 'pyramid': { buildPyramidChart(graph); break; }
                case 'compare': { buildCompareChart(graph); break; }
                case 'gaugi': { buildGaugiChart(graph); break; }
                case 'variance': { buildVarianceChart(graph); break; }
                case 'waterfall': { buildWaterFallChart(graph); break; } 
                case 'linedatecompare': { buildLineDateCompareChart(graph); break; } 

                default: break;


            }
        }
        catch (err) {
            console.log(err);
        }
        graphContainer.style.position = "absolute";
        
    }

}



function buildBarChart(graph) {
    /* var data = [
        { id: "alpha", x: 'a', y: 7 },
        { id: "alpha", x: 5, y: 25 },
        { id: "alpha", x: 6, y: 13 },
        { id: "beta", x: 'a', y: 17 },
        { id: "beta", x: 5, y: 8 },
        { id: "beta", x: 6, y: 13 }
    ];
            */
    var data = [];
    var measureNames = [];
    var expressions = [];
    var dimensions = [];
    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[0].field));
    for (var i = 0; i < graph.measures.length; i++) {
        expressions.push(graph.measures[i].expresion);
    }
    var objData;


    if (graph.executeMode == "1" || graph.executeMode == null) {

        objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
    }
    else {
        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == graph.dataFrameName.join(",") })[0].table));
        objData = [];
        var h = [];
        for (var j = 0; j < dimensions.length; j++) {
            h.push(dimensions[j]);
        }
        for (var j = 0; j < expressions.length; j++) {
            h.push(expressions[j]);
        }
        objData.push(h);
        for (var i = 1; i < tempDf.length; i++) {
            var row = [];
            for (var j = 0; j < dimensions.length; j++) {
                var pos = tempDf[0].indexOf(dimensions[j]);
                row.push(tempDf[i][pos]);
            }
            for (var j = 0; j < measures.length; j++) {
                var pos = tempDf[0].indexOf(measures[j]);
                row.push(parseFloat(tempDf[i][pos]));
            }
            objData.push(row);
        }
    }



    for (var l = 0; l < graph.measures.length; l++) {
        measureNames.push(graph.measures[l].name);
    }

    for (var k = 0; k < measureNames.length; k++) {
        for (var j = 1; j < objData.length; j++) {
            var bar = { id: 0, x: 0, y: 0 };
            bar.id = measureNames[k];
            bar.x = objData[j][0];
            bar.y = objData[j][k + 1];

            data.push(bar);
        }
    }

    var colors = {};
    for (var k = 0; k < graph.measures.length; k++) {
        colors[graph.measures[k].name] = graph.measures[k].color;
    }

    function assignColor(d) {
        if (colors[d] == null || colors[d] == "") return "grey";
        return colors[d];

    }

    var sort;
    if (graph.sort == null) {
        graph.sort = { axis: 'dim', type: 'numerico', option: 'none' };
    }

    if (graph.sort.axis == 'mea') {

        if (graph.sort.option == 'crescente') {
            if (graph.sort.type == 'numerico') {
                sort = function (a, b) {

                    return a["y"] - b["y"];

                };
            }
        }
        if (graph.sort.option == 'decrescente') {
            if (graph.sort.type == 'numerico') {
                sort = function (a, b) {

                    return b["y"] - a["y"];

                };
            }
        }



         
    }
    else if (graph.sort.axis == 'dim') {
        if (graph.sort.option == 'crescente') {
            if (graph.sort.type == 'numerico') {
                sort = function (a, b) {

                    return a["x"] - b["x"];

                };
            }
            if (graph.sort.type == 'data') {
                sort = function (a, b) {
                    var ad = new Date(fixData(a["x"]));
                    var bd = new Date(fixData(b["x"]));
                   
                    return ad - bd;

                };
            }

            if (graph.sort.type == 'mes') {
                sort = function (a, b) {
                    var ad = MonthToInt[a["x"].toLowerCase()];
                    var bd = MonthToInt[b["x"].toLowerCase()];

                    return ad - bd;

                };
            }
            if (graph.sort.type == 'mesano') {
                sort = function (a, b) {

                    var a_mes = MonthToInt[a["x"].split(" ")[0].toLowerCase()];
                    var a_ano = a["x"].split(" ")[1];

                    var b_mes = MonthToInt[b["x"].split(" ")[0].toLowerCase()];
                    var b_ano = b["x"].split(" ")[1];

                    var ad = parseInt(a_ano) + 12 * parseInt(a_mes);
                    var bd = parseInt(b_ano) + 12 * parseInt(b_mes);

                    return ad - bd;

                };
            }
        }
        if (graph.sort.option == 'decrescente') {
            if (graph.sort.type == 'numerico') {
                sort = function (a, b) {

                    return b["x"] - a["x"];

                };
            }
            if (graph.sort.type == 'data') {
                sort = function (a, b) {
                    var ad = new Date(fixData(a["x"]));
                    var bd = new Date(fixData(b["x"]));
                   
                    return bd - ad;

                };
            }

            if (graph.sort.type == 'mes') {
                sort = function (a, b) {
                    var ad = MonthToInt[a["x"].toLowerCase()];
                    var bd = MonthToInt[b["x"].toLowerCase()];

                    return bd - ad;

                };
            }

            if (graph.sort.type == 'mesano') {
                sort = function (a, b) {

                    var a_mes = MonthToInt[a["x"].split(" ")[0].toLowerCase()];
                    var a_ano = a["x"].split(" ")[1];

                    var b_mes = MonthToInt[b["x"].split(" ")[0].toLowerCase()];
                    var b_ano = b["x"].split(" ")[1];

                    var ad = parseInt(a_ano) + 12 * parseInt(a_mes);
                    var bd = parseInt(b_ano) + 12 * parseInt(b_mes);

                    return bd - ad;

                };
            }
        }
    }

    
    var discrete;
    var x;
    var y;
    var xSort;
    var ySort;
    if (graph.style.orientation == 'horizontal' || graph.style.orientation == null) {
        discrete = "x";
        x = "x";
        y = "y";
        xSort = sort;

        document.getElementById("gc" + graph.id).style.overflowX = "auto";
        var gWidth = objData.length * 75 + 100;
        if (graph.style.width < gWidth) {
            document.getElementById("g" + graph.id).style.width = gWidth+"px";
        }

        document.getElementById("g" + graph.id).style.height = Math.floor(graph.style.height * 0.8) + "px";
    }
    else {
        discrete = "y";
        x = "y";
        y = "x";
        ySort = sort;

        document.getElementById("gc" + graph.id).style.overflowY = "auto";
        var gheight = objData.length * 75 + 100;
        if (graph.style.height < gheight) {
            document.getElementById("g" + graph.id).style.height = gheight + "px";
        }

        
    }

  
   
    new d3plus.BarChart()
        .config({
            data: data,
            discrete: discrete,
            groupBy: "id",
            x: x,
            y: y,
            shapeConfig: {
                Bar: {
                    fill: function (d) {
                        return assignColor(d.id);
                    }
                }
            },
            xSort: xSort,
            ySort: ySort,
            
            xConfig: {
                title: graph.dimensions[0].name,
                titleConfig: {
                    fontColor: "green"
                },
            },
            yConfig: {
                title: graph.measures[0].name,
                titleConfig: {
                    fontColor: "green"
                }
            },
            tooltipConfig: {
                title: function (d) {
                    return graph.dimensions[0].name+": " + d["x"];
                },
                tbody: [
                    [graph.measures[0].name, function (d) { return d["y"] }]
                ]
            }
        })
    //    .data(data)
        .select("#g" + graph.id)
        .groupPadding(40)
        .on("click", function (d) {
            filterFromGraph(graph.dataFrameName, getUsingField(graph.dataFrameName, graph.dimensions[0].field), d.x);
        })
        .stacked(graph.style.stack)
        .render();
    

}

function buildNetWorkGraph(graph) {

  

}
var sData;
var sData2;
function buildBubbleChart(graph) {
   

    var measureNames = [];
    var expressions = [];
    var dimensions = [];
    var dimNames = [];
   
    for (var i = 0; i < graph.measures.length; i++) {
        expressions.push(graph.measures[i].expresion);
        measureNames.push(graph.measures[i].name);
    }
    for (var i = 0; i < graph.dimensions.length; i++) {
        dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[i].field));
        dimNames.push(graph.dimensions[i].name);
    }


    var objData;


    if (graph.executeMode == "1" || graph.executeMode == null) {

        objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
    }
    else {
        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == graph.dataFrameName.join(",") })[0].table));
        objData = [];
        var h = [];
        for (var j = 0; j < dimensions.length; j++) {
            h.push(dimensions[j]);
        }
        for (var j = 0; j < expressions.length; j++) {
            h.push(expressions[j]);
        }
        objData.push(h);
        for (var i = 1; i < tempDf.length; i++) {
            var row = [];
            for (var j = 0; j < dimensions.length; j++) {
                var pos = tempDf[0].indexOf(dimensions[j]);
                row.push(tempDf[i][pos]);
            }
            for (var j = 0; j < measures.length; j++) {
                var pos = tempDf[0].indexOf(measures[j]);
                row.push(parseFloat(tempDf[i][pos]));
            }
            objData.push(row);
        }
    }


    sData2 = objData;
    var dataTable = [];
    var header = [];
    header.push(dimNames[0]);
    header.push(measureNames[0]);
    header.push(measureNames[1]);
    if (dimNames.length > 1) {
        header.push(dimNames[1]);
    }
    if (measureNames.length > 2) {
        header.push(measureNames[2]);
    }

    dataTable.push(header);
    for (var i = 1; i < objData.length; i++) {
        var row = [];
        row.push(objData[i][0]);
        row.push(objData[i][dimNames.length]);
        row.push(objData[i][dimNames.length + 1]);
        if (dimNames.length > 1) {
            row.push(objData[i][1]);
        }
        if (measureNames.length > 2) {
            row.push(objData[i][dimNames.length + measureNames.length - 1]);
        }
        dataTable.push(row);
    }
    sData = dataTable;

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawSeriesChart);
   
    function drawSeriesChart() {

        var backgroundColor = 'white';
        if (graph.style.backgroundColor != null && graph.style.backgroundColor != "") {
            backgroundColor = graph.style.backgroundColor;
        }

        var data = google.visualization.arrayToDataTable(dataTable);

        var options = {
            title: graph.title,
            hAxis: { title: measureNames[0] },
            vAxis: { title: measureNames[1] },
            bubble: { textStyle: { fontSize: 11 } },
            backgroundColor: backgroundColor

        };

        var chart = new google.visualization.BubbleChart(document.getElementById("g" + graph.id));
        chart.draw(data, options);
    }

}

function buildTimeLineChart(graph) {
    var dataTableC = [];
    var expressions = [];
    var dimensions = [];
    var measureNames = [];
    var dimNames = [];

    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[0].field));
    dimNames.push(graph.dimensions[0].name);
    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[1].field));
    dimNames.push(graph.dimensions[1].name);
    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[2].field));
    dimNames.push(graph.dimensions[2].name);
    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[3].field));
    dimNames.push(graph.dimensions[3].name);

    expressions.push("0");
    measureNames.push("Label");


    var objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
    for (var i = 1; i < objData.length; i++) {
        var row = objData[i];
       // var iData = row[2].split('/');
       // var fData = row[3].split('/');
        row[2] = new Date(fixData(row[2]));
        row[3] = new Date(fixData(row[3]));
        var nRow = []
        for (var j = 0; j < row.length - 1; j++) {
            nRow.push(row[j]);
        }
        dataTableC.push(nRow);
    }




    google.charts.load("current", { packages: ["timeline"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var container = document.getElementById("g" + graph.id);
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'string', id: dimNames[0] });
        dataTable.addColumn({ type: 'string', id: dimNames[1] });
        dataTable.addColumn({ type: 'date', id: dimNames[2] });
        dataTable.addColumn({ type: 'date', id: dimNames[3] });
        dataTable.addRows(dataTableC);

        var backgroundColor = 'white';
        if (graph.style.backgroundColor != null && graph.style.backgroundColor != "") {
            backgroundColor = graph.style.backgroundColor;
        }

        chart.draw(dataTable, { backgroundColor: backgroundColor });
    }
}

function buildOrgChart(graph) {
    

    var dataTable = [];
    var expressions = [];
    var dimensions = [];
    var measureNames = [];
    var dimNames = [];

    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[0].field));
    dimNames.push(graph.dimensions[0].name);
    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[1].field));
    dimNames.push(graph.dimensions[1].name);

    if (graph.measures.length > 0) {
        expressions.push(graph.measures[0].expresion);
        measureNames.push(graph.measures[0].name);
    }
    else {
        expressions.push("0");
        measureNames.push("Label");
    }

    var objData;


    if (graph.executeMode == "1" || graph.executeMode == null) {

        objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
    }
    else {
        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == graph.dataFrameName.join(",") })[0].table));
        objData = [];
        var h = [];
        for (var j = 0; j < dimensions.length; j++) {
            h.push(dimensions[j]);
        }
        for (var j = 0; j < expressions.length; j++) {
            h.push(expressions[j]);
        }
        objData.push(h);
        for (var i = 1; i < tempDf.length; i++) {
            var row = [];
            for (var j = 0; j < dimensions.length; j++) {
                var pos = tempDf[0].indexOf(dimensions[j]);
                row.push(tempDf[i][pos]);
            }
            for (var j = 0; j < measures.length; j++) {
                var pos = tempDf[0].indexOf(measures[j]);
                row.push(parseFloat(tempDf[i][pos]));
            }
            objData.push(row);
        }
    }

    for (var i = 1; i < objData.length; i++) {
        var row = objData[i];
        if (row[2] == 0) {
            row[2] = '';
        }
        else {
            row[2] = row[2].toString();
        }
        dataTable.push(row);
    }

    google.charts.load('current', { packages: ["orgchart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', dimNames[0]);
        data.addColumn('string', dimNames[1]);
        data.addColumn('string', measureNames[0]);

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows(dataTable);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById("g" + graph.id));

        var backgroundColor = 'white';
        if (graph.style.backgroundColor != null && graph.style.backgroundColor != "") {
            backgroundColor = graph.style.backgroundColor;
        }
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, { 'allowHtml': true, backgroundColor: backgroundColor });
    }
}

function buildMapChart(graph) {
    google.charts.load('current', {
        'packages': ['geochart'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });

    var dataTable = [];
    var expressions = [];
    var dimensions = [];
    var measureNames = [];
    var dimNames = [];
    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[0].field));
    dimNames.push(graph.dimensions[0].name);
    expressions.push(graph.measures[0].expresion);
    measureNames.push(graph.measures[0].name);

    if (graph.measures.length > 1) {
        expressions.push(graph.measures[1].expresion);
        measureNames.push(graph.measures[1].name);
    }

    var objData;


    if (graph.executeMode == "1" || graph.executeMode == null) {

        objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
    }
    else {
        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == graph.dataFrameName.join(",") })[0].table));
        objData = [];
        var h = [];
        for (var j = 0; j < dimensions.length; j++) {
            h.push(dimensions[j]);
        }
        for (var j = 0; j < expressions.length; j++) {
            h.push(expressions[j]);
        }
        objData.push(h);
        for (var i = 1; i < tempDf.length; i++) {
            var row = [];
            for (var j = 0; j < dimensions.length; j++) {
                var pos = tempDf[0].indexOf(dimensions[j]);
                row.push(tempDf[i][pos]);
            }
            for (var j = 0; j < measures.length; j++) {
                var pos = tempDf[0].indexOf(measures[j]);
                row.push(parseFloat(tempDf[i][pos]));
            }
            objData.push(row);
        }
    }

    objData[0][0] = dimNames[0];
    objData[0][1] = measureNames[0];
    if (graph.measures.length > 1) {
        objData[0][2] = measureNames[1];
    }



    google.charts.setOnLoadCallback(drawRegionsMap);

    function selectHandler() {
        alert(id);
        var selection = chart.getSelection();
        var message = '';
        for (var i = 0; i < selection.length; i++) {
            var item = selection[i];
            if (item.row != null && item.column != null) {
                var str = data.getFormattedValue(item.row, item.column);
                message += '{row:' + item.row + ',column:' + item.column + '} = ' + str + '\n';
            } else if (item.row != null) {
                var str = data.getFormattedValue(item.row, 0);
                message += '{row:' + item.row + ', column:none}; value (col 0) = ' + str + '\n';
            } else if (item.column != null) {
                var str = data.getFormattedValue(0, item.column);
                message += '{row:none, column:' + item.column + '}; value (row 0) = ' + str + '\n';
            }
        }
        if (message == '') {
            message = 'nothing';
        }
        alert('You selected ' + message);
    }

    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(objData);

        var colors = ['green'];
        if (graph.measures[0].color != null && graph.measures[0].color != "") {
            colors[0] = graph.measures[0].color;
        }
        var backgroundColor = 'white';
        if (graph.style.backgroundColor != null && graph.style.backgroundColor != "") {
            backgroundColor = graph.style.backgroundColor;
        }

        var options = {
            colorAxis: { colors: colors },
            backgroundColor: backgroundColor
        };

        if (graph.style.region != "" && graph.style.region != null) {
            options["region"] = graph.style.region;
        }



        var chart = new google.visualization.GeoChart(document.getElementById("g" + graph.id));

        google.visualization.events.addListener(chart, 'select', selectHandler);
        chart.draw(data, options);
        
    }
}

function buildSankeyChart(graph) {
    google.charts.load('current', { 'packages': ['sankey'] });

    var dataTable = [];
    var expressions = [];
    var dimensions = [];
    var measureNames = [];
    var dimNames = [];

    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[0].field));
    dimNames.push(graph.dimensions[0].name);

    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[1].field));
    dimNames.push(graph.dimensions[1].name);

    expressions.push(graph.measures[0].expresion);
    measureNames.push(graph.measures[0].name);

    var objData;


    if (graph.executeMode == "1" || graph.executeMode == null) {

        objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
    }
    else {
        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == graph.dataFrameName.join(",") })[0].table));
        objData = [];
        var h = [];
        for (var j = 0; j < dimensions.length; j++) {
            h.push(dimensions[j]);
        }
        for (var j = 0; j < expressions.length; j++) {
            h.push(expressions[j]);
        }
        objData.push(h);
        for (var i = 1; i < tempDf.length; i++) {
            var row = [];
            for (var j = 0; j < dimensions.length; j++) {
                var pos = tempDf[0].indexOf(dimensions[j]);
                row.push(tempDf[i][pos]);
            }
            for (var j = 0; j < measures.length; j++) {
                var pos = tempDf[0].indexOf(measures[j]);
                row.push(parseFloat(tempDf[i][pos]));
            }
            objData.push(row);
        }
    }
    for (var i = 1; i < objData.length; i++) {
        dataTable.push(objData[i]);
    }
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', dimNames[0]);
        data.addColumn('string', dimNames[1]);
        data.addColumn('number', measureNames[0]);
        data.addRows(dataTable);
        var backgroundColor = 'white';
        if (graph.style.backgroundColor != null && graph.style.backgroundColor != "") {
            backgroundColor = graph.style.backgroundColor;
        }
        // Sets chart options.
        var options = {
            backgroundColor: backgroundColor
        };

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById("g" + graph.id));
        chart.draw(data, options);
    }
}


function buildPieChart(graph){
  /*  var myData = [
        { "Race": "White Health Center Patients", "Population Percentage": 40 },
        { "Race": "Black Health Center Patients", "Population Percentage": 20 },
        { "Race": "Hispanic Health Center Patients", "Population Percentage": 25 },
        { "Race": "Asian Health Center Patients", "Population Percentage": 10 },
        { "Race": "American Indian Health Center Patients", "Population Percentage": 5 }
    ];*/

    var data = [];
    var expressions = [];
    var dimensions = [];
    var dimNames = [];
    var measureNames = [];
    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[0].field));
    dimNames.push(graph.dimensions[0].name);
   
    expressions.push(graph.measures[0].expresion);
    measureNames.push(graph.measures[0].name);
   
    var objData;


    if (graph.executeMode == "1" || graph.executeMode == null) {

        objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
    }
    else {
        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == graph.dataFrameName.join(",") })[0].table));
        objData = [];
        var h = [];
        for (var j = 0; j < dimensions.length; j++) {
            h.push(dimensions[j]);
        }
        for (var j = 0; j < expressions.length; j++) {
            h.push(expressions[j]);
        }
        objData.push(h);
        for (var i = 1; i < tempDf.length; i++) {
            var row = [];
            for (var j = 0; j < dimensions.length; j++) {
                var pos = tempDf[0].indexOf(dimensions[j]);
                row.push(tempDf[i][pos]);
            }
            for (var j = 0; j < measures.length; j++) {
                var pos = tempDf[0].indexOf(measures[j]);
                row.push(parseFloat(tempDf[i][pos]));
            }
            objData.push(row);
        }
    }

    var colorList = ['#2323FA', '#E62F19', '#FAEA67', '#14E34E', '#8CA3FF'];
    if (graph.style.colorList != null && graph.style.colorList != "") {
        var colorsGraph = graph.style.colorList.split(',');
        colorList = colorsGraph.concat(colorList);
    }



    var colorDim = {};
    var cIndex = 0;

    for (var i = 1; i < objData.length; i++) {
        if (colorDim[objData[i][0]] == null) {
            colorDim[objData[i][0]] = colorList[(cIndex % colorList.length)];
            cIndex++;
        }
        var row = {};
        row[dimensions[0]] = objData[i][0];
        row[measureNames[0]] = objData[i][1];
        data.push(row);
    }

    new d3plus.Pie()
        .config({
            data: data,
            groupBy: dimensions[0],
            shapeConfig: {
                fill: function (d) {
                    return colorDim[d[dimensions[0]]];
                }
            },
            value: function (d) {
                return d[measureNames[0]];
            },
            tooltipConfig: {
                title: function (d) {
                    return graph.dimensions[0].name + ": " + d[dimensions[0]];
                },
                tbody: [
                    [graph.measures[0].name, function (d) { return d[measureNames[0]] }]
                ]
            }
        })
        .select("#g" + graph.id)
        .on("click", function (d) {
            filterFromGraph(graph.dataFrameName, getUsingField(graph.dataFrameName, graph.dimensions[0].field), d[dimensions[0]]);
        })
        .render();
}
var dadosLine;
function buildLineDateChart(graph) {
    document.getElementById("g" + graph.id).style.height = Math.floor(graph.style.height * 0.9) + "px";
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("g" + graph.id, am4charts.XYChart);

        var dados = [];
        var expressions = [];
        var dimensions = [];
        var measureNames = [];
        dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[0].field));

        expressions.push(graph.measures[0].expresion);
        measureNames.push(graph.measures[0].name);

        var objData;


        if (graph.executeMode == "1" || graph.executeMode == null) {

            objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
        }
        else {
            var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == graph.dataFrameName.join(",") })[0].table));
            objData = [];
            var h = [];
            for (var j = 0; j < dimensions.length; j++) {
                h.push(dimensions[j]);
            }
            for (var j = 0; j < expressions.length; j++) {
                h.push(expressions[j]);
            }
            objData.push(h);
            for (var i = 1; i < tempDf.length; i++) {
                var row = [];
                for (var j = 0; j < dimensions.length; j++) {
                    var pos = tempDf[0].indexOf(dimensions[j]);
                    row.push(tempDf[i][pos]);
                }
                for (var j = 0; j < measures.length; j++) {
                    var pos = tempDf[0].indexOf(measures[j]);
                    row.push(parseFloat(tempDf[i][pos]));
                }
                objData.push(row);
            }
        }

        for (var i = 1; i < objData.length; i++) {
            var date = new Date(fixData(objData[i][0]));
            var value = parseFloat(objData[i][1])
            dados.push({ date: date, value: value });
        }

        chart.data = dados.sort(compare);
        dadosLine = dados.sort(compare);

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 60;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";
        series.tooltipText = "{value}";
        if (graph.measures[0].color != null && graph.measures[0].color != "") {
            series.propertyFields.stroke = am4core.color(graph.measures[0].color);
            series.propertyFields.fill = am4core.color(graph.measures[0].color);
        }

        series.tooltip.pointerOrientation = "vertical";

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.snapToSeries = series;
        chart.cursor.xAxis = dateAxis;

        //chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarX = new am4core.Scrollbar();

    });
}

function buildLineChart(graph) {
    var data = [];
    var measureNames = [];
    var expressions = [];
    var dimensions = [];
    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[0].field));
    for (var i = 0; i < graph.measures.length; i++) {
        expressions.push(graph.measures[i].expresion);
    }
    console.log(expressions);
    console.log(dimensions);
    var objData;


    if (graph.executeMode == "1" || graph.executeMode == null) {

        objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
    }
    else {
        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == graph.dataFrameName.join(",") })[0].table));
        objData = [];
        var h = [];
        for (var j = 0; j < dimensions.length; j++) {
            h.push(dimensions[j]);
        }
        for (var j = 0; j < expressions.length; j++) {
            h.push(expressions[j]);
        }
        objData.push(h);
        for (var i = 1; i < tempDf.length; i++) {
            var row = [];
            for (var j = 0; j < dimensions.length; j++) {
                var pos = tempDf[0].indexOf(dimensions[j]);
                row.push(tempDf[i][pos]);
            }
            for (var j = 0; j < measures.length; j++) {
                var pos = tempDf[0].indexOf(measures[j]);
                row.push(parseFloat(tempDf[i][pos]));
            }
            objData.push(row);
        }
    }

    for (var l = 0; l < graph.measures.length; l++) {
        measureNames.push(graph.measures[l].name);
    }

    for (var k = 0; k < measureNames.length; k++) {
        for (var j = 1; j < objData.length; j++) {
            var bar = { id: 0, x: 0, y: 0 };
            bar.id = measureNames[k];
            bar.x = objData[j][0];
            bar.y = objData[j][k + 1];

            data.push(bar);
        }
    }

    var colors = {};
    for (var k = 0; k < graph.measures.length; k++) {
        colors[graph.measures[k].name] = graph.measures[k].color; 
    }

    function assignColor(d) {
        if (colors[d] == null || colors[d] == "") return "grey";
        return colors[d];
        
    }

    var sort;
    if (graph.sort == null) {
        graph.sort = { axis: 'dim', type: 'numerico', option: 'none' };
    }

    if (graph.sort.axis == 'mea') {

        if (graph.sort.option == 'crescente') {
            sort = function (a, b) {

                return a["y"] - b["y"];

            };
        }
        if (graph.sort.option == 'decrescente') {
            sort = function (a, b) {

                return b["y"] - a["y"];

            };
        }




    }
    else if (graph.sort.axis == 'dim') {
        if (graph.sort.option == 'crescente') {
            if (graph.sort.type == 'numerico') {
                sort = function (a, b) {

                    return a["x"] - b["x"];

                };
            }
            if (graph.sort.type == 'data') {
                sort = function (a, b) {
                    var ad = new Date(fixData(a["x"]));
                    var bd = new Date(fixData(b["x"]));
                   
                    return ad - bd;

                };
            }

            if (graph.sort.type == 'mes') {
                sort = function (a, b) {
                    var ad = MonthToInt[a];
                    var bd = MonthToInt[b];

                    return ad - bd;

                };
            }
            if (graph.sort.type == 'mesano') {
                sort = function (a, b) {

                    var a_mes = MonthToInt[a["x"].split(" ")[0].toLowerCase()];
                    var a_ano = a["x"].split(" ")[1];

                    var b_mes = MonthToInt[b["x"].split(" ")[0].toLowerCase()];
                    var b_ano = b["x"].split(" ")[1];

                    var ad = parseInt(a_ano) + 12 * parseInt(a_mes);
                    var bd = parseInt(b_ano) + 12 * parseInt(b_mes);

                    return ad - bd;

                };
            }
        }
        if (graph.sort.option == 'decrescente') {
            if (graph.sort.type == 'numerico') {
                sort = function (a, b) {

                    return b["x"] - a["x"];

                };
            }
            if (graph.sort.type == 'data') {
                sort = function (a, b) {
                    var ad = new Date(fixData(a["x"]));
                    var bd = new Date(fixData(b["x"]));
                   
                    return bd - ad;

                };
            }

            if (graph.sort.type == 'mes') {
                sort = function (a, b) {
                    var ad = MonthToInt[a];
                    var bd = MonthToInt[b];

                    return bd - ad;

                };
            }
            if (graph.sort.type == 'mesano') {
                sort = function (a, b) {

                    var a_mes = MonthToInt[a["x"].split(" ")[0].toLowerCase()];
                    var a_ano = a["x"].split(" ")[1];

                    var b_mes = MonthToInt[b["x"].split(" ")[0].toLowerCase()];
                    var b_ano = b["x"].split(" ")[1];

                    var ad = parseInt(a_ano) + 12 * parseInt(a_mes);
                    var bd = parseInt(b_ano) + 12 * parseInt(b_mes);

                    return bd - ad;

                };
            }
        }
    }

    document.getElementById("gc" + graph.id).style.overflowX = "auto";
    var gWidth = objData.length * 75 + 100;
    if (graph.style.width < gWidth) {
        document.getElementById("g" + graph.id).style.width = gWidth + "px";
    }

    document.getElementById("g" + graph.id).style.height = Math.floor(graph.style.height * 0.8) + "px";

    
    new d3plus.LinePlot()
        .config({
            data: data,
            discrete: "x",
            groupBy: "id",
            x: "x",
            y: "y",
            shapeConfig: {
                Line: {
                    stroke: function (d) {
                        return assignColor(d.id);
                    }
                }
            },
            xConfig: {
                title: graph.dimensions[0].name,
                titleConfig: {
                    fontColor: "green"
                },
            },
            yConfig: {
                title: graph.measures[0].name,
                titleConfig: {
                    fontColor: "green"
                }
            },
            xSort: sort,
            tooltipConfig: {
                title: function (d) {
                    return graph.dimensions[0].name + ": " + d["x"];
                },
                tbody: [
                    [graph.measures[0].name, function (d) { return d["y"] }]
                ]
            }
        })
        //    .data(data)
        .select("#g" + graph.id)
        .on("click", function (d) {
            filterFromGraph(graph.dataFrameName, getUsingField(graph.dataFrameName, graph.dimensions[0].field), d.x);
        })
        .render();
}
var cdim;
function buildTreeMap(graph) {
    var data = [];
    var measureNames = [];
    var expressions = [];
    var dimensions = [];
    var dimNames = [];
    expressions.push(graph.measures[0].expresion);
    measureNames.push(graph.measures[0].name);
    for (var i = 0; i < graph.dimensions.length; i++) {
        dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[i].field));
        dimNames.push(graph.dimensions[i].name);
    }
    

    var objData;


    if (graph.executeMode == "1" || graph.executeMode == null) {

        objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
    }
    else {
        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == graph.dataFrameName.join(",") })[0].table));
        objData = [];
        var h = [];
        for (var j = 0; j < dimensions.length; j++) {
            h.push(dimensions[j]);
        }
        for (var j = 0; j < expressions.length; j++) {
            h.push(expressions[j]);
        }
        objData.push(h);
        for (var i = 1; i < tempDf.length; i++) {
            var row = [];
            for (var j = 0; j < dimensions.length; j++) {
                var pos = tempDf[0].indexOf(dimensions[j]);
                row.push(tempDf[i][pos]);
            }
            for (var j = 0; j < measures.length; j++) {
                var pos = tempDf[0].indexOf(measures[j]);
                row.push(parseFloat(tempDf[i][pos]));
            }
            objData.push(row);
        }
    }
   
    //{"Group": "Store", "Sub-Group": "Convenience Store", "Number of Stores": 100, year: 2018},
    var colorList = ['#2323FA', '#E62F19', '#FAEA67', '#14E34E', '#8CA3FF'];
    if (graph.style.colorList != null && graph.style.colorList != "") {
        var colorsGraph = graph.style.colorList.split(',');
        colorList = colorsGraph.concat(colorList);
    }



    var colorDim = {};
    var cIndex = 0;
    for (var i = 1; i < objData.length; i++) {
        if (colorDim[objData[i][0]] == null) {
            colorDim[objData[i][0]] = colorList[(cIndex % colorList.length)];
            cIndex++;
        }


        var obj = {};
        for (var j = 0; j < dimNames.length; j++) {
            obj[dimNames[j]] = objData[i][j];
        }
        obj[measureNames[0]] = objData[i][objData[i].length - 1];
        data.push(obj);
    }

    cdim = colorDim;

    document.getElementById("g" + graph.id).style.height = Math.floor(graph.style.height * 0.9) + "px";

    new d3plus.Treemap()
        .config({
            data: data,
            groupBy: dimNames,
            shapeConfig: {
                fill: function (d) {
                    return colorDim[d[dimNames[0]]];
                }
            },
            sum: function (d) {
                return d[measureNames[0]];
            },
            tooltipConfig: {
                tbody: [
                    [measureNames[0], function (d) { return d[measureNames[0]] }]
                   
                ]
            }
          //  tile: d3.treemapDice
        })
        .select("#g" + graph.id)
        .on("click", function (d) {
            filterFromGraph(graph.dataFrameName, getUsingField(graph.dataFrameName, graph.dimensions[graph.dimensions.length - 1].field), d[dimNames[dimNames.length - 1]]);
        })
        .render();
  

}

function buildTable(graph) {
    var data = [];
    var measureNames = [];
    var expressions = [];
    var dimensions = [];
    var dimNames = [];
    
    for (var i = 0; i < graph.dimensions.length; i++) {
        dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[i].field));
        dimNames.push(graph.dimensions[i].name);
    }

    for (var i = 0; i < graph.measures.length; i++) {
        expressions.push(graph.measures[i].expresion);
        measureNames.push(graph.measures[i].name);
    }


    var objData;


    if (graph.executeMode == "1" || graph.executeMode == null) {

        objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
    }
    else {
        var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == graph.dataFrameName.join(",") })[0].table));
        objData = [];
        var h = [];
        for (var j = 0; j < dimensions.length; j++) {
            h.push(dimensions[j]);
        }
        for (var j = 0; j < expressions.length; j++) {
            h.push(expressions[j]);
        }
        objData.push(h);
        for (var i = 1; i < tempDf.length; i++) {
            var row = [];
            for (var j = 0; j < dimensions.length; j++) {
                var pos = tempDf[0].indexOf(dimensions[j]);
                row.push(tempDf[i][pos]);
            }
            for (var j = 0; j < measures.length; j++) {
                var pos = tempDf[0].indexOf(measures[j]);
                row.push(parseFloat(tempDf[i][pos]));
            }
            objData.push(row);
        }
    }

    var card = document.createElement("div");
    card.setAttribute("class", "card");

    var headerTb = document.createElement("div");
    headerTb.setAttribute("class", "card-header ");
    var titleTb = document.createElement("h3");
    titleTb.setAttribute("class", "card-title");
    titleTb.appendChild(document.createTextNode(graph.title));
    headerTb.appendChild(titleTb);
    card.appendChild(headerTb);

    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body ");
    var table = document.createElement("table");
    table.setAttribute("class", "table table-bordered table-striped");
    table.setAttribute("Id", "gt" + graph.id);
    var thead = document.createElement("thead");
    var headRow = document.createElement("tr");
    for (var i = 0; i < dimNames.length; i++) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(dimNames[i]));
        headRow.appendChild(th);

    }

    for (var i = 0; i < measureNames.length; i++) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(measureNames[i]));
        headRow.appendChild(th);
    }

    thead.appendChild(headRow);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");

    for (var i = 1; i < objData.length; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < objData[i].length; j++) {
            var td = document.createElement("td");
            if (j < dimensions.length) {
                td.appendChild(document.createTextNode(objData[i][j]));
                td.setAttribute("onclick", "filterFromGraph(['" + graph.dataFrameName.join("','") + "'],'" + getUsingField(graph.dataFrameName, graph.dimensions[j].field) + "','" + objData[i][j] + "')");
              //  td.setAttribute("onclick", "filterFromGraph(['\'' + graph.dataFrameName.split('\',\'') + '\''],'" + getUsingField(graph.dataFrameName, graph.dimensions[j].field) + "','" + objData[i][j] + "')");
            }
            else {
               
                var mExpression;
                switch (graph.measures[j - dimensions.length].numberFormat) {
                    case 'real': {
                        mExpression = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(objData[i][j]);
                        break;
                    }
                    case 'percent': {
                        mExpression = parseFloat(objData[i][j]).toFixed(2) + "%";
                        break;
                    }
                    case 'number': {
                        mExpression = new Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(objData[i][j]);
                        break;
                    }
                    default: { mExpression = objData[i][j]; break; }
                }

                td.appendChild(document.createTextNode(mExpression));
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
       
    }

    table.appendChild(tbody);
    cardBody.appendChild(table);
    card.appendChild(cardBody);
    document.getElementById("g" + graph.id).appendChild(card);

    $(function () {
        $("#gt" + graph.id).DataTable({
            "responsive": true,
            "autoWidth": false,
        });
       
    });


}


function getUsingField(df, field) {
    try {
        var fieldList = field.split('->');
        for (var i = 0; i < fieldList.length; i++) {
            if (i == fieldList.length - 1) {
                return fieldList[i];
            }
            var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == df.join(",") })[0].table));
            var values = [];
            var pos = tempDf[0].indexOf(fieldList[i]);
            for (var j = 1; j < tempDf.length; j++) {
                values.push(tempDf[j][pos]);
               
            }

            var distinctValues = Array.from(new Set(values));
            if (distinctValues.length > 1) {
                return fieldList[i];
            }

        }
    }
    catch (err) {
        return field.split('->')[0];
    }

}