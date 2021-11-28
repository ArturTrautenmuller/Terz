function buildIndicators(sheetOrder) {
    var sheet = reportData.config.sheets.filter(function (x) { return x.order == sheetOrder })[0];
    var indicators = sheet.indicators;
    var iLenght;
    if (indicators == null) {
        iLenght = 0;
    }
    else {
        iLenght = indicators.length;
    }
    for (var i = 0; i < iLenght; i++) {
        var indicator = indicators[i];
        var indicatorDiv = document.createElement("div");
        indicatorDiv.style.marginLeft = solveVariables(indicator.style.x);
        indicatorDiv.style.marginTop = solveVariables(indicator.style.y);
        indicatorDiv.style.width = solveVariables(indicator.style.width);
        indicatorDiv.style.height = solveVariables(indicator.style.height);
        indicatorDiv.style.position = "absolute";
       // indicatorDiv.style.border = "0px solid black";
        // indicatorDiv.style.borderRadius = "7px";
        indicatorDiv.style.borderStyle = "solid";
        indicatorDiv.style.borderRadius = solveVariables(indicator.style.borderRadius) + "px";
        indicatorDiv.style.borderColor = solveVariables(indicator.style.borderColor);
        indicatorDiv.style.borderWidth = solveVariables(indicator.style.borderThickness) + "px";
        indicatorDiv.style.display = "flex";

        indicatorDiv.setAttribute("id", "ind" + indicator.id);
        indicatorDiv.setAttribute("class", "resize-drag");

        var dataDiv = document.createElement("div");
        dataDiv.style.width = "100%";
        dataDiv.style.marginTop = "5px";

        var labelTitle = document.createElement("label");
        var TitleText = solveVariables(indicator.measure.name);
        labelTitle.appendChild(document.createTextNode(TitleText));

        labelTitle.style.color = solveVariables(indicator.style.textColor);
        labelTitle.style.fontSize = solveVariables(indicator.style.fontSize);
        dataDiv.appendChild(labelTitle);
        dataDiv.appendChild(document.createElement("br"));
        var labelValue = document.createElement("label");

        var indValue = EvalueteEx(indicator.measure.expresion, indicator.dataFrameName, null);
        var indExpression;
        switch (indicator.measure.numberFormat) {
            case 'real': {
                indExpression = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(indValue);
                break;
            }
            case 'percent': {
                indExpression = parseFloat(indValue).toFixed(2) + "%";
                break;
            }
            case 'number': {
                indExpression = new Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(indValue);
                break;
            }
            default: { indExpression = indValue; break; }
        }

        var value = document.createTextNode(indExpression);
        labelValue.appendChild(value);

        labelValue.style.color = solveVariables(indicator.style.textColor);
        labelValue.style.fontSize = solveVariables(indicator.style.fontSize);
        dataDiv.appendChild(labelValue);
      

        if (indicator["icon"] != null && indicator["icon"] != 'Sem Icone' && indicator["icon"] != "") {
            dataDiv.style.width = "75%";
            var iconDiv = document.createElement("div");
            iconDiv.style.width = "25%";
            iconDiv.style.textAlign = "center";
            var icon = document.createElement("i");
            icon.setAttribute("class", indicator["icon"]);
            icon.style.color = solveVariables(indicator.style.textColor);
            icon.style.fontSize = solveVariables(indicator.style.fontSize) * 2 + "px";
            icon.style.marginTop = solveVariables(indicator.style.fontSize) + "px";
           // icon.style.marginRight = (indicator.style.fontSize/5 + 20) + "px";
            iconDiv.appendChild(icon);
            indicatorDiv.appendChild(iconDiv);
        }
        else {
              dataDiv.style.textAlign = "center";
        }


        indicatorDiv.appendChild(dataDiv);
        indicatorDiv.style.backgroundColor = solveVariables(indicator.style.backgroundColor);
        if (!window.location.href.includes('Editor')) {
            indicatorDiv.setAttribute("onclick", "indicatorClickEvent('" + sheetOrder + "','" + indicator.id + "')");
        }
    

       



        document.getElementById("Graphs").appendChild(indicatorDiv);
    }

}

function indicatorClickEvent(sheetOrder,id) {
    var sheet = reportData.config.sheets.filter(function (x) { return x.order == sheetOrder })[0];
    var indicators = sheet.indicators;
    var indicator = indicators.filter(function (x) { return x.id == id })[0];

    var setVar = indicator.setVarsName != null && indicator.setVarsName != "" && indicator.setVarsContent != null && indicator.setVarsContent != "";
    var navigate = indicator.navigateTo != null && indicator.navigateTo != "" && indicator.navigateTo != "0";

    if (setVar) {
        var varsName = indicator.setVarsName.split(";");
        var varsContent = indicator.setVarsContent.split(";");

        if (varsName.length == varsContent.length) {

            for (var i = 0; i < varsName.length; i++) {
                var varPos = reportData.config.variablePool.map(function (e) { return e.name; }).indexOf(varsName[i]);
                reportData.config.variablePool[varPos].content = varsContent[i];
            }

        }

    }

    if (navigate)
        changeSheet(indicator.navigateTo);

    if (setVar && !navigate)
        reloadGraphs();
}