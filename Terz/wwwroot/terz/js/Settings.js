﻿function buildVariableInputSettings(id) {
    var content = document.getElementById("Settings");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    var varInput = reportData.config.sheets.filter(function (x) { return x.order == currentSheet })[0].variableInputs.filter(function (y) { return y.id == id })[0];

    var titleLabel = document.createElement("label");
    titleLabel.innerHTML = "Título:";
    document.getElementById("Settings").appendChild(titleLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var titleExp = document.createElement("input");
    titleExp.setAttribute("id", "Title");
    titleExp.setAttribute("type", "text");
    titleExp.setAttribute("onchange", "updateVarInputConfig('" + id + "')");
    titleExp.setAttribute("class", "form-control");
    titleExp.value = varInput.title;
    document.getElementById("Settings").appendChild(titleExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    var varLabel = document.createElement("label");
    varLabel.innerHTML = "Variável:";
    document.getElementById("Settings").appendChild(varLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var varExp = document.createElement("input");
    varExp.setAttribute("id", "Variable");
    varExp.setAttribute("type", "text");
    varExp.setAttribute("onchange", "updateVarInputConfig('" + id + "')");
    varExp.setAttribute("class", "form-control");
    varExp.value = varInput.variable;
    document.getElementById("Settings").appendChild(varExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));


    var selectTypeDiv = document.createElement("div");
    var selectTypeLabel = document.createElement("label");
    selectTypeLabel.innerHTML = "Tipo:";

    selectTypeDiv.appendChild(selectTypeLabel);
    selectTypeDiv.appendChild(document.createElement("br"));
    var selectType = document.createElement("select");
    for (var i = 0; i < VarInputType.length; i++) {
        var selectTypeOption = document.createElement("option");
        selectTypeOption.innerHTML = VarInputTypeLabel[i];
        selectTypeOption.value = VarInputType[i];
        if (varInput.objectType == null) {
            varInput.objectType = "text";
        }
        if (varInput.objectType == VarInputType[i]) {
            selectTypeOption.selected = "selected";
        }
        selectType.appendChild(selectTypeOption);
    }



    selectType.setAttribute("id", "ObjectType");
    selectType.setAttribute("onchange", "updateVarInputConfig('" + id + "')");
    selectType.setAttribute("class", "form-control");
    selectTypeDiv.appendChild(selectType);
    document.getElementById("Settings").appendChild(selectTypeDiv);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    var labelsLabel = document.createElement("label");
    labelsLabel.innerHTML = "Valores (Rótulo):";
    document.getElementById("Settings").appendChild(labelsLabel);
    var expBut = document.createElement("button");
    var iExp = document.createElement("i");
    iExp.setAttribute("class", "fas fa-code");
    iExp.style.color = "#21bfb2";
    iExp.style.fontSize = "20px";
    expBut.style.border = "none";
    expBut.style.marginLeft = "10px";
    expBut.appendChild(iExp);
    expBut.setAttribute("onclick", "ExpVarLabel('" + id + "')");
    document.getElementById("Settings").appendChild(expBut);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var labelsExp = document.createElement("input");
    labelsExp.setAttribute("id", "Labels");
    labelsExp.setAttribute("type", "text");
    labelsExp.setAttribute("onchange", "updateVarInputConfig('" + id + "')");
    labelsExp.setAttribute("class", "form-control");
    labelsExp.value = varInput.labels;
    document.getElementById("Settings").appendChild(labelsExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    var valuesLabel = document.createElement("label");
    valuesLabel.innerHTML = "Valores:";
    document.getElementById("Settings").appendChild(valuesLabel);
    var expBut2 = document.createElement("button");
    var iExp2 = document.createElement("i");
    iExp2.setAttribute("class", "fas fa-code");
    iExp2.style.color = "#21bfb2";
    iExp2.style.fontSize = "20px";
    expBut2.style.border = "none";
    expBut2.style.marginLeft = "10px";
    expBut2.appendChild(iExp2);
    expBut2.setAttribute("onclick", "ExpVarValue('" + id + "')");
    document.getElementById("Settings").appendChild(expBut2);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var valuesExp = document.createElement("input");
    valuesExp.setAttribute("id", "Values");
    valuesExp.setAttribute("type", "text");
    valuesExp.setAttribute("onchange", "updateVarInputConfig('" + id + "')");
    valuesExp.setAttribute("class", "form-control");
    valuesExp.value = varInput.values;
    document.getElementById("Settings").appendChild(valuesExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    //Largura

    var row1 = document.createElement("div");
    row1.style.display = "flex";
    var largDiv = document.createElement("div");
    largDiv.style.width = "45%";

    var widthLabel = document.createElement("label");
    widthLabel.innerHTML = "Largura:";
    largDiv.appendChild(widthLabel);
    largDiv.appendChild(document.createElement("br"));
    var widthExp = document.createElement("input");
    widthExp.setAttribute("id", "Width");
    widthExp.setAttribute("type", "number");
    widthExp.step = "1";
    widthExp.min = "1";
    widthExp.setAttribute("onchange", "updateVarInputConfig('" + id + "')");
    widthExp.setAttribute("class", "form-control");
    widthExp.value = varInput.style.width;
    largDiv.appendChild(widthExp);
    largDiv.appendChild(document.createElement("br"));
    row1.appendChild(largDiv);
    //Altura
    var alturaDiv = document.createElement("div");
    alturaDiv.style.width = "45%";
    alturaDiv.style.marginLeft = "5%";

    var heightLabel = document.createElement("label");
    heightLabel.innerHTML = "Altura:";
    alturaDiv.appendChild(heightLabel);
    alturaDiv.appendChild(document.createElement("br"));
    var heightExp = document.createElement("input");
    heightExp.setAttribute("id", "Height");
    heightExp.setAttribute("type", "number");
    heightExp.step = "1";
    heightExp.min = "1";
    heightExp.setAttribute("onchange", "updateVarInputConfig('" + id + "')");
    heightExp.setAttribute("class", "form-control");
    heightExp.value = varInput.style.height;
    alturaDiv.appendChild(heightExp);
    alturaDiv.appendChild(document.createElement("br"));
    row1.appendChild(alturaDiv);
    document.getElementById("Settings").appendChild(row1);
    // X
    var row2 = document.createElement("div");
    row2.style.display = "flex";
    var xDiv = document.createElement("div");
    xDiv.style.width = "45%";

    var xLabel = document.createElement("label");
    xLabel.innerHTML = "X:";
    xDiv.appendChild(xLabel);
    xDiv.appendChild(document.createElement("br"));
    var xExp = document.createElement("input");
    xExp.setAttribute("id", "X");
    xExp.setAttribute("type", "number");
    xExp.step = "1";
    xExp.min = "1";
    xExp.setAttribute("onchange", "updateVarInputConfig('" + id + "')");
    xExp.setAttribute("class", "form-control");
    xExp.value = varInput.style.x;
    xDiv.appendChild(xExp);
    xDiv.appendChild(document.createElement("br"));
    row2.appendChild(xDiv);
    // Y
    var yDiv = document.createElement("div");
    yDiv.style.width = "45%";
    yDiv.style.marginLeft = "5%";

    var yLabel = document.createElement("label");
    yLabel.innerHTML = "Y:";
    yDiv.appendChild(yLabel);
    yDiv.appendChild(document.createElement("br"));
    var yExp = document.createElement("input");
    yExp.setAttribute("id", "Y");
    yExp.setAttribute("type", "number");
    yExp.step = "1";
    yExp.min = "1";
    yExp.setAttribute("onchange", "updateVarInputConfig('" + id + "')");
    yExp.setAttribute("class", "form-control");
    yExp.value = varInput.style.y;
    yDiv.appendChild(yExp);
    yDiv.appendChild(document.createElement("br"));
    row2.appendChild(yDiv);
    document.getElementById("Settings").appendChild(row2);

    document.getElementById("Settings").appendChild(document.createElement("hr"));

    var copyButton = document.createElement("button");
    copyButton.setAttribute("class", "btn btn-block btn-default btn-sm");
    copyButton.innerHTML = "Duplicar";
    copyButton.setAttribute("onclick", "copyVarInput('" + id + "')");
    document.getElementById("Settings").appendChild(copyButton);

    document.getElementById("Settings").appendChild(document.createElement("br"));

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Remover";
    deleteButton.setAttribute("class", "btn btn-block btn-danger btn-sm");
    deleteButton.setAttribute("onclick", "deleteVarInput('" + id + "')");
    document.getElementById("Settings").appendChild(deleteButton);


}


function buildTextBlockSettings(id) {
    var content = document.getElementById("Settings");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    var textBlock = reportData.config.sheets.filter(function (x) { return x.order == currentSheet })[0].textBlocks.filter(function (y) { return y.id == id })[0];

    var titleLabel = document.createElement("label");
    titleLabel.innerHTML = "Título:";
    document.getElementById("Settings").appendChild(titleLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var titleExp = document.createElement("input");
    titleExp.setAttribute("id", "Title");
    titleExp.setAttribute("type", "text");
    titleExp.setAttribute("onchange", "updateTextBlockConfig('" + id + "')");
    titleExp.setAttribute("class", "form-control");
    titleExp.value = textBlock.title;
    document.getElementById("Settings").appendChild(titleExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    var textLabel = document.createElement("label");
    textLabel.innerHTML = "Texto:";
    document.getElementById("Settings").appendChild(textLabel);
    var expBut = document.createElement("button");
    var iExp = document.createElement("i");
    iExp.setAttribute("class", "fas fa-code");
    iExp.style.color = "#21bfb2";
    iExp.style.fontSize = "20px";
    expBut.style.border = "none";
    expBut.style.marginLeft = "10px";
    expBut.appendChild(iExp);
    expBut.setAttribute("onclick", "ExpText('" + id + "')");
    document.getElementById("Settings").appendChild(expBut);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var textArea = document.createElement("textarea");
    textArea.setAttribute("id", "textarea");
   
    textArea.setAttribute("onchange", "updateTextBlockConfig('" + id + "')");
    textArea.setAttribute("class", "form-control");
    textArea.innerHTML = textBlock.text;
    document.getElementById("Settings").appendChild(textArea);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    document.getElementById("Settings").appendChild(document.createElement("hr"));
    //Largura

    var row1 = document.createElement("div");
    row1.style.display = "flex";
    var largDiv = document.createElement("div");
    largDiv.style.width = "45%";

    var widthLabel = document.createElement("label");
    widthLabel.innerHTML = "Largura:";
    largDiv.appendChild(widthLabel);
    largDiv.appendChild(document.createElement("br"));
    var widthExp = document.createElement("input");
    widthExp.setAttribute("id", "Width");
    widthExp.setAttribute("type", "number");
    widthExp.step = "1";
    widthExp.min = "1";
    widthExp.setAttribute("onchange", "updateTextBlockConfig('" + id + "')");
    widthExp.setAttribute("class", "form-control");
    widthExp.value = textBlock.style.width;
    largDiv.appendChild(widthExp);
    largDiv.appendChild(document.createElement("br"));
    row1.appendChild(largDiv);
    //Altura
    var alturaDiv = document.createElement("div");
    alturaDiv.style.width = "45%";
    alturaDiv.style.marginLeft = "5%";

    var heightLabel = document.createElement("label");
    heightLabel.innerHTML = "Altura:";
    alturaDiv.appendChild(heightLabel);
    alturaDiv.appendChild(document.createElement("br"));
    var heightExp = document.createElement("input");
    heightExp.setAttribute("id", "Height");
    heightExp.setAttribute("type", "number");
    heightExp.step = "1";
    heightExp.min = "1";
    heightExp.setAttribute("onchange", "updateTextBlockConfig('" + id + "')");
    heightExp.setAttribute("class", "form-control");
    heightExp.value = textBlock.style.height;
    alturaDiv.appendChild(heightExp);
    alturaDiv.appendChild(document.createElement("br"));
    row1.appendChild(alturaDiv);
    document.getElementById("Settings").appendChild(row1);
    // X
    var row2 = document.createElement("div");
    row2.style.display = "flex";
    var xDiv = document.createElement("div");
    xDiv.style.width = "45%";

    var xLabel = document.createElement("label");
    xLabel.innerHTML = "X:";
    xDiv.appendChild(xLabel);
    xDiv.appendChild(document.createElement("br"));
    var xExp = document.createElement("input");
    xExp.setAttribute("id", "X");
    xExp.setAttribute("type", "number");
    xExp.step = "1";
    xExp.min = "1";
    xExp.setAttribute("onchange", "updateTextBlockConfig('" + id + "')");
    xExp.setAttribute("class", "form-control");
    xExp.value = textBlock.style.x;
    xDiv.appendChild(xExp);
    xDiv.appendChild(document.createElement("br"));
    row2.appendChild(xDiv);
    // Y
    var yDiv = document.createElement("div");
    yDiv.style.width = "45%";
    yDiv.style.marginLeft = "5%";

    var yLabel = document.createElement("label");
    yLabel.innerHTML = "Y:";
    yDiv.appendChild(yLabel);
    yDiv.appendChild(document.createElement("br"));
    var yExp = document.createElement("input");
    yExp.setAttribute("id", "Y");
    yExp.setAttribute("type", "number");
    yExp.step = "1";
    yExp.min = "1";
    yExp.setAttribute("onchange", "updateTextBlockConfig('" + id + "')");
    yExp.setAttribute("class", "form-control");
    yExp.value = textBlock.style.y;
    yDiv.appendChild(yExp);
    yDiv.appendChild(document.createElement("br"));
    row2.appendChild(yDiv);
    document.getElementById("Settings").appendChild(row2);

    //Cor de Fundo

    var bcLabel = document.createElement("label");
    bcLabel.innerHTML = "Cor de Fundo:";
    document.getElementById("Settings").appendChild(bcLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var bcDiv = document.createElement("div");
    bcDiv.style.display = "flex";

    var bcExp = document.createElement("input");
    bcExp.setAttribute("id", "BackgroundColor");
    bcExp.setAttribute("type", "text");
    bcExp.setAttribute("onchange", "updateTextBlockConfig('" + id + "')");
    bcExp.setAttribute("class", "form-control");
    if (textBlock.style.backgroundColor == null || textBlock.style.backgroundColor == "") {
        bcExp.value = "#ffffff";
    }
    else {
        bcExp.value = textBlock.style.backgroundColor;
    }

    bcExp.style.width = "65%";
    bcDiv.appendChild(bcExp);

    var bctExp = document.createElement("input");
    bctExp.setAttribute("id", "BackgroundColorPicker");
    bctExp.setAttribute("type", "color");
    bctExp.setAttribute("onchange", "changeColor('BackgroundColorPicker','BackgroundColor')");
    bctExp.setAttribute("class", "form-control");
    if (textBlock.style.backgroundColor == null || textBlock.style.backgroundColor == "") {
        bctExp.value = "#ffffff";
    }
    else {
        bctExp.value = textBlock.style.backgroundColor;
    }
    bctExp.style.width = "30%";
    bctExp.style.marginLeft = "3px";
    bcDiv.appendChild(bctExp);
    document.getElementById("Settings").appendChild(bcDiv);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    document.getElementById("Settings").appendChild(document.createElement("hr"));

    var copyButton = document.createElement("button");
    copyButton.setAttribute("class", "btn btn-block btn-default btn-sm");
    copyButton.innerHTML = "Duplicar";
    copyButton.setAttribute("onclick", "copyTextBlock('" + id + "')");
    document.getElementById("Settings").appendChild(copyButton);

    document.getElementById("Settings").appendChild(document.createElement("br"));

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Remover";
    deleteButton.setAttribute("class", "btn btn-block btn-danger btn-sm");
    deleteButton.setAttribute("onclick", "deleteTextBlock('" + id + "')");
    document.getElementById("Settings").appendChild(deleteButton);
    

}

function buildIndicatorSettings(id) {
    var content = document.getElementById("Settings");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    var indicator = reportData.config.sheets.filter(function (x) { return x.order == currentSheet })[0].indicators.filter(function (y) { return y.id == id })[0];

    //--- Dados ----
    var dadosDiv = document.createElement("div");
    var dadosButton = document.createElement("button");
    var dadosLi = document.createElement("li");

    dadosDiv.setAttribute("class", "dropdown");
    var dadosButton = document.createElement("button");
    dadosButton.setAttribute("onclick", "showContent(this)");
    dadosButton.setAttribute("class", "sectionButton");
    dadosButton.appendChild(document.createTextNode("Dados"));
    // dimButton.setAttribute("class", "btn btn-primary dropdown-toggle");
    dadosButton.setAttribute("type", "button");
    // dadosLi.style.display = "none";
    dadosDiv.appendChild(dadosButton);

    //DataFrame
    var selectDFDiv = document.createElement("div");
    var selectDFLabel = document.createElement("label");
    selectDFLabel.innerHTML = "Data Frame:";

   
    selectDFDiv.appendChild(selectDFLabel);
    selectDFDiv.appendChild(document.createElement("br"));
    selectDFDiv.style.maxHeight = "300px";
    selectDFDiv.style.overflowY = "auto";

   


    for (var j = 0; j < reportData.dataFrames.length; j++) {
        var checkDF = document.createElement("input");
        checkDF.type = "checkbox";
        checkDF.value = reportData.dataFrames[j].name;
        checkDF.setAttribute("name", "DataFrame");
        checkDF.style.width = "16px";
        checkDF.style.height = "16px";

        if (indicator.dataFrameName.includes(reportData.dataFrames[j].name)) {
            checkDF.checked = "checked";
        }
        selectDFDiv.appendChild(checkDF);
        var dfLabel = document.createElement("label");
        dfLabel.append(document.createTextNode(reportData.dataFrames[j].name));
        dfLabel.style.fontSize = "14px";
        dfLabel.style.color = "gray";
        dfLabel.style.marginLeft = "10px";
        selectDFDiv.appendChild(dfLabel);
        selectDFDiv.appendChild(document.createElement("br"));

    }

    var applyButton = document.createElement("button");
    applyButton.append(document.createTextNode("Aplicar"));
    applyButton.setAttribute("onclick", "updateIndicatorDataFrame('" + id + "')");
    applyButton.setAttribute("class", "btn btn-block btn-info btn-sm");

    selectDFDiv.appendChild(applyButton);
    selectDFDiv.appendChild(document.createElement("br"));



    dadosLi.appendChild(selectDFDiv);
    dadosLi.appendChild(document.createElement("br"));
    var ordemLabel = document.createElement("label");
    ordemLabel.innerHTML = "Ordem:";
    dadosLi.appendChild(document.createElement("br"));
    for (var i = 0; i < indicator.dataFrameName.length; i++) {
        var orderDfDiv = document.createElement("div");
        orderDfDiv.setAttribute("name", "dfOrder");
        var orderDfLabel = document.createElement("label");
        orderDfLabel.innerHTML = indicator.dataFrameName[i];
        orderDfLabel.style.fontSize = "14px";
        orderDfLabel.style.color = "gray";
        orderDfLabel.style.width = "170px";
        orderDfDiv.appendChild(orderDfLabel);

        var orderDfDown = document.createElement("a");
        orderDfDown.style.fontSize = "16px";
        orderDfDown.setAttribute("onclick", "rebaixarDF('" + indicator.id + "'," + i + ")");
        var downIcon = document.createElement("i");
        downIcon.setAttribute("class", "fas fa-arrow-down");
        orderDfDown.appendChild(downIcon);
        orderDfDiv.appendChild(orderDfDown);

        var orderDfUp = document.createElement("a");
        orderDfUp.style.fontSize = "16px";
        orderDfUp.setAttribute("onclick", "promoverDF('" + indicator.id + "'," + i + ")");
        var upIcon = document.createElement("i");
        upIcon.setAttribute("class", "fas fa-arrow-up");
        orderDfUp.appendChild(upIcon);
        orderDfDiv.appendChild(orderDfUp);


        dadosLi.appendChild(orderDfDiv);
    }
    /*var aplicarOrdem = document.createElement("button");
    aplicarOrdem.innerHTML = "Aplicar";
    aplicarOrdem.setAttribute("onclick", "aplicarOrdem()");
    document.getElementById("Settings").appendChild(aplicarOrdem);
    */

    dadosLi.appendChild(document.createElement("hr"));

    dadosDiv.appendChild(dadosLi);
    document.getElementById("Settings").appendChild(dadosDiv);

    //--- Metrica ----
    var metricaDiv = document.createElement("div");
    var metricaButton = document.createElement("button");
    var metricaLi = document.createElement("li");

    metricaDiv.setAttribute("class", "dropdown");
    var metricaButton = document.createElement("button");
    metricaButton.setAttribute("onclick", "showContent(this)");
    metricaButton.setAttribute("class", "sectionButton");
    metricaButton.appendChild(document.createTextNode("Métrica"));
    // dimButton.setAttribute("class", "btn btn-primary dropdown-toggle");
    metricaButton.setAttribute("type", "button");
    metricaLi.style.display = "none";
    metricaDiv.appendChild(metricaButton);


    //Nome da Medida
    var measureNameLabel = document.createElement("label");
    measureNameLabel.innerHTML = "Nome da Métrica:";
    metricaLi.appendChild(measureNameLabel);
    metricaLi.appendChild(document.createElement("br"));
    var measureName = document.createElement("input");
    measureName.setAttribute("id", "MeasureName");
    measureName.setAttribute("type", "text");
    measureName.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    measureName.setAttribute("class", "form-control");
    measureName.value = indicator.measure.name;
    metricaLi.appendChild(measureName);
    metricaLi.appendChild(document.createElement("br"));
    //Expressçao da medida
    var measureExpLabel = document.createElement("label");
    measureExpLabel.innerHTML = "Expressão:";
    metricaLi.appendChild(measureExpLabel);
   // document.getElementById("Settings").appendChild(document.createElement("br"));
    var expBut = document.createElement("button");
    var iExp = document.createElement("i");
    iExp.setAttribute("class", "fas fa-code");
    iExp.style.color = "#21bfb2";
    iExp.style.fontSize = "20px";
    expBut.style.border = "none";
    expBut.style.marginLeft = "10px";
    expBut.appendChild(iExp);
    expBut.setAttribute("onclick", "ExpIndicator('" + id + "')");
    metricaLi.appendChild(expBut);
    var measureExp = document.createElement("input");
    measureExp.setAttribute("id", "Expression");
    measureExp.setAttribute("type", "text");
    measureExp.setAttribute("class", "form-control");
    measureExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
   // measureExp.setAttribute("class", "form-control");
    measureExp.value = indicator.measure.expresion;
    //measureExp.style.width = "180";
    metricaLi.appendChild(measureExp);
   
    metricaLi.appendChild(document.createElement("br"));

    //format

    var selectFormatDiv = document.createElement("div");
    var selectFormatLabel = document.createElement("label");
    selectFormatLabel.innerHTML = "Formato:";


    selectFormatDiv.appendChild(selectFormatLabel);
    selectFormatDiv.appendChild(document.createElement("br"));
    var selectFormat = document.createElement("select");
    

    for (var i = 0; i < formatList.length; i++) {
        var selectFormatOption = document.createElement("option");
        selectFormatOption.innerHTML = formatListLabel[i];
        selectFormatOption.value = formatList[i];
        if (indicator.measure.numberFormat == formatList[i]) {
            selectFormatOption.selected = "selected";
        }
        selectFormat.appendChild(selectFormatOption);
    }
    selectFormat.setAttribute("id", "Format");
    selectFormat.setAttribute("class", "form-control");
    selectFormat.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    selectFormatDiv.appendChild(selectFormat);
    metricaLi.appendChild(selectFormatDiv);
    metricaLi.appendChild(document.createElement("br"));


    // icone

    var iconeDiv = document.createElement("div");
    var iconeLabel = document.createElement("label");
    iconeLabel.innerHTML = "Icone:";
    iconeDiv.appendChild(iconeLabel);
    var iButton = document.createElement("button");
    iButton.style.marginLeft = "10px";
    //margin-left: 10px;background-color:white;border:none;font-weight:bold;color:gray
    iButton.style.backgroundColor = "white";
    iButton.style.border = "none";
    iButton.style.fontWeight = "bold";
    iButton.style.color = "gray";
    iButton.setAttribute("onclick", "IconSelector('" + id + "')");
    iButton.appendChild(document.createTextNode("Selecionar na Lista"));
    iconeDiv.appendChild(iButton);


    iconeDiv.appendChild(document.createElement("br"));
    var selectIcone = document.createElement("input");
   
    /*for (var i = 0; i < IconeList.length; i++) {
        var selectIconeOption = document.createElement("option");
        var innerIcon = document.createElement("i");
        innerIcon.setAttribute("class", IconeList[i]);
        selectIconeOption.setAttribute("data-icon", IconeList[i]);
        selectIconeOption.appendChild(innerIcon);
        selectIconeOption.appendChild(document.createTextNode(" " + IconeList[i]));
        //selectIconeOption.innerHTML = IconeList[i];
        selectIconeOption.value = IconeList[i];
        if (indicator["icon"] == IconeList[i]) {
            selectIconeOption.selected = "selected";
        }
        selectIcone.appendChild(selectIconeOption);
    }*/
    selectIcone.setAttribute("id", "Icone");
    if (indicator["icon"] == null) {
        selectIcone.value = "";
    }
    else {
        selectIcone.value = indicator["icon"];
    }
    selectIcone.setAttribute("class", "form-control");
    selectIcone.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    iconeDiv.appendChild(selectIcone);
    metricaLi.appendChild(iconeDiv);
    metricaLi.appendChild(document.createElement("br"));



    metricaLi.appendChild(document.createElement("hr"));

    metricaDiv.appendChild(metricaLi);
    document.getElementById("Settings").appendChild(metricaDiv)


    //--- Layout ----
    var layoutDiv = document.createElement("div");
    var layoutButton = document.createElement("button");
    var layoutLi = document.createElement("li");

    layoutDiv.setAttribute("class", "dropdown");
    var layoutButton = document.createElement("button");
    layoutButton.setAttribute("onclick", "showContent(this)");
    layoutButton.setAttribute("class", "sectionButton");
    layoutButton.appendChild(document.createTextNode("Estilo"));
    // dimButton.setAttribute("class", "btn btn-primary dropdown-toggle");
    layoutButton.setAttribute("type", "button");
    layoutLi.style.display = "none";
    layoutDiv.appendChild(layoutButton);

    //Largura

    var row1 = document.createElement("div");
    row1.style.display = "flex";
    var largDiv = document.createElement("div");
    largDiv.style.width = "45%";


    var widthLabel = document.createElement("label");
    widthLabel.innerHTML = "Largura:";
    largDiv.appendChild(widthLabel);
    largDiv.appendChild(document.createElement("br"));
    var widthExp = document.createElement("input");
    widthExp.setAttribute("id", "Width");
    widthExp.setAttribute("type", "number");
    widthExp.step = "1";
    widthExp.min = "1";
    widthExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    widthExp.setAttribute("class", "form-control");
    widthExp.value = indicator.style.width;
    largDiv.appendChild(widthExp);
    largDiv.appendChild(document.createElement("br"));
    row1.appendChild(largDiv);
    //Altura
    var altDiv = document.createElement("div");
    altDiv.style.width = "45%";
    altDiv.style.marginLeft = "5%";

    var heightLabel = document.createElement("label");
    heightLabel.innerHTML = "Altura:";
    altDiv.appendChild(heightLabel);
    altDiv.appendChild(document.createElement("br"));
    var heightExp = document.createElement("input");
    heightExp.setAttribute("id", "Height");
    heightExp.setAttribute("type", "number");
    heightExp.step = "1";
    heightExp.min = "1";
    heightExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    heightExp.setAttribute("class", "form-control");
    heightExp.value = indicator.style.height;
    altDiv.appendChild(heightExp);
    altDiv.appendChild(document.createElement("br"));
    row1.appendChild(altDiv);
    layoutLi.appendChild(row1);
    // X

    var row2 = document.createElement("div");
    row2.style.display = "flex";
    var xDiv = document.createElement("div");
    xDiv.style.width = "45%";

    var xLabel = document.createElement("label");
    xLabel.innerHTML = "X:";
    xDiv.appendChild(xLabel);
    xDiv.appendChild(document.createElement("br"));
    var xExp = document.createElement("input");
    xExp.setAttribute("id", "X");
    xExp.setAttribute("type", "number");
    xExp.step = "1";
    xExp.min = "1";
    xExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    xExp.setAttribute("class", "form-control");
    xExp.value = indicator.style.x;
    xDiv.appendChild(xExp);
    xDiv.appendChild(document.createElement("br"));
    row2.appendChild(xDiv);
    // Y
    var yDiv = document.createElement("div");
    yDiv.style.width = "45%";
    yDiv.style.marginLeft = "5%";

    var yLabel = document.createElement("label");
    yLabel.innerHTML = "Y:";
    yDiv.appendChild(yLabel);
    yDiv.appendChild(document.createElement("br"));
    var yExp = document.createElement("input");
    yExp.setAttribute("id", "Y");
    yExp.setAttribute("type", "number");
    yExp.step = "1";
    yExp.min = "1";
    yExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    yExp.setAttribute("class", "form-control");
    yExp.value = indicator.style.y;
    yDiv.appendChild(yExp);
    yDiv.appendChild(document.createElement("br"));
    row2.appendChild(yDiv);
    layoutLi.appendChild(row2);

    layoutLi.appendChild(document.createElement("hr"));

    //Cor de Fundo
    var row3 = document.createElement("div");
    row3.style.display = "flex";
    var cfDiv = document.createElement("div");
    cfDiv.style.width = "45%";

    var bcLabel = document.createElement("label");
    bcLabel.innerHTML = "Cor de Fundo:";
    cfDiv.appendChild(bcLabel);
    cfDiv.appendChild(document.createElement("br"));
    var bcDiv = document.createElement("div");
    bcDiv.style.display = "flex";
    var bcExp = document.createElement("input");
    bcExp.setAttribute("id", "BackgroundColor");
    bcExp.setAttribute("type", "text");
    bcExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    bcExp.setAttribute("class", "form-control");
    bcExp.value = indicator.style.backgroundColor;
    bcExp.style.width = "75%";
    bcDiv.appendChild(bcExp);

    var bctExp = document.createElement("input");
    bctExp.setAttribute("id", "BackgroundColorPicker");
    bctExp.setAttribute("type", "color");
    bctExp.setAttribute("onchange", "changeColor('BackgroundColorPicker','BackgroundColor')");
    bctExp.setAttribute("class", "form-control");
    bctExp.value = indicator.style.backgroundColor;
    bctExp.style.width = "25%";
    bcDiv.appendChild(bctExp);


    cfDiv.appendChild(bcDiv);
    cfDiv.appendChild(document.createElement("br"));
    row3.appendChild(cfDiv);
    //Cor de Texto
    var ctDiv = document.createElement("div");
    ctDiv.style.width = "45%";
    ctDiv.style.marginLeft = "5%";

    var tcLabel = document.createElement("label");
    tcLabel.innerHTML = "Cor de Texto:";
    ctDiv.appendChild(tcLabel);
    var tcDiv = document.createElement("div");
    tcDiv.style.display = "flex";
    ctDiv.appendChild(document.createElement("br"));
    var tcExp = document.createElement("input");
    tcExp.setAttribute("id", "TextColor");
    tcExp.setAttribute("type", "text");
    tcExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    tcExp.setAttribute("class", "form-control");
    tcExp.value = indicator.style.textColor;
    tcExp.style.width = "75%";
    tcDiv.appendChild(tcExp);

    var tctExp = document.createElement("input");
    tctExp.setAttribute("id", "TextColorPicker");
    tctExp.setAttribute("type", "color");
    tctExp.setAttribute("onchange", "changeColor('TextColorPicker','TextColor')");
    tctExp.setAttribute("class", "form-control");
    tctExp.value = indicator.style.textColor;
    tctExp.style.width = "25%";
    tcDiv.appendChild(tctExp);


    ctDiv.appendChild(tcDiv);
    ctDiv.appendChild(document.createElement("br"));
    row3.appendChild(ctDiv);
    layoutLi.appendChild(row3);

    // FontSize
    var row4 = document.createElement("div");
    row4.style.display = "flex";
    var fsDiv = document.createElement("div");
    fsDiv.style.width = "45%";

    var fsLabel = document.createElement("label");
    fsLabel.innerHTML = "Fonte:";
    fsDiv.appendChild(fsLabel);
    fsDiv.appendChild(document.createElement("br"));
    var fsExp = document.createElement("input");
    fsExp.setAttribute("id", "FontSize");
    fsExp.setAttribute("type", "number");
    fsExp.step = "1";
    fsExp.min = "10";
    fsExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    fsExp.setAttribute("class", "form-control");
    fsExp.value = indicator.style.fontSize;
    fsDiv.appendChild(fsExp);
    fsDiv.appendChild(document.createElement("br"));
    row4.appendChild(fsDiv);

    //Cor da Borda
    var cbDiv = document.createElement("div");
    cbDiv.style.width = "45%";
    cbDiv.style.marginLeft = "5%";

    var borcLabel = document.createElement("label");
    borcLabel.innerHTML = "Cor da Borda:";
    cbDiv.appendChild(borcLabel);
    cbDiv.appendChild(document.createElement("br"));
    var borcDiv = document.createElement("div");
    borcDiv.style.display = "flex";

    var borcExp = document.createElement("input");
    borcExp.setAttribute("id", "BorderColor");
    borcExp.setAttribute("type", "text");
    borcExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    borcExp.setAttribute("class", "form-control");
    borcExp.value = indicator.style.borderColor;
    borcExp.style.width = "75%";
    borcDiv.appendChild(borcExp);

    var borctExp = document.createElement("input");
    borctExp.setAttribute("id", "BorderColorPicker");
    borctExp.setAttribute("type", "color");
    borctExp.setAttribute("onchange", "changeColor('BorderColorPicker','BorderColor')");
    borctExp.setAttribute("class", "form-control");
    borctExp.value = indicator.style.borderColor;
    borctExp.style.width = "25%";
    borcDiv.appendChild(borctExp);

    cbDiv.appendChild(borcDiv);
    cbDiv.appendChild(document.createElement("br"));
    row4.appendChild(cbDiv);
    layoutLi.appendChild(row4);

    // Espessura da Borda
    var row5 = document.createElement("div");
    row5.style.display = "flex";
    var ebDiv = document.createElement("div");
    ebDiv.style.width = "45%";

    var bortLabel = document.createElement("label");
    bortLabel.innerHTML = "Espessura:";
    ebDiv.appendChild(bortLabel);
    ebDiv.appendChild(document.createElement("br"));
    var bortExp = document.createElement("input");
    bortExp.setAttribute("id", "BordeThickness");
    bortExp.setAttribute("type", "number");
    bortExp.step = "1";
    bortExp.min = "0";
    bortExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    bortExp.setAttribute("class", "form-control");
    bortExp.value = indicator.style.borderThickness;
    ebDiv.appendChild(bortExp);
    ebDiv.appendChild(document.createElement("br"));
    row5.appendChild(ebDiv);

    // Raio da Borda
    var rbDiv = document.createElement("div");
    rbDiv.style.width = "45%";
    rbDiv.style.marginLeft = "5%";

    var borrLabel = document.createElement("label");
    borrLabel.innerHTML = "Raio da Borda:";
    rbDiv.appendChild(borrLabel);
    rbDiv.appendChild(document.createElement("br"));
    var borrExp = document.createElement("input");
    borrExp.setAttribute("id", "BordeRadius");
    borrExp.setAttribute("type", "number");
    borrExp.step = "1";
    borrExp.min = "0";
    borrExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    borrExp.setAttribute("class", "form-control");
    borrExp.value = indicator.style.borderRadius;
    rbDiv.appendChild(borrExp);
    rbDiv.appendChild(document.createElement("br"));
    row5.appendChild(rbDiv);
    layoutLi.appendChild(row5);

    // Navigation
    var navLabel = document.createElement("label");
    navLabel.innerHTML = "Navegar Para:";
    layoutLi.appendChild(navLabel);
    layoutLi.appendChild(document.createElement("br"));
    var navExp = document.createElement("input");
    navExp.setAttribute("id", "Navigation");
    navExp.setAttribute("type", "number");
    navExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    navExp.setAttribute("class", "form-control");
    if (indicator.navigateTo == null || indicator.navigateTo == "") {
        navExp.value = "0";
    }
    else {
        navExp.value = indicator.navigateTo;
    }
    navExp.step = "1";
    navExp.min = "0";
    navExp.max = "128";
    layoutLi.appendChild(navExp);

    //Variables
    var varNameLabel = document.createElement("label");
    varNameLabel.innerHTML = "Definir Variávies (Nome):";
    layoutLi.appendChild(varNameLabel);
    var expBut2 = document.createElement("button");
    var iExp2 = document.createElement("i");
    iExp2.setAttribute("class", "fas fa-code");
    iExp2.style.color = "#21bfb2";
    iExp2.style.fontSize = "20px";
    expBut2.style.border = "none";
    expBut2.style.marginLeft = "10px";
    expBut2.appendChild(iExp2);
    expBut2.setAttribute("onclick", "ExpIndVarLabel('" + id + "')");
    layoutLi.appendChild(expBut2);
    layoutLi.appendChild(document.createElement("br"));
    var varNameExp = document.createElement("input");
    varNameExp.setAttribute("id", "SetVarsName");
    varNameExp.setAttribute("type", "text");
    varNameExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    varNameExp.setAttribute("class", "form-control");
    if (indicator.setVarsName == null) {
        varNameExp.value = "";
    }
    else {
        varNameExp.value = indicator.setVarsName;
    }

    layoutLi.appendChild(varNameExp);
    layoutLi.appendChild(document.createElement("br"));


    var varContentLabel = document.createElement("label");
    varContentLabel.innerHTML = "Definir Variávies (Valor):";
    layoutLi.appendChild(varContentLabel);
    var expBut3 = document.createElement("button");
    var iExp3 = document.createElement("i");
    iExp3.setAttribute("class", "fas fa-code");
    iExp3.style.color = "#21bfb2";
    iExp3.style.fontSize = "20px";
    expBut3.style.border = "none";
    expBut3.style.marginLeft = "10px";
    expBut3.appendChild(iExp3);
    expBut3.setAttribute("onclick", "ExpIndVarValue('" + id + "')");
    layoutLi.appendChild(expBut3);
    layoutLi.appendChild(document.createElement("br"));
    var varContentExp = document.createElement("input");
    varContentExp.setAttribute("id", "SetVarsContent");
    varContentExp.setAttribute("type", "text");
    varContentExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    varContentExp.setAttribute("class", "form-control");
    if (indicator.setVarsContent == null) {
        varContentExp.value = "";
    }
    else {
        varContentExp.value = indicator.setVarsContent;
    }

    layoutLi.appendChild(varContentExp);
    layoutLi.appendChild(document.createElement("br"));

    layoutDiv.appendChild(layoutLi);
    document.getElementById("Settings").appendChild(layoutDiv);

   
    

    document.getElementById("Settings").appendChild(document.createElement("hr"));

    var copyButton = document.createElement("button");
    copyButton.setAttribute("class", "btn btn-block btn-default btn-sm");
    copyButton.innerHTML = "Duplicar";
    copyButton.setAttribute("onclick", "copyIndicator('" + id + "')");
    document.getElementById("Settings").appendChild(copyButton);

    document.getElementById("Settings").appendChild(document.createElement("br"));

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Remover";
    deleteButton.setAttribute("class", "btn btn-block btn-danger btn-sm");
    deleteButton.setAttribute("onclick", "deleteIndicator('" + id + "')");
    document.getElementById("Settings").appendChild(deleteButton);

}


function buildGraphSettings(id,openTab) {
    var content = document.getElementById("Settings");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    var graph = reportData.config.sheets.filter(function (x) { return x.order == currentSheet })[0].graphs.filter(function (y) { return y.id == id })[0];


    //--- Geral ----
    var geralDiv = document.createElement("div");
    var geralButton = document.createElement("button");
    var geralLi = document.createElement("li");

    geralDiv.setAttribute("class", "dropdown");
    var geralButton = document.createElement("button");
    geralButton.setAttribute("onclick", "showContent(this)");
    geralButton.setAttribute("class", "sectionButton");
    geralButton.appendChild(document.createTextNode("Geral"));
    // dimButton.setAttribute("class", "btn btn-primary dropdown-toggle");
    geralButton.setAttribute("type", "button");
    if (openTab != "1" && openTab != null) {
         geralLi.style.display = "none";
    }
    geralDiv.appendChild(geralButton);

    //Nome
    var nameLabel = document.createElement("label");
    nameLabel.innerHTML = "Nome:";
    geralLi.appendChild(nameLabel);
    geralLi.appendChild(document.createElement("br"));
    var nameExp = document.createElement("input");
    nameExp.setAttribute("id", "Title");
    nameExp.setAttribute("type", "text");
    nameExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    nameExp.setAttribute("class", "form-control");
    nameExp.value = graph.title;
    geralLi.appendChild(nameExp);
    geralLi.appendChild(document.createElement("hr"));

   
        var checkExecute = document.createElement("input");
        checkExecute.setAttribute("type", "checkbox");
        checkExecute.setAttribute("id", "ExecuteMode");
        checkExecute.style.width = "16px";
        checkExecute.style.height = "16px";
        if (graph.executeMode == "1" || graph.executeMode == null) {
            checkExecute.checked = true;
        }
        checkExecute.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        geralLi.appendChild(checkExecute);
        var checkExecuteLabel = document.createElement("label");
        checkExecuteLabel.appendChild(document.createTextNode(" Executar Expressão"));
        checkExecuteLabel.style.marginLeft = "10px";
        geralLi.appendChild(checkExecuteLabel);
        geralLi.appendChild(document.createElement("hr"));
    


    var selectDFDiv = document.createElement("div");
    var selectDFLabel = document.createElement("label");
    selectDFLabel.innerHTML = "Data Frame:";

    selectDFDiv.appendChild(selectDFLabel);
    selectDFDiv.appendChild(document.createElement("br"));
    selectDFDiv.style.maxHeight = "300px";
    selectDFDiv.style.overflowY = "auto";


   


    for (var j = 0; j < reportData.dataFrames.length; j++) {
        var checkDF = document.createElement("input");
        checkDF.type = "checkbox";
        checkDF.value = reportData.dataFrames[j].name;
        checkDF.setAttribute("name", "DataFrame");
        checkDF.style.width = "16px";
        checkDF.style.height = "16px";

        if (graph.dataFrameName.includes(reportData.dataFrames[j].name)) {
            checkDF.checked = "checked";
        }
        selectDFDiv.appendChild(checkDF);
        var dfLabel = document.createElement("label");
        dfLabel.style.fontSize = "14px";
        dfLabel.style.color = "gray";
        dfLabel.style.marginLeft = "10px";

        dfLabel.append(document.createTextNode(reportData.dataFrames[j].name));
        selectDFDiv.appendChild(dfLabel);
        selectDFDiv.appendChild(document.createElement("br"));

    }

    var applyButton = document.createElement("button");
    applyButton.append(document.createTextNode("Aplicar"));
    applyButton.setAttribute("onclick", "updateGraphDataFrame('" + id + "')");
    applyButton.setAttribute("class", "btn btn-block btn-info btn-sm");
    selectDFDiv.appendChild(applyButton);
    selectDFDiv.appendChild(document.createElement("br"));


    geralLi.appendChild(selectDFDiv);
    geralLi.appendChild(document.createElement("br"));

    var ordemLabel = document.createElement("label");
    ordemLabel.innerHTML = "Ordem:";
    geralLi.appendChild(document.createElement("br"));
    for (var i = 0; i < graph.dataFrameName.length; i++) {
        var orderDfDiv = document.createElement("div");
        orderDfDiv.setAttribute("name", "dfOrder");
        var orderDfLabel = document.createElement("label");
        orderDfLabel.innerHTML = graph.dataFrameName[i];
        orderDfLabel.style.fontSize = "14px";
        orderDfLabel.style.color = "gray";
        orderDfLabel.style.width = "170px";
        orderDfDiv.appendChild(orderDfLabel);

        var orderDfDown = document.createElement("a");
        orderDfDown.style.fontSize = "16px";
        orderDfDown.setAttribute("onclick", "rebaixarDFGraph('" + graph.id + "'," + i + ")");
        var downIcon = document.createElement("i");
        downIcon.setAttribute("class", "fas fa-arrow-down");
        orderDfDown.appendChild(downIcon);
        orderDfDiv.appendChild(orderDfDown);

        var orderDfUp = document.createElement("a");
        orderDfUp.style.fontSize = "16px";
        orderDfUp.setAttribute("onclick", "promoverDFGraph('" + graph.id + "'," + i + ")");
        var upIcon = document.createElement("i");
        upIcon.setAttribute("class", "fas fa-arrow-up");
        orderDfUp.appendChild(upIcon);
        orderDfDiv.appendChild(orderDfUp);


        geralLi.appendChild(orderDfDiv);
    }

    geralDiv.appendChild(geralLi);
    document.getElementById("Settings").appendChild(geralDiv);
    

    /* <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
            Paginas
            <span class="caret"></span>
        </button>
        <ul id="sheetList" class="dropdown-menu"></ul>
    </div>*/

    //-----Dimensões------

    var dimensoesDiv = document.createElement("div");
    var dimensoesButton = document.createElement("button");
    var dimensoeslLi = document.createElement("li");

    dimensoesDiv.setAttribute("class", "dropdown");
    var dimensoesButton = document.createElement("button");
    dimensoesButton.setAttribute("class", "sectionButton");
    dimensoesButton.setAttribute("onclick", "showContent(this)");
    dimensoesButton.appendChild(document.createTextNode("Dimensões"));
    // dimButton.setAttribute("class", "btn btn-primary dropdown-toggle");
    dimensoesButton.setAttribute("type", "button");
    if (openTab != "2") {
        dimensoeslLi.style.display = "none";
    }
    
    dimensoesDiv.appendChild(dimensoesButton);

    for (var i = 0; i < graph.dimensions.length; i++) {
        var dimension = graph.dimensions[i];
        var dimDiv = document.createElement("div");
        dimDiv.setAttribute("class", "dropdown");
        var dimButton = document.createElement("button");
        dimButton.setAttribute("onclick", "showContent(this)");
       // dimButton.setAttribute("class", "btn btn-primary dropdown-toggle");
        dimButton.setAttribute("type", "button");
       // dimButton.setAttribute("data-toggle", "dropdown");
        dimButton.style.width = "250";
        dimButton.style.marginTop = "10";
        dimButton.setAttribute("class", "btn btn-block btn-secondary btn-sm");
        dimButton.appendChild(document.createTextNode(dimension.name));
        

        var orderUp = document.createElement("a");
        orderUp.style.float = "right";
        orderUp.style.marginRight = "5px";
        orderUp.style.fontSize = "16px";
        orderUp.setAttribute("onclick", "promoverDimensionGraph('" + graph.id + "'," + i + ")");
        var upIcon = document.createElement("i");
        upIcon.setAttribute("class", "fas fa-chevron-up");
        orderUp.appendChild(upIcon);
        dimButton.appendChild(orderUp);

        var orderDown = document.createElement("a");
        orderDown.style.float = "right";
        orderDown.style.marginRight = "5px";
        orderDown.style.fontSize = "16px";
        orderDown.setAttribute("onclick", "rebaixarDimensionGraph('" + graph.id + "'," + i + ")");
        var downIcon = document.createElement("i");
        downIcon.setAttribute("class", "fas fa-chevron-down");
        orderDown.appendChild(downIcon);
        dimButton.appendChild(orderDown);



        dimDiv.appendChild(dimButton);
       // var ulDim = document.createElement("ul");
        // ulDim.setAttribute("class", "dropdown-menu");
       // ulDim.style.display = "none";
        var DimNameLi = document.createElement("li");
        DimNameLi.style.display = "none";
        var dimNameLabel = document.createElement("label");
        dimNameLabel.innerHTML = "Nome:";
        DimNameLi.appendChild(dimNameLabel);
        DimNameLi.appendChild(document.createElement("br"));
        var dimNameExp = document.createElement("input");
        dimNameExp.setAttribute("id", "dimname" + dimension.id);
        dimNameExp.setAttribute("type", "text");
        dimNameExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        dimNameExp.setAttribute("class", "form-control");
        dimNameExp.value = dimension.name;
        DimNameLi.appendChild(dimNameExp);
        DimNameLi.appendChild(document.createElement("br"));
        var dimFieldLabel = document.createElement("label");
        dimFieldLabel.innerHTML = "Campo:";
        DimNameLi.appendChild(dimFieldLabel);
        DimNameLi.appendChild(document.createElement("br"));
        var dimFieldExp = document.createElement("input");
        dimFieldExp.setAttribute("id", "dimfield" + dimension.id);
        dimFieldExp.setAttribute("type", "text");
        dimFieldExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        dimFieldExp.setAttribute("class", "form-control");
        dimFieldExp.value = dimension.field;
        DimNameLi.appendChild(dimFieldExp);
        DimNameLi.appendChild(document.createElement("br"));



       // ulDim.appendChild(DimNameLi);
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Remover";
        deleteButton.setAttribute("class", "btn btn-block btn-danger btn-sm");
        deleteButton.setAttribute("onclick", "deleteDimension('" + id + "','" + dimension.id + "')");
        DimNameLi.appendChild(deleteButton);
        dimDiv.appendChild(DimNameLi);
        dimensoeslLi.appendChild(dimDiv);
        

    }

    var addDimButton = document.createElement("button");
    addDimButton.innerHTML = "Novo Campo";
    addDimButton.setAttribute("onclick", "addDimension('" + id + "')");
    addDimButton.style.width = "250";
    addDimButton.style.marginTop = "10";
    addDimButton.setAttribute("class", "btn btn-block btn-info btn-sm");
    dimensoeslLi.appendChild(addDimButton);
    dimensoeslLi.appendChild(document.createElement("br"));
    dimensoeslLi.appendChild(document.createElement("hr"));

    dimensoesDiv.appendChild(dimensoeslLi);
    document.getElementById("Settings").appendChild(dimensoesDiv);

    //-----Medidas------

    var MedidasDiv = document.createElement("div");
    var MedidasButton = document.createElement("button");
    var MedidaslLi = document.createElement("li");

    MedidasDiv.setAttribute("class", "dropdown");
    var MedidasButton = document.createElement("button");
    MedidasButton.setAttribute("onclick", "showContent(this)");
    MedidasButton.setAttribute("class", "sectionButton");
    MedidasButton.appendChild(document.createTextNode("Métricas"));
    // dimButton.setAttribute("class", "btn btn-primary dropdown-toggle");
    MedidasButton.setAttribute("type", "button");
    if (openTab != "3") {
        MedidaslLi.style.display = "none";
    }
  
    MedidasDiv.appendChild(MedidasButton);

    for (var i = 0; i < graph.measures.length; i++) {
        var measure = graph.measures[i];
        var measureDiv = document.createElement("div");
        measureDiv.setAttribute("class", "dropdown");
        var measureButton = document.createElement("button");
        measureButton.setAttribute("class", "btn btn-block btn-secondary btn-sm");
      //  measureButton.setAttribute("class", "btn btn-primary dropdown-toggle");
        measureButton.setAttribute("type", "button");
        //measureButton.setAttribute("data-toggle", "dropdown");
        measureButton.setAttribute("onclick", "showContent(this)");
        measureButton.style.width = "250";
        measureButton.style.marginTop = "10";
        measureButton.appendChild(document.createTextNode(measure.name));
        

        var orderUp = document.createElement("a");
        orderUp.style.float = "right";
        orderUp.style.marginRight = "5px";
        orderUp.style.fontSize = "16px";
        orderUp.setAttribute("onclick", "promoverMeasureGraph('" + graph.id + "'," + i + ")");
        var upIcon = document.createElement("i");
        upIcon.setAttribute("class", "fas fa-chevron-up");
        orderUp.appendChild(upIcon);
        measureButton.appendChild(orderUp);

        var orderDown = document.createElement("a");
        orderDown.style.float = "right";
        orderDown.style.marginRight = "5px";
        orderDown.style.fontSize = "16px";
        orderDown.setAttribute("onclick", "rebaixarMeasureGraph('" + graph.id + "'," + i + ")");
        var downIcon = document.createElement("i");
        downIcon.setAttribute("class", "fas fa-chevron-down");
        orderDown.appendChild(downIcon);
        measureButton.appendChild(orderDown);






        measureDiv.appendChild(measureButton);
      //  var ulMeasure = document.createElement("ul");
        //ulMeasure.style.display = "none";
       // ulMeasure.setAttribute("class", "dropdown-menu");
        var measureNameLi = document.createElement("li");
        measureNameLi.style.display = "none";
        var measureNameLabel = document.createElement("label");
        measureNameLabel.innerHTML = "Nome:";
        measureNameLi.appendChild(measureNameLabel);
        measureNameLi.appendChild(document.createElement("br"));
        

        var measureNameExp = document.createElement("input");
        measureNameExp.setAttribute("id", "measureName" + measure.id);
        measureNameExp.setAttribute("type", "text");
        measureNameExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        measureNameExp.setAttribute("class", "form-control");
        measureNameExp.value = measure.name;
        measureNameLi.appendChild(measureNameExp);
        measureNameLi.appendChild(document.createElement("br"));
        var measureFieldLabel = document.createElement("label");
        measureFieldLabel.innerHTML = "Expressão:";
        measureNameLi.appendChild(measureFieldLabel);
       // measureNameLi.appendChild(document.createElement("br"));

        var expBut = document.createElement("button");
        var iExp = document.createElement("i");
        iExp.setAttribute("class", "fas fa-code");
        iExp.style.color = "#21bfb2";
        iExp.style.fontSize = "20px";
        expBut.style.border = "none";
        expBut.style.marginLeft = "10px";
        expBut.appendChild(iExp);
        expBut.setAttribute("onclick", "ExpMeasure('" + id + "','" + measure.id + "')");
        measureNameLi.appendChild(expBut);
        var measureFieldExp = document.createElement("input");
        measureFieldExp.setAttribute("id", "measureExp" + measure.id);
        measureFieldExp.setAttribute("type", "text");
        measureFieldExp.setAttribute("class", "form-control");
        measureFieldExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
      //  measureFieldExp.style.width = "160";
       // measureFieldExp.setAttribute("class", "form-control");
        measureFieldExp.value = measure.expresion;
        measureNameLi.appendChild(measureFieldExp);
       // measureNameLi.appendChild(document.createElement("br"));

        
        var mcLabel = document.createElement("label");
        mcLabel.innerHTML = "Cor:";
        measureNameLi.appendChild(mcLabel);
        measureNameLi.appendChild(document.createElement("br"));
        var mcDiv = document.createElement("div");
        mcDiv.style.display = "flex";

        var mcExp = document.createElement("input");
        mcExp.setAttribute("id", "MeasureColor" + measure.id);
        mcExp.setAttribute("type", "text");
        mcExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        mcExp.setAttribute("class", "form-control");
        mcExp.value = measure.color;
        mcExp.style.width = "65%";
        mcDiv.appendChild(mcExp);
        var mctExp = document.createElement("input");
        mctExp.setAttribute("id", "MeasureColorPicker" + measure.id);
        mctExp.setAttribute("type", "color");
        mctExp.setAttribute("onchange", "changeColor('MeasureColorPicker" + measure.id + "','MeasureColor" + measure.id + "')");
        mctExp.setAttribute("class", "form-control");
        if (measure.color == null) measure.color = "#cccccc";
        if (measure.color.includes("#")) {
            mctExp.value = measure.color;
        }
        mctExp.style.width = "30%";
        mcExp.style.marginLeft = "3px";

        mcDiv.appendChild(mctExp);
        measureNameLi.appendChild(mcDiv);
        measureNameLi.appendChild(document.createElement("br"));



        //formato

        var selectFormatDiv = document.createElement("div");
        var selectFormatLabel = document.createElement("label");
        selectFormatLabel.innerHTML = "Formato:";


        selectFormatDiv.appendChild(selectFormatLabel);
        selectFormatDiv.appendChild(document.createElement("br"));
        var selectFormat = document.createElement("select");


        for (var j = 0; j < formatList.length; j++) {
            var selectFormatOption = document.createElement("option");
            selectFormatOption.innerHTML = formatListLabel[j];
            selectFormatOption.value = formatList[j];
            if (measure.numberFormat == formatList[j]) {
                selectFormatOption.selected = "selected";
            }
            selectFormat.appendChild(selectFormatOption);
        }
        selectFormat.setAttribute("id", "FormatMeasure" + measure.id);
        selectFormat.setAttribute("class", "form-control");
        selectFormat.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        selectFormatDiv.appendChild(selectFormat);
       
        measureNameLi.appendChild(document.createElement("br"));

        // ulMeasure.appendChild(measureNameLi);
        measureNameLi.appendChild(selectFormatDiv);
        // remover
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Remover";
        deleteButton.setAttribute("class", "btn btn-block btn-danger btn-sm");
        deleteButton.setAttribute("onclick", "deleteMeasure('" + id + "','" + measure.id + "')");
        measureNameLi.appendChild(deleteButton);
        measureDiv.appendChild(measureNameLi);
        MedidaslLi.appendChild(measureDiv);
    }

    var addMeasureButton = document.createElement("button");
    addMeasureButton.innerHTML = "Nova Medida";
    addMeasureButton.setAttribute("onclick", "addMeasure('" + id + "')");
    addMeasureButton.style.width = "250";
    addMeasureButton.style.marginTop = "10";
    addMeasureButton.setAttribute("class", "btn btn-block btn-info btn-sm");
    MedidaslLi.appendChild(addMeasureButton);
    MedidaslLi.appendChild(document.createElement("br"));

    MedidasDiv.appendChild(MedidaslLi);
    document.getElementById("Settings").appendChild(MedidasDiv);

    //-----Layout------

    var LayoutDiv = document.createElement("div");
    var LayoutButton = document.createElement("button");
    var LayoutLi = document.createElement("li");

    LayoutDiv.setAttribute("class", "dropdown");
    var LayoutButton = document.createElement("button");
    LayoutButton.setAttribute("onclick", "showContent(this)");
    LayoutButton.setAttribute("class", "sectionButton");
    LayoutButton.appendChild(document.createTextNode("Estilo"));
    // dimButton.setAttribute("class", "btn btn-primary dropdown-toggle");
    LayoutButton.setAttribute("type", "button");
    if (openTab != "4") {
        LayoutLi.style.display = "none";
    }
   
    LayoutDiv.appendChild(LayoutButton);


    //Largura
    var row1 = document.createElement("div");
    row1.style.display = "flex";
    var largDiv = document.createElement("div");
    largDiv.style.width = "45%";

    var widthLabel = document.createElement("label");
    widthLabel.innerHTML = "Largura:";
    largDiv.appendChild(widthLabel);
    largDiv.appendChild(document.createElement("br"));
    var widthExp = document.createElement("input");
    widthExp.setAttribute("id", "Width");
    widthExp.setAttribute("type", "number");
    widthExp.step = "1";
    widthExp.min = "1";
    widthExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    widthExp.setAttribute("class", "form-control");
    widthExp.value = graph.style.width;
    largDiv.appendChild(widthExp);
    largDiv.appendChild(document.createElement("br"));
    row1.appendChild(largDiv);
    //Altura
    var alturaDiv = document.createElement("div");
    alturaDiv.style.width = "45%";
    alturaDiv.style.marginLeft = "5%";

    var heightLabel = document.createElement("label");
    heightLabel.innerHTML = "Altura:";
    alturaDiv.appendChild(heightLabel);
    alturaDiv.appendChild(document.createElement("br"));
    var heightExp = document.createElement("input");
    heightExp.setAttribute("id", "Height");
    heightExp.setAttribute("type", "number");
    heightExp.step = "1";
    heightExp.min = "1";
    heightExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    heightExp.setAttribute("class", "form-control");
    heightExp.value = graph.style.height;
    alturaDiv.appendChild(heightExp);
    alturaDiv.appendChild(document.createElement("br"));
    row1.appendChild(alturaDiv);
    LayoutLi.appendChild(row1);
    // X
    var row2 = document.createElement("div");
    row2.style.display = "flex";
    var xDiv = document.createElement("div");
    xDiv.style.width = "45%";

    var xLabel = document.createElement("label");
    xLabel.innerHTML = "X:";
    xDiv.appendChild(xLabel);
    xDiv.appendChild(document.createElement("br"));
    var xExp = document.createElement("input");
    xExp.setAttribute("id", "X");
    xExp.setAttribute("type", "number");
    xExp.step = "1";
    xExp.min = "1";
    xExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    xExp.setAttribute("class", "form-control");
    xExp.value = graph.style.x;
    xDiv.appendChild(xExp);
    xDiv.appendChild(document.createElement("br"));
    row2.appendChild(xDiv);
    // Y
    var yDiv = document.createElement("div");
    yDiv.style.width = "45%";
    yDiv.style.marginLeft = "5%";

    var yLabel = document.createElement("label");
    yLabel.innerHTML = "Y:";
    yDiv.appendChild(yLabel);
    yDiv.appendChild(document.createElement("br"));
    var yExp = document.createElement("input");
    yExp.setAttribute("id", "Y");
    yExp.setAttribute("type", "number");
    yExp.step = "1";
    yExp.min = "1";
    yExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    yExp.setAttribute("class", "form-control");
    yExp.value = graph.style.y;
    yDiv.appendChild(yExp);
    yDiv.appendChild(document.createElement("br"));
    row2.appendChild(yDiv);
    LayoutLi.appendChild(row2);

    // BackgroundColor
    


    var bcLabel = document.createElement("label");
    bcLabel.innerHTML = "Cor de Fundo:";
    LayoutLi.appendChild(bcLabel);
    LayoutLi.appendChild(document.createElement("br"));
    var bcDiv = document.createElement("div");
    bcDiv.style.display = "flex";

    var bcExp = document.createElement("input");
    bcExp.setAttribute("id", "BackgroundColor");
    bcExp.setAttribute("type", "text");
    bcExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    bcExp.setAttribute("class", "form-control");
    if (graph.style.backgroundColor == null || graph.style.backgroundColor == "") {
        bcExp.value = "#ffffff";
    }
    else {
        bcExp.value = graph.style.backgroundColor;
    }

    bcExp.style.width = "65%";
    bcDiv.appendChild(bcExp);

    var bctExp = document.createElement("input");
    bctExp.setAttribute("id", "BackgroundColorPicker");
    bctExp.setAttribute("type", "color");
    bctExp.setAttribute("onchange", "changeColor('BackgroundColorPicker','BackgroundColor')");
    bctExp.setAttribute("class", "form-control");
    if (graph.style.backgroundColor == null || graph.style.backgroundColor == "") {
        bctExp.value = "#ffffff";
    }
    else {
        bctExp.value = graph.style.backgroundColor;
    }
    bctExp.style.width = "30%";
    bctExp.style.marginLeft = "3px";
    bcDiv.appendChild(bctExp);

    LayoutLi.appendChild(bcDiv);
    LayoutLi.appendChild(document.createElement("br"));

    // ColorList
    var clLabel = document.createElement("label");
    clLabel.innerHTML = "Palheta de Cores:";
    LayoutLi.appendChild(clLabel);
    LayoutLi.appendChild(document.createElement("br"));
    var clExp = document.createElement("input");
    clExp.setAttribute("id", "ColorList");
    clExp.setAttribute("type", "text");
    clExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    clExp.setAttribute("class", "form-control");
    if (graph.style.colorList == null) {
        clExp.value = "";
    }
    else {
        clExp.value = graph.style.colorList;
    }
    
    LayoutLi.appendChild(clExp);
    LayoutLi.appendChild(document.createElement("br"));


    if (['map'].includes(graph.objectType)) {
        var regionLabel = document.createElement("label");
        regionLabel.innerHTML = "Região:";
        LayoutLi.appendChild(regionLabel);
        LayoutLi.appendChild(document.createElement("br"));
        var regionExp = document.createElement("input");
        regionExp.setAttribute("id", "Region");
        regionExp.setAttribute("type", "text");
        regionExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        regionExp.setAttribute("class", "form-control");
        if (graph.style.region != null) {
            regionExp.value = graph.style.region;
        }
        LayoutLi.appendChild(regionExp);
        LayoutLi.appendChild(document.createElement("br"));
    }
    
    if (['bar'].includes(graph.objectType)) {
        LayoutLi.appendChild(document.createElement("hr"));
        var selectOrientationDiv = document.createElement("div");
        var selectOrientationLabel = document.createElement("label");
        selectOrientationLabel.innerHTML = "Orientação";

        selectOrientationDiv.appendChild(selectOrientationLabel);
        selectOrientationDiv.appendChild(document.createElement("br"));
        var selectOrientation = document.createElement("select");
        for (var i = 0; i < Orientacoes.length; i++) {
            var selectOrientationOption = document.createElement("option");
            selectOrientationOption.innerHTML = OrientacoesLabel[i];
            selectOrientationOption.value = Orientacoes[i];
            if (graph.style.orientation == Orientacoes[i]) {
                selectOrientationOption.selected = "selected";
            }
            selectOrientation.appendChild(selectOrientationOption);
        }
        selectOrientation.setAttribute("id", "Orientation");
        selectOrientation.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        selectOrientation.setAttribute("class", "form-control");
        selectOrientationDiv.appendChild(selectOrientation);
        LayoutLi.appendChild(selectOrientationDiv);
        LayoutLi.appendChild(document.createElement("br"));

       
       
        var checkstack = document.createElement("input");
        checkstack.type = "checkbox";
        checkstack.id = "Stack";
        if (graph.style.stack == true) {
            checkstack.checked = "checked";
        }
        checkstack.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        checkstack.style.width = "16px";
        checkstack.style.height = "16px";
        LayoutLi.appendChild(checkstack);

        var checkstackLabel = document.createElement("label");
        checkstackLabel.style.marginLeft = "10px";
        checkstackLabel.innerHTML = " Empilhar";
        LayoutLi.appendChild(checkstackLabel);

    }
    LayoutLi.appendChild(document.createElement("hr"));

    var selectSortDiv = document.createElement("div");
    var selectSortLabel = document.createElement("label");
    selectSortLabel.innerHTML = "Eixo:";

    selectSortDiv.appendChild(selectSortLabel);
    selectSortDiv.appendChild(document.createElement("br"));
    var selectSort = document.createElement("select");
    for (var i = 0; i < SortAxis.length; i++) {
        var selectSortOption = document.createElement("option");
        selectSortOption.innerHTML = SortAxisLabel[i];
        selectSortOption.value = SortAxis[i];
        if (graph.sort == null) {
            graph.sort = { field: "0", type: 'numerico',axis:'dim' };
        }
        if (graph.sort.axis == SortAxis[i]) {
            selectSortOption.selected = "selected";
        }
        selectSort.appendChild(selectSortOption);
    }



    selectSort.setAttribute("id", "SortAxis");
    selectSort.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    selectSort.setAttribute("class", "form-control");
    selectSortDiv.appendChild(selectSort);
    LayoutLi.appendChild(selectSortDiv);
    LayoutLi.appendChild(document.createElement("br"));

    var selectSortTypeDiv = document.createElement("div");
    var selectSortTypeLabel = document.createElement("label");
    selectSortTypeLabel.innerHTML = "Tipo:";

    selectSortTypeDiv.appendChild(selectSortTypeLabel);
    selectSortTypeDiv.appendChild(document.createElement("br"));
    var selectSortType = document.createElement("select");
    for (var i = 0; i < SortTypes.length; i++) {
        var selectSortTypeOption = document.createElement("option");
        selectSortTypeOption.innerHTML = SortTypesLabel[i];
        selectSortTypeOption.value = SortTypes[i];
        if (graph.sort == null) {
            graph.sort = { field: "0",type:'numerico' };
        }
        if (graph.sort.type == SortTypes[i]) {
            selectSortTypeOption.selected = "selected";
        }
        selectSortType.appendChild(selectSortTypeOption);
    }
    

    selectSortType.setAttribute("id", "SortType");
    selectSortType.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    selectSortType.setAttribute("class", "form-control");
    selectSortTypeDiv.appendChild(selectSortType);
    LayoutLi.appendChild(selectSortTypeDiv);
    LayoutLi.appendChild(document.createElement("br"));

    var selectSortOptionDiv = document.createElement("div");
    var selectSortOptionLabel = document.createElement("label");
    selectSortOptionLabel.innerHTML = "Opção:";

    selectSortOptionDiv.appendChild(selectSortOptionLabel);
    selectSortOptionDiv.appendChild(document.createElement("br"));
    var selectSortOption = document.createElement("select");
    for (var i = 0; i < SortOptions.length; i++) {
        var selectSortOptionOption = document.createElement("option");
        selectSortOptionOption.innerHTML = SortOptionsLabel[i];
        selectSortOptionOption.value = SortOptions[i];
        if (graph.sort == null) {
            graph.sort = { field: "0", type: 'numerico', option: 'none' };
        }
        if (graph.sort.option == SortOptions[i]) {
            selectSortOptionOption.selected = "selected";
        }
        selectSortOption.appendChild(selectSortOptionOption);
    }


    selectSortOption.setAttribute("id", "SortOption");
    selectSortOption.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    selectSortOption.setAttribute("class", "form-control");
    selectSortOptionDiv.appendChild(selectSortOption);
    LayoutLi.appendChild(selectSortOptionDiv);
    LayoutLi.appendChild(document.createElement("br"));

    LayoutDiv.appendChild(LayoutLi);
    document.getElementById("Settings").appendChild(LayoutDiv);

   

    document.getElementById("Settings").appendChild(document.createElement("hr"));

    var copyButton = document.createElement("button");
    copyButton.setAttribute("class", "btn btn-block btn-default btn-sm");
    copyButton.innerHTML = "Duplicar";
    copyButton.setAttribute("onclick", "copyGraph('" + id + "')");
    document.getElementById("Settings").appendChild(copyButton);

    document.getElementById("Settings").appendChild(document.createElement("br"));

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn btn-block btn-danger btn-sm");
    deleteButton.innerHTML = "Remover";
    deleteButton.setAttribute("onclick", "deleteGraph('" + id + "')");
    document.getElementById("Settings").appendChild(deleteButton);
}


function addDimension(graphId) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(graphId);

    var dimension = {};
    dimension["id"] = Date.now().toString();
    dimension["name"] = "";
    dimension["field"] = "";

    reportData.config.sheets[sheetPos].graphs[graphPos].dimensions.push(dimension);
    buildGraphSettings(graphId,"2");


}

function deleteDimension(graphId, dimId) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(graphId);
    var dimPos = reportData.config.sheets[sheetPos].graphs[graphPos].dimensions.map(function (e) { return e.id; }).indexOf(dimId);
    reportData.config.sheets[sheetPos].graphs[graphPos].dimensions.splice(dimPos, 1);
    buildGraphSettings(graphId,"2");
}

function addMeasure(graphId) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(graphId);

    var measure = {};
    measure["id"] = Date.now().toString();
    measure["name"] = "";
    measure["expresion"] = "";

    reportData.config.sheets[sheetPos].graphs[graphPos].measures.push(measure);
    buildGraphSettings(graphId,"3");
}

function deleteMeasure(graphId, measureId) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(graphId);
    var measurePos = reportData.config.sheets[sheetPos].graphs[graphPos].measures.map(function (e) { return e.id; }).indexOf(measureId);
    reportData.config.sheets[sheetPos].graphs[graphPos].measures.splice(measurePos, 1);
    buildGraphSettings(graphId,"3");
}

function deleteIndicator(id) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var indicatorPos = reportData.config.sheets[sheetPos].indicators.map(function (e) { return e.id; }).indexOf(id);
    reportData.config.sheets[sheetPos].indicators.splice(indicatorPos, 1);
    eraseSettings();
    reloadSheet();
    setObjEvents();
}

function deleteTextBlock(id) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var textBlockPos = reportData.config.sheets[sheetPos].textBlocks.map(function (e) { return e.id; }).indexOf(id);
    reportData.config.sheets[sheetPos].textBlocks.splice(textBlockPos, 1);
    eraseSettings();
    reloadSheet();
    setObjEvents();
}

function deleteVarInput(id) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var varInputPos = reportData.config.sheets[sheetPos].variableInputs.map(function (e) { return e.id; }).indexOf(id);
    reportData.config.sheets[sheetPos].variableInputs.splice(varInputPos, 1);
    eraseSettings();
    reloadSheet();
    setObjEvents();
}

