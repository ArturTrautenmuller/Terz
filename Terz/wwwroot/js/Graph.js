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
            graphContainer.appendChild(graphTitle);
        }
        var graphDiv = document.createElement("div");
        
       // graphDiv.style.position = "absolute";
       
        graphDiv.setAttribute("id", "g" + graph.id);
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
    dimensions.push(graph.dimensions[0].field);
    for (var i = 0; i < graph.measures.length; i++) {
        expressions.push(graph.measures[i].expresion);
    }
    console.log(expressions);
    console.log(dimensions);
    var objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);

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
                    var ad = new Date(a["x"]);
                    var bd = new Date(b["x"]);
                   
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
                    var ad = new Date(a["x"]);
                    var bd = new Date(b["x"]);
                   
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
    }
    else {
        discrete = "y";
        x = "y";
        y = "x";
        ySort = sort;
        
    }

   
    new d3plus.BarChart()
        .config({
            data: data,
            discrete: discrete,
            groupBy: "id",
            x: x,
            y: y,
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
        .stacked(graph.style.stack)
        .render();
    

}

function buildNetWorkGraph(graph) {

  

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
    var measureNames = [];
    dimensions.push(graph.dimensions[0].field);
   
    expressions.push(graph.measures[0].expresion);
    measureNames.push(graph.measures[0].name);
   
    var objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
    for (var i = 1; i < objData.length; i++) {
        var row = {};
        row[dimensions[0]] = objData[i][0];
        row[measureNames[0]] = objData[i][1];
        data.push(row);
    }

    new d3plus.Pie()
        .config({
            data: data,
            groupBy: dimensions[0],
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
        .render();
}

function buildLineChart(graph) {
    var data = [];
    var measureNames = [];
    var expressions = [];
    var dimensions = [];
    dimensions.push(graph.dimensions[0].field);
    for (var i = 0; i < graph.measures.length; i++) {
        expressions.push(graph.measures[i].expresion);
    }
    console.log(expressions);
    console.log(dimensions);
    var objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);

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
                    var ad = new Date(a["x"]);
                    var bd = new Date(b["x"]);
                   
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
                    var ad = new Date(a["x"]);
                    var bd = new Date(b["x"]);
                   
                    return bd - ad;

                };
            }
        }
    }

    
    new d3plus.LinePlot()
        .config({
            data: data,
            discrete: "x",
            groupBy: "id",
            x: "x",
            y: "y",
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
        .render();
}

function buildTreeMap(graph) {
    var data = [];
    var measureNames = [];
    var expressions = [];
    var dimensions = [];
    var dimNames = [];
    expressions.push(graph.measures[0].expresion);
    measureNames.push(graph.measures[0].name);
    for (var i = 0; i < graph.dimensions.length; i++) {
        dimensions.push(graph.dimensions[i].field);
        dimNames.push(graph.dimensions[i].name);
    }
    

    var objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);
   
    //{"Group": "Store", "Sub-Group": "Convenience Store", "Number of Stores": 100, year: 2018},
    for (var i = 1; i < objData.length; i++) {
        var obj = {};
        for (var j = 0; j < dimNames.length; j++) {
            obj[dimNames[j]] = objData[i][j];
        }
        obj[measureNames[0]] = objData[i][objData[i].length - 1];
        data.push(obj);
    }
    new d3plus.Treemap()
        .config({
            data: data,
            groupBy: dimNames,
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
        .render();
  

}

function buildTable(graph) {
    var data = [];
    var measureNames = [];
    var expressions = [];
    var dimensions = [];
    var dimNames = [];
    
    for (var i = 0; i < graph.dimensions.length; i++) {
        dimensions.push(graph.dimensions[i].field);
        dimNames.push(graph.dimensions[i].name);
    }

    for (var i = 0; i < graph.measures.length; i++) {
        expressions.push(graph.measures[i].expresion);
        measureNames.push(graph.measures[i].name);
    }


    var objData = EvalueteEx(expressions, graph.dataFrameName, dimensions);

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