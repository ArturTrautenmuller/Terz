function buildQuerySheetEditor() {
    /*<div class="card card-info">
        <div class="card-header">
            <h3 class="card-title">Files</h3>
            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                    <i class="fas fa-minus"></i>
                </button>
            </div>
        </div>
        <div class="card-body p-0">
           Content
        </div>
        <!-- /.card-body -->
    </div>*/
    var content = document.getElementById("Sheets");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    var sheets = QueryConfig.querySheets;
    for (var i = 0; i < sheets.length; i++) {
        var card = document.createElement("div");
        card.setAttribute("class", "card card-info");
        var card_header = document.createElement("div");
        card_header.setAttribute("class", "card-header");
        var title = document.createElement("h3");
        title.setAttribute("class", "card-title");
        title.innerHTML = sheets[i].name;
        var tools = document.createElement("div");
        tools.setAttribute("class", "card-tools");
        var button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("class", "btn btn-tool");
        button.setAttribute("data-card-widget", "collapse");
        button.setAttribute("data-toggle", "tooltip");
        button.setAttribute("title", "Collapse");
        var _i = document.createElement("i");
        _i.setAttribute("class", "fas fa-minus");
        var card_body = document.createElement("div");
        card_body.setAttribute("class", "card-body p-0");
        
        var removeSheet = document.createElement("a");
        removeSheet.setAttribute("href", "#");
        removeSheet.setAttribute("onclick", "RemoveSheet('" + sheets[i].order + "')");
        var _ir = document.createElement("i");
        _ir.setAttribute("class", "fas fa-trash");
        removeSheet.appendChild(_ir);

        var upSheet = document.createElement("a");
        upSheet.setAttribute("href", "#");
        upSheet.setAttribute("onclick", "PromoteSheet('" + sheets[i].order + "')");
        var _ip = document.createElement("i");
        _ip.setAttribute("class","fas fa-arrow-up");
        upSheet.appendChild(_ip);

        var downSheet = document.createElement("a");
        downSheet.setAttribute("href", "#");
        downSheet.setAttribute("onclick", "DemoteSheet('" + sheets[i].order + "')");
        var _id = document.createElement("i");
        _id.setAttribute("class", "fas fa-arrow-down");
        downSheet.appendChild(_id);
       

        var content = document.createElement("div");
        content.style.display = "flex";
        var filters = document.createElement("div");
        filters.style.marginLeft = "3%";
        filters.style.width = "47%";
        var filTitle = document.createElement("h5");
        filTitle.innerHTML = "Filtros";
        filters.appendChild(filTitle);
        filters.appendChild(document.createElement("br"));

        var addFilterButton = document.createElement("button");
        addFilterButton.style.width = "30%";
        addFilterButton.innerHTML = "Novo Filtro";
        addFilterButton.setAttribute("class", "btn btn-block btn-info btn-sm");
        addFilterButton.setAttribute("onclick", "AddFilter('" + sheets[i].order + "')");

        filters.appendChild(addFilterButton);
        filters.appendChild(document.createElement("br"));

        for (var j = 0; j < sheets[i].filters.length; j++) {
            var label = document.createElement("label");
            label.style.width = "70%";
            label.innerHTML = sheets[i].filters[j];
            filters.appendChild(label);
            var remove = document.createElement("a");
            remove.setAttribute("href", "#");
            remove.setAttribute("onclick", "RemoveFilter('" + sheets[i].order + "','" + sheets[i].filters[j] + "')");
            var rIcon = document.createElement("i");
            rIcon.setAttribute("class", "fas fa-trash");
            remove.appendChild(rIcon);
            remove.style.fontSize = "18px";
            filters.appendChild(remove);
            filters.appendChild(document.createElement("br"));
           

        }

        


        var fields = document.createElement("div");
        fields.style.marginLeft = "3%";
        fields.style.width = "47%";
        var fieTitle = document.createElement("h5");
        fieTitle.innerHTML = "Campos";
        fields.appendChild(fieTitle);
        fields.appendChild(document.createElement("br"));

        var addFieldButton = document.createElement("button");
        addFieldButton.style.width = "30%";
        addFieldButton.innerHTML = "Novo Campo";
        addFieldButton.setAttribute("onclick", "AddField('" + sheets[i].order + "')");
        addFieldButton.setAttribute("class", "btn btn-block btn-info btn-sm");

        fields.appendChild(addFieldButton);
        fields.appendChild(document.createElement("br"));

        for (var j = 0; j < sheets[i].queryFields.length; j++) {
            var label = document.createElement("label");
            label.style.width = "70%";
            label.innerHTML = sheets[i].queryFields[j].field;
            fields.appendChild(label);
            var remove = document.createElement("a");
            remove.setAttribute("href", "#");
            remove.setAttribute("onclick", "RemoveField('" + sheets[i].order + "','" + sheets[i].queryFields[j].field + "')");
            var rIcon = document.createElement("i");
            rIcon.setAttribute("class", "fas fa-trash");
            remove.appendChild(rIcon);
            remove.style.fontSize = "18px";
            fields.appendChild(remove);
            fields.appendChild(document.createElement("br"));


        }

       

        content.appendChild(filters);
        content.appendChild(fields);
        card_body.appendChild(content);
        button.appendChild(_i);
        tools.appendChild(button);
        tools.appendChild(removeSheet);
        tools.appendChild(upSheet);
        tools.appendChild(downSheet)
        card_header.appendChild(tools);
        card_header.appendChild(title);
        card.appendChild(card_header);
        card.appendChild(card_body);
        document.getElementById("Sheets").appendChild(card);


    }
}