function deleteGraph(id) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(id);
    reportData.config.sheets[sheetPos].graphs.splice(graphPos, 1);
    eraseSettings();
    reloadSheet();
    setObjEvents();
}



function eraseSettings() {
    var content = document.getElementById("Settings");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

function buildSheetSettings(id) {
    eraseSettings();
    var sheet = reportData.config.sheets.filter(function (x) { return x.id == id })[0];

    changeSheet(sheet.order);

    var nameLabel = document.createElement("label");
    nameLabel.innerHTML = "Nome:";
    document.getElementById("Settings").appendChild(nameLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var nameExp = document.createElement("input");
    nameExp.setAttribute("id", "sheetName");
    nameExp.setAttribute("type", "text");
    nameExp.setAttribute("onchange", "updateSheetConfig('" + id + "')");
    nameExp.setAttribute("class", "form-control");
    nameExp.value = sheet.name;
    document.getElementById("Settings").appendChild(nameExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    // BackgroundColor
    var bcLabel = document.createElement("label");
    bcLabel.innerHTML = "Cor de Fundo:";
    document.getElementById("Settings").appendChild(bcLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var bcExp = document.createElement("input");
    bcExp.setAttribute("id", "BackgroundColor");
    bcExp.setAttribute("type", "color");
    bcExp.setAttribute("onchange", "updateSheetConfig('" + id + "')");
    bcExp.setAttribute("class", "form-control");
    if (sheet.style == null) {
        sheet.style = {};
    }
    if (sheet.style.backgroundColor == null || sheet.style.backgroundColor == "") {
        bcExp.value = "#ffffff";
    }
    else {
        bcExp.value = sheet.style.backgroundColor;
    }

    document.getElementById("Settings").appendChild(bcExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    var copyButton = document.createElement("button");
    copyButton.setAttribute("class", "btn btn-block btn-default btn-sm");
    copyButton.innerHTML = "Duplicar";
    copyButton.setAttribute("onclick", "copySheet('" + id + "')");
    document.getElementById("Settings").appendChild(copyButton);

    document.getElementById("Settings").appendChild(document.createElement("br"));

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn btn-block btn-danger btn-sm");
    deleteButton.setAttribute("onclick", "deleteSheet('" + id + "')");
    deleteButton.innerHTML = "Remover";
    document.getElementById("Settings").appendChild(deleteButton);
}

function deleteSheet(id) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.id; }).indexOf(id);
    var ordem = reportData.config.sheets[sheetPos].order;
    var downsideSheets = reportData.config.sheets.filter(function (x) { return x.order > ordem });
    for (var i = 0; i < downsideSheets.length; i++) {
        var Pos = reportData.config.sheets.map(function (e) { return e.id; }).indexOf(downsideSheets[i].id);
        reportData.config.sheets[Pos].order = (parseInt(reportData.config.sheets[Pos].order) - 1).toString();
    }
   
    reportData.config.sheets.splice(sheetPos, 1);
    eraseSettings();
    buildSheetMenu();
    var graphs = document.getElementById("Graphs");
    while (graphs.firstChild) {
        graphs.removeChild(graphs.lastChild);
    }
   
}

function buildFilterSettings() {
    eraseSettings();
    var filters = reportData.config.sheets.filter(function (x) { return x.order == currentSheet })[0].filters;
    var fLenght;
    if (filters == null) {
        fLenght = 0;
    }
    else {
        fLenght = filters.length;
    }
    for (var i = 0; i < fLenght; i++) {
      
        var filter = filters[i];
        var filterDiv = document.createElement("div");
        filterDiv.setAttribute("class", "dropdown");
        var filterButton = document.createElement("button");
        filterButton.setAttribute("onclick", "showContent(this)");
       // filterButton.setAttribute("class", "btn btn-primary dropdown-toggle");
        filterButton.style.width = "250";
        filterButton.style.marginTop = "10";
        filterButton.setAttribute("class", "btn btn-block btn-secondary btn-sm");
        filterButton.setAttribute("type", "button");
      //  filterButton.setAttribute("data-toggle", "dropdown");
        filterButton.appendChild(document.createTextNode(filter.dimension.name));

        var orderUp = document.createElement("a");
        orderUp.style.float = "right";
        orderUp.style.marginRight = "5px";
        orderUp.style.fontSize = "16px";
        orderUp.setAttribute("onclick", "promoverFilter(" + i + ")");
        var upIcon = document.createElement("i");
        upIcon.setAttribute("class", "fas fa-chevron-up");
        orderUp.appendChild(upIcon);
        filterButton.appendChild(orderUp);

        var orderDown = document.createElement("a");
        orderDown.style.float = "right";
        orderDown.style.marginRight = "5px";
        orderDown.style.fontSize = "16px";
        orderDown.setAttribute("onclick", "rebaixarFilter(" + i + ")");
        var downIcon = document.createElement("i");
        downIcon.setAttribute("class", "fas fa-chevron-down");
        orderDown.appendChild(downIcon);
        filterButton.appendChild(orderDown);


        filterDiv.appendChild(filterButton);
        var ulFilter = document.createElement("ul");
        ulFilter.style.display = "none";
     //   ulFilter.setAttribute("class", "dropdown-menu");

        var selectDFDiv = document.createElement("div");
        var selectDFLabel = document.createElement("label");
        selectDFLabel.innerHTML = "Data Frame:";


        selectDFDiv.appendChild(selectDFLabel);
        selectDFDiv.appendChild(document.createElement("br"));
        //
       
        
        //

        for (var j = 0; j < reportData.dataFrames.length; j++) {
            var checkDF = document.createElement("input");
            checkDF.type = "checkbox";
            checkDF.value = reportData.dataFrames[j].name;
            checkDF.setAttribute("name", "DataFrame" + filter.id);
         
            if (filter.dataFrameName.includes(reportData.dataFrames[j].name)) {
                checkDF.checked = "checked";
            }
            selectDFDiv.appendChild(checkDF);
            var dfLabel = document.createElement("label");
            dfLabel.append(document.createTextNode(reportData.dataFrames[j].name));
            selectDFDiv.appendChild(dfLabel);
            selectDFDiv.appendChild(document.createElement("br"));

        }

        

        ulFilter.appendChild(selectDFDiv);
        ulFilter.appendChild(document.createElement("br"));


        var filterNameLi = document.createElement("li");
        var filterNameLabel = document.createElement("label");
        filterNameLabel.innerHTML = "Nome:";
        filterNameLi.appendChild(filterNameLabel);
        filterNameLi.appendChild(document.createElement("br"));
        var filterNameExp = document.createElement("input");
        filterNameExp.setAttribute("id", "filterName" + filter.id);
        filterNameExp.setAttribute("type", "text");
        //filterNameExp.setAttribute("onchange", "updateFilterConfig('" + filter.id + "')");
        filterNameExp.setAttribute("class", "form-control");
        filterNameExp.value = filter.dimension.name;
        filterNameLi.appendChild(filterNameExp);
        filterNameLi.appendChild(document.createElement("br"));
        var filterFieldLabel = document.createElement("label");
        filterFieldLabel.innerHTML = "Campo:";
        filterNameLi.appendChild(filterFieldLabel);
        filterNameLi.appendChild(document.createElement("br"));
        var filterFieldExp = document.createElement("input");
        filterFieldExp.setAttribute("id", "filterField" + filter.id);
        filterFieldExp.setAttribute("type", "text");
        //filterFieldExp.setAttribute("onchange", "updateFilterConfig('" + filter.id + "')");
        filterFieldExp.setAttribute("class", "form-control");
        filterFieldExp.value = filter.dimension.field;
        filterNameLi.appendChild(filterFieldExp);
        filterNameLi.appendChild(document.createElement("br"));

        var filterDValuesLabel = document.createElement("label");
        filterDValuesLabel.innerHTML = "Valores Iniciais:";
        filterNameLi.appendChild(filterDValuesLabel);
        filterNameLi.appendChild(document.createElement("br"));
        var filterDValuesExp = document.createElement("input");
        filterDValuesExp.setAttribute("id", "filterDValues" + filter.id);
        filterDValuesExp.setAttribute("type", "text");
        //filterFieldExp.setAttribute("onchange", "updateFilterConfig('" + filter.id + "')");
        filterDValuesExp.setAttribute("class", "form-control");
        if (filter.defaultValues == null) {
            filterDValuesExp.value = "";
        }
        else {
            filterDValuesExp.value = filter.defaultValues;
        }
        
        filterNameLi.appendChild(filterDValuesExp);
        filterNameLi.appendChild(document.createElement("br"));



        ulFilter.appendChild(filterNameLi);

        var applyButton = document.createElement("button");
        applyButton.append(document.createTextNode("Aplicar"));
        applyButton.setAttribute("class", "btn btn-block btn-info btn-sm");
        applyButton.setAttribute("onclick", "updateFilterConfig('" + filter.id + "')");
        ulFilter.appendChild(applyButton);
        ulFilter.appendChild(document.createElement("br"));


        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Remover";
        deleteButton.setAttribute("class", "btn btn-block btn-danger btn-sm");
        deleteButton.setAttribute("onclick", "deleteFilter('" + filter.id + "')");
        ulFilter.appendChild(deleteButton);
        filterDiv.appendChild(ulFilter);
        document.getElementById("Settings").appendChild(filterDiv);
    }

    var addfilterButton = document.createElement("button");
    addfilterButton.innerHTML = "Novo Filtro";
    addfilterButton.setAttribute("onclick", "addFilter()");
    addfilterButton.style.width = "250";
    addfilterButton.style.marginTop = "10";
    addfilterButton.setAttribute("class", "btn btn-block btn-info btn-sm");
    document.getElementById("Settings").appendChild(addfilterButton);
    document.getElementById("Settings").appendChild(document.createElement("br"));

}

function deleteFilter(id) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var filterPos = reportData.config.sheets[sheetPos].filters.map(function (e) { return e.id; }).indexOf(id);
    reportData.config.sheets[sheetPos].filters.splice(filterPos, 1);
    eraseSettings();
    buildFilterSettings();
    
}

function addFilter() {

    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
   

    var filter = {};
    filter["id"] = Date.now().toString();
    filter["style"] = {};
    filter["dataFrameName"] = [];
    filter["multiValue"] = true;
    var dimension = {};
    dimension["id"] = Date.now().toString();
    dimension["name"] = "";
    dimension["field"] = "";

    filter["dimension"] = dimension;
    if (reportData.config.sheets[sheetPos].filters == null) {
        reportData.config.sheets[sheetPos].filters = [];
    }
    reportData.config.sheets[sheetPos].filters.push(filter);
    buildFilterSettings();
}

function addVar() {
    var _var = {};
    _var["id"] = Date.now().toString();
   
    _var["name"] = "";
    _var["content"] = "";

    reportData.config.variablePool.push(_var);
    buildVariableSettings();
}

function deleteVar(id) {

    var varPos = reportData.config.variablePool.map(function (e) { return e.id; }).indexOf(id);
    reportData.config.variablePool.splice(varPos, 1);
    eraseSettings();
    buildVariableSettings();
}

function deleteOdagFilter(name) {

    var filterPos = reportData.config.odag.odagFields.map(function (e) { return e.name; }).indexOf(name);
    reportData.config.odag.odagFields.splice(filterPos, 1);
    eraseSettings();
    buildOdagSettings();

}

function addOdagFilter() {

   


    var odagField = {};
    odagField["name"] = "Novo Filtro";
    odagField["field"] = "";
    odagField["dataFrames"] = [];
    odagField["maxvalues"] = 1;

    if (reportData.config.odag.odagFields == null) {
        reportData.config.odag.odagFields = [];
    }

    reportData.config.odag.odagFields.push(odagField);
    buildOdagSettings();
}

function showContent(obj) {
    obj.classList.toggle("active");
    var content = obj.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function rebaixarDF(id,order) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var indicatorPos = reportData.config.sheets[sheetPos].indicators.map(function (e) { return e.id; }).indexOf(id);
    if (reportData.config.sheets[sheetPos].indicators[indicatorPos].dataFrameName.length - 1 > order) {
        var temp = reportData.config.sheets[sheetPos].indicators[indicatorPos].dataFrameName[order + 1];
        reportData.config.sheets[sheetPos].indicators[indicatorPos].dataFrameName[order + 1] = reportData.config.sheets[sheetPos].indicators[indicatorPos].dataFrameName[order];
        reportData.config.sheets[sheetPos].indicators[indicatorPos].dataFrameName[order] = temp;
        loadUsingDataFrames();
        updateIndicatorConfig(id);
        buildIndicatorSettings(id);
    }
}

function promoverDF(id, order) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var indicatorPos = reportData.config.sheets[sheetPos].indicators.map(function (e) { return e.id; }).indexOf(id);
    if (order > 0) {
       
        var temp = reportData.config.sheets[sheetPos].indicators[indicatorPos].dataFrameName[order - 1];
        reportData.config.sheets[sheetPos].indicators[indicatorPos].dataFrameName[order - 1] = reportData.config.sheets[sheetPos].indicators[indicatorPos].dataFrameName[order];
        reportData.config.sheets[sheetPos].indicators[indicatorPos].dataFrameName[order] = temp;
        loadUsingDataFrames();
        updateIndicatorConfig(id);
        buildIndicatorSettings(id);
    }
}

