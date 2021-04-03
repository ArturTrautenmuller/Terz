function buildGaugiChart(graph) {
    document.getElementById("g" + graph.id).style.height = Math.floor(graph.style.height * 0.9) + "px";
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end





        var data = {
            score: 0,
            gradingData: []
        };

        var measures = [];
        var expressions = [];
        var dimensions = [];
        var dimNames = [];
        var reducedDf = [];

        dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[0].field));
        dimNames.push(graph.dimensions[0].name);
        dimensions.push(getUsingField(graph.dataFrameName, graph.dimensions[1].field));
        dimNames.push(graph.dimensions[1].name);

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
            row["title"] = reducedDf[i][0];
            row["color"] = reducedDf[i][1];
            row["lowScore"] = reducedDf[i][2];
            row["highScore"] = reducedDf[i][3];

            data.gradingData.push(row);
        }

        data.score = EvalueteEx(graph.measures[2].expresion, graph.dataFrameName, null);


        var chartMin = data.gradingData[0].lowScore;
        var chartMax = data.gradingData[0].highScore;

        for (var i = 0; i < data.gradingData.length; i++) {
            if (data.gradingData[i].lowScore < chartMin) {
                chartMin = data.gradingData[i].lowScore;
            }
            if (data.gradingData[i].highScore > chartMax) {
                chartMax = data.gradingData[i].highScore;
            }

        }



        /**
        Grading Lookup
         */
        function lookUpGrade(lookupScore, grades) {
            // Only change code below this line
            for (var i = 0; i < grades.length; i++) {
                if (
                    grades[i].lowScore < lookupScore &&
                    grades[i].highScore >= lookupScore
                ) {
                    return grades[i];
                }
            }
            return null;
        }

        // create chart
        var chart = am4core.create("g" + graph.id, am4charts.GaugeChart);
        chart.hiddenState.properties.opacity = 0;
        chart.fontSize = 11;
        chart.innerRadius = am4core.percent(80);
        chart.resizable = true;

        /**
         * Normal axis
         */

        var axis = chart.xAxes.push(new am4charts.ValueAxis());
        axis.min = chartMin;
        axis.max = chartMax;
        axis.strictMinMax = true;
        axis.renderer.radius = am4core.percent(80);
        axis.renderer.inside = true;
        axis.renderer.line.strokeOpacity = 0.1;
        axis.renderer.ticks.template.disabled = false;
        axis.renderer.ticks.template.strokeOpacity = 1;
        axis.renderer.ticks.template.strokeWidth = 0.5;
        axis.renderer.ticks.template.length = 5;
        axis.renderer.grid.template.disabled = true;
        axis.renderer.labels.template.radius = am4core.percent(15);
        axis.renderer.labels.template.fontSize = "0.9em";

        /**
         * Axis for ranges
         */

        var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
        axis2.min = chartMin;
        axis2.max = chartMax;
        axis2.strictMinMax = true;
        axis2.renderer.labels.template.disabled = true;
        axis2.renderer.ticks.template.disabled = true;
        axis2.renderer.grid.template.disabled = false;
        axis2.renderer.grid.template.opacity = 0.5;
        axis2.renderer.labels.template.bent = true;
        axis2.renderer.labels.template.fill = am4core.color("#000");
        axis2.renderer.labels.template.fontWeight = "bold";
        axis2.renderer.labels.template.fillOpacity = 0.3;



        /**
        Ranges
        */

        for (let grading of data.gradingData) {
            var range = axis2.axisRanges.create();
            range.axisFill.fill = am4core.color(grading.color);
            range.axisFill.fillOpacity = 0.8;
            range.axisFill.zIndex = -1;
            range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
            range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
            range.grid.strokeOpacity = 0;
            range.stroke = am4core.color(grading.color).lighten(-0.1);
            range.label.inside = true;
            range.label.text = grading.title.toUpperCase();
            range.label.inside = true;
            range.label.location = 0.5;
            range.label.inside = true;
            range.label.radius = am4core.percent(10);
            range.label.paddingBottom = -5; // ~half font size
            range.label.fontSize = "0.9em";
        }

        var matchingGrade = lookUpGrade(data.score, data.gradingData);

        /**
         * Label 1
         */

        var label = chart.radarContainer.createChild(am4core.Label);
        label.isMeasured = false;
        label.fontSize = "6em";
        label.x = am4core.percent(50);
        label.paddingBottom = 15;
        label.horizontalCenter = "middle";
        label.verticalCenter = "bottom";
        //label.dataItem = data;
        label.text = data.score.toFixed(1);
        //label.text = "{score}";
        label.fill = am4core.color(matchingGrade.color);

        /**
         * Label 2
         */

        var label2 = chart.radarContainer.createChild(am4core.Label);
        label2.isMeasured = false;
        label2.fontSize = "2em";
        label2.horizontalCenter = "middle";
        label2.verticalCenter = "bottom";
        label2.text = matchingGrade.title.toUpperCase();
        label2.fill = am4core.color(matchingGrade.color);


        /**
         * Hand
         */

        var hand = chart.hands.push(new am4charts.ClockHand());
        hand.axis = axis2;
        hand.innerRadius = am4core.percent(55);
        hand.startWidth = 8;
        hand.pin.disabled = true;
        hand.value = data.score;
        hand.fill = am4core.color("#444");
        hand.stroke = am4core.color("#000");

        hand.events.on("positionchanged", function () {
            label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
            var value2 = axis.positionToValue(hand.currentPosition);
            var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
            label2.text = matchingGrade.title.toUpperCase();
            label2.fill = am4core.color(matchingGrade.color);
            label2.stroke = am4core.color(matchingGrade.color);
            label.fill = am4core.color(matchingGrade.color);
        })





    }); // end am4core.ready()
}