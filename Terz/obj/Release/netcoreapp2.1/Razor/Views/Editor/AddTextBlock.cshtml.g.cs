#pragma checksum "C:\Users\artur\source\repos\Terz\Terz\Views\Editor\AddTextBlock.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e6a530334ab9ca1daa49376e5930dfceaa3bd818"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Editor_AddTextBlock), @"mvc.1.0.view", @"/Views/Editor/AddTextBlock.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Editor/AddTextBlock.cshtml", typeof(AspNetCore.Views_Editor_AddTextBlock))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e6a530334ab9ca1daa49376e5930dfceaa3bd818", @"/Views/Editor/AddTextBlock.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a2e29dedaf5a7a7167ab403312e09f21f298b081", @"/Views/_ViewImports.cshtml")]
    public class Views_Editor_AddTextBlock : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 962, true);
            WriteLiteral(@"<label style=""margin-top:30px"">Texto:</label><br>
<textarea id=""TextAdd"" class=""form-control"" style=""width:250px""></textarea><br>
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
    <div style=""width:45%;margin-left:5%"">
        <label>Y:</label><br>
        <input class=""form-control"" id=""YAdd"" type=""number"" step=""1"" min=""1"" value=""0""><br>
    </div>
    <hr>
</div>

");
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