function rebaixarDFGraph(id, order) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(id);
    if (reportData.config.sheets[sheetPos].graphs[graphPos].dataFrameName.length - 1 > order) {
        var temp = reportData.config.sheets[sheetPos].graphs[graphPos].dataFrameName[order + 1];
        reportData.config.sheets[sheetPos].graphs[graphPos].dataFrameName[order + 1] = reportData.config.sheets[sheetPos].graphs[graphPos].dataFrameName[order];
        reportData.config.sheets[sheetPos].graphs[graphPos].dataFrameName[order] = temp;
        loadUsingDataFrames();
        updateGraphConfig(id);
        buildGraphSettings(id);
    }
}

function promoverDFGraph(id, order) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(id);
    if (order > 0) {

        var temp = reportData.config.sheets[sheetPos].graphs[graphPos].dataFrameName[order - 1];
        reportData.config.sheets[sheetPos].graphs[graphPos].dataFrameName[order - 1] = reportData.config.sheets[sheetPos].graphs[graphPos].dataFrameName[order];
        reportData.config.sheets[sheetPos].graphs[graphPos].dataFrameName[order] = temp;
        loadUsingDataFrames();
        updateGraphConfig(id);
        buildGraphSettings(id);
    }
}

function rebaixarMeasureGraph(id, order) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(id);
    if (reportData.config.sheets[sheetPos].graphs[graphPos].measures.length - 1 > order) {
        var temp = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].graphs[graphPos].measures[order + 1]));
        reportData.config.sheets[sheetPos].graphs[graphPos].measures[order + 1] = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].graphs[graphPos].measures[order]));
        reportData.config.sheets[sheetPos].graphs[graphPos].measures[order] = temp;
        updateGraphConfig(id);
        buildGraphSettings(id,"3");
    }
}

