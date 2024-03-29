﻿function buildWaterFallChart(graph) {
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("g" + graph.id, am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

        // using math in the data instead of final values just to illustrate the idea of Waterfall chart
        // a separate data field for step series is added because we don't need last step (notice, the last data item doesn't have stepValue)
        chart.data = [];



        for (var i = 0; i < graph.measures.length; i++) {
            var row = {};
            row.category = graph.measures[i].name;
            row.displayValue = EvalueteEx(graph.measures[i].expresion, graph.dataFrameName, null);
            if (graph.measures[i].color == null || graph.measures[i].color == "") {
                row.color = am4core.color("#ff8726");
            }
            else {
                row.color = am4core.color(graph.measures[i].color);
            }

            if (i == 0) {
                row.open = 0;

            }
            else {
                row.open = chart.data[i - 1].stepValue;
            }

            row.stepValue = row.open + row.displayValue;
            row.value = row.stepValue;
            chart.data.push(row);
        }


        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.minGridDistance = 40;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        var columnSeries = chart.series.push(new am4charts.ColumnSeries());
        columnSeries.dataFields.categoryX = "category";
        columnSeries.dataFields.valueY = "value";
        columnSeries.dataFields.openValueY = "open";
        columnSeries.fillOpacity = 0.8;
        columnSeries.sequencedInterpolation = true;
        columnSeries.interpolationDuration = 1500;

        var columnTemplate = columnSeries.columns.template;
        columnTemplate.strokeOpacity = 0;
        columnTemplate.propertyFields.fill = "color";

        var label = columnTemplate.createChild(am4core.Label);
        label.text = "{displayValue.formatNumber('$#,## a')}";
        label.align = "center";
        label.valign = "middle";


        var stepSeries = chart.series.push(new am4charts.StepLineSeries());
        stepSeries.dataFields.categoryX = "category";
        stepSeries.dataFields.valueY = "stepValue";
        stepSeries.noRisers = true;
        stepSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
        stepSeries.strokeDasharray = "3,3";
        stepSeries.interpolationDuration = 2000;
        stepSeries.sequencedInterpolation = true;

        // because column width is 80%, we modify start/end locations so that step would start with column and end with next column
        stepSeries.startLocation = 0.1;
        stepSeries.endLocation = 1.1;

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "none";

    }); // end am4core.ready()
}