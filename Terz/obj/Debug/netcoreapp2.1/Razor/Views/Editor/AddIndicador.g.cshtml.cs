#pragma checksum "C:\Users\artur\source\repos\Terz\Terz\Views\Editor\AddIndicador.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "0a5a91d8600efab806bf07d060dfa28e65f52bd8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Editor_AddIndicador), @"mvc.1.0.view", @"/Views/Editor/AddIndicador.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Editor/AddIndicador.cshtml", typeof(AspNetCore.Views_Editor_AddIndicador))]
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
#line 1 "C:\Users\artur\source\repos\Terz\Terz\Views\_ViewImports.cshtml"
using Terz;

#line default
#line hidden
#line 2 "C:\Users\artur\source\repos\Terz\Terz\Views\_ViewImports.cshtml"
using Terz.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0a5a91d8600efab806bf07d060dfa28e65f52bd8", @"/Views/Editor/AddIndicador.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a2e29dedaf5a7a7167ab403312e09f21f298b081", @"/Views/_ViewImports.cshtml")]
    public class Views_Editor_AddIndicador : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 1963, true);
            WriteLiteral(@"<label>Data Frame:</label><br>
<select id=""DataFrameAdd"" class=""form-control"" style=""width:250px""></select><br>
<hr>
<label>Nome da Métrica:</label><br>
<input id=""MeasureNameAdd"" type=""text"" class=""form-control"" style=""width:250px""><br>
<label>Expressão:</label><br>
<input id=""ExpressionAdd"" type=""text"" class=""form-control"" style=""width:250px""><br>
<hr>
<div style=""display:flex;width:250px"">
    <div style=""width:45%"">
        <label>Largura:</label><br>
        <input class=""form-control"" id=""WidthAdd"" type=""number"" step=""1"" min=""1"" value=""400""><br>
    </div>
    <div style=""width:45%;margin-left:5%"">
        <label>Altura:</label><br>
        <input class=""form-control"" id=""HeightAdd"" type=""number"" step=""1"" min=""1"" value=""400""><br>
    </div>
</div>

<div style=""display:flex;width:250px"">
    <div style=""width:45%"">
        <label>X:</label><br>
        <input class=""form-control"" id=""XAdd"" type=""number"" step=""1"" min=""1"" value=""0""><br>
    </div>
    <div style=""width:45%;margin-le");
            WriteLiteral(@"ft:5%"">
        <label>Y:</label><br>
        <input class=""form-control"" id=""YAdd"" type=""number"" step=""1"" min=""1"" value=""0""><br>
    </div>
    <hr>
</div>
<hr>
<label>Cor de Fundo:</label><br>
<input id=""BackgroundColorAdd"" type=""color"" value=""#ff0000"" class=""form-control"" style=""width:250px""><br>
<label>Cor de Texto:</label><br>
<input id=""TextColorAdd"" type=""color"" value=""#ffffff"" class=""form-control"" style=""width:250px""><br>
<label>Tamanho da Fonte:</label><br>
<input id=""FontSizeAdd"" type=""text"" value=""18"" class=""form-control"" style=""width:250px""><br>

<script>
    for (var i = 0; i < reportData.dataFrames.length; i++) {
        var selectDFOption = document.createElement(""option"");
        selectDFOption.innerHTML = reportData.dataFrames[i].name;
        selectDFOption.value = reportData.dataFrames[i].name;
        document.getElementById(""DataFrameAdd"").appendChild(selectDFOption);
    }
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
