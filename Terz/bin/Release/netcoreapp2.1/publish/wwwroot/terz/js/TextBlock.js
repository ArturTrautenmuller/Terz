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
        textBlockDiv.style.borderLeft = "5px solid lightblue";
        textBlockDiv.style.borderBottom = "2px solid lightgrey";
        textBlockDiv.style.borderTop = "2px solid lightgrey";
        textBlockDiv.style.borderRight = "2px solid lightgrey";
        textBlockDiv.style.borderTopRightRadius = "7px";
        textBlockDiv.style.borderBottomRightRadius = "7px";
        textBlockDiv.style.paddingLeft = "5px";

        textBlockDiv.setAttribute("id", "txt" + textBlock.id);
        textBlockDiv.setAttribute("class", "resize-drag");

        var contentText = textBlock.text;

        let pattern = /(?=\{\<).+?(?<=\>\})/g;
        let res = pattern.exec(contentText);
        while (res != null) {
            var Exp = res[0];
            Exp = Exp.replace('{<', '').replace('>}', '');
            var valueExp = Exp.split('||')[0].trim();
            var dfExp = Exp.split('||')[1].trim();
            var format;
            if (Exp.split('||')[2] == null) {
                format = "";
            }
            else {
                format = Exp.split('||')[2].trim();
            }
            var resultExp = EvalueteEx(valueExp, dfExp.split(','), null);

            switch (format) {
                case 'real': {
                    resultExp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resultExp);
                    break;
                }
                case 'percent': {
                    resultExp = parseFloat(resultExp).toFixed(2) + "%";
                    break;
                }
                case 'number': {
                    resultExp = new Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(resultExp);
                    break;
                }
                default: { break; }
            }



            contentText = contentText.replace('{<' + Exp + '>}', resultExp);
            res = pattern.exec(contentText);
        }

       
        if (textBlock.title != null && textBlock.title != "") {
            var title = document.createElement("h4");
            title.style.fontWeight = "bold";
            title.appendChild(document.createTextNode(textBlock.title));
            textBlockDiv.appendChild(title);
        }
       
        textBlockDiv.appendChild(document.createTextNode(contentText));

               



        document.getElementById("Graphs").appendChild(textBlockDiv);
    }

}