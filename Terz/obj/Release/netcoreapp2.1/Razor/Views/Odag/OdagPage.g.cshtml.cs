#pragma checksum "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "786516b9e924ab567a8cc2976fbc39d1f7e1b2bd"
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"786516b9e924ab567a8cc2976fbc39d1f7e1b2bd", @"/Views/Odag/OdagPage.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a2e29dedaf5a7a7167ab403312e09f21f298b081", @"/Views/_ViewImports.cshtml")]
    public class Views_Odag_OdagPage : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Terz.Models.Odag.OdagPageView>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(158, 189, true);
            WriteLiteral("\r\n\r\n<div>\r\n    <div style=\"margin-top:10px;margin-bottom:25px\">\r\n        <label style=\"width:100%;text-align:center;color:#b5b5b5\">Selecione os Valores Correspondentes</label>\r\n    </div>\r\n");
            EndContext();
#line 10 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
     foreach (Terz_Core.OdagValues odagValues in Model.OdagValuesCollection.OdagValues)
    {

#line default
#line hidden
            BeginContext(443, 88, true);
            WriteLiteral("        <div class=\"dropdown\" style=\"padding-top: 10px;width:100%\">\r\n            <button");
            EndContext();
            BeginWriteAttribute("onclick", " onclick=\"", 531, "\"", 576, 3);
            WriteAttributeValue("", 541, "showOdagOptions(\'", 541, 17, true);
#line 13 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 558, odagValues.Name, 558, 16, false);

#line default
#line hidden
            WriteAttributeValue("", 574, "\')", 574, 2, true);
            EndWriteAttribute();
            BeginContext(577, 69, true);
            WriteLiteral(" class=\"dropbtn\" style=\"width:100%; height: 40px; text-align:center\">");
            EndContext();
            BeginContext(647, 15, false);
#line 13 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
                                                                                                                                 Write(odagValues.Name);

#line default
#line hidden
            EndContext();
            BeginContext(662, 52, true);
            WriteLiteral("</button>\r\n            <div class=\"dropdown-content\"");
            EndContext();
            BeginWriteAttribute("id", " id=\"", 714, "\"", 740, 2);
            WriteAttributeValue("", 719, "Odag-", 719, 5, true);
#line 14 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 724, odagValues.Name, 724, 16, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(741, 71, true);
            WriteLiteral(" style=\"overflow-y: auto; max-height: 300px;\">\r\n                <button");
            EndContext();
            BeginWriteAttribute("onclick", " onclick=\"", 812, "\"", 867, 3);
            WriteAttributeValue("", 822, "clearOdagFilterSelections(\'", 822, 27, true);
#line 15 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 849, odagValues.Name, 849, 16, false);

#line default
#line hidden
            WriteAttributeValue("", 865, "\')", 865, 2, true);
            EndWriteAttribute();
            BeginContext(868, 160, true);
            WriteLiteral(" class=\"btn btn-block btn-danger btn-sm\" style=\"margin-top: 3px; margin-bottom: 3px;\">Limpar</button>\r\n                <input type=\"text\" placeholder=\"Search..\"");
            EndContext();
            BeginWriteAttribute("id", " id=\"", 1028, "\"", 1059, 2);
            WriteAttributeValue("", 1033, "InputOdag-", 1033, 10, true);
#line 16 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1043, odagValues.Name, 1043, 16, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginWriteAttribute("onkeyup", " onkeyup=\"", 1060, "\"", 1108, 3);
            WriteAttributeValue("", 1070, "filterOdagFunction(\'", 1070, 20, true);
#line 16 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1090, odagValues.Name, 1090, 16, false);

#line default
#line hidden
            WriteAttributeValue("", 1106, "\')", 1106, 2, true);
            EndWriteAttribute();
            BeginContext(1109, 3, true);
            WriteLiteral(">\r\n");
            EndContext();
#line 17 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
                 foreach (string value in odagValues.Values)
                {

#line default
#line hidden
            BeginContext(1193, 22, true);
            WriteLiteral("                    <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 1215, "\"", 1229, 2);
            WriteAttributeValue("", 1222, "#", 1222, 1, true);
#line 19 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1223, value, 1223, 6, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginWriteAttribute("id", " id=\"", 1230, "\"", 1258, 3);
#line 19 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1235, odagValues.Name, 1235, 16, false);

#line default
#line hidden
            WriteAttributeValue("", 1251, ",", 1251, 1, true);
#line 19 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1252, value, 1252, 6, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginWriteAttribute("onclick", " onclick=\"", 1259, "\"", 1311, 5);
            WriteAttributeValue("", 1269, "filterOdagValue(\'", 1269, 17, true);
#line 19 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1286, odagValues.Name, 1286, 16, false);

#line default
#line hidden
            WriteAttributeValue("", 1302, ",", 1302, 1, true);
#line 19 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
WriteAttributeValue("", 1303, value, 1303, 6, false);

#line default
#line hidden
            WriteAttributeValue("", 1309, "\')", 1309, 2, true);
            EndWriteAttribute();
            BeginContext(1312, 1, true);
            WriteLiteral(">");
            EndContext();
            BeginContext(1314, 5, false);
#line 19 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
                                                                                                                   Write(value);

#line default
#line hidden
            EndContext();
            BeginContext(1319, 6, true);
            WriteLiteral("</a>\r\n");
            EndContext();
#line 20 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
                }

#line default
#line hidden
            BeginContext(1344, 58, true);
            WriteLiteral("\r\n\r\n                \r\n            </div>\r\n        </div>\r\n");
            EndContext();
#line 26 "C:\Users\artur\source\repos\Terz\Terz\Views\Odag\OdagPage.cshtml"
    }

#line default
#line hidden
            BeginContext(1409, 2486, true);
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
