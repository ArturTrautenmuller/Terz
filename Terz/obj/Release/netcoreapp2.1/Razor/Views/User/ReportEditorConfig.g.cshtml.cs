#pragma checksum "C:\Users\artur\source\repos\Terz\Terz\Views\User\ReportEditorConfig.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b16652d66ec3b223d4d77873d342073b9ff03c7e"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_User_ReportEditorConfig), @"mvc.1.0.view", @"/Views/User/ReportEditorConfig.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/User/ReportEditorConfig.cshtml", typeof(AspNetCore.Views_User_ReportEditorConfig))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b16652d66ec3b223d4d77873d342073b9ff03c7e", @"/Views/User/ReportEditorConfig.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a2e29dedaf5a7a7167ab403312e09f21f298b081", @"/Views/_ViewImports.cshtml")]
    public class Views_User_ReportEditorConfig : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Terz_DataBaseLayer.Report>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("style", new global::Microsoft.AspNetCore.Html.HtmlString("padding-top:5px"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("imgApp"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("width", new global::Microsoft.AspNetCore.Html.HtmlString("260"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("height", new global::Microsoft.AspNetCore.Html.HtmlString("200"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("FotoPerfil"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/images/app.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(34, 528, true);
            WriteLiteral(@"<style>
    .ImgPick {
        width: 260px;
        margin-left: 10px;
        height: 40px;
        font-size: 16px;
        padding-top: 8px;
        text-align: center;
        background-color: lightseagreen;
        color: white;
        border-color: lightseagreen;
        border: none;
        margin-top: 15px;
    }

        .ImgPick:hover {
            background-color: white;
            color: lightseagreen;
        }
</style>
<label>Report Name</label><br />
<input type=""text"" id=""appName""");
            EndContext();
            BeginWriteAttribute("value", " value=\"", 562, "\"", 583, 1);
#line 23 "C:\Users\artur\source\repos\Terz\Terz\Views\User\ReportEditorConfig.cshtml"
WriteAttributeValue("", 570, Model.Titulo, 570, 13, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(584, 120, true);
            WriteLiteral(" />\r\n<input  type=\"file\" id=\"ImagemApp\" style=\"visibility:hidden; display:none\" onchange=\"readURL(this);\"><br /><br />\r\n");
            EndContext();
#line 25 "C:\Users\artur\source\repos\Terz\Terz\Views\User\ReportEditorConfig.cshtml"
 if (Model.Imagem == "" || Model.Imagem == null)
{

#line default
#line hidden
            BeginContext(757, 4, true);
            WriteLiteral("    ");
            EndContext();
            BeginContext(761, 115, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "69fa6b764b0f4dbc892a11c734f9aa60", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(876, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 28 "C:\Users\artur\source\repos\Terz\Terz\Views\User\ReportEditorConfig.cshtml"
}
else
{

#line default
#line hidden
            BeginContext(890, 89, true);
            WriteLiteral("    <img style=\"padding-top:5px\" id=\"imgApp\"  width=\"260\" height=\"200\" class=\"FotoPerfil\"");
            EndContext();
            BeginWriteAttribute("src", " src=\"", 979, "\"", 998, 1);
#line 31 "C:\Users\artur\source\repos\Terz\Terz\Views\User\ReportEditorConfig.cshtml"
WriteAttributeValue("", 985, Model.Imagem, 985, 13, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(999, 5, true);
            WriteLiteral(" />\r\n");
            EndContext();
#line 32 "C:\Users\artur\source\repos\Terz\Terz\Views\User\ReportEditorConfig.cshtml"
}

#line default
#line hidden
            BeginContext(1007, 581, true);
            WriteLiteral(@"<br />
<label class=""ImgPick"" for=""ImagemApp""><a> Escolher Imagem</a></label>

<script>
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#imgApp')
                    .attr('src', e.target.result)
                    .width(260)
                    .height(200);

            };

            reader.readAsDataURL(input.files[0]);
            //document.getElementById(""imgPost"").style.display = ""block"";
        }
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Terz_DataBaseLayer.Report> Html { get; private set; }
    }
}
#pragma warning restore 1591
