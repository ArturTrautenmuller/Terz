#pragma checksum "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1b166eb9df9449c2ea4e81679f1b5f5426f43983"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_MoreReports), @"mvc.1.0.view", @"/Views/Home/MoreReports.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/MoreReports.cshtml", typeof(AspNetCore.Views_Home_MoreReports))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1b166eb9df9449c2ea4e81679f1b5f5426f43983", @"/Views/Home/MoreReports.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a2e29dedaf5a7a7167ab403312e09f21f298b081", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_MoreReports : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Terz.Models.Home.HomeView>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("width", new global::Microsoft.AspNetCore.Html.HtmlString("100"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("height", new global::Microsoft.AspNetCore.Html.HtmlString("77"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("FotoPerfil"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/images/app.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 2 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
 foreach (Terz_DataBaseLayer.Report report in Model.Reports.Reports)
{

#line default
#line hidden
            BeginContext(107, 41, true);
            WriteLiteral("    <div class=\"ReportSearch\" id=\"Report\"");
            EndContext();
            BeginWriteAttribute("onclick", " onclick=\"", 148, "\"", 182, 3);
            WriteAttributeValue("", 158, "goToReport(\'", 158, 12, true);
#line 4 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
WriteAttributeValue("", 170, report.Id, 170, 10, false);

#line default
#line hidden
            WriteAttributeValue("", 180, "\')", 180, 2, true);
            EndWriteAttribute();
            BeginContext(183, 3, true);
            WriteLiteral(">\r\n");
            EndContext();
#line 5 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
         if (report.Imagem == "" || report.Imagem == null)
        {

#line default
#line hidden
            BeginContext(257, 12, true);
            WriteLiteral("            ");
            EndContext();
            BeginContext(269, 78, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "188aab783dc147488ed7e56cf3e0f926", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(347, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 8 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
        }
        else
        {

#line default
#line hidden
            BeginContext(385, 59, true);
            WriteLiteral("            <img width=\"100\" height=\"77\" class=\"FotoPerfil\"");
            EndContext();
            BeginWriteAttribute("src", " src=\"", 444, "\"", 464, 1);
#line 11 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
WriteAttributeValue("", 450, report.Imagem, 450, 14, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(465, 5, true);
            WriteLiteral(" />\r\n");
            EndContext();
#line 12 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
        }

#line default
#line hidden
            BeginContext(481, 53, true);
            WriteLiteral("        <label style=\"width:250px\" class=\"LabelDesc\">");
            EndContext();
            BeginContext(535, 13, false);
#line 13 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
                                                Write(report.Titulo);

#line default
#line hidden
            EndContext();
            BeginContext(548, 83, true);
            WriteLiteral("</label>\r\n        <label style=\"width:175px; margin-right:25px;\" class=\"LabelDesc\">");
            EndContext();
            BeginContext(632, 26, false);
#line 14 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
                                                                    Write(report.Visualizacoes.Count);

#line default
#line hidden
            EndContext();
            BeginContext(658, 24, true);
            WriteLiteral(" Vizualizações</label>\r\n");
            EndContext();
#line 15 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
         if (report.Avaliacoes.Count > 0)
        {
            int i = 1;
            while (i <= report.Avaliacoes.Select(a => a.Nota).Average())
            {

#line default
#line hidden
            BeginContext(849, 58, true);
            WriteLiteral("                <span class=\"fa fa-star checked\"></span>\r\n");
            EndContext();
#line 21 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
                i++;
            }

            while (i <= 5)
            {

#line default
#line hidden
            BeginContext(989, 50, true);
            WriteLiteral("                <span class=\"fa fa-star\"></span>\r\n");
            EndContext();
#line 27 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
                i++;
            }

#line default
#line hidden
            BeginContext(1076, 38, true);
            WriteLiteral("            <label style=\"width:75px\">");
            EndContext();
            BeginContext(1115, 47, false);
#line 29 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
                                 Write(report.Avaliacoes.Select(a => a.Nota).Average());

#line default
#line hidden
            EndContext();
            BeginContext(1162, 14, true);
            WriteLiteral(" / 5</label>\r\n");
            EndContext();
#line 30 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
        }
        else
        {

#line default
#line hidden
            BeginContext(1212, 60, true);
            WriteLiteral("            <label style=\"width:75px\">Não Avaliado</label>\r\n");
            EndContext();
#line 34 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
        }

#line default
#line hidden
            BeginContext(1283, 16, true);
            WriteLiteral("\r\n\r\n    </div>\r\n");
            EndContext();
#line 38 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
}

#line default
#line hidden
            BeginContext(1302, 43, true);
            WriteLiteral("\r\n<label id=\"maxRank\" style=\"display:none\">");
            EndContext();
            BeginContext(1346, 47, false);
#line 40 "C:\Users\artur\source\repos\Terz\Terz\Views\Home\MoreReports.cshtml"
                                    Write(Model.Reports.Reports.Select(r => r.Rank).Max());

#line default
#line hidden
            EndContext();
            BeginContext(1393, 8, true);
            WriteLiteral("</label>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Terz.Models.Home.HomeView> Html { get; private set; }
    }
}
#pragma warning restore 1591