function promoverMeasureGraph(id, order) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(id);
    if (order > 0) {
        var temp = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].graphs[graphPos].measures[order - 1]));
        reportData.config.sheets[sheetPos].graphs[graphPos].measures[order - 1] = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].graphs[graphPos].measures[order]));
        reportData.config.sheets[sheetPos].graphs[graphPos].measures[order] = temp;
        updateGraphConfig(id);
        buildGraphSettings(id, "3");
    }
}

function rebaixarDimensionGraph(id, order) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(id);
    if (reportData.config.sheets[sheetPos].graphs[graphPos].dimensions.length - 1 > order) {
        var temp = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].graphs[graphPos].dimensions[order + 1]));
        reportData.config.sheets[sheetPos].graphs[graphPos].dimensions[order + 1] = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].graphs[graphPos].dimensions[order]));
        reportData.config.sheets[sheetPos].graphs[graphPos].dimensions[order] = temp;
        updateGraphConfig(id);
        buildGraphSettings(id, "2");
    }
}

function promoverDimensionGraph(id, order) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(id);
    if (order > 0) {
        var temp = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].graphs[graphPos].dimensions[order - 1]));
        reportData.config.sheets[sheetPos].graphs[graphPos].dimensions[order - 1] = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].graphs[graphPos].dimensions[order]));
        reportData.config.sheets[sheetPos].graphs[graphPos].dimensions[order] = temp;
        updateGraphConfig(id);
        buildGraphSettings(id, "2");
    }
}



