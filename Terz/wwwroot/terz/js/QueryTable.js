function buildQueryTable(sheetOrder) {
    var content = document.getElementById("Graphs");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    var sheet = QueryConfig.querySheets.filter(function (x) { return x.order == sheetOrder })[0];
    var fields = sheet.queryFields;

    var dimNames = [];

    for (var i = 0; i < fields.length; i++) {
        dimNames.push(fields[i].field);
    }

    var tableData = [];
    if (QueryData[sheetOrder] == null) {
        tableData[0] = dimNames;
    }
    else {
        tableData = QueryData[sheetOrder];
    }

    var card = document.createElement("div");
    card.setAttribute("class", "card");

    var headerTb = document.createElement("div");
    headerTb.setAttribute("class", "card-header ");
    var titleTb = document.createElement("h3");
    titleTb.setAttribute("class", "card-title");
    titleTb.appendChild(document.createTextNode(sheet.name));
    headerTb.appendChild(titleTb);
    card.appendChild(headerTb);

    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body ");
    var table = document.createElement("table");
    table.setAttribute("class", "table table-bordered table-striped");
    table.setAttribute("Id", "gt" + sheet.id);
    var thead = document.createElement("thead");
    var headRow = document.createElement("tr");
    for (var i = 0; i < dimNames.length; i++) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(dimNames[i]));
        headRow.appendChild(th);

    }

    

    thead.appendChild(headRow);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");

    for (var i = 1; i < tableData.length; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < tableData[i].length; j++) {
            var td = document.createElement("td");
            

            var mExpression;
            switch (fields[j].format) {
                case 'real': {
                    mExpression = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tableData[i][j]);
                        break;
                    }
                case 'percent': {
                    mExpression = parseFloat(tableData[i][j]).toFixed(2) + "%";
                        break;
                    }
                case 'number': {
                    mExpression = new Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(tableData[i][j]);
                        break;
                }
                default: { mExpression = tableData[i][j]; break; }
                }

            td.appendChild(document.createTextNode(mExpression));
            
            tr.appendChild(td);
        }
        tbody.appendChild(tr);

    }

    table.appendChild(tbody);
    cardBody.appendChild(table);
    card.appendChild(cardBody);
    document.getElementById("Graphs").appendChild(card);

    $(function () {
        $("#gt" + sheet.id).DataTable({
            "responsive": true,
            "autoWidth": false,
        });

    });


}