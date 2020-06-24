function buildGraphs(sheetOrder) {
    var sheet = reportData.config.sheets.filter(function (x) { return x.order == sheetOrder })[0];
    var graphs = sheet.graphs;
    for (var i = 0; i < graphs.length; i++) {
        var graph = graphs[i];

        var graphContainer = document.createElement("div");
        graphContainer.setAttribute("id", "gc" + graph.id);
        graphContainer.style.border = "1px solid black";
        graphContainer.style.marginLeft = graph.style.x;
        graphContainer.style.marginTop = graph.style.y;
        graphContainer.style.width = graph.style.width;
        graphContainer.style.height = graph.style.height;
        graphContainer.setAttribute("class", "resize-drag");

        var graphTitle = document.createElement("div");
        graphTitle.appendChild(document.createTextNode(graph.title));
        graphContainer.appendChild(graphTitle);

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
    

    console.log('obj data');
    console.log(objData);
    console.log(data);
    new d3plus.BarChart()
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
        .render();
    

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


    console.log('obj data');
    console.log(objData);
    console.log(data);
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