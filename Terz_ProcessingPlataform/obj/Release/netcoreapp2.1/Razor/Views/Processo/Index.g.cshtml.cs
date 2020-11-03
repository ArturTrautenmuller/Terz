#pragma checksum "C:\Users\artur\source\repos\Terz\Terz_ProcessingPlataform\Views\Processo\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "87c77590472f3bba2096bfc120c183a005a4474b"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Processo_Index), @"mvc.1.0.view", @"/Views/Processo/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Processo/Index.cshtml", typeof(AspNetCore.Views_Processo_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\artur\source\repos\Terz\Terz_ProcessingPlataform\Views\_ViewImports.cshtml"
using Terz_ProcessingPlataform;

#line default
#line hidden
#line 2 "C:\Users\artur\source\repos\Terz\Terz_ProcessingPlataform\Views\_ViewImports.cshtml"
using Terz_ProcessingPlataform.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"87c77590472f3bba2096bfc120c183a005a4474b", @"/Views/Processo/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"bf3c63175b37f6712026444224ba72ead267a439", @"/Views/_ViewImports.cshtml")]
    public class Views_Processo_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Terz_ProcessingPlataform.Models.Processo.ProcessoView>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(62, 1995, true);
            WriteLiteral(@"
    

    <link rel=""stylesheet"" href=""http://terzanalytics.com/Recursos/terz/processing/LTE/plugins/fontawesome-free/css/all.min.css"">
    <!-- Theme style -->
    <link rel=""stylesheet"" href=""http://terzanalytics.com/Recursos/terz/processing/LTE/dist/css/adminlte.min.css"">
    <!-- Google Font: Source Sans Pro -->
    <link href=""https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"" rel=""stylesheet"">

    <style>
        #overlay {
            position: fixed;
            display: none;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.5);
            z-index: 2;
            cursor: pointer;
        }

        #text {
            position: absolute;
            top: 50%;
            left: 50%;
            font-size: 30px;
            color: white;
            transform: translate(-50%,-50%);
            -ms-transform: translate(");
            WriteLiteral(@"-50%,-50%);
        }
    </style>

    <div id=""overlay"">

        <div id=""text""><div style=""margin-left:22px"" class=""loader""></div>  <label id=""contentOverlay"">Calculando...</label></div>
    </div>

<div style=""margin-top:10px; display:flex"">
    <button class=""btn btn-block btn-success"" style=""width:160px;height:40px;margin-left:10px;margin-top:8px"" onclick=""salvar()""><i class=""fas fa-save""></i> Salvar</button>
    <button class=""btn btn-block btn-info"" style=""width:160px;height:40px;margin-left:10px"" onclick=""runProcesso()""><i class=""fas fa-play""></i> Executar</button>
</div>

    <div style=""display:flex;margin-top:10px"">
        <div class=""card card-primary card-outline"" style=""width:250px"">
            <div class=""card-body"">
                <h5 class=""card-title"">Scripts</h5>
                <br />
                <button onclick=""createFile()"">Novo Arquivo</button>
                <br />
                <div id=""fileList"">
");
            EndContext();
#line 55 "C:\Users\artur\source\repos\Terz\Terz_ProcessingPlataform\Views\Processo\Index.cshtml"
                     foreach (Terz_DataBaseLayer.Script script in Model.Processo.Scripts)
                    {

#line default
#line hidden
            BeginContext(2171, 26, true);
            WriteLiteral("                        <a");
            EndContext();
            BeginWriteAttribute("id", " id=\"", 2197, "\"", 2218, 2);
            WriteAttributeValue("", 2202, "arq-", 2202, 4, true);
#line 57 "C:\Users\artur\source\repos\Terz\Terz_ProcessingPlataform\Views\Processo\Index.cshtml"
WriteAttributeValue("", 2206, script.Nome, 2206, 12, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(2219, 9, true);
            WriteLiteral(" href=\"#\"");
            EndContext();
            BeginWriteAttribute("onclick", " onclick=\"", 2228, "\"", 2265, 3);
            WriteAttributeValue("", 2238, "showContent(\'", 2238, 13, true);
#line 57 "C:\Users\artur\source\repos\Terz\Terz_ProcessingPlataform\Views\Processo\Index.cshtml"
WriteAttributeValue("", 2251, script.Nome, 2251, 12, false);

#line default
#line hidden
            WriteAttributeValue("", 2263, "\')", 2263, 2, true);
            EndWriteAttribute();
            BeginContext(2266, 133, true);
            WriteLiteral(" class=\"nav-link\" style=\"color:dimgray\">\r\n                            <i class=\"fas fa-file-alt\"></i>\r\n\r\n                            ");
            EndContext();
            BeginContext(2401, 39, false);
#line 60 "C:\Users\artur\source\repos\Terz\Terz_ProcessingPlataform\Views\Processo\Index.cshtml"
                        Write(System.IO.Path.GetFileName(script.Path));

#line default
#line hidden
            EndContext();
            BeginContext(2441, 36, true);
            WriteLiteral("\r\n\r\n\r\n                        </a>\r\n");
            EndContext();
#line 64 "C:\Users\artur\source\repos\Terz\Terz_ProcessingPlataform\Views\Processo\Index.cshtml"
                       
                    }

#line default
#line hidden
            BeginContext(2525, 1698, true);
            WriteLiteral(@"                </div>

             </div>
        </div><!-- /.card -->

        <div class=""card card-primary card-outline"" style=""width:900px;height:600px;margin-left:20px"">
            <div class=""card-body"">
                
                <a href=""#"" style=""text-decoration:none;color:dimgray;font-size:18px"" onclick=""deletaScript()""><i class=""fas fa-trash""></i> Excluir</a>
                <a href=""#"" style=""text-decoration:none;color:dimgray;font-size:18px;margin-left:20px"" onclick=""renomearScript()""><i class=""fas fa-keyboard""></i> Renomear</a>
                <label style=""font-size:18px;float:right;margin-right:10px"" id=""codeTitle"">main.py</label>
                <br />
                <div style=""width:100%;height:100%"" id=""textcodeDiv"">
                    <textarea onchange=""saveScript()"" id=""textcode"" style=""width:96%;height:95%;margin-left:2%;margin-top:2%""></textarea>
                </div>


            </div>
        </div><!-- /.card -->
    </div>

    <script src=""http");
            WriteLiteral(@"s://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js""></script>
    <script src=""https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js""></script>
<script>

    var processo;
    var arqIndex = 0;
    var currentScript = 'main';

    function on(text) {
        document.getElementById(""overlay"").style.display = ""block"";
        document.getElementById(""contentOverlay"").innerHTML = text;
    }

    function off() {
        document.getElementById(""overlay"").style.display = ""none"";
    }

    function getProcesso() {
         $.ajax(
            {
                type: 'POST',
                 url: 'Processo/GetProcesso?id=");
            EndContext();
            BeginContext(4224, 17, false);
#line 108 "C:\Users\artur\source\repos\Terz\Terz_ProcessingPlataform\Views\Processo\Index.cshtml"
                                          Write(Model.Processo.Id);

#line default
#line hidden
            EndContext();
            BeginContext(4241, 4273, true);
            WriteLiteral(@"',
                dataType: 'json',
                cache: false,
                async: true,
                success: function (data) {

                    processo = data;

                    showContent('main');

                }

            });
    }

    function showContent(name) {
        currentScript = name;

        document.getElementById(""textcode"").remove();
        var textcode = document.createElement(""textarea"");
        textcode.setAttribute(""id"", ""textcode"");
        textcode.setAttribute(""onchange"", ""saveScript()"");
        textcode.style.marginLeft = ""2%"";
        textcode.style.marginTop = ""2%"";
        textcode.style.width = ""96%"";
        textcode.style.height = ""95%"";
        textcode.innerHTML = processo.scripts.filter(function (x) { return x.nome == name })[0].content;
        document.getElementById(""textcodeDiv"").appendChild(textcode);


        var codeTitle = document.getElementById(""codeTitle"");
        while (codeTitle.firstChild) {
       ");
            WriteLiteral(@"     codeTitle.removeChild(codeTitle.lastChild);
        }

        codeTitle.innerHTML = name + "".py"";
       
    }

    function saveScript() {
        var pos = processo.scripts.map(function (e) { return e.nome; }).indexOf(currentScript);
        processo.scripts[pos].content = document.getElementById(""textcode"").value;
    }

    function createFile() {
        var script = {};
        script[""content""] = """";
        script[""nome""] = ""novo arquivo""
        if (arqIndex > 0) script[""nome""] = script[""nome""] + arqIndex;

        script[""path""] = script[""nome""] + "".py"";

        processo.scripts.push(script);
        var fileA = document.createElement(""a"");
        fileA.setAttribute(""id"", ""arq-"" + script[""nome""]);
        fileA.setAttribute(""href"", ""#"");
        fileA.setAttribute(""class"", ""nav-link"");
        fileA.setAttribute(""onclick"", ""showContent('"" + script[""nome""] + ""')"");
        fileA.style.color = ""dimgray"";
        var fileI = document.createElement(""i"");
        file");
            WriteLiteral(@"I.setAttribute(""class"", ""fas fa-file-alt"");
        fileA.appendChild(fileI);
        fileA.appendChild(document.createTextNode(script[""path""]));
        document.getElementById(""fileList"").appendChild(fileA);

        arqIndex++;

        

    }

    function deletaScript() {
        document.getElementById(""arq-"" + currentScript).remove();

        var pos = processo.scripts.map(function (e) { return e.nome; }).indexOf(currentScript);
        processo.scripts.splice(pos, 1);

        currentScript = 'main';
        showContent(currentScript);
    }

    function renomearScript() {
        var novoNome = prompt(""Defina o Nome do Arquivo"", currentScript);

        var pos = processo.scripts.map(function (e) { return e.nome; }).indexOf(currentScript);
        processo.scripts[pos].nome = novoNome;
        processo.scripts[pos].path = novoNome+"".py"";



        var fileA = document.getElementById(""arq-"" + currentScript);
        while (fileA.firstChild) {
            fileA.remov");
            WriteLiteral(@"eChild(fileA.lastChild);
        }
        var fileI = document.createElement(""i"");
        fileI.setAttribute(""class"", ""fas fa-file-alt"");
        fileA.appendChild(fileI);
        fileA.appendChild(document.createTextNode(processo.scripts[pos].path));

        fileA.removeAttribute(""id"");
        fileA.setAttribute(""id"", ""arq-"" + novoNome);

        fileA.removeAttribute(""onclick"");
        fileA.setAttribute(""onclick"", ""showContent('"" + novoNome + ""')"");

        currentScript = novoNome;
        showContent(currentScript);

    }

    function salvar() {
         on(' Salvando...');
        $.ajax(
            {
                type: 'POST',
                url: 'Processo/SaveProcesso',
                dataType: 'html',
                cache: false,
                async: true,
                success: function (data) {
                    off();
                    alert(data);
                },
                data: processo

            });
    }

    function runPr");
            WriteLiteral("ocesso() {\r\n        on(\' Executando...\');\r\n        var form;\r\n         $.ajax(\r\n            {\r\n                type: \'POST\',\r\n                 url: \'Processo/ExecuteProcesso?id=");
            EndContext();
            BeginContext(8515, 17, false);
#line 242 "C:\Users\artur\source\repos\Terz\Terz_ProcessingPlataform\Views\Processo\Index.cshtml"
                                              Write(Model.Processo.Id);

#line default
#line hidden
            EndContext();
            BeginContext(8532, 329, true);
            WriteLiteral(@"',
                dataType: 'html',
                cache: false,
                async: true,
                success: function (data) {
                    off();
                    alert(data);
                    

                   
                }

            });
    }

    getProcesso();

</script>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Terz_ProcessingPlataform.Models.Processo.ProcessoView> Html { get; private set; }
    }
}
#pragma warning restore 1591
