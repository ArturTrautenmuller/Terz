function buildIndicators(sheetOrder) {
    var sheet = reportData.config.sheets.filter(function (x) { return x.order == sheetOrder })[0];
    var indicators = sheet.indicators;
    for (var i = 0; i < indicators.length; i++) {
        var indicator = indicators[i];
        var indicatorDiv = document.createElement("div");
        indicatorDiv.style.marginLeft = indicator.style.x;
        indicatorDiv.style.marginTop = indicator.style.y;
        indicatorDiv.style.width = indicator.style.width;
        indicatorDiv.style.height = indicator.style.height;
        indicatorDiv.style.position = "absolute";
        indicatorDiv.style.border = "1px solid black";
        indicatorDiv.setAttribute("id", "ind" + indicator.id);
        indicatorDiv.setAttribute("class", "resize-drag");

        var labelTitle = document.createElement("label");
        labelTitle.appendChild(document.createTextNode(indicator.measure.name));

        labelTitle.style.color = indicator.style.textColor;
        labelTitle.style.fontSize = indicator.style.fontSize;
        indicatorDiv.appendChild(labelTitle);
        indicatorDiv.appendChild(document.createElement("br"));
        var labelValue = document.createElement("label");
       
        var value = document.createTextNode(EvalueteEx(indicator.measure.expresion, indicator.dataFrameName, null));
        labelValue.appendChild(value);
     
        labelValue.style.color = indicator.style.textColor;
        labelValue.style.fontSize = indicator.style.fontSize;
        indicatorDiv.appendChild(labelValue);
        indicatorDiv.style.backgroundColor = indicator.style.backgroundColor;
        indicatorDiv.style.textAlign = "center";



        document.getElementById("Graphs").appendChild(indicatorDiv);
    }

}