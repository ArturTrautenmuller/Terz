#pragma checksum "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "9f3d945c586a0641fbb7cdd3168a86d7f4bfddca"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Odag_OdagPage), @"mvc.1.0.view", @"/Views/Odag/OdagPage.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Odag/OdagPage.cshtml", typeof(AspNetCore.Views_Odag_OdagPage))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9f3d945c586a0641fbb7cdd3168a86d7f4bfddca", @"/Views/Odag/OdagPage.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a2e29dedaf5a7a7167ab403312e09f21f298b081", @"/Views/_ViewImports.cshtml")]
    public class Views_Odag_OdagPage : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Terz.Models.Odag.OdagPageView>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(158, 11, true);
            WriteLiteral("\r\n\r\n<div>\r\n");
            EndContext();
#line 7 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
     foreach (Terz_Core.OdagValues odagValues in Model.OdagValuesCollection.OdagValues)
    {

#line default
#line hidden
            BeginContext(265, 78, true);
            WriteLiteral("        <div class=\"dropdown\" style=\"padding-top: 10px;\">\r\n            <button");
            EndContext();
            BeginWriteAttribute("onclick", " onclick=\"", 343, "\"", 388, 3);
            WriteAttributeValue("", 353, "showOdagOptions(\'", 353, 17, true);
#line 10 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 370, odagValues.Name, 370, 16, false);

#line default
#line hidden
            WriteAttributeValue("", 386, "\')", 386, 2, true);
            EndWriteAttribute();
            BeginContext(389, 53, true);
            WriteLiteral(" class=\"dropbtn\" style=\"width: 220px; height: 40px;\">");
            EndContext();
            BeginContext(443, 15, false);
#line 10 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
                                                                                                                 Write(odagValues.Name);

#line default
#line hidden
            EndContext();
            BeginContext(458, 52, true);
            WriteLiteral("</button>\r\n            <div class=\"dropdown-content\"");
            EndContext();
            BeginWriteAttribute("id", " id=\"", 510, "\"", 536, 2);
            WriteAttributeValue("", 515, "Odag-", 515, 5, true);
#line 11 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 520, odagValues.Name, 520, 16, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(537, 71, true);
            WriteLiteral(" style=\"overflow-y: auto; max-height: 300px;\">\r\n                <button");
            EndContext();
            BeginWriteAttribute("onclick", " onclick=\"", 608, "\"", 663, 3);
            WriteAttributeValue("", 618, "clearOdagFilterSelections(\'", 618, 27, true);
#line 12 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 645, odagValues.Name, 645, 16, false);

#line default
#line hidden
            WriteAttributeValue("", 661, "\')", 661, 2, true);
            EndWriteAttribute();
            BeginContext(664, 160, true);
            WriteLiteral(" class=\"btn btn-block btn-danger btn-sm\" style=\"margin-top: 3px; margin-bottom: 3px;\">Limpar</button>\r\n                <input type=\"text\" placeholder=\"Search..\"");
            EndContext();
            BeginWriteAttribute("id", " id=\"", 824, "\"", 855, 2);
            WriteAttributeValue("", 829, "InputOdag-", 829, 10, true);
#line 13 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 839, odagValues.Name, 839, 16, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginWriteAttribute("onkeyup", " onkeyup=\"", 856, "\"", 904, 3);
            WriteAttributeValue("", 866, "filterOdagFunction(\'", 866, 20, true);
#line 13 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 886, odagValues.Name, 886, 16, false);

#line default
#line hidden
            WriteAttributeValue("", 902, "\')", 902, 2, true);
            EndWriteAttribute();
            BeginContext(905, 3, true);
            WriteLiteral(">\r\n");
            EndContext();
#line 14 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
                 foreach (string value in odagValues.Values)
                {

#line default
#line hidden
            BeginContext(989, 22, true);
            WriteLiteral("                    <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 1011, "\"", 1025, 2);
            WriteAttributeValue("", 1018, "#", 1018, 1, true);
#line 16 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1019, value, 1019, 6, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginWriteAttribute("id", " id=\"", 1026, "\"", 1054, 3);
#line 16 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1031, odagValues.Name, 1031, 16, false);

#line default
#line hidden
            WriteAttributeValue("", 1047, ",", 1047, 1, true);
#line 16 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1048, value, 1048, 6, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginWriteAttribute("onclick", " onclick=\"", 1055, "\"", 1107, 5);
            WriteAttributeValue("", 1065, "filterOdagValue(\'", 1065, 17, true);
#line 16 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1082, odagValues.Name, 1082, 16, false);

#line default
#line hidden
            WriteAttributeValue("", 1098, ",", 1098, 1, true);
#line 16 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1099, value, 1099, 6, false);

#line default
#line hidden
            WriteAttributeValue("", 1105, "\')", 1105, 2, true);
            EndWriteAttribute();
            BeginContext(1108, 1, true);
            WriteLiteral(">");
            EndContext();
            BeginContext(1110, 5, false);
#line 16 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
                                                                                                                   Write(value);

#line default
#line hidden
            EndContext();
            BeginContext(1115, 6, true);
            WriteLiteral("</a>\r\n");
            EndContext();
#line 17 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
                }

#line default
#line hidden
            BeginContext(1140, 58, true);
            WriteLiteral("\r\n\r\n                \r\n            </div>\r\n        </div>\r\n");
            EndContext();
#line 23 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
    }