function rebaixarFilter(order) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    if (reportData.config.sheets[sheetPos].filters.length - 1 > order) {
        var temp = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].filters[order + 1]));
        reportData.config.sheets[sheetPos].filters[order + 1] = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].filters[order]));
        reportData.config.sheets[sheetPos].filters[order] = temp;

        buildFilterSettings();
    }
}

function promoverOdagFilter(order) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    if (order > 0) {
        var temp = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].filters[order - 1]));
        reportData.config.sheets[sheetPos].filters[order - 1] = JSON.parse(JSON.stringify(reportData.config.sheets[sheetPos].filters[order]));
        reportData.config.sheets[sheetPos].filters[order] = temp;

        buildFilterSettings();
    }
}

function rebaixarOdagFilter(order) {

    if (reportData.config.odag.odagFields.length - 1 > order) {
        var temp = JSON.parse(JSON.stringify(reportData.config.odag.odagFields[order + 1]));
        reportData.config.odag.odagFields[order + 1] = JSON.parse(JSON.stringify(reportData.config.odag.odagFields[order]));
        reportData.config.odag.odagFields[order] = temp;

        buildOdagSettings();
    }
}

function promoverFilter(order) {
    
    if (order > 0) {
        var temp = JSON.parse(JSON.stringify(reportData.config.odag.odagFields[order - 1]));
        reportData.config.odag.odagFields[order - 1] = JSON.parse(JSON.stringify(reportData.config.odag.odagFields[order]));
        reportData.config.odag.odagFields[order] = temp;

        buildOdagSettings();
    }
}


