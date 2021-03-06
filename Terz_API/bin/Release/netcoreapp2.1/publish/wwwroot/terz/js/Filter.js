﻿function buildFilter(sheetOrder) {
    var sheet = reportData.config.sheets.filter(function (x) { return x.order == sheetOrder })[0];
    var filters = sheet.filters;
    var fLenght;
    if (filters == null) {
        fLenght = 0;
    }
    else {
        fLenght = filters.length;
    }
    
    for (var i = 0; i < fLenght; i++) {
        var filter = filters[i];
        console.log('filtro')
        console.log(filter);

        var dfNames = filter.dataFrameName;
        var values = [];
        for (var dfi = 0; dfi < dfNames.length; dfi++) {
            var col = reportData.dataFrames.filter(function (x) { return x.name == dfNames[dfi] })[0].table[0].indexOf(filter.dimension.field);



            for (var j = 1; j < reportData.dataFrames.filter(function (x) { return x.name == dfNames[dfi] })[0].table.length; j++) {

                values.push(reportData.dataFrames.filter(function (x) { return x.name == dfNames[dfi] })[0].table[j][col]);
            }
        }
        var distinctValues = Array.from(new Set(values));

        var alldfs = "";
        for (var m = 0; m < dfNames.length; m++) {
            alldfs += dfNames[m] + "&";
        }

        alldfs = alldfs.slice(0, -1);

        var filterBlock = document.createElement('div');
        filterBlock.setAttribute("class", "dropdown");
        var button = document.createElement("button");
        button.setAttribute("onclick", "showOptions('" + filter.dimension.field + "')");
        button.setAttribute("class", "dropbtn");
        var buttonText = document.createTextNode(filter.dimension.name);
        // <input type="text" placeholder="Search.." id="Input-campo" onkeyup="filterFunction('campo')">
        var contentInfo = document.createElement("div");
        contentInfo.setAttribute("class", "dropdown-content");
        contentInfo.setAttribute("id", filter.dimension.field);
        contentInfo.style.overflowY = "auto";
        contentInfo.style.maxHeight = "300px";



        var clearButton = document.createElement("button");
        clearButton.setAttribute("onclick", "clearFilterSelections('" + alldfs + "','" + filter.dimension.field + "')");
        clearButton.setAttribute("class", "btn btn-block btn-danger btn-sm");
        clearButton.style.marginTop = "3px";
        clearButton.style.marginBottom = "3px";
        clearButton.appendChild(document.createTextNode("Limpar"));
        contentInfo.appendChild(clearButton);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Search..");
        input.setAttribute("id", "Input-" + filter.dimension.field);
        input.setAttribute("onkeyup", "filterFunction('" + filter.dimension.field + "')");
        contentInfo.appendChild(input);
        

        for (var k = 0; k < distinctValues.length; k++) {
            var cell = document.createElement("a");
            cell.appendChild(document.createTextNode(distinctValues[k]));
            cell.setAttribute("href", "#" + distinctValues[k]);
            


            cell.setAttribute("id", alldfs + "," + filter.dimension.field + "," + distinctValues[k]);
            cell.setAttribute("onclick", "filterValue('" + alldfs + "," + filter.dimension.field + "," + distinctValues[k] + "')");
            contentInfo.appendChild(cell);
        }

        button.appendChild(buttonText);
        button.style.width = 220;
        button.style.height = 40;
        
        
        filterBlock.appendChild(button);
        filterBlock.appendChild(contentInfo);
      
        filterBlock.style.paddingTop = 10;
        document.getElementById("Filters").appendChild(filterBlock);
        document.getElementById("Filters").appendChild(document.createElement("br"));


    }

}



function buildQueryFilter(sheetOrder) {

    var filtersD = document.getElementById("Filters");
    while (filtersD.firstChild) {
        filtersD.removeChild(filtersD.lastChild);
    }

    

    var sheet = QueryConfig.querySheets.filter(function (x) { return x.order == sheetOrder })[0];
    var filters = sheet.filters;
    var filtersValues = sheet.queryFilterValues;

    var fLenght;
    if (filters == null) {
        fLenght = 0;
    }
    else {
        fLenght = filters.length;
    }

    for (var i = 0; i < fLenght; i++) {
        var filter = filters[i];
        var distinctValues = filtersValues[i].values;

        var filterBlock = document.createElement('div');
        filterBlock.setAttribute("class", "dropdown");
        var button = document.createElement("button");
        button.setAttribute("onclick", "showOptions('" + filter + "')");
        button.setAttribute("class", "dropbtn");
        var buttonText = document.createTextNode(filter);
        // <input type="text" placeholder="Search.." id="Input-campo" onkeyup="filterFunction('campo')">
        var contentInfo = document.createElement("div");
        contentInfo.setAttribute("class", "dropdown-content");
        contentInfo.setAttribute("id", filter);
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Search..");
        input.setAttribute("id", "Input-" + filter);
        input.setAttribute("onkeyup", "filterFunction('" + filter + "')");
        contentInfo.appendChild(input);


        for (var k = 0; k < distinctValues.length; k++) {
            var cell = document.createElement("a");
            cell.appendChild(document.createTextNode(distinctValues[k]));
            cell.setAttribute("href", "#" + distinctValues[k]);

            
            cell.setAttribute("id", filter + "," + distinctValues[k]);
            cell.setAttribute("onclick", "filterValue('" + filter + "," + distinctValues[k] + "')");
            contentInfo.appendChild(cell);
        }

        button.appendChild(buttonText);
        button.style.width = 220;
        button.style.height = 40;


        filterBlock.appendChild(button);
        filterBlock.appendChild(contentInfo);

        filterBlock.style.paddingTop = 10;
        document.getElementById("Filters").appendChild(filterBlock);
        document.getElementById("Filters").appendChild(document.createElement("br"));


    }


}