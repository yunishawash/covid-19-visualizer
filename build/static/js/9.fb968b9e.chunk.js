(this["webpackJsonpcovid-19-meter"]=this["webpackJsonpcovid-19-meter"]||[]).push([[9],{378:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),n=window.$;t.default=function(e){var t=e.xl,a=e.lg;return Object(l.useEffect)((function(){n("#dataTable").DataTable({autoWidth:!1,ajax:{url:"https://api.covid19api.com/summary",type:"get",dataSrc:function(e){return e.Countries}},columns:[{data:"Country"},{data:"NewConfirmed"},{data:"TotalConfirmed"},{data:"NewDeaths"},{data:"NewRecovered"},{data:"TotalRecovered"}],columnDefs:[{targets:1,createdCell:function(e,t,a,l,c){n(e).css("background-color","#F4D03F").css("color","#fff")}},{targets:3,createdCell:function(e,t,a,l,c){n(e).css("background-color","#e35b5a").css("color","#fff")}},{targets:4,createdCell:function(e,t,a,l,c){n(e).css("background-color","#1BBC9B").css("color","#fff")}}]})}),["https://api.covid19api.com/summary"]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-xl-".concat(t," col-lg-").concat(a)},c.a.createElement("div",{className:"card shadow mb-4"},c.a.createElement("div",{className:"card-header py-3"},c.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Covid19 Countries Cases ")),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table table-bordered countries-cases-table",id:"dataTable",width:"100%",cellSpacing:"0"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Country Name"),c.a.createElement("th",null,"New Confirmed"),c.a.createElement("th",null,"Total Confirmed"),c.a.createElement("th",null,"New Deaths"),c.a.createElement("th",null,"New Recovered"),c.a.createElement("th",null,"Total Recovered"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Tiger Nixon"),c.a.createElement("td",null,"System Architect"),c.a.createElement("td",null,"Edinburgh"),c.a.createElement("td",null,"61"),c.a.createElement("td",null,"2011/04/25"),c.a.createElement("td",null,"$320,800")))))))))}}}]);
//# sourceMappingURL=9.fb968b9e.chunk.js.map