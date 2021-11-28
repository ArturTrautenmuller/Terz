function buildVariableInput(sheetOrder) {
    var sheet = reportData.config.sheets.filter(function (x) { return x.order == sheetOrder })[0];
    var varInputs = sheet.variableInputs;
    var vLenght;
    if (varInputs == null) {
        vLenght = 0;
    }
    else {
        vLenght = varInputs.length;
    }

    for (var i = 0; i < vLenght; i++) {
        var varInput = varInputs[i];

        var varDiv = document.createElement("div");
        varDiv.style.marginLeft = varInput.style.x;
        varDiv.style.marginTop = varInput.style.y;
        varDiv.style.width = varInput.style.width;
        varDiv.style.height = varInput.style.height;
        varDiv.style.position = "absolute";
        varDiv.style.backgroundColor = "white";
        varDiv.style.border = "2px solid lightgrey";
        varDiv.style.borderRadius = "7px";
        // varDiv.style.border = "0px solid black";
        // varDiv.style.borderRadius = "7px";
       
        

        varDiv.setAttribute("id", "varInput" + varInput.id);
        varDiv.setAttribute("class", "resize-drag");

        var labelTitle = document.createElement("label");
        labelTitle.style.marginLeft = "5px";
        labelTitle.appendChild(document.createTextNode(solveVariables(varInput.title)));
        varDiv.appendChild(labelTitle);
        varDiv.appendChild(document.createElement("br"));

        var currentVarValue;
        var _var = reportData.config.variablePool.filter(function (x) { return x.name == varInput.variable });
        if (_var == null) {
            currentVarValue == "";
        }
        else {
            if (_var[0] == null) {
                currentVarValue == "";
            }
            else { currentVarValue = _var[0].content; }
        }

        try {
            switch (varInput.objectType) {
                case 'select': {
                    var selectType = document.createElement("select");
                    var optionsLabels = varInput.labels.split(';');
                    var optionsValues = varInput.values.split(';');
                    
                    for (var j = 0; j < optionsLabels.length; j++) {
                        var selectTypeOption = document.createElement("option");
                        selectTypeOption.innerHTML = optionsLabels[j];
                        selectTypeOption.value = optionsValues[j];
                        if (currentVarValue == optionsValues[j]) {
                            selectTypeOption.selected = "selected";
                        }
                        selectType.appendChild(selectTypeOption);
                    }
                    selectType.setAttribute("id", "VarInputSelect" + varInput.id);
                    selectType.setAttribute("class", "form-control");
                    selectType.style.marginLeft = "5px";
                    selectType.style.width = "95%";
                    selectType.setAttribute("onchange", "changeVariable('" + sheetOrder + "','" + varInput.id + "')");
                    varDiv.appendChild(selectType);

                    break;
                }

                case 'text': {
                    var varInputText = document.createElement("input");
                    varInputText.type = "text";
                    varInputText.value = currentVarValue;
                    varInputText.setAttribute("id", "VarInputSelect" + varInput.id);
                    varInputText.setAttribute("class", "form-control");
                    varInputText.setAttribute("onchange", "changeVariable('" + sheetOrder + "','" + varInput.id + "')");
                    varInputText.style.marginLeft = "5px";
                    varInputText.style.width = "95%";
                    varDiv.appendChild(varInputText);

                    break;
                }

                default: break;
            }

            document.getElementById("Graphs").appendChild(varDiv);

        }
        catch (err) {
            console.log("VarInput Error: "+err);
        }




    }
}

function changeVariable(sheetOrder,id) {
    var varInput = reportData.config.sheets.filter(function (x) { return x.order == sheetOrder })[0].variableInputs.filter(function (y) { return y.id == id })[0];
    var vName = varInput.variable;
    var vValue = document.getElementById("VarInputSelect" + varInput.id).value;
    try {
        var varPos = reportData.config.variablePool.map(function (e) { return e.name; }).indexOf(vName);
        reportData.config.variablePool[varPos].content = vValue;
    }
    catch (err) {
        console.log(err);
    }

    reloadGraphs();
}