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
        indicatorDiv.style.marginLeft = indicator.style.x;
        indicatorDiv.style.marginTop = indicator.style.y;
        indicatorDiv.style.width = indicator.style.width;
        indicatorDiv.style.height = indicator.style.height;
        indicatorDiv.style.position = "absolute";
       // indicatorDiv.style.border = "0px solid black";
        // indicatorDiv.style.borderRadius = "7px";
        indicatorDiv.style.borderStyle = "solid";
        indicatorDiv.style.borderRadius = indicator.style.borderRadius+"px";
        indicatorDiv.style.borderColor = indicator.style.borderColor;
        indicatorDiv.style.borderWidth = indicator.style.borderThickness + "px";
        indicatorDiv.style.display = "flex";

        indicatorDiv.setAttribute("id", "ind" + indicator.id);
        indicatorDiv.setAttribute("class", "resize-drag");

        var dataDiv = document.createElement("div");
        dataDiv.style.width = "100%";
        dataDiv.style.marginTop = "5px";

        var labelTitle = document.createElement("label");
        labelTitle.appendChild(document.createTextNode(indicator.measure.name));

        labelTitle.style.color = indicator.style.textColor;
        labelTitle.style.fontSize = indicator.style.fontSize;
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
     
        labelValue.style.color = indicator.style.textColor;
        labelValue.style.fontSize = indicator.style.fontSize;
        dataDiv.appendChild(labelValue);
      

        if (indicator["icon"] != null && indicator["icon"] != 'Sem Icone' && indicator["icon"] != "") {
            dataDiv.style.width = "75%";
            var iconDiv = document.createElement("div");
            iconDiv.style.width = "25%";
            iconDiv.style.textAlign = "center";
            var icon = document.createElement("i");
            icon.setAttribute("class", indicator["icon"]);
            icon.style.color = indicator.style.textColor;
            icon.style.fontSize = indicator.style.fontSize * 2 + "px";
            icon.style.marginTop = indicator.style.fontSize + "px";
           // icon.style.marginRight = (indicator.style.fontSize/5 + 20) + "px";
            iconDiv.appendChild(icon);
            indicatorDiv.appendChild(iconDiv);
        }
        else {
              dataDiv.style.textAlign = "center";
        }


        indicatorDiv.appendChild(dataDiv);
        indicatorDiv.style.backgroundColor = indicator.style.backgroundColor;
        if (indicator.navigateTo != null && indicator.navigateTo != "" && indicator.navigateTo != "0" && !window.location.href.includes('Editor')) {
            indicatorDiv.setAttribute("onclick", "changeSheet('" + indicator.navigateTo + "')");
        }
    

       



        document.getElementById("Graphs").appendChild(indicatorDiv);
    }

}