function buildOdagSettings() {
    eraseSettings();
    if (reportData.config.odag == null) {
        var odag = { active: false, odagFields: [] };
        reportData.config.odag = odag;
    }

    var checkActive = document.createElement("input");
    checkActive.type = "checkbox";
    checkActive.style.fontSize = "18px";
   
    checkActive.setAttribute("id", "OdagActive");
    checkActive.setAttribute("onchange","setOdagActive()");

    if (reportData.config.odag.active) {
        checkActive.checked = "checked";
    }

    var chackActiveLabel = document.createElement("label");
    chackActiveLabel.appendChild(document.createTextNode("ODAG Habilitado"));
    chackActiveLabel.style.marginLeft = "6px";

    document.getElementById("Settings").appendChild(checkActive);
    document.getElementById("Settings").appendChild(chackActiveLabel);
    document.getElementById("Settings").appendChild(document.createElement("hr"));


    var filters = reportData.config.odag.odagFields;
    var fLenght;
    if (filters == null) {
        fLenght = 0;
    }
    else {
        fLenght = filters.length;
    }
    for (var i = 0; i < fLenght; i++) {

        var filter = filters[i];
        var filterDiv = document.createElement("div");
        filterDiv.setAttribute("class", "dropdown");
        var filterButton = document.createElement("button");
        filterButton.setAttribute("onclick", "showContent(this)");
        // filterButton.setAttribute("class", "btn btn-primary dropdown-toggle");
        filterButton.style.width = "250";
        filterButton.style.marginTop = "10";
        filterButton.setAttribute("class", "btn btn-block btn-secondary btn-sm");
        filterButton.setAttribute("type", "button");
        //  filterButton.setAttribute("data-toggle", "dropdown");
        filterButton.appendChild(document.createTextNode(filter.name));

        var orderUp = document.createElement("a");
        orderUp.style.float = "right";
        orderUp.style.marginRight = "5px";
        orderUp.style.fontSize = "16px";
        orderUp.setAttribute("onclick", "promoverOdagFilter(" + i + ")");
        var upIcon = document.createElement("i");
        upIcon.setAttribute("class", "fas fa-chevron-up");
        orderUp.appendChild(upIcon);
        filterButton.appendChild(orderUp);

        var orderDown = document.createElement("a");
        orderDown.style.float = "right";
        orderDown.style.marginRight = "5px";
        orderDown.style.fontSize = "16px";
        orderDown.setAttribute("onclick", "rebaixarOdagFilter(" + i + ")");
        var downIcon = document.createElement("i");
        downIcon.setAttribute("class", "fas fa-chevron-down");
        orderDown.appendChild(downIcon);
        filterButton.appendChild(orderDown);


        filterDiv.appendChild(filterButton);
        var ulFilter = document.createElement("ul");
        ulFilter.style.display = "none";
        //   ulFilter.setAttribute("class", "dropdown-menu");

        var selectDFDiv = document.createElement("div");
        var selectDFLabel = document.createElement("label");
        selectDFLabel.innerHTML = "Data Frame:";


        selectDFDiv.appendChild(selectDFLabel);
        selectDFDiv.appendChild(document.createElement("br"));
        var selectDFDivBody = document.createElement("div");
        //
        selectDFDivBody.style.overflowY = "auto";
        selectDFDivBody.style.maxHeight = "250px";

        //

        for (var j = 0; j < reportData.dataFrames.length; j++) {
            var checkDF = document.createElement("input");
            checkDF.type = "checkbox";
            checkDF.value = reportData.dataFrames[j].name;
            checkDF.setAttribute("name", "DataFrame" + filter.name);

            if (filter.dataFrames.includes(reportData.dataFrames[j].name)) {
                checkDF.checked = "checked";
            }
            selectDFDivBody.appendChild(checkDF);
            var dfLabel = document.createElement("label");
            dfLabel.append(document.createTextNode(reportData.dataFrames[j].name));
            selectDFDivBody.appendChild(dfLabel);
            selectDFDivBody.appendChild(document.createElement("br"));

        }


        selectDFDiv.append(selectDFDivBody);
        ulFilter.appendChild(selectDFDiv);
        ulFilter.appendChild(document.createElement("br"));


        var filterNameLi = document.createElement("li");
        var filterNameLabel = document.createElement("label");
        filterNameLabel.innerHTML = "Nome:";
        filterNameLi.appendChild(filterNameLabel);
        filterNameLi.appendChild(document.createElement("br"));
        var filterNameExp = document.createElement("input");
        filterNameExp.setAttribute("id", "OdagName" + filter.name);
        filterNameExp.setAttribute("type", "text");
        //filterNameExp.setAttribute("onchange", "updateFilterConfig('" + filter.id + "')");
        filterNameExp.setAttribute("class", "form-control");
        filterNameExp.value = filter.name;
        filterNameLi.appendChild(filterNameExp);
        filterNameLi.appendChild(document.createElement("br"));
        var filterFieldLabel = document.createElement("label");
        filterFieldLabel.innerHTML = "Campo:";
        filterNameLi.appendChild(filterFieldLabel);
        filterNameLi.appendChild(document.createElement("br"));
        var filterFieldExp = document.createElement("input");
        filterFieldExp.setAttribute("id", "OdagField" + filter.name);
        filterFieldExp.setAttribute("type", "text");
        //filterFieldExp.setAttribute("onchange", "updateFilterConfig('" + filter.id + "')");
        filterFieldExp.setAttribute("class", "form-control");
        filterFieldExp.value = filter.field;
        filterNameLi.appendChild(filterFieldExp);
        filterNameLi.appendChild(document.createElement("br"));

        var filterMaxValueLabel = document.createElement("label");
        filterMaxValueLabel.innerHTML = "Máximo de Valores:";
        filterNameLi.appendChild(filterMaxValueLabel);
        filterNameLi.appendChild(document.createElement("br"));
        var filterMaxValueExp = document.createElement("input");
        filterMaxValueExp.setAttribute("id", "OdagMaxValue" + filter.name);
        filterMaxValueExp.setAttribute("type", "number");
        filterMaxValueExp.step = 1;
        //filterFieldExp.setAttribute("onchange", "updateFilterConfig('" + filter.id + "')");
        filterMaxValueExp.setAttribute("class", "form-control");
        if (filter.maxValues == null || filter.maxValues == 0) {
            filterMaxValueExp.value = 1;
        }
        else {
            filterMaxValueExp.value = filter.maxValues;
        }
        
        filterNameLi.appendChild(filterMaxValueExp);
        filterNameLi.appendChild(document.createElement("br"));



        ulFilter.appendChild(filterNameLi);

        var applyButton = document.createElement("button");
        applyButton.append(document.createTextNode("Aplicar"));
        applyButton.setAttribute("class", "btn btn-block btn-info btn-sm");
        applyButton.setAttribute("onclick", "updateOdagConfig('" + filter.name + "')");
        ulFilter.appendChild(applyButton);
        ulFilter.appendChild(document.createElement("br"));


        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Remover";
        deleteButton.setAttribute("class", "btn btn-block btn-danger btn-sm");
        deleteButton.setAttribute("onclick", "deleteOdagFilter('" + filter.name + "')");
        ulFilter.appendChild(deleteButton);
        filterDiv.appendChild(ulFilter);
        document.getElementById("Settings").appendChild(filterDiv);
    }

    var addfilterButton = document.createElement("button");
    addfilterButton.innerHTML = "Novo Filtro";
    addfilterButton.setAttribute("onclick", "addOdagFilter()");
    addfilterButton.style.width = "250";
    addfilterButton.style.marginTop = "10";
    addfilterButton.setAttribute("class", "btn btn-block btn-info btn-sm");
    document.getElementById("Settings").appendChild(addfilterButton);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    var processButton = document.createElement("button");
    processButton.innerHTML = "Processar ODAG";
    processButton.setAttribute("onclick", "processOdag()");
    processButton.style.width = "250";
    processButton.style.marginTop = "10";
    processButton.setAttribute("class", "btn btn-block btn-primary btn-sm");
    document.getElementById("Settings").appendChild(processButton);
    document.getElementById("Settings").appendChild(document.createElement("br"));




}


