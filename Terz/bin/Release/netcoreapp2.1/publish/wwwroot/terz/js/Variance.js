function buildVarianceChart(graph) {
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("g" + graph.id, am4charts.XYChart);

        // Add data
        chart.data = [];

        // Populate data



        var measures = [];
        var expressions = [];
        var dimensions = [];
        var dimNames = [];
        var reducedDf = [];

        dimensions.push(graph.dimensions[0].field);
        dimNames.push(graph.dimensions[0].name);


        measures.push(graph.measures[0].expresion);
        expressions.push(graph.measures[0].name);



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
            chart.data.push(row);
        }


        for (var i = 0; i < (chart.data.length - 1); i++) {
            chart.data[i].valueNext = chart.data[i + 1][expressions[0]];
        }

        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = dimNames[0];
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = expressions[0];
        series.dataFields.categoryX = dimNames[0];

        // Add series for showing variance arrows
        var series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = "valueNext";
        series2.dataFields.openValueY = expressions[0];
        series2.dataFields.categoryX = dimNames[0];
        series2.columns.template.width = 1;
        series2.fill = am4core.color("#555");
        series2.stroke = am4core.color("#555");

        // Add a triangle for arrow tip
        var arrow = series2.bullets.push(new am4core.Triangle);
        arrow.width = 10;
        arrow.height = 10;
        arrow.horizontalCenter = "middle";
        arrow.verticalCenter = "top";
        arrow.dy = -1;

        // Set up a rotation adapter which would rotate the triangle if its a negative change
        arrow.adapter.add("rotation", function (rotation, target) {
            return getVariancePercent(target.dataItem) < 0 ? 180 : rotation;
        });

        // Set up a rotation adapter which adjusts Y position
        arrow.adapter.add("dy", function (dy, target) {
            return getVariancePercent(target.dataItem) < 0 ? 1 : dy;
        });

        // Add a label
        var label = series2.bullets.push(new am4core.Label);
        label.padding(10, 10, 10, 10);
        label.text = "";
        label.fill = am4core.color("#0c0");
        label.strokeWidth = 0;
        label.horizontalCenter = "middle";
        label.verticalCenter = "bottom";
        label.fontWeight = "bolder";

        // Adapter for label text which calculates change in percent
        label.adapter.add("textOutput", function (text, target) {
            var percent = getVariancePercent(target.dataItem);
            return percent ? percent + "%" : text;
        });

        // Adapter which shifts the label if it's below the variance column
        label.adapter.add("verticalCenter", function (center, target) {
            return getVariancePercent(target.dataItem) < 0 ? "top" : center;
        });

        // Adapter which changes color of label to red
        label.adapter.add("fill", function (fill, target) {
            return getVariancePercent(target.dataItem) < 0 ? am4core.color("#c00") : fill;
        });

        function getVariancePercent(dataItem) {
            if (dataItem) {
                var value = dataItem.valueY;
                var openValue = dataItem.openValueY;
                var change = value - openValue;
                return Math.round(change / openValue * 100);
            }
            return 0;
        }

    }); // end am4core.ready()
}