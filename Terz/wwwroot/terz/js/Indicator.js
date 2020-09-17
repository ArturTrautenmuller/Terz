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
        indicatorDiv.style.border = "0px solid black";
        indicatorDiv.style.borderRadius = "7px";

        indicatorDiv.setAttribute("id", "ind" + indicator.id);
        indicatorDiv.setAttribute("class", "resize-drag");

        var labelTitle = document.createElement("label");
        labelTitle.appendChild(document.createTextNode(indicator.measure.name));

        labelTitle.style.color = indicator.style.textColor;
        labelTitle.style.fontSize = indicator.style.fontSize;
        indicatorDiv.appendChild(labelTitle);
        indicatorDiv.appendChild(document.createElement("br"));
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
        indicatorDiv.appendChild(labelValue);
        indicatorDiv.style.backgroundColor = indicator.style.backgroundColor;
        indicatorDiv.style.textAlign = "center";



        document.getElementById("Graphs").appendChild(indicatorDiv);
    }

}