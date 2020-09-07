function buildTextBlocks(sheetOrder) {
    var sheet = reportData.config.sheets.filter(function (x) { return x.order == sheetOrder })[0];
    var textBlocks = sheet.textBlocks;
    var tLenght;
    if (textBlocks == null) {
        tLenght = 0;
    }
    else {
        tLenght = textBlocks.length;
    }
    for (var i = 0; i < tLenght; i++) {
        var textBlock = textBlocks[i];
        var textBlockDiv = document.createElement("div");
        textBlockDiv.style.marginLeft = textBlock.style.x;
        textBlockDiv.style.marginTop = textBlock.style.y;
        textBlockDiv.style.width = textBlock.style.width;
        textBlockDiv.style.height = textBlock.style.height;
        textBlockDiv.style.position = "absolute";
        textBlockDiv.style.border = "2px solid lightgrey";
        textBlockDiv.style.borderRadius = "7px";

        textBlockDiv.setAttribute("id", "txt" + textBlock.id);
        textBlockDiv.setAttribute("class", "resize-drag");


        textBlockDiv.appendChild(document.createTextNode(textBlock.text));

               



        document.getElementById("Graphs").appendChild(textBlockDiv);
    }

}