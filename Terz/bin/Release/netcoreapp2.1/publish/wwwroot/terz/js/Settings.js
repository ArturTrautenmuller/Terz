function buildTextBlockSettings(id) {
    var content = document.getElementById("Settings");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    var textBlock = reportData.config.sheets.filter(function (x) { return x.order == currentSheet })[0].textBlocks.filter(function (y) { return y.id == id })[0];
    var textLabel = document.createElement("label");
    textLabel.innerHTML = "Texto:";
    document.getElementById("Settings").appendChild(textLabel);
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
    var widthLabel = document.createElement("label");
    widthLabel.innerHTML = "Largura:";
    document.getElementById("Settings").appendChild(widthLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var widthExp = document.createElement("input");
    widthExp.setAttribute("id", "Width");
    widthExp.setAttribute("type", "text");
    widthExp.setAttribute("onchange", "updateTextBlockConfig('" + id + "')");
    widthExp.setAttribute("class", "form-control");
    widthExp.value = textBlock.style.width;
    document.getElementById("Settings").appendChild(widthExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    //Altura
    var heightLabel = document.createElement("label");
    heightLabel.innerHTML = "Altura:";
    document.getElementById("Settings").appendChild(heightLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var heightExp = document.createElement("input");
    heightExp.setAttribute("id", "Height");
    heightExp.setAttribute("type", "text");
    heightExp.setAttribute("onchange", "updateTextBlockConfig('" + id + "')");
    heightExp.setAttribute("class", "form-control");
    heightExp.value = textBlock.style.height;
    document.getElementById("Settings").appendChild(heightExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    // X
    var xLabel = document.createElement("label");
    xLabel.innerHTML = "X:";
    document.getElementById("Settings").appendChild(xLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var xExp = document.createElement("input");
    xExp.setAttribute("id", "X");
    xExp.setAttribute("type", "text");
    xExp.setAttribute("onchange", "updateTextBlockConfig('" + id + "')");
    xExp.setAttribute("class", "form-control");
    xExp.value = textBlock.style.x;
    document.getElementById("Settings").appendChild(xExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    // Y
    var yLabel = document.createElement("label");
    yLabel.innerHTML = "Y:";
    document.getElementById("Settings").appendChild(yLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var yExp = document.createElement("input");
    yExp.setAttribute("id", "Y");
    yExp.setAttribute("type", "text");
    yExp.setAttribute("onchange", "updateTextBlockConfig('" + id + "')");
    yExp.setAttribute("class", "form-control");
    yExp.value = textBlock.style.y;
    document.getElementById("Settings").appendChild(yExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    document.getElementById("Settings").appendChild(document.createElement("hr"));
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Remover";
    deleteButton.setAttribute("onclick", "deleteTextBlock('" + id + "')");
    document.getElementById("Settings").appendChild(deleteButton);
    

}

function buildIndicatorSettings(id) {
    var content = document.getElementById("Settings");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    var indicator = reportData.config.sheets.filter(function (x) { return x.order == currentSheet })[0].indicators.filter(function (y) { return y.id == id })[0];


    //DataFrame
    var selectDFDiv = document.createElement("div");
    var selectDFLabel = document.createElement("label");
    selectDFLabel.innerHTML = "Data Frame:";

   
    selectDFDiv.appendChild(selectDFLabel);
    selectDFDiv.appendChild(document.createElement("br"));

   


    for (var j = 0; j < reportData.dataFrames.length; j++) {
        var checkDF = document.createElement("input");
        checkDF.type = "checkbox";
        checkDF.value = reportData.dataFrames[j].name;
        checkDF.setAttribute("name", "DataFrame");
        checkDF.style.width = "18px";
        checkDF.style.height = "18px";

        if (indicator.dataFrameName.includes(reportData.dataFrames[j].name)) {
            checkDF.checked = "checked";
        }
        selectDFDiv.appendChild(checkDF);
        var dfLabel = document.createElement("label");
        dfLabel.append(document.createTextNode(reportData.dataFrames[j].name));
        dfLabel.style.fontSize = "16px";
        dfLabel.style.color = "gray";
        dfLabel.style.marginLeft = "10px";
        selectDFDiv.appendChild(dfLabel);
        selectDFDiv.appendChild(document.createElement("br"));

    }

    var applyButton = document.createElement("button");
    applyButton.append(document.createTextNode("Aplicar"));
    applyButton.setAttribute("onclick", "updateIndicatorDataFrame('" + id + "')");
    selectDFDiv.appendChild(applyButton);
    selectDFDiv.appendChild(document.createElement("br"));



    document.getElementById("Settings").appendChild(selectDFDiv);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var ordemLabel = document.createElement("label");
    ordemLabel.innerHTML = "Ordem:";
    document.getElementById("Settings").appendChild(document.createElement("br"));
    for (var i = 0; i < indicator.dataFrameName.length; i++) {
        var orderDfDiv = document.createElement("div");
        orderDfDiv.setAttribute("name", "dfOrder");
        var orderDfLabel = document.createElement("label");
        orderDfLabel.innerHTML = indicator.dataFrameName[i];
        orderDfLabel.style.fontSize = "16px";
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


        document.getElementById("Settings").appendChild(orderDfDiv);
    }
    /*var aplicarOrdem = document.createElement("button");
    aplicarOrdem.innerHTML = "Aplicar";
    aplicarOrdem.setAttribute("onclick", "aplicarOrdem()");
    document.getElementById("Settings").appendChild(aplicarOrdem);
    */

    document.getElementById("Settings").appendChild(document.createElement("hr"));
    //Nome da Medida
    var measureNameLabel = document.createElement("label");
    measureNameLabel.innerHTML = "Nome da Métrica:";
    document.getElementById("Settings").appendChild(measureNameLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var measureName = document.createElement("input");
    measureName.setAttribute("id", "MeasureName");
    measureName.setAttribute("type", "text");
    measureName.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    measureName.setAttribute("class", "form-control");
    measureName.value = indicator.measure.name;
    document.getElementById("Settings").appendChild(measureName);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    //Expressçao da medida
    var measureExpLabel = document.createElement("label");
    measureExpLabel.innerHTML = "Expressão:";
    document.getElementById("Settings").appendChild(measureExpLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var expBut = document.createElement("button");
    expBut.appendChild(document.createTextNode("F(x)"));
    expBut.setAttribute("onclick", "ExpIndicator('" + id + "')");
    document.getElementById("Settings").appendChild(expBut);
    var measureExp = document.createElement("input");
    measureExp.setAttribute("id", "Expression");
    measureExp.setAttribute("type", "text");
    measureExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
   // measureExp.setAttribute("class", "form-control");
    measureExp.value = indicator.measure.expresion;
    measureExp.style.width = "180";
    document.getElementById("Settings").appendChild(measureExp);
   
    document.getElementById("Settings").appendChild(document.createElement("br"));

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
    document.getElementById("Settings").appendChild(selectFormatDiv);
    document.getElementById("Settings").appendChild(document.createElement("br"));



    document.getElementById("Settings").appendChild(document.createElement("hr"));
    //Largura
    var widthLabel = document.createElement("label");
    widthLabel.innerHTML = "Largura:";
    document.getElementById("Settings").appendChild(widthLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var widthExp = document.createElement("input");
    widthExp.setAttribute("id", "Width");
    widthExp.setAttribute("type", "text");
    widthExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    widthExp.setAttribute("class", "form-control");
    widthExp.value = indicator.style.width;
    document.getElementById("Settings").appendChild(widthExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    //Altura
    var heightLabel = document.createElement("label");
    heightLabel.innerHTML = "Altura:";
    document.getElementById("Settings").appendChild(heightLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var heightExp = document.createElement("input");
    heightExp.setAttribute("id", "Height");
    heightExp.setAttribute("type", "text");
    heightExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    heightExp.setAttribute("class", "form-control");
    heightExp.value = indicator.style.height;
    document.getElementById("Settings").appendChild(heightExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    // X
    var xLabel = document.createElement("label");
    xLabel.innerHTML = "X:";
    document.getElementById("Settings").appendChild(xLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var xExp = document.createElement("input");
    xExp.setAttribute("id", "X");
    xExp.setAttribute("type", "text");
    xExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    xExp.setAttribute("class", "form-control");
    xExp.value = indicator.style.x;
    document.getElementById("Settings").appendChild(xExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    // Y
    var yLabel = document.createElement("label");
    yLabel.innerHTML = "Y:";
    document.getElementById("Settings").appendChild(yLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var yExp = document.createElement("input");
    yExp.setAttribute("id", "Y");
    yExp.setAttribute("type", "text");
    yExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    yExp.setAttribute("class", "form-control");
    yExp.value = indicator.style.y;
    document.getElementById("Settings").appendChild(yExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    document.getElementById("Settings").appendChild(document.createElement("hr"));

    //Cor de Fundo

    var bcLabel = document.createElement("label");
    bcLabel.innerHTML = "Cor de Fundo:";
    document.getElementById("Settings").appendChild(bcLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var bcExp = document.createElement("input");
    bcExp.setAttribute("id", "BackgroundColor");
    bcExp.setAttribute("type", "color");
    bcExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    bcExp.setAttribute("class", "form-control");
    bcExp.value = indicator.style.backgroundColor;
    document.getElementById("Settings").appendChild(bcExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    //Cor de Texto

    var tcLabel = document.createElement("label");
    tcLabel.innerHTML = "Cor de Texto:";
    document.getElementById("Settings").appendChild(tcLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var tcExp = document.createElement("input");
    tcExp.setAttribute("id", "TextColor");
    tcExp.setAttribute("type", "color");
    tcExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    tcExp.setAttribute("class", "form-control");
    tcExp.value = indicator.style.textColor;
    document.getElementById("Settings").appendChild(tcExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    // FontSize
    var fsLabel = document.createElement("label");
    fsLabel.innerHTML = "Tamanho da Fonte:";
    document.getElementById("Settings").appendChild(fsLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var fsExp = document.createElement("input");
    fsExp.setAttribute("id", "FontSize");
    fsExp.setAttribute("type", "text");
    fsExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    fsExp.setAttribute("class", "form-control");
    fsExp.value = indicator.style.fontSize;
    document.getElementById("Settings").appendChild(fsExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    document.getElementById("Settings").appendChild(document.createElement("hr"));
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Remover";
    deleteButton.setAttribute("onclick", "deleteIndicator('" + id + "')");
    document.getElementById("Settings").appendChild(deleteButton);

}


function buildGraphSettings(id) {
    var content = document.getElementById("Settings");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    var graph = reportData.config.sheets.filter(function (x) { return x.order == currentSheet })[0].graphs.filter(function (y) { return y.id == id })[0];


    var selectDFDiv = document.createElement("div");
    var selectDFLabel = document.createElement("label");
    selectDFLabel.innerHTML = "Data Frame:";

    selectDFDiv.appendChild(selectDFLabel);
    selectDFDiv.appendChild(document.createElement("br"));
   


    for (var j = 0; j < reportData.dataFrames.length; j++) {
        var checkDF = document.createElement("input");
        checkDF.type = "checkbox";
        checkDF.value = reportData.dataFrames[j].name;
        checkDF.setAttribute("name", "DataFrame");

        if (graph.dataFrameName.includes(reportData.dataFrames[j].name)) {
            checkDF.checked = "checked";
        }
        selectDFDiv.appendChild(checkDF);
        var dfLabel = document.createElement("label");
        dfLabel.append(document.createTextNode(reportData.dataFrames[j].name));
        selectDFDiv.appendChild(dfLabel);
        selectDFDiv.appendChild(document.createElement("br"));

    }

    var applyButton = document.createElement("button");
    applyButton.append(document.createTextNode("Aplicar"));
    applyButton.setAttribute("onclick", "updateGraphDataFrame('" + id + "')");
    selectDFDiv.appendChild(applyButton);
    selectDFDiv.appendChild(document.createElement("br"));


    document.getElementById("Settings").appendChild(selectDFDiv);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    var ordemLabel = document.createElement("label");
    ordemLabel.innerHTML = "Ordem:";
    document.getElementById("Settings").appendChild(document.createElement("br"));
    for (var i = 0; i < graph.dataFrameName.length; i++) {
        var orderDfDiv = document.createElement("div");
        orderDfDiv.setAttribute("name", "dfOrder");
        var orderDfLabel = document.createElement("label");
        orderDfLabel.innerHTML = graph.dataFrameName[i];
        orderDfDiv.appendChild(orderDfLabel);

        var orderDfDown = document.createElement("a");
        orderDfDown.setAttribute("onclick", "rebaixarDFGraph('" + graph.id + "'," + i + ")");
        var downIcon = document.createElement("i");
        downIcon.setAttribute("class", "fas fa-arrow-down");
        orderDfDown.appendChild(downIcon);
        orderDfDiv.appendChild(orderDfDown);

        var orderDfUp = document.createElement("a");
        orderDfUp.setAttribute("onclick", "promoverDFGraph('" + graph.id + "'," + i + ")");
        var upIcon = document.createElement("i");
        upIcon.setAttribute("class", "fas fa-arrow-up");
        orderDfUp.appendChild(upIcon);
        orderDfDiv.appendChild(orderDfUp);


        document.getElementById("Settings").appendChild(orderDfDiv);
    }


    document.getElementById("Settings").appendChild(document.createElement("hr"));

    /* <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
            Paginas
            <span class="caret"></span>
        </button>
        <ul id="sheetList" class="dropdown-menu"></ul>
    </div>*/

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
        dimButton.appendChild(document.createTextNode(dimension.name));
        var span = document.createElement("span");
        span.setAttribute("class", "caret");
        dimButton.appendChild(span);
        dimDiv.appendChild(dimButton);
        var ulDim = document.createElement("ul");
        // ulDim.setAttribute("class", "dropdown-menu");
        ulDim.style.display = "none";
        var DimNameLi = document.createElement("li");
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



        ulDim.appendChild(DimNameLi);
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Remover";
        deleteButton.setAttribute("onclick", "deleteDimension('" + id + "','" + dimension.id + "')");
        ulDim.appendChild(deleteButton);
        dimDiv.appendChild(ulDim);
        document.getElementById("Settings").appendChild(dimDiv);
        

    }

    var addDimButton = document.createElement("button");
    addDimButton.innerHTML = "Novo Campo";
    addDimButton.setAttribute("onclick", "addDimension('" + id + "')");
    addDimButton.style.width = "250";
    addDimButton.style.marginTop = "10";
    document.getElementById("Settings").appendChild(addDimButton);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    document.getElementById("Settings").appendChild(document.createElement("hr"));

    for (var i = 0; i < graph.measures.length; i++) {
        var measure = graph.measures[i];
        var measureDiv = document.createElement("div");
        measureDiv.setAttribute("class", "dropdown");
        var measureButton = document.createElement("button");
      //  measureButton.setAttribute("class", "btn btn-primary dropdown-toggle");
        measureButton.setAttribute("type", "button");
        //measureButton.setAttribute("data-toggle", "dropdown");
        measureButton.setAttribute("onclick", "showContent(this)");
        measureButton.style.width = "250";
        measureButton.style.marginTop = "10";
        measureButton.appendChild(document.createTextNode(measure.name));
        var span = document.createElement("span");
        span.setAttribute("class", "caret");
        measureButton.appendChild(span);
        measureDiv.appendChild(measureButton);
        var ulMeasure = document.createElement("ul");
        ulMeasure.style.display = "none";
       // ulMeasure.setAttribute("class", "dropdown-menu");
        var measureNameLi = document.createElement("li");
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
        measureFieldLabel.innerHTML = "Campo:";
        measureNameLi.appendChild(measureFieldLabel);
        measureNameLi.appendChild(document.createElement("br"));

        var expBut = document.createElement("button");
        expBut.appendChild(document.createTextNode("F(x)"));
        expBut.setAttribute("onclick", "ExpMeasure('" + id + "','" + measure.id + "')");
        measureNameLi.appendChild(expBut);
        var measureFieldExp = document.createElement("input");
        measureFieldExp.setAttribute("id", "measureExp" + measure.id);
        measureFieldExp.setAttribute("type", "text");
        measureFieldExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        measureFieldExp.style.width = "160";
       // measureFieldExp.setAttribute("class", "form-control");
        measureFieldExp.value = measure.expresion;
        measureNameLi.appendChild(measureFieldExp);
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

        ulMeasure.appendChild(measureNameLi);
        ulMeasure.appendChild(selectFormatDiv);
        // remover
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Remover";
        deleteButton.setAttribute("onclick", "deleteMeasure('" + id + "','" + measure.id + "')");
        ulMeasure.appendChild(deleteButton);
        measureDiv.appendChild(ulMeasure);
        document.getElementById("Settings").appendChild(measureDiv);
    }

    var addMeasureButton = document.createElement("button");
    addMeasureButton.innerHTML = "Nova Medida";
    addMeasureButton.setAttribute("onclick", "addMeasure('" + id + "')");
    addMeasureButton.style.width = "250";
    addMeasureButton.style.marginTop = "10";
    document.getElementById("Settings").appendChild(addMeasureButton);
    document.getElementById("Settings").appendChild(document.createElement("br"));




    //Largura
    var widthLabel = document.createElement("label");
    widthLabel.innerHTML = "Largura:";
    document.getElementById("Settings").appendChild(widthLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var widthExp = document.createElement("input");
    widthExp.setAttribute("id", "Width");
    widthExp.setAttribute("type", "text");
    widthExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    widthExp.setAttribute("class", "form-control");
    widthExp.value = graph.style.width;
    document.getElementById("Settings").appendChild(widthExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    //Altura
    var heightLabel = document.createElement("label");
    heightLabel.innerHTML = "Altura:";
    document.getElementById("Settings").appendChild(heightLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var heightExp = document.createElement("input");
    heightExp.setAttribute("id", "Height");
    heightExp.setAttribute("type", "text");
    heightExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    heightExp.setAttribute("class", "form-control");
    heightExp.value = graph.style.height;
    document.getElementById("Settings").appendChild(heightExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    // X
    var xLabel = document.createElement("label");
    xLabel.innerHTML = "X:";
    document.getElementById("Settings").appendChild(xLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var xExp = document.createElement("input");
    xExp.setAttribute("id", "X");
    xExp.setAttribute("type", "text");
    xExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    xExp.setAttribute("class", "form-control");
    xExp.value = graph.style.x;
    document.getElementById("Settings").appendChild(xExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    // Y
    var yLabel = document.createElement("label");
    yLabel.innerHTML = "Y:";
    document.getElementById("Settings").appendChild(yLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var yExp = document.createElement("input");
    yExp.setAttribute("id", "Y");
    yExp.setAttribute("type", "text");
    yExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    yExp.setAttribute("class", "form-control");
    yExp.value = graph.style.y;
    document.getElementById("Settings").appendChild(yExp);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    
    if (graph.objectType == 'bar') {
        document.getElementById("Settings").appendChild(document.createElement("hr"));
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
        document.getElementById("Settings").appendChild(selectOrientationDiv);
        document.getElementById("Settings").appendChild(document.createElement("br"));

       
       
        var checkstack = document.createElement("input");
        checkstack.type = "checkbox";
        checkstack.id = "Stack";
        if (graph.style.stack == true) {
            checkstack.checked = "checked";
        }
        checkstack.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        document.getElementById("Settings").appendChild(checkstack);

        var checkstackLabel = document.createElement("label");
        checkstackLabel.innerHTML = " Empilhar";
        document.getElementById("Settings").appendChild(checkstackLabel);

    }
    document.getElementById("Settings").appendChild(document.createElement("hr"));

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
    document.getElementById("Settings").appendChild(selectSortDiv);
    document.getElementById("Settings").appendChild(document.createElement("br"));

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
    document.getElementById("Settings").appendChild(selectSortTypeDiv);
    document.getElementById("Settings").appendChild(document.createElement("br"));

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
    document.getElementById("Settings").appendChild(selectSortOptionDiv);
    document.getElementById("Settings").appendChild(document.createElement("br"));

   

    document.getElementById("Settings").appendChild(document.createElement("hr"));
    var deleteButton = document.createElement("button");
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
    buildGraphSettings(graphId);


}

function deleteDimension(graphId, dimId) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(graphId);
    var dimPos = reportData.config.sheets[sheetPos].graphs[graphPos].dimensions.map(function (e) { return e.id; }).indexOf(dimId);
    reportData.config.sheets[sheetPos].graphs[graphPos].dimensions.splice(dimPos, 1);
    buildGraphSettings(graphId);
}

function addMeasure(graphId) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(graphId);

    var measure = {};
    measure["id"] = Date.now().toString();
    measure["name"] = "";
    measure["expresion"] = "";

    reportData.config.sheets[sheetPos].graphs[graphPos].measures.push(measure);
    buildGraphSettings(graphId);
}

function deleteMeasure(graphId, measureId) {
    var sheetPos = reportData.config.sheets.map(function (e) { return e.order; }).indexOf(currentSheet);
    var graphPos = reportData.config.sheets[sheetPos].graphs.map(function (e) { return e.id; }).indexOf(graphId);
    var measurePos = reportData.config.sheets[sheetPos].graphs[graphPos].measures.map(function (e) { return e.id; }).indexOf(measureId);
    reportData.config.sheets[sheetPos].graphs[graphPos].measures.splice(measurePos, 1);
    buildGraphSettings(graphId);
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
    var deleteButton = document.createElement("button");
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
        filterButton.setAttribute("type", "button");
      //  filterButton.setAttribute("data-toggle", "dropdown");
        filterButton.appendChild(document.createTextNode(filter.dimension.name));
        var span = document.createElement("span");
        span.setAttribute("class", "caret");
        filterButton.appendChild(span);
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

        var applyButton = document.createElement("button");
        applyButton.append(document.createTextNode("Aplicar"));
        applyButton.setAttribute("onclick", "updateFilterConfig('" + filter.id + "')");
        selectDFDiv.appendChild(applyButton);
        selectDFDiv.appendChild(document.createElement("br"));

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
        filterNameExp.setAttribute("onchange", "updateFilterConfig('" + filter.id + "')");
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
        filterFieldExp.setAttribute("onchange", "updateFilterConfig('" + filter.id + "')");
        filterFieldExp.setAttribute("class", "form-control");
        filterFieldExp.value = filter.dimension.field;
        filterNameLi.appendChild(filterFieldExp);
        filterNameLi.appendChild(document.createElement("br"));



        ulFilter.appendChild(filterNameLi);
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Remover";
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
