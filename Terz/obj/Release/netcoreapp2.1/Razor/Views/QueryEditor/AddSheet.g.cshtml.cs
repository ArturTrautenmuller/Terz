#pragma checksum "C:\Users\artur\source\repos\Terz\Terz\Views\QueryEditor\AddSheet.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "65d7f070527a3ef6fcca6b5c38299c41597c007a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_QueryEditor_AddSheet), @"mvc.1.0.view", @"/Views/QueryEditor/AddSheet.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/QueryEditor/AddSheet.cshtml", typeof(AspNetCore.Views_QueryEditor_AddSheet))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"65d7f070527a3ef6fcca6b5c38299c41597c007a", @"/Views/QueryEditor/AddSheet.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a2e29dedaf5a7a7167ab403312e09f21f298b081", @"/Views/_ViewImports.cshtml")]
    public class Views_QueryEditor_AddSheet : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Terz.Models.QueryEditor.AddSheetView>
    {
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(165, 245, true);
            WriteLiteral("\r\n\r\n\r\n<label>Nome da Pasta:</label><br />\r\n<input type=\"text\" class=\"form-control\" style=\"width:200px\" id=\"SheetName\" /><br />\r\n<label>Selecione o DataFrame:</label>\r\n<br />\r\n<select class=\"form-control\" style=\"width:200px\" id=\"DataFrameName\">\r\n");
            EndContext();
#line 12 "C:\Users\artur\source\repos\Terz\Terz\Views\QueryEditor\AddSheet.cshtml"
     foreach (string df in Model.DataFrames)
    {

#line default
#line hidden
            BeginContext(463, 8, true);
            WriteLiteral("        ");
            EndContext();
            BeginContext(471, 32, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f2cb056e303d4a5da6f06374bc8dc0de", async() => {
                BeginContext(492, 2, false);
#line 14 "C:\Users\artur\source\repos\Terz\Terz\Views\QueryEditor\AddSheet.cshtml"
                       Write(df);

#line default
#line hidden
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            BeginWriteTagHelperAttribute();
#line 14 "C:\Users\artur\source\repos\Terz\Terz\Views\QueryEditor\AddSheet.cshtml"
           WriteLiteral(df);

#line default
#line hidden
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = __tagHelperStringValueBuffer;
            __tagHelperExecutionContext.AddTagHelperAttribute("value", __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(503, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 15 "C:\Users\artur\source\repos\Terz\Terz\Views\QueryEditor\AddSheet.cshtml"
    }

#line default
#line hidden
            BeginContext(512, 9, true);
            WriteLiteral("</select>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Terz.Models.QueryEditor.AddSheetView> Html { get; private set; }
    }
}
#pragma warning restore 1591