#line default
#line hidden
            BeginContext(1205, 2486, true);
            WriteLiteral(@"

</div>


<script>
    var OdagSelections = {};
    OdagSelections[""odagValues""] = [];

    function showOdagOptions(name) {
        
        document.getElementById(""Odag-""+name).classList.toggle(""show"");
    }

    function clearOdagFilterSelections(name) {
        var pos = OdagSelections.odagValues.findIndex(i => i.name == name);
        OdagSelections.odagValues[pos].values = [];

        var cells = document.getElementById(""Odag-""+name).childNodes;
        for (var i = 0; i < cells.length; i++) {
            if (cells[i].nodeName.toLowerCase() == ""a"") {
                cells[i].style.backgroundColor = ""white"";
            }
        }
    }

    function filterOdagFunction(name) {
        var input, filter, ul, li, a, i;
        input = document.getElementById(""InputOdag-"" + name);
        filter = input.value.toUpperCase();
        div = document.getElementById(""Odag-""+name);
        a = div.getElementsByTagName(""a"");
        for (i = 0; i < a.length; i++) {
           ");
            WriteLiteral(@" txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = """";
            } else {
                a[i].style.display = ""none"";
            }
        }
    }

    function filterOdagValue(cellValue) {
        var odagName = cellValue.split("","")[0];
        var value = cellValue.split("","")[1];

        if (document.getElementById(cellValue).style.backgroundColor == 'green') {
            document.getElementById(cellValue).style.backgroundColor = 'white';

            var pos = OdagSelections.odagValues.findIndex(i => i.name == odagName);
            var posValue = OdagSelections.odagValues[pos].values.indexOf(value);
            OdagSelections.odagValues[pos].values.splice(posValue, 1);

            

        }
        else {
            document.getElementById(cellValue).style.backgroundColor = 'green';
            
            if (OdagSelections.odagValues.filter(function (x) { return x.name ==");
            WriteLiteral(@" odagName }).length > 0) {
                var pos = OdagSelections.odagValues.findIndex(i => i.name == odagName);
                OdagSelections.odagValues[pos].values.push(value);

            }
            else {

                var odagValue = { name: odagName, values: [] };
                odagValue.values.push(value);
                OdagSelections.odagValues.push(odagValue);
            }
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Terz.Models.Odag.OdagPageView> Html { get; private set; }
    }
}
#pragma warning restore 1591
