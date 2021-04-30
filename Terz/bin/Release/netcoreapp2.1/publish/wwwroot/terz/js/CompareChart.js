
var clickedObj;
function buildCompareChart(graph) {
    document.getElementById("g" + graph.id).style.height = Math.floor(graph.style.height * 0.9) + "px";
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("g" + graph.id, am4charts.XYChart);
        chart.scrollbarX = new am4core.Scrollbar();


 



        // Add data
        chart.data = [];

       // var expressions = ["visits", "pareto"];
       // var dimNames = ["country"];

        var measures = [];
        var expressions = [];
        var dimensions = [];
        var dimNames = [];
        var reducedDf = [];

        dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[0].field));
        dimNames.push(graph.dimensions[0].name);
   
        measures.push(graph.measures[0].expresion);
        expressions.push(graph.measures[0].name);
        measures.push(graph.measures[1].expresion);
        expressions.push(graph.measures[1].name);

        if (graph.executeMode == "1" || graph.executeMode == null) {

            var objData = EvalueteEx(measures, graph.dataFrameName, dimensions);
            reducedDf = objData;
        }
        else {
            var tempDf = JSON.parse(JSON.stringify(usingDataFrames.filter(function (x) { return x.name == graph.dataFrameName.join(",") })[0].table));
            var h = [];
            for (var j = 0; j < dimensions.length; j++) {
                h.push(dimensions[j]);
            }
            for (var j = 0; j < measures.length; j++) {
                h.push(measures[j]);
            }
            reducedDf.push(h);
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
                reducedDf.push(row);
            }

        }

        for (var i = 1; i < reducedDf.length; i++) {
            var row = {};
            row[dimNames[0]] = reducedDf[i][0];
            row[expressions[0]] = reducedDf[i][1];
            row[expressions[1]] = reducedDf[i][2];
            chart.data.push(row);
        }

        var colorList = [];

        for (var i = 0; i < expressions.length; i++) {
            if (graph.measures[i].color == null || graph.measures[i].color == "") {
                colorList.push(am4core.color("#ff8726"));
            }
            else {
                colorList.push(am4core.color(graph.measures[i].color));
            }

        }

        var sort;
        if (graph.sort.axis == 'mea') {

            if (graph.sort.option == 'crescente') {
                if (graph.sort.type == 'numerico') {
                    sort = function (a, b) {

                        return a[expressions[0]] - b[expressions[0]];

                    };
                }
            }
            if (graph.sort.option == 'decrescente') {
                if (graph.sort.type == 'numerico') {
                    sort = function (a, b) {

                        return b[expressions[0]] - a[expressions[0]];

                    };
                }
            }




        }
        else if (graph.sort.axis == 'dim') {
            if (graph.sort.option == 'crescente') {
                if (graph.sort.type == 'numerico') {
                    sort = function (a, b) {

                        return a[dimNames[0]] - b[dimNames[0]];

                    };
                }
                if (graph.sort.type == 'data') {
                    sort = function (a, b) {
                        var ad = new Date(fixData(a[dimNames[0]]));
                        var bd = new Date(fixData(b[dimNames[0]]));

                        return ad - bd;

                    };
                }

                if (graph.sort.type == 'mes') {
                    sort = function (a, b) {
                        var ad = MonthToInt[a[dimNames[0]].toLowerCase()];
                        var bd = MonthToInt[b[dimNames[0]].toLowerCase()];

                        return ad - bd;

                    };
                }
                if (graph.sort.type == 'mesano') {
                    sort = function (a, b) {

                        var a_mes = MonthToInt[a[dimNames[0]].split(" ")[0].toLowerCase()];
                        var a_ano = a[dimNames[0]].split(" ")[1];

                        var b_mes = MonthToInt[b[dimNames[0]].split(" ")[0].toLowerCase()];
                        var b_ano = b[dimNames[0]].split(" ")[1];

                        var ad = parseInt(a_ano) + 12 * parseInt(a_mes);
                        var bd = parseInt(b_ano) + 12 * parseInt(b_mes);

                        return ad - bd;

                    };
                }
            }
            if (graph.sort.option == 'decrescente') {
                if (graph.sort.type == 'numerico') {
                    sort = function (a, b) {

                        return b[dimNames[0]] - a[dimNames[0]];

                    };
                }
                if (graph.sort.type == 'data') {
                    sort = function (a, b) {
                        var ad = new Date(fixData(a[dimNames[0]]));
                        var bd = new Date(fixData(b[dimNames[0]]));

                        return bd - ad;

                    };
                }

                if (graph.sort.type == 'mes') {
                    sort = function (a, b) {
                        var ad = MonthToInt[a[dimNames[0]].toLowerCase()];
                        var bd = MonthToInt[b[dimNames[0]].toLowerCase()];

                        return bd - ad;

                    };
                }

                if (graph.sort.type == 'mesano') {
                    sort = function (a, b) {

                        var a_mes = MonthToInt[a[dimNames[0]].split(" ")[0].toLowerCase()];
                        var a_ano = a[dimNames[0]].split(" ")[1];

                        var b_mes = MonthToInt[b[dimNames[0]].split(" ")[0].toLowerCase()];
                        var b_ano = b[dimNames[0]].split(" ")[1];

                        var ad = parseInt(a_ano) + 12 * parseInt(a_mes);
                        var bd = parseInt(b_ano) + 12 * parseInt(b_mes);

                        return bd - ad;

                    };
                }
            }
        }

        if (graph.sort.option != "none") {
            chart.data = chart.data.sort(sort);
        }



        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = dimNames[0];
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.tooltip.disabled = true;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;
        valueAxis.min = 0;
        valueAxis.cursorTooltipEnabled = false;

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = expressions[0];
        series.dataFields.categoryX = dimNames[0];
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.strokeWidth = 0;

        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;

        series.columns.template.events.on("hit", function (ev) {
            var cValue = ev.target.dataItem._dataContext[dimNames[0]];
            filterFromGraph(graph.dataFrameName, dimensions[0], cValue);
        }, this);

        // on hover, make corner radiuses bigger
        var hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;

        series.columns.template.adapter.add("fill", function (fill, target) {
            return colorList[0];
        })


        var paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        paretoValueAxis.renderer.opposite = true;
        paretoValueAxis.min = 0;
        paretoValueAxis.max = 100;
        paretoValueAxis.strictMinMax = true;
        paretoValueAxis.renderer.grid.template.disabled = true;
        paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
        paretoValueAxis.numberFormatter.numberFormat = "#"
        paretoValueAxis.cursorTooltipEnabled = false;

        var paretoSeries = chart.series.push(new am4charts.LineSeries())
        paretoSeries.dataFields.valueY = expressions[1];
        paretoSeries.dataFields.categoryX = dimNames[0];
        paretoSeries.yAxis = paretoValueAxis;
        paretoSeries.tooltipText = expressions[1] + ": {valueY}[/]";
        paretoSeries.bullets.push(new am4charts.CircleBullet());
        paretoSeries.strokeWidth = 2;
        paretoSeries.stroke = colorList[1];
        paretoSeries.strokeOpacity = 0.5;

        // Cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "panX";

    }); // end am4core.ready()
}