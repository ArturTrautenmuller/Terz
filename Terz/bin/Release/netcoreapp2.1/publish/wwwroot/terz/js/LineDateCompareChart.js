function buildLineDateCompareChart(graph) {

    console.log('lcd-1');

    document.getElementById("g" + graph.id).style.height = Math.floor(graph.style.height * 0.9) + "px";

    var data = [];



    var measures = [];
    var expressions = [];
    var dimensions = [];
    var dimNames = [];
    var reducedDf = [];


    dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[0].field));
    dimNames.push(graph.dimensions[0].name);

    for (var i = 0; i < graph.measures.length; i++) {
        measures.push(graph.measures[i].expresion);
        expressions.push(graph.measures[i].name);
    }
    
    console.log('lcd-2');

    if (graph.executeMode == "1" || graph.executeMode == null) {

        console.log('lcd-3');
        var objData = EvalueteEx(measures, graph.dataFrameName, dimensions);
        console.log('lcd-4');
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
        row["date"] = reducedDf[i][0].toString();
        for (var j = 0; j < expressions.length; j++) {
            row[expressions[j]] = reducedDf[i][j + 1];
        }
        data.push(row);
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
    
    console.log('lcd-5');
    //expressions = ["value", "value2"];

    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("g" + graph.id, am4charts.XYChart);

        // Add data
        chart.data = data;

        // Set input format for the dates
        chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        //var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        console.log('lcd-6');

        for (var i = 0; i < expressions.length; i++) {
            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = expressions[i];
            series.dataFields.dateX = "date";
            //series.tooltipText = measures[i]+": [bold]{valueY}[/]";
            series.strokeWidth = 2;
            series.minBulletDistance = 15;

            // Drop-shaped tooltips
            series.tooltip.background.cornerRadius = 20;
            series.tooltip.background.strokeOpacity = 0;
            series.tooltip.pointerOrientation = "vertical";
            series.name = expressions[i];

            series.tooltip.label.minWidth = 40;
            series.tooltip.label.minHeight = 40;
            series.tooltip.label.textAlign = "middle";
            series.tooltip.label.textValign = "middle";


            series.propertyFields.fill = colorList[i];
            series.propertyFields.stroke = colorList[i];

            // Make bullets grow on hover
            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.strokeWidth = 2;
            bullet.circle.radius = 4;
            bullet.circle.fill = am4core.color("#fff");

            var bullethover = bullet.states.create("hover");
            bullethover.properties.scale = 1.3;



            // Create a horizontal scrollbar with previe and place it underneath the date axis
            chart.scrollbarX = new am4charts.XYChartScrollbar();
            chart.scrollbarX.series.push(series);
            chart.scrollbarX.parent = chart.bottomAxesContainer;
        }

        // Make a panning cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "panXY";
        chart.cursor.xAxis = dateAxis;
        chart.cursor.snapToSeries = series;

        // Create vertical scrollbar and place it before the value axis
        chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarY.parent = chart.leftAxesContainer;
        chart.scrollbarY.toBack();
        // Create series
        chart.legend = new am4charts.Legend();

        dateAxis.start = 0.0;
        dateAxis.keepSelection = true;

        console.log('lcd-7');

    }); // end am4core.ready()
}