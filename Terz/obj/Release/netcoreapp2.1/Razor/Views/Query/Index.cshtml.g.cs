#pragma checksum "C:\Users\artur\source\repos\Terz\Terz\Views\Query\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "82e1f5f51d7cca018dda8bbaf2b64f177b97daa3"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Query_Index), @"mvc.1.0.view", @"/Views/Query/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Query/Index.cshtml", typeof(AspNetCore.Views_Query_Index))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"82e1f5f51d7cca018dda8bbaf2b64f177b97daa3", @"/Views/Query/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a2e29dedaf5a7a7167ab403312e09f21f298b081", @"/Views/_ViewImports.cshtml")]
    public class Views_Query_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Terz.Models.Query.QueryView>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/css/Report.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/LTE/plugins/fontawesome-free/css/all.min.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/LTE/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/LTE/plugins/datatables-responsive/css/responsive.bootstrap4.min.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/LTE/plugins/datatables/jquery.dataTables.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/LTE/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/LTE/plugins/datatables-responsive/js/dataTables.responsive.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/LTE/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_9 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/js/Operations.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_10 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/js/Variables.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_11 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/js/Filter.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_12 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/js/Indicator.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_13 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/js/Graph.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_14 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/js/QueryTable.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_15 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/terz/js/TextBlock.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
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
            BeginContext(158, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(160, 54, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa39290", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(214, 223, true);
            WriteLiteral("\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\">\r\n\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n");
            EndContext();
            BeginContext(437, 82, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa310781", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(519, 8, true);
            WriteLiteral("\r\n\r\n\r\n\r\n");
            EndContext();
            BeginContext(527, 98, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa312047", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(625, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(627, 105, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa313302", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(732, 958, true);
            WriteLiteral(@"
<!-- Theme style -->



<style>
    .checked {
        color: orange;
    }

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
        -ms-transform: translate(-50%,-50%);
    }
</style>

<div id=""overlay"">

    <div id=""text""><div style=""margin-left:22px"" class=""loader""></div> Calculando...</div>
</div>

<nav class=""navbar navbar-default navbar-fixed-top"">
    <div class=""container"">

        <div class=""navbar-header"">




            <h4 class=""brand brand-name navbar-left"" style=""margin-top:28px; max-width:500px"">");
            EndContext();
            BeginContext(1691, 19, false);
#line 64 "C:\Users\artur\source\repos\Terz\Terz\Views\Query\Index.cshtml"
                                                                                         Write(Model.Report.Titulo);

#line default
#line hidden
            EndContext();
            BeginContext(1710, 163, true);
            WriteLiteral("</h4>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse navbar-right\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n\r\n                <li><a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 1873, "\"", 1907, 2);
            WriteAttributeValue("", 1880, "../terz/Report?id=", 1880, 18, true);
#line 69 "C:\Users\artur\source\repos\Terz\Terz\Views\Query\Index.cshtml"
WriteAttributeValue("", 1898, Model.Id, 1898, 9, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(1908, 2180, true);
            WriteLiteral(@" style=""color:gray;text-decoration:none; margin-left:10px""><i class=""fas fa-chart-area""></i> Report</a></li>
                <li><a href=""#"" style=""color:gray;text-decoration:none; margin-left:10px"" onclick=""ShowInfo()"">Sobre</a></li>
                <li><a href=""#"" style=""color:gray;text-decoration:none; margin-left:10px"" onclick=""ShowReference()"">Referencias</a></li>

                <li>
                    <div id=""Pages"" style=""margin-left:5%;margin-top:23px;"">
                        <div class=""dropdown"">
                            <button class=""btn btn-primary dropdown-toggle"" type=""button"" data-toggle=""dropdown"">
                                Paginas
                                <span class=""caret""></span>
                            </button>
                            <ul id=""sheetList"" class=""dropdown-menu""></ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>


<div style=""margin-top:85");
            WriteLiteral(@"px"">
    <button class=""btn btn-block btn-info"" style=""width:230px;margin-left:10px;"" name=""pButton"" onclick=""Pesquisar()""><i class=""fas fa-search""></i> Pesquisar</button><br />
    <div id=""Filters"">



    </div>
    <div id=""Graphs"">

    </div>
</div>




<script src=""https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js""></script>
<script src=""https://unpkg.com/mathjs/dist/math.min.js""></script>
<script language=""JavaScript"" src=""https://cdnjs.cloudflare.com/ajax/libs/mathjs/3.2.1/math.js""></script>
<script src=""https://cdnjs.cloudflare.com/ajax/libs/d3plus/2.0.0-alpha.14/d3plus.full.js""></script>
<script src=""https://d3js.org/d3-hierarchy.v1.min.js""></script>
<script type=""text/javascript"" src=""https://www.gstatic.com/charts/loader.js""></script>
<link rel=""stylesheet"" href=""https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"">

<script src=""https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js""></script>
<script src=""https://cdnjs.cloudf");
            WriteLiteral("lare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js\"></script>\r\n\r\n<script src=\"https://cdn.jsdelivr.net/npm/alasql@0.6\"></script>\r\n\r\n");
            EndContext();
            BeginContext(4088, 78, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa318894", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4166, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(4168, 89, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa320074", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4257, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(4259, 96, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa321254", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_7);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4355, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(4357, 96, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa322434", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_8);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4453, 29, true);
            WriteLiteral("\r\n<!-- AdminLTE App -->\r\n\r\n\r\n");
            EndContext();
            BeginContext(4482, 47, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa323648", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_9);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4529, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(4531, 46, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa324828", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_10);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4577, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(4579, 43, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa326009", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_11);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4622, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(4624, 46, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa327190", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_12);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4670, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(4672, 42, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa328371", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_13);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4714, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(4716, 47, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa329552", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_14);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4763, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(4765, 46, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82e1f5f51d7cca018dda8bbaf2b64f177b97daa330733", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_15);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4811, 1036, true);
            WriteLiteral(@"
<script>
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function showOptions(filterId) {
        console.log(filterId);
        document.getElementById(filterId).classList.toggle(""show"");
    }

    function filterFunction(filterId) {
        var input, filter, ul, li, a, i;
        input = document.getElementById(""Input-"" + filterId);
        filter = input.value.toUpperCase();
        div = document.getElementById(filterId);
        a = div.getElementsByTagName(""a"");
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = """";
            } else {
                a[i].style.display = ""none"";
            }
        }
    }
</script>


<script>

     function ShowInfo() {
        var form;
        $.ajax(
            {
                type: 'POST',
                url: 'Repo");
            WriteLiteral("rt/Sobre?id=");
            EndContext();
            BeginContext(5848, 8, false);
#line 165 "C:\Users\artur\source\repos\Terz\Terz\Views\Query\Index.cshtml"
                                 Write(Model.Id);

#line default
#line hidden
            EndContext();
            BeginContext(5856, 608, true);
            WriteLiteral(@"',
                dataType: 'html',
                cache: false,
                async: true,

                success: function (data) {
                    form = data;
                    bootbox.confirm(form, function (result) {
                        if (result) {

                            console.log(""close info"");

                        }
                    });

                },


            });
    }

        function ShowReference() {
        var form;
        $.ajax(
            {
                type: 'POST',
                url: 'Report/Referencias?id=");
            EndContext();
            BeginContext(6465, 8, false);
#line 191 "C:\Users\artur\source\repos\Terz\Terz\Views\Query\Index.cshtml"
                                       Write(Model.Id);

#line default
#line hidden
            EndContext();
            BeginContext(6473, 3414, true);
            WriteLiteral(@"',
                dataType: 'html',
                cache: false,
                async: true,

                success: function (data) {
                    form = data;
                    bootbox.confirm(form, function (result) {
                        if (result) {

                            console.log(""close info"");

                        }
                    });

                },


            });
    }

    function buildSheetMenu() {
        var sheets = QueryConfig.querySheets;
      
        for (var i = 0; i < sheets.length; i++) {
            var liSheet = document.createElement(""li"");
            var aSheet = document.createElement(""a"");
            aSheet.appendChild(document.createTextNode(sheets[i].name));
            aSheet.setAttribute(""href"", ""#"");
            aSheet.setAttribute(""onclick"", ""changeSheet('"" + sheets[i].order + ""')"");
            liSheet.appendChild(aSheet);
            document.getElementById(""sheetList"").appendChild(liSheet);

   ");
            WriteLiteral(@"     }
    }

    function changeSheet(sheetOrder) {
        on();
        QueryCurrentSheet = sheetOrder;
        reloadSheet();
        off();
    }

    function reloadSheet() {
        buildQueryFilter(QueryCurrentSheet);
        buildQueryTable(QueryCurrentSheet);
    }

    function filterValue(cellValue) {
        if (document.getElementById(cellValue).style.backgroundColor == 'green') {
            document.getElementById(cellValue).style.backgroundColor = 'white';
            removeFilter(cellValue);
           
        }
        else {
            document.getElementById(cellValue).style.backgroundColor = 'green';
            addFilter(cellValue);
           
        }
    }

    function addFilter(cellValue) {
        var valueMap = cellValue.split("","");
        
        var field = valueMap[0];
        var value = valueMap[1];

        if (QuerySelections[QueryCurrentSheet] == null) QuerySelections[QueryCurrentSheet] = [];

        if (QuerySelections[QueryCurre");
            WriteLiteral(@"ntSheet].filter(function (x) { return x.field == field }).length == 0) {
             var filterBlock = { field: field, values: [] };
             filterBlock.values.push(value);
            QuerySelections[QueryCurrentSheet].push(filterBlock);
            }
        else {
            var pos = QuerySelections[QueryCurrentSheet].findIndex(i => i.field == field);
            QuerySelections[QueryCurrentSheet][pos].values.push(value);
            }
        
        
    }

    function removeFilter(cellValue) {
        var valueMap = cellValue.split("","");

        var field = valueMap[0];
        var value = valueMap[1];

        var pos = QuerySelections[QueryCurrentSheet].findIndex(i => i.field == field);
        var posValue = QuerySelections[QueryCurrentSheet][pos].values.indexOf(value);
        QuerySelections[QueryCurrentSheet][pos].values.splice(posValue, 1);
    }

    function on() {
        document.getElementById(""overlay"").style.display = ""block"";
    }

    function off(");
            WriteLiteral(@") {
        document.getElementById(""overlay"").style.display = ""none"";
    }

    function Pesquisar() {
        on();

        var queryContent = {};
        queryContent[""Parameters""] = QuerySelections[QueryCurrentSheet];

        $.ajax(
            {
                type: 'POST',
                url: 'Query/ExecuteQuery?id=");
            EndContext();
            BeginContext(9888, 8, false);
#line 301 "C:\Users\artur\source\repos\Terz\Terz\Views\Query\Index.cshtml"
                                       Write(Model.Id);

#line default
#line hidden
            EndContext();
            BeginContext(9896, 774, true);
            WriteLiteral(@"&sheet='+ QueryCurrentSheet,
                dataType: 'json',
                cache: false,
                async: true,
                contentType:""application/json"",
                success: function (data) {

                    QueryData[QueryCurrentSheet] = data;
                    buildQueryTable(QueryCurrentSheet);

                    off();
                },
                data: JSON.stringify(queryContent)

            });
    }

    function init() {
        buildSheetMenu();
        buildQueryFilter(QueryCurrentSheet);
        buildQueryTable(QueryCurrentSheet);
    }

    function GetQueryConfig(){

        on();
        $.ajax(
            {
                type: 'POST',
                url: 'Query/GetQueryConfig?id=");
            EndContext();
            BeginContext(10671, 8, false);
#line 330 "C:\Users\artur\source\repos\Terz\Terz\Views\Query\Index.cshtml"
                                         Write(Model.Id);

#line default
#line hidden
            EndContext();
            BeginContext(10679, 335, true);
            WriteLiteral(@"',
                dataType: 'json',
                cache: false,
                async: true,
                success: function (data) {

                    QueryConfig = data;




                    init();
                    off();
                }

            });


    }

    GetQueryConfig();
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Terz.Models.Query.QueryView> Html { get; private set; }
    }
}
#pragma warning restore 1591