function buildVariableSettings() {
    eraseSettings();
    if (reportData.config.variablePool == null) reportData.config.variablePool = [];
    var vars = reportData.config.variablePool;
    var vLenght;
    if (vars == null) {
        vLenght = 0;
    }
    else {
        vLenght = vars.length;
    }
    for (var i = 0; i < vLenght; i++) {

        var _var = vars[i];
        var varDiv = document.createElement("div");
        varDiv.setAttribute("class", "dropdown");
        var varButton = document.createElement("button");
        varButton.setAttribute("onclick", "showContent(this)");
        // filterButton.setAttribute("class", "btn btn-primary dropdown-toggle");
        varButton.style.width = "250";
        varButton.style.marginTop = "10";
        varButton.setAttribute("class", "btn btn-block btn-secondary btn-sm");
        varButton.setAttribute("type", "button");
        //  filterButton.setAttribute("data-toggle", "dropdown");
        varButton.appendChild(document.createTextNode(_var.name));

        


        varDiv.appendChild(varButton);
        var ulFilter = document.createElement("ul");
        ulFilter.style.display = "none";
        //   ulFilter.setAttribute("class", "dropdown-menu");

        


        var filterNameLi = document.createElement("li");
        var filterNameLabel = document.createElement("label");
        filterNameLabel.innerHTML = "Nome:";
        filterNameLi.appendChild(filterNameLabel);
        filterNameLi.appendChild(document.createElement("br"));
        var filterNameExp = document.createElement("input");
        filterNameExp.setAttribute("id", "VarName" + _var.id);
        filterNameExp.setAttribute("type", "text");
        //filterNameExp.setAttribute("onchange", "updateFilterConfig('" + filter.id + "')");
        filterNameExp.setAttribute("class", "form-control");
        filterNameExp.value = _var.name;
        filterNameLi.appendChild(filterNameExp);
        filterNameLi.appendChild(document.createElement("br"));
        var filterFieldLabel = document.createElement("label");
        filterFieldLabel.innerHTML = "Valor:";
        filterNameLi.appendChild(filterFieldLabel);
        filterNameLi.appendChild(document.createElement("br"));
        var filterFieldExp = document.createElement("input");
        filterFieldExp.setAttribute("id", "VarContent" + _var.id);
        filterFieldExp.setAttribute("type", "text");
        //filterFieldExp.setAttribute("onchange", "updateFilterConfig('" + filter.id + "')");
        filterFieldExp.setAttribute("class", "form-control");
        filterFieldExp.value = _var.content;
        filterNameLi.appendChild(filterFieldExp);
        filterNameLi.appendChild(document.createElement("br"));

        
        filterNameLi.appendChild(document.createElement("br"));



        ulFilter.appendChild(filterNameLi);

        var applyButton = document.createElement("button");
        applyButton.append(document.createTextNode("Aplicar"));
        applyButton.setAttribute("class", "btn btn-block btn-info btn-sm");
        applyButton.setAttribute("onclick", "updateVarConfig('" + _var.id + "')");
        ulFilter.appendChild(applyButton);
        ulFilter.appendChild(document.createElement("br"));


        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Remover";
        deleteButton.setAttribute("class", "btn btn-block btn-danger btn-sm");
        deleteButton.setAttribute("onclick", "deleteVar('" + _var.id + "')");
        ulFilter.appendChild(deleteButton);
        varDiv.appendChild(ulFilter);
        document.getElementById("Settings").appendChild(varDiv);
    }

    var addfilterButton = document.createElement("button");
    addfilterButton.innerHTML = "Nova Variável";
    addfilterButton.setAttribute("onclick", "addVar()");
    addfilterButton.style.width = "250";
    addfilterButton.style.marginTop = "10";
    addfilterButton.setAttribute("class", "btn btn-block btn-info btn-sm");
    document.getElementById("Settings").appendChild(addfilterButton);
    document.getElementById("Settings").appendChild(document.createElement("br"));

}

function changeColor(picker, text) {
    document.getElementById(text).value = document.getElementById(picker).value;
}