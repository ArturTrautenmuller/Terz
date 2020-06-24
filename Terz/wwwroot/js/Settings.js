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
    var selectDF = document.createElement("select");
    for (var i = 0; i < reportData.dataFrames.length; i++) {
        var selectDFOption = document.createElement("option");
        selectDFOption.innerHTML = reportData.dataFrames[i].name;
        selectDFOption.value = reportData.dataFrames[i].name;
        if (indicator.dataFrameName == reportData.dataFrames[i].name) {
            selectDFOption.selected = "selected";
        }
        selectDF.appendChild(selectDFOption);
    }
    selectDF.setAttribute("id", "DataFrame");
    selectDF.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    selectDFDiv.appendChild(selectDF);
    document.getElementById("Settings").appendChild(selectDFDiv);
    document.getElementById("Settings").appendChild(document.createElement("br"));


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
    measureName.value = indicator.measure.name;
    document.getElementById("Settings").appendChild(measureName);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    //Expressçao da medida
    var measureExpLabel = document.createElement("label");
    measureExpLabel.innerHTML = "Expressão:";
    document.getElementById("Settings").appendChild(measureExpLabel);
    document.getElementById("Settings").appendChild(document.createElement("br"));
    var measureExp = document.createElement("input");
    measureExp.setAttribute("id", "Expression");
    measureExp.setAttribute("type", "text");
    measureExp.setAttribute("onchange", "updateIndicatorConfig('" + id + "')");
    measureExp.value = indicator.measure.expresion;
    document.getElementById("Settings").appendChild(measureExp);
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
    var selectDF = document.createElement("select");
    for (var i = 0; i < reportData.dataFrames.length; i++) {
        var selectDFOption = document.createElement("option");
        selectDFOption.innerHTML = reportData.dataFrames[i].name;
        selectDFOption.value = reportData.dataFrames[i].name;
        if (graph.dataFrameName == reportData.dataFrames[i].name) {
            selectDFOption.selected = "selected";
        }
        selectDF.appendChild(selectDFOption);
    }
    selectDF.setAttribute("id", "DataFrame");
    selectDF.setAttribute("onchange", "updateGraphConfig('" + id + "')");
    selectDFDiv.appendChild(selectDF);
    document.getElementById("Settings").appendChild(selectDFDiv);
    document.getElementById("Settings").appendChild(document.createElement("br"));


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
        dimButton.setAttribute("class", "btn btn-primary dropdown-toggle");
        dimButton.setAttribute("type", "button");
        dimButton.setAttribute("data-toggle", "dropdown");
        dimButton.appendChild(document.createTextNode(dimension.name));
        var span = document.createElement("span");
        span.setAttribute("class", "caret");
        dimButton.appendChild(span);
        dimDiv.appendChild(dimButton);
        var ulDim = document.createElement("ul");
        ulDim.setAttribute("class", "dropdown-menu");
        var DimNameLi = document.createElement("li");
        var dimNameLabel = document.createElement("label");
        dimNameLabel.innerHTML = "Nome:";
        DimNameLi.appendChild(dimNameLabel);
        DimNameLi.appendChild(document.createElement("br"));
        var dimNameExp = document.createElement("input");
        dimNameExp.setAttribute("id", "dimname" + dimension.id);
        dimNameExp.setAttribute("type", "text");
        dimNameExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
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
    document.getElementById("Settings").appendChild(addDimButton);
    document.getElementById("Settings").appendChild(document.createElement("br"));

    for (var i = 0; i < graph.measures.length; i++) {
        var measure = graph.measures[i];
        var measureDiv = document.createElement("div");
        measureDiv.setAttribute("class", "dropdown");
        var measureButton = document.createElement("button");
        measureButton.setAttribute("class", "btn btn-primary dropdown-toggle");
        measureButton.setAttribute("type", "button");
        measureButton.setAttribute("data-toggle", "dropdown");
        measureButton.appendChild(document.createTextNode(measure.name));
        var span = document.createElement("span");
        span.setAttribute("class", "caret");
        measureButton.appendChild(span);
        measureDiv.appendChild(measureButton);
        var ulMeasure = document.createElement("ul");
        ulMeasure.setAttribute("class", "dropdown-menu");
        var measureNameLi = document.createElement("li");
        var measureNameLabel = document.createElement("label");
        measureNameLabel.innerHTML = "Nome:";
        measureNameLi.appendChild(measureNameLabel);
        measureNameLi.appendChild(document.createElement("br"));
        var measureNameExp = document.createElement("input");
        measureNameExp.setAttribute("id", "measureName" + measure.id);
        measureNameExp.setAttribute("type", "text");
        measureNameExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        measureNameExp.value = measure.name;
        measureNameLi.appendChild(measureNameExp);
        measureNameLi.appendChild(document.createElement("br"));
        var measureFieldLabel = document.createElement("label");
        measureFieldLabel.innerHTML = "Campo:";
        measureNameLi.appendChild(measureFieldLabel);
        measureNameLi.appendChild(document.createElement("br"));
        var measureFieldExp = document.createElement("input");
        measureFieldExp.setAttribute("id", "measureExp" + measure.id);
        measureFieldExp.setAttribute("type", "text");
        measureFieldExp.setAttribute("onchange", "updateGraphConfig('" + id + "')");
        measureFieldExp.value = measure.expresion;
        measureNameLi.appendChild(measureFieldExp);
        measureNameLi.appendChild(document.createElement("br"));



        ulMeasure.appendChild(measureNameLi);
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
    yExp.value = graph.style.y;
    document.getElementById("Settings").appendChild(yExp);
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
    for (var i = 0; i < filters.length; i++) {
      
        var filter = filters[i];
        var filterDiv = document.createElement("div");
        filterDiv.setAttribute("class", "dropdown");
        var filterButton = document.createElement("button");
        filterButton.setAttribute("class", "btn btn-primary dropdown-toggle");
        filterButton.setAttribute("type", "button");
        filterButton.setAttribute("data-toggle", "dropdown");
        filterButton.appendChild(document.createTextNode(filter.dimension.name));
        var span = document.createElement("span");
        span.setAttribute("class", "caret");
        filterButton.appendChild(span);
        filterDiv.appendChild(filterButton);
        var ulFilter = document.createElement("ul");
        ulFilter.setAttribute("class", "dropdown-menu");

        var selectDFDiv = document.createElement("div");
        var selectDFLabel = document.createElement("label");
        selectDFLabel.innerHTML = "Data Frame:";


        selectDFDiv.appendChild(selectDFLabel);
        selectDFDiv.appendChild(document.createElement("br"));
        var selectDF = document.createElement("select");
        for (var j = 0; j < reportData.dataFrames.length; j++) {
            var selectDFOption = document.createElement("option");
            selectDFOption.innerHTML = reportData.dataFrames[j].name;
            selectDFOption.value = reportData.dataFrames[j].name;
            if (filter.dataFrameName == reportData.dataFrames[j].name) {
                selectDFOption.selected = "selected";
            }
            selectDF.appendChild(selectDFOption);
        }
        selectDF.setAttribute("id", "DataFrame" + filter.id);
        selectDF.setAttribute("onchange", "updateFilterConfig('" + filter.id + "')");
        selectDFDiv.appendChild(selectDF);
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
    filter["dataFrameName"] = reportData.dataFrames[0].name;
    filter["multiValue"] = true;
    var dimension = {};
    dimension["id"] = Date.now().toString();
    dimension["name"] = "";
    dimension["field"] = "";

    filter["dimension"] = dimension;

    reportData.config.sheets[sheetPos].filters.push(filter);
    buildFilterSettings();
}
