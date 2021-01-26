var rrdf;
function buildCalendarRadarChart(graph) {
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var data = [{ "Activity Date": "2019-04-07T06:23:49.000Z", "Activity Name": "Lunch Ride", "Distance": 16901.30078125, "Moving Time": 4731 }, { "Activity Date": "2019-04-08T09:02:50.000Z", "Activity Name": "Afternoon Ride", "Distance": 10051.400390625, "Moving Time": 2123 }, { "Activity Date": "2019-04-25T02:56:26.000Z", "Activity Name": "Afternoon Ride", "Distance": 31012, "Moving Time": 7902 }, { "Activity Date": "2019-04-30 00:00:00", "Activity Name": "Morning Ride", "Distance": 8279, "Moving Time": 2401 }, { "Activity Date": "2019-05-01T04:13:32.000Z", "Activity Name": "Morning Ride", "Distance": 65781, "Moving Time": 11690 }, { "Activity Date": "2019-05-09T13:45:51.000Z", "Activity Name": "Evening Ride", "Distance": 18331.599609375, "Moving Time": 4706 }, { "Activity Date": "2019-05-05T05:50:17.000Z", "Activity Name": "Lunch Ride", "Distance": 23213, "Moving Time": 9471 }, { "Activity Date": "2019-05-10T04:59:41.000Z", "Activity Name": "Morning Ride", "Distance": 55106, "Moving Time": 12755 }, { "Activity Date": "2019-05-11T04:15:51.000Z", "Activity Name": "Morning Ride", "Distance": 67423, "Moving Time": 15667 }, { "Activity Date": "2019-05-12T02:44:01.000Z", "Activity Name": "Morning Ride", "Distance": 31127, "Moving Time": 6157 }, { "Activity Date": "2019-05-12T05:35:16.000Z", "Activity Name": "Lunch Ride", "Distance": 16067, "Moving Time": 4087 }, { "Activity Date": "2019-05-14T09:00:29.000Z", "Activity Name": "Afternoon Ride", "Distance": 38208, "Moving Time": 8931 }, { "Activity Date": "2019-05-15T02:59:50.000Z", "Activity Name": "Morning Ride", "Distance": 115606, "Moving Time": 26471 }, { "Activity Date": "2019-05-16T03:53:37.000Z", "Activity Name": "Palma de Mallorca day 3", "Distance": 110470, "Moving Time": 22967 }, { "Activity Date": "2019-05-17T03:41:37.000Z", "Activity Name": "Sa Colabra epic ride", "Distance": 67143, "Moving Time": 18009 }, { "Activity Date": "2019-05-18T03:51:16.000Z", "Activity Name": "Mallorka last day", "Distance": 87590, "Moving Time": 18553 }, { "Activity Date": "2019-05-24T12:50:30.000Z", "Activity Name": "Evening Ride", "Distance": 21088, "Moving Time": 2555 }, { "Activity Date": "2019-05-25T03:01:22.000Z", "Activity Name": "Morning Ride", "Distance": 53361, "Moving Time": 8473 }, { "Activity Date": "2019-05-26T05:29:45.000Z", "Activity Name": "Lunch Ride", "Distance": 13463.7001953125, "Moving Time": 3768 }, { "Activity Date": "2019-05-26T08:14:53.000Z", "Activity Name": "Afternoon Ride", "Distance": 14177.2001953125, "Moving Time": 3642 }, { "Activity Date": "2019-06-01T03:42:31.000Z", "Activity Name": "3.5 karto Juodkrantė - Klaipėda", "Distance": 75997, "Moving Time": 14452 }, { "Activity Date": "2019-06-27T11:29:02.000Z", "Activity Name": "Afternoon Ride", "Distance": 44062, "Moving Time": 6016 }, { "Activity Date": "2019-06-30T04:17:50.000Z", "Activity Name": "Morning Ride", "Distance": 8756, "Moving Time": 3242 }, { "Activity Date": "2019-07-01T05:09:41.000Z", "Activity Name": "Lunch Ride", "Distance": 27867, "Moving Time": 6479 }, { "Activity Date": "2019-07-02T05:28:11.000Z", "Activity Name": "Lunch Ride", "Distance": 21775, "Moving Time": 5256 }, { "Activity Date": "2019-07-02T11:20:27.000Z", "Activity Name": "Afternoon Ride", "Distance": 7343, "Moving Time": 2064 }, { "Activity Date": "2019-07-03T05:05:45.000Z", "Activity Name": "Lunch Ride", "Distance": 26956, "Moving Time": 6879 }, { "Activity Date": "2019-07-04T07:00:26.000Z", "Activity Name": "Afternoon Ride", "Distance": 14175, "Moving Time": 3617 }, { "Activity Date": "2019-07-07T05:50:01.000Z", "Activity Name": "Lunch Ride", "Distance": 45489, "Moving Time": 11656 }, { "Activity Date": "2019-07-09T09:42:04.000Z", "Activity Name": "Afternoon Ride", "Distance": 10049, "Moving Time": 1767 }, { "Activity Date": "2019-07-10T11:36:56.000Z", "Activity Name": "Afternoon Ride", "Distance": 10000, "Moving Time": 1805 }, { "Activity Date": "2019-07-13T12:28:06.000Z", "Activity Name": "Evening Ride", "Distance": 11603, "Moving Time": 3127 }, { "Activity Date": "2019-07-14T08:15:11.000Z", "Activity Name": "Afternoon Ride", "Distance": 8701, "Moving Time": 2369 }, { "Activity Date": "2019-07-15T12:52:03.000Z", "Activity Name": "Evening Ride", "Distance": 13021, "Moving Time": 2728 }, { "Activity Date": "2019-07-16T12:14:02.000Z", "Activity Name": "Evening Ride", "Distance": 10094, "Moving Time": 1823 }, { "Activity Date": "2019-07-17T12:50:43.000Z", "Activity Name": "Evening Ride", "Distance": 10075, "Moving Time": 1783 }, { "Activity Date": "2019-07-18T13:24:07.000Z", "Activity Name": "Evening Ride", "Distance": 10170, "Moving Time": 2006 }, { "Activity Date": "2019-07-19T11:50:07.000Z", "Activity Name": "Afternoon Ride", "Distance": 13796, "Moving Time": 2487 }, { "Activity Date": "2019-07-21T11:56:06.000Z", "Activity Name": "Afternoon Ride", "Distance": 9837, "Moving Time": 1761 }, { "Activity Date": "2019-07-23T11:37:14.000Z", "Activity Name": "Afternoon Ride", "Distance": 20292, "Moving Time": 4581 }, { "Activity Date": "2019-07-24T05:35:01.000Z", "Activity Name": "Lunch Ride", "Distance": 43681, "Moving Time": 12542 }, { "Activity Date": "2019-07-27T02:31:36.000Z", "Activity Name": "Morning Ride", "Distance": 21879, "Moving Time": 3556 }, { "Activity Date": "2019-07-26T09:28:47.000Z", "Activity Name": "Afternoon Ride", "Distance": 42881, "Moving Time": 7302 }, { "Activity Date": "2019-08-13T14:28:53.000Z", "Activity Name": "Evening Ride", "Distance": 11756.5, "Moving Time": 2433 }, { "Activity Date": "2019-08-26T03:20:15.000Z", "Activity Name": "Morning Ride", "Distance": 5596, "Moving Time": 1505 }, { "Activity Date": "2019-07-25T11:20:08.000Z", "Activity Name": "Afternoon Ride", "Distance": 10639.2001953125, "Moving Time": 2615 }, { "Activity Date": "2019-07-26T09:26:30.000Z", "Activity Name": "Afternoon Ride", "Distance": 41150.6015625, "Moving Time": 6795 }, { "Activity Date": "2019-07-27T02:34:05.000Z", "Activity Name": "Morning Ride", "Distance": 43459.80078125, "Moving Time": 6986 }, { "Activity Date": "2019-08-26T05:41:43.000Z", "Activity Name": "Norvegija su Jurgiu!", "Distance": 83720, "Moving Time": 21811 }, { "Activity Date": "2019-08-27T06:06:57.000Z", "Activity Name": "Norvegija su Jurgiu! Day 2", "Distance": 27739.400390625, "Moving Time": 8280 }, { "Activity Date": "2019-08-28T08:22:23.000Z", "Activity Name": "Norvegija su Jurgiu! day 3", "Distance": 25866.599609375, "Moving Time": 6333 }, { "Activity Date": "2019-09-11T09:42:35.000Z", "Activity Name": "Afternoon Ride", "Distance": 4512.2998046875, "Moving Time": 1250 }, { "Activity Date": "2019-09-12T09:27:58.000Z", "Activity Name": "Afternoon Ride", "Distance": 8641.400390625, "Moving Time": 3404 }, { "Activity Date": "2019-09-15T03:23:20.000Z", "Activity Name": "Nuo Pisos iki Florencijos", "Distance": 103813.6015625, "Moving Time": 23376 }, { "Activity Date": "2019-09-16T05:12:49.000Z", "Activity Name": "Toskana, antra diena", "Distance": 55542.6015625, "Moving Time": 15264 }, { "Activity Date": "2019-09-17T03:42:54.000Z", "Activity Name": "Toskana, 3 diena", "Distance": 70001.3984375, "Moving Time": 15377 }, { "Activity Date": "2019-09-18T03:10:11.000Z", "Activity Name": "Toskana, 4 diena", "Distance": 82216.703125, "Moving Time": 18648 }, { "Activity Date": "2019-09-19T03:54:45.000Z", "Activity Name": "Toskana, 5 diena", "Distance": 82086.203125, "Moving Time": 20213 }, { "Activity Date": "2019-09-20T03:39:38.000Z", "Activity Name": "Toskana, 6 diena, važiuojam namo.", "Distance": 61489.8984375, "Moving Time": 11320 }, { "Activity Date": "2019-09-27T02:02:40.000Z", "Activity Name": "Morning Ride", "Distance": 4236.2001953125, "Moving Time": 1030 }, { "Activity Date": "2019-09-27T09:19:39.000Z", "Activity Name": "Afternoon Ride", "Distance": 4303.60009765625, "Moving Time": 1142 }, { "Activity Date": "2019-10-13T05:57:00.000Z", "Activity Name": "Lunch Ride", "Distance": 14578, "Moving Time": 3591 }, { "Activity Date": "2019-10-01T01:43:15.000Z", "Activity Name": "Morning Ride", "Distance": 7996.2998046875, "Moving Time": 2219 }, { "Activity Date": "2019-10-02T01:45:12.000Z", "Activity Name": "Morning Ride", "Distance": 4265.2998046875, "Moving Time": 1131 }, { "Activity Date": "2019-10-02T10:40:34.000Z", "Activity Name": "Afternoon Ride", "Distance": 4353.10009765625, "Moving Time": 1219 }, { "Activity Date": "2019-10-03T01:47:04.000Z", "Activity Name": "Morning Ride", "Distance": 17238.80078125, "Moving Time": 4641 }, { "Activity Date": "2019-10-04T01:42:03.000Z", "Activity Name": "Morning Ride", "Distance": 4259.7998046875, "Moving Time": 1054 }, { "Activity Date": "2019-10-16T01:45:45.000Z", "Activity Name": "Morning Ride", "Distance": 14651.5, "Moving Time": 3184 }, { "Activity Date": "2019-10-18T01:44:58.000Z", "Activity Name": "Morning Ride", "Distance": 4194, "Moving Time": 1029 }, { "Activity Date": "2019-10-22T01:44:54.000Z", "Activity Name": "Morning Ride", "Distance": 4102.7998046875, "Moving Time": 1063 }, { "Activity Date": "2019-11-04T03:42:54.000Z", "Activity Name": "Morning Ride", "Distance": 8456.2998046875, "Moving Time": 2157 }, { "Activity Date": "2019-11-05T03:43:05.000Z", "Activity Name": "Morning Ride", "Distance": 8816.400390625, "Moving Time": 2353 }, { "Activity Date": "2019-11-06T03:45:34.000Z", "Activity Name": "Morning Ride", "Distance": 8090.7001953125, "Moving Time": 1911 }, { "Activity Date": "2019-11-07T03:43:00.000Z", "Activity Name": "Morning Ride", "Distance": 1382.699951171875, "Moving Time": 336 }, { "Activity Date": "2019-11-08T12:37:39.000Z", "Activity Name": "Afternoon Ride", "Distance": 4856.2001953125, "Moving Time": 1351 }, { "Activity Date": "2019-11-12T12:50:08.000Z", "Activity Name": "Afternoon Ride", "Distance": 5141.10009765625, "Moving Time": 1526 }, { "Activity Date": "2019-11-13T12:38:54.000Z", "Activity Name": "Afternoon Ride", "Distance": 4582.60009765625, "Moving Time": 1237 }, { "Activity Date": "2019-11-14T03:49:03.000Z", "Activity Name": "Morning Ride", "Distance": 15022, "Moving Time": 3742 }, { "Activity Date": "2019-09-16T05:10:58.000Z", "Activity Name": "Morning Ride", "Distance": 57270.3984375, "Moving Time": 14393 }, { "Activity Date": "2019-09-20T03:21:34.000Z", "Activity Name": "Morning Ride", "Distance": 66988.1015625, "Moving Time": 12096 }, { "Activity Date": "2019-09-15T03:23:05.000Z", "Activity Name": "Morning Ride", "Distance": 103671.1015625, "Moving Time": 22042 }, { "Activity Date": "2019-09-19T04:00:18.000Z", "Activity Name": "Morning Ride", "Distance": 81357.5, "Moving Time": 18880 }, { "Activity Date": "2019-09-17T03:43:18.000Z", "Activity Name": "Morning Ride", "Distance": 74034.796875, "Moving Time": 16013 }, { "Activity Date": "2019-09-18T03:07:43.000Z", "Activity Name": "Morning Ride", "Distance": 82354.3984375, "Moving Time": 16583 }, { "Activity Date": "2019-11-20T21:44:19.000Z", "Activity Name": "Taiwan, day 1", "Distance": 94371.203125, "Moving Time": 18130 }, { "Activity Date": "2019-11-21T23:16:16.000Z", "Activity Name": "Taiwan, day 2, Sun Moon lake", "Distance": 115457.203125, "Moving Time": 21181 }, { "Activity Date": "2019-11-22T21:57:56.000Z", "Activity Name": "Taiwan day 3", "Distance": 80677.8984375, "Moving Time": 12403 }, { "Activity Date": "2019-11-23T21:38:03.000Z", "Activity Name": "Taiwan day 4", "Distance": 121866.796875, "Moving Time": 26665 }, { "Activity Date": "2019-11-24T22:04:11.000Z", "Activity Name": "Taiwan day 5", "Distance": 107690.703125, "Moving Time": 23386 }, { "Activity Date": "2019-11-25T21:56:58.000Z", "Activity Name": "Taiwan day 6", "Distance": 90308.203125, "Moving Time": 18331 }];
        data = [];
        var measures = [];
        var expressions = [];
        var dimensions = [];
        var dimNames = [];
        var reducedDf = [];

        var gColor;
        if (graph.measures[0].color == null || graph.measures[0].color == "") {
            gColor = "#b9ce37";
        }
        else {
            gColor = graph.measures[0].color;
        }

        dimensions.push(graph.dimensions[0].field);
        dimensions.push(graph.dimensions[1].field);
        dimNames.push(graph.dimensions[0].name);
        dimNames.push(graph.dimensions[1].name);
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

        rrdf = reducedDf;

        for (var i = 1; i < reducedDf.length; i++) {
            var activity = { "Activity Name": reducedDf[i][1], "Activity Date": reducedDf[i][0], "Distance": reducedDf[i][2] };
            data.push(activity);
        }

        document.getElementById("g" + graph.id).style.backgroundColor = "#5f6062";

        var weeklyData = [];
        var dailyData = [];

        var firstDay = new Date(data[0]["Activity Date"]);
        firstDay = am4core.time.round(firstDay, "year", 1);
        var total = 0;

        // PREPARE DATA
        function prepareDistanceData(data) {
            for (var i = 0; i < 7; i++) {
                dailyData.push({ day: chart.dateFormatter.language.translate(chart.dateFormatter.weekdaysShort[i]) });
            }

            for (var i = 0; i < 53; i++) {
                weeklyData[i] = {};
                weeklyData[i].distance = 0;
                var date = new Date(firstDay);
                date.setDate(i * 7);
                am4core.time.round(date, "week", 1);
                var endDate = am4core.time.round(new Date(date), "week", 1);

                weeklyData[i].date = date;
                weeklyData[i].endDate = endDate;
            }

            am4core.array.each(data, function (di) {
                var date = new Date(di["Activity Date"])
                var weekDay = date.getDay();
                var weekNumber = am4core.utils.getWeek(date);

                if (weekNumber == 1 && date.getMonth() == 11) {
                    weekNumber = 53;
                }

                var distance = am4core.math.round(di["Distance"], 1);

                weeklyData[weekNumber - 1].distance += distance;
                weeklyData[weekNumber - 1].distance = am4core.math.round(weeklyData[weekNumber - 1].distance, 1);
                total += distance;

                dailyData.push({ date: date, day: chart.dateFormatter.language.translate(chart.dateFormatter.weekdaysShort[weekDay]), distance: distance, title: di["Activity Name"] });
            })
        }


        // CHART
        var chart = am4core.create("g" + graph.id, am4charts.RadarChart);
        prepareDistanceData(data);

        chart.innerRadius = am4core.percent(15);
        chart.radius = am4core.percent(90);
        chart.data = weeklyData;
        chart.fontSize = "11px";
        chart.startAngle = 95;
        chart.endAngle = chart.startAngle + 350;

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.baseInterval = { timeUnit: "week", count: 1 };
        dateAxis.renderer.innerRadius = am4core.percent(40);
        dateAxis.renderer.minGridDistance = 5;
        dateAxis.renderer.labels.template.relativeRotation = 0;
        dateAxis.renderer.labels.template.location = 0.5;
        dateAxis.renderer.labels.template.radius = am4core.percent(-57);
        dateAxis.renderer.labels.template.fontSize = "8px";
        dateAxis.dateFormats.setKey("week", "w");
        dateAxis.periodChangeDateFormats.setKey("week", "w");
        dateAxis.cursorTooltipEnabled = false;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inversed = true;
        valueAxis.renderer.radius = am4core.percent(40);
        valueAxis.renderer.minGridDistance = 15;
        valueAxis.renderer.minLabelPosition = 0.05;
        valueAxis.renderer.axisAngle = 90;
        valueAxis.cursorTooltipEnabled = false;
        valueAxis.renderer.labels.template.fill = am4core.color("#ffffff");

        // Create series
        var columnSeries = chart.series.push(new am4charts.RadarColumnSeries());
        columnSeries.dataFields.dateX = "date";
        columnSeries.dataFields.valueY = "distance";
        columnSeries.columns.template.strokeOpacity = 0;
        columnSeries.columns.template.width = am4core.percent(95);
        columnSeries.fill = am4core.color("#ffffff");
        columnSeries.fillOpacity = 0.6;
        columnSeries.tooltip.fontSize = 10;
        columnSeries.tooltip.pointerOrientation = "down";
        columnSeries.tooltip.background.fillOpacity = 0.5;
        columnSeries.columns.template.tooltipText = "[bold]{date} - {endDate}\n[font-size:13px]Total {valueY}";
        columnSeries.cursorTooltipEnabled = false;

        // weekday axis
        var weekDayAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        weekDayAxis.dataFields.category = "day";
        weekDayAxis.data = dailyData;
        weekDayAxis.renderer.innerRadius = am4core.percent(50);
        weekDayAxis.renderer.minGridDistance = 10;
        weekDayAxis.renderer.grid.template.location = 0;
        weekDayAxis.renderer.line.disabled = true;
        weekDayAxis.renderer.axisAngle = 90;
        weekDayAxis.cursorTooltipEnabled = false;
        weekDayAxis.renderer.labels.template.fill = am4core.color("#ffffff");

        // bubble series
        var bubbleSeries = chart.series.push(new am4charts.RadarSeries())
        bubbleSeries.dataFields.dateX = "date";
        bubbleSeries.dataFields.categoryY = "day";
        bubbleSeries.dataFields.value = "distance";
        bubbleSeries.yAxis = weekDayAxis;
        bubbleSeries.data = dailyData;
        bubbleSeries.strokeOpacity = 0;
        bubbleSeries.maskBullets = false;
        bubbleSeries.cursorTooltipEnabled = false;
        bubbleSeries.tooltip.fontSize = 10;
        bubbleSeries.tooltip.pointerOrientation = "down";
        bubbleSeries.tooltip.background.fillOpacity = 0.4;

        var bubbleBullet = bubbleSeries.bullets.push(new am4charts.CircleBullet())
        bubbleBullet.locationX = 0.5;
        bubbleBullet.stroke = am4core.color(gColor);
        bubbleBullet.fill = am4core.color(gColor);
        bubbleBullet.tooltipText = "[bold]{date}, {value} \n[font-size:13px]{title}";
        bubbleBullet.adapter.add("tooltipY", function (tooltipY, target) {
            return -target.circle.radius;
        })

        bubbleSeries.heatRules.push({ target: bubbleBullet.circle, min: 2, max: 12, dataField: "value", property: "radius" });
        bubbleSeries.dataItems.template.locations.categoryY = 0.5;

        // add month ranges
        for (var i = 0; i < 13; i++) {
            var range = dateAxis.axisRanges.create();
            range.date = new Date(firstDay.getFullYear(), i, 0, 0, 0, 0);
            range.endDate = new Date(firstDay.getFullYear(), i + 1, 0, 0, 0, 0);
            if (i % 2) {
                range.axisFill.fillOpacity = 0.4;
            }
            else {
                range.axisFill.fillOpacity = 0.8;
            }
            range.axisFill.radius = -28;
            range.axisFill.adapter.add("innerRadius", function (innerRadius, target) {
                return dateAxis.renderer.pixelRadius + 7;
            })
            range.axisFill.fill = am4core.color(gColor);
            range.axisFill.stroke = am4core.color("#5f6062");
            range.grid.disabled = true;
            range.label.text = chart.dateFormatter.language.translate(chart.dateFormatter.months[i])
            range.label.bent = true;
            range.label.radius = 10;
            range.label.fontSize = 10;
            range.label.paddingBottom = 5;
            range.label.interactionsEnabled = false;
            range.axisFill.interactionsEnabled = true;
            range.axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;
            range.axisFill.events.on("hit", function (event) {
                if (dateAxis.start == 0 && dateAxis.end == 1) {
                    dateAxis.zoomToDates(event.target.dataItem.date, event.target.dataItem.endDate);
                }
                else {
                    dateAxis.zoom({ start: 0, end: 1 });
                }
            })
        }

        chart.cursor = new am4charts.RadarCursor();
        chart.cursor.innerRadius = am4core.percent(40);
        chart.cursor.lineY.disabled = true;


        var label = chart.radarContainer.createChild(am4core.Label);
        label.horizontalCenter = "middle";
        label.verticalCenter = "middle";
        label.fill = am4core.color("#ffffff");
        label.fontSize = 12;
        label.fontWeight = "bold";
        label.text = "WEEKLY\nTOTALS";

        var title = chart.createChild(am4core.Label);
        title.fill = am4core.color(gColor);
        title.fontSize = 20;
        title.isMeasured = false;
        title.valign = "top";
        title.align = "left";
        title.wrap = true;
        title.width = 200;
        title.text = "";

        var link = chart.createChild(am4core.TextLink);
        link.fill = am4core.color("#ffffff");
        link.fontSize = 13;
        link.url = "";
        link.valign = "bottom";
        link.align = "right";
        link.marginRight = 10;
        link.text = "";

    }); // end am4core.ready()
}