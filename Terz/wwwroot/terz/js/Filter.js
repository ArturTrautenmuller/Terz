function buildFilter(sheetOrder) {
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
            
            var alldfs = "";
            for (var m = 0; m < dfNames.length; m++) {
                alldfs += dfNames[m] + "&";
            }



            alldfs = alldfs.slice(0, -1);
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