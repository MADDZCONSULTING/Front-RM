(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{120:function(e,a,t){"use strict";var l=t(26),n=t(8),r=t(3),c=t.n(r),m=t(1),u=t.n(m),d=(t(18),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),o=function(e){var a,t=e.tag,r=e.className,m=e.type,o=Object(n.a)(e,["tag","className","type"]),i=c()(Object(l.a)({},m,!!m),r);return a=t||(!t&&d[m]?d[m]:"p"),u.a.createElement(a,Object.assign({},o,{className:i}))};o.defaultProps={type:"p"},a.a=o},121:function(e,a,t){"use strict";var l=t(8),n=t(1),r=t.n(n),c=(t(18),t(21)),m=t(127),u=t(128),d=t(120),o=c.a.create("page"),i=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,c=e.className,i=e.children,E=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),s=o.b("px-3",c);return r.a.createElement(n,Object.assign({className:s},E),r.a.createElement("div",{className:o.e("header")},a&&"string"===typeof a?r.a.createElement(d.a,{type:"h1",className:o.e("title")},a):a,t&&r.a.createElement(m.a,{className:o.e("breadcrumb")},r.a.createElement(u.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,l=e.active;return r.a.createElement(u.a,{key:a,active:l},t)}))),i)};i.defaultProps={tag:"div",title:""},a.a=i},125:function(e,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return n});var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return"undefined"===typeof window?null:window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},n=function(){return["primary","secondary","success","info","warning","danger"]}},129:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var l=t(130),n=t.n(l),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return n()().number({min:e,max:a})}},132:function(e,a,t){"use strict";t.d(a,"a",function(){return c}),t.d(a,"b",function(){return m});var l=t(145),n=t.n(l),r=t(125),c=function(e){var a=e.labels,t=e.data;return function(e){var l=e.getContext("2d").createLinearGradient(0,0,0,240);return l.addColorStop(0,n.a.helpers.color("#00c9ff").alpha(1).rgbString()),l.addColorStop(1,n.a.helpers.color("#00c9ff").alpha(.2).rgbString()),{labels:a,datasets:[{data:t,label:"My First dataset",borderColor:Object(r.a)("primary"),backgroundColor:l,fill:"origin"}]}}},m={tooltips:{intersect:!1},animation:{duration:0},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}}},458:function(e,a,t){"use strict";t.r(a);var l=t(23),n=t(121),r=(t(132),t(1)),c=t.n(r),m=t(125),u=t(129),d=t(140),o=t(113),i=t(114),E=t(147),s=t(142),b=t(143),h=t(144),f=t(98),y=t(103),p=t(99),j=t(186),g=t(176),v=t(60),O=t(375),H=t.n(O),A=["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin"],x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{labels:A,datasets:[Object(l.a)({label:"Bon ",backgroundColor:Object(m.a)("primary"),borderColor:Object(m.a)("primary"),borderWidth:1,data:[Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)()]},e),Object(l.a)({label:"Moyen",backgroundColor:Object(m.a)("secondary"),borderColor:Object(m.a)("secondary"),borderWidth:1,data:[Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)()]},e),Object(l.a)({label:"Mauvais",backgroundColor:Object(m.a)("info"),borderColor:Object(m.a)("info"),borderWidth:1,data:[Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)(),Object(u.a)()]},e)]}};a.default=function(){return c.a.createElement(n.a,{title:"Performances livreurs"},c.a.createElement(o.a,null,c.a.createElement(i.a,null),c.a.createElement(i.a,{lg:"4",md:"12",sm:"12",xs:"12"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(E.a,null,c.a.createElement(s.a,{caret:!0}," Selctionner hub"),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Hub Alger"),c.a.createElement(h.a,null,"Hub Telemcen"),c.a.createElement(h.a,null,"Hub Oran"),c.a.createElement(h.a,null,"Hub S\xe9tif"),c.a.createElement(h.a,null,"Hub Annaba")))))),c.a.createElement(o.a,null,c.a.createElement(i.a,{xl:6,lg:12,md:12},c.a.createElement(f.a,null,c.a.createElement(y.a,null,"Evolution r\xe9elle des cat\xe9gories "),c.a.createElement(p.a,null,c.a.createElement(d.Line,{data:x({fill:!1})})))),c.a.createElement(i.a,{xl:6,lg:12,md:12},c.a.createElement(f.a,null,c.a.createElement(y.a,null,"Pourcentage r\xe9el des cat\xe9gories "),c.a.createElement(p.a,null,c.a.createElement(d.Pie,{data:{datasets:[{data:[Object(u.a)(),Object(u.a)(),Object(u.a)()],backgroundColor:[Object(m.a)("primary"),Object(m.a)("secondary"),Object(m.a)("info")],label:"Dataset 1"}],labels:["Bon","Moyen","Mauvais"]}}))))),c.a.createElement(o.a,null,c.a.createElement(i.a,{lg:"4",md:"12",sm:"12",xs:"12"},c.a.createElement(y.a,{className:"text-white bg-primary"}," Bons livreurs "),c.a.createElement(f.a,{body:!0},c.a.createElement(j.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Livreur"),c.a.createElement("th",null,"Performance"),c.a.createElement("th",null,"Retard"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")))),c.a.createElement(H.a,null,c.a.createElement("div",{className:"d-flex justify-content-around "},c.a.createElement(E.a,null,c.a.createElement(s.a,{caret:!0,color:"primary"}," Filtrer"),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Performance croissant"),c.a.createElement(h.a,null,"Performance d\xe9croissant"),c.a.createElement(h.a,null,"Retard croissant"),c.a.createElement(h.a,null,"Retard d\xe9croissant"))),c.a.createElement(g.a,{className:"mr-2 "},c.a.createElement(v.a,{color:"primary"},"Pr\xe9c"),c.a.createElement(v.a,{color:"primary"},"Suiv")))))),c.a.createElement(i.a,{lg:"4",md:"12",sm:"12",xs:"12"},c.a.createElement(y.a,{className:"text-white bg-secondary"}," Livreurs moyens"),c.a.createElement(f.a,{body:!0},c.a.createElement(j.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Livreur"),c.a.createElement("th",null,"Performance"),c.a.createElement("th",null,"Retard"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")))),c.a.createElement(H.a,null,c.a.createElement("div",{className:"d-flex justify-content-around "},c.a.createElement(E.a,null,c.a.createElement(s.a,{caret:!0,color:"secondary"}," Filtrer"),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Performance croissant"),c.a.createElement(h.a,null,"Performance d\xe9croissant"),c.a.createElement(h.a,null,"Retard croissant"),c.a.createElement(h.a,null,"Retard d\xe9croissant"))),c.a.createElement(g.a,{className:"mr-2 "},c.a.createElement(v.a,{color:"secondary"},"Pr\xe9c"),c.a.createElement(v.a,{color:"secondary"},"Suiv")))))),c.a.createElement(i.a,{lg:"4",md:"12",sm:"12",xs:"12"},c.a.createElement(y.a,{className:" text-white bg-info "}," Mauvais livreurs"),c.a.createElement(f.a,{body:!0},c.a.createElement(j.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Livreur"),c.a.createElement("th",null,"Performance"),c.a.createElement("th",null,"Retard"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")),c.a.createElement("tr",null,c.a.createElement("td",null,"Ahmed Kelil"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"4H")))),c.a.createElement(H.a,null,c.a.createElement("div",{className:"d-flex justify-content-around "},c.a.createElement(E.a,null,c.a.createElement(s.a,{caret:!0,color:"info"}," Filtrer"),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Performance croissant"),c.a.createElement(h.a,null,"Performance d\xe9croissant"),c.a.createElement(h.a,null,"Retard croissant"),c.a.createElement(h.a,null,"Retard d\xe9croissant"))),c.a.createElement(g.a,{className:"mr-2 "},c.a.createElement(v.a,{color:"info"},"Pr\xe9c"),c.a.createElement(v.a,{color:"info"},"Suiv"))))))))}}}]);
//# sourceMappingURL=17.62e42156.chunk.js.map