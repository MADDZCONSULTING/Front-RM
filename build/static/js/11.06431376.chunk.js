(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{120:function(e,t,a){"use strict";var n=a(26),r=a(8),l=a(3),o=a.n(l),i=a(1),c=a.n(i),s=(a(18),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var t,a=e.tag,l=e.className,i=e.type,u=Object(r.a)(e,["tag","className","type"]),d=o()(Object(n.a)({},i,!!i),l);return t=a||(!a&&s[i]?s[i]:"p"),c.a.createElement(t,Object.assign({},u,{className:d}))};u.defaultProps={type:"p"},t.a=u},121:function(e,t,a){"use strict";var n=a(8),r=a(1),l=a.n(r),o=(a(18),a(21)),i=a(127),c=a(128),s=a(120),u=o.a.create("page"),d=function(e){var t=e.title,a=e.breadcrumbs,r=e.tag,o=e.className,d=e.children,m=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),f=u.b("px-3",o);return l.a.createElement(r,Object.assign({className:f},m),l.a.createElement("div",{className:u.e("header")},t&&"string"===typeof t?l.a.createElement(s.a,{type:"h1",className:u.e("title")},t):t,a&&l.a.createElement(i.a,{className:u.e("breadcrumb")},l.a.createElement(c.a,null,"Home"),a.length&&a.map(function(e,t){var a=e.name,n=e.active;return l.a.createElement(c.a,{key:t,active:n},a)}))),d)};d.defaultProps={tag:"div",title:""},t.a=d},125:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return"undefined"===typeof window?null:window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},r=function(){return["primary","secondary","success","info","warning","danger"]}},129:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(130),r=a.n(n),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return r()().number({min:e,max:t})}},130:function(e,t,a){var n=a(131);e.exports=function(e,t){return t&&(Array.isArray(t)&&t.length?n.seed_array(t):n.seed(t)),this.number=function(e){"number"===typeof e&&(e={max:e}),"undefined"===typeof(e=e||{}).min&&(e.min=0),"undefined"===typeof e.max&&(e.max=99999),"undefined"===typeof e.precision&&(e.precision=1);var t=e.max;return t>=0&&(t+=e.precision),e.precision*Math.floor(n.rand(t/e.precision,e.min/e.precision))},this.arrayElement=function(t){return(t=t||["a","b","c"])[e.random.number({max:t.length-1})]},this.objectElement=function(t,a){t=t||{foo:"bar",too:"car"};var n=Object.keys(t),r=e.random.arrayElement(n);return"key"===a?r:t[r]},this.uuid=function(){var e=this;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var a=e.number({min:0,max:15});return("x"==t?a:3&a|8).toString(16)})},this.boolean=function(){return!!e.random.number(1)},this.word=function(t){var a=e.random.arrayElement(["commerce.department","commerce.productName","commerce.productAdjective","commerce.productMaterial","commerce.product","commerce.color","company.catchPhraseAdjective","company.catchPhraseDescriptor","company.catchPhraseNoun","company.bsAdjective","company.bsBuzz","company.bsNoun","address.streetSuffix","address.county","address.country","address.state","finance.accountName","finance.transactionType","finance.currencyName","hacker.noun","hacker.verb","hacker.adjective","hacker.ingverb","hacker.abbreviation","name.jobDescriptor","name.jobArea","name.jobType"]);return e.fake("{{"+a+"}}")},this.words=function(t){var a=[];"undefined"===typeof t&&(t=e.random.number({min:1,max:3}));for(var n=0;n<t;n++)a.push(e.random.word());return a.join(" ")},this.image=function(){return e.image.image()},this.locale=function(){return e.random.arrayElement(Object.keys(e.locales))},this.alphaNumeric=function(t){"undefined"===typeof t&&(t=1);for(var a="",n=0;n<t;n++)a+=e.random.arrayElement(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);return a},this}},131:function(e,t){function a(){var e,t,a;e=624,t=397,a=2147483648;var n=new Array(e),r=625;function l(e){return e<0?(e^a)+a:e}function o(e,t){return l(e+t&4294967295)}function i(e,t){for(var a=0,n=0;n<32;++n)e>>>n&1&&(a=o(a,l(t<<n)));return a}this.init_genrand=function(t){for(n[0]=l(4294967295&t),r=1;r<e;r++)n[r]=o(i(1812433253,l(n[r-1]^n[r-1]>>>30)),r),n[r]=l(4294967295&n[r])},this.init_by_array=function(t,a){var r,c,s,u,d;for(this.init_genrand(19650218),r=1,c=0,s=e>a?e:a;s;s--)n[r]=o(o(l(n[r]^i(l(n[r-1]^n[r-1]>>>30),1664525)),t[c]),c),n[r]=l(4294967295&n[r]),c++,++r>=e&&(n[0]=n[623],r=1),c>=a&&(c=0);for(s=623;s;s--)n[r]=(u=l((dbg=n[r])^i(l(n[r-1]^n[r-1]>>>30),1566083941)))<(d=r)?l(4294967296-(d-u)&4294967295):u-d,n[r]=l(4294967295&n[r]),++r>=e&&(n[0]=n[623],r=1);n[0]=2147483648};var c=[0,2567483615];this.genrand_int32=function(){var o;if(r>=e){var i;for(625==r&&this.init_genrand(5489),i=0;i<227;i++)o=l(n[i]&a|2147483647&n[i+1]),n[i]=l(n[i+t]^o>>>1^c[1&o]);for(;i<623;i++)o=l(n[i]&a|2147483647&n[i+1]),n[i]=l(n[i+(t-e)]^o>>>1^c[1&o]);o=l(n[623]&a|2147483647&n[0]),n[623]=l(n[396]^o>>>1^c[1&o]),r=0}return o=l((o=n[r++])^o>>>11),o=l(o^o<<7&2636928640),o=l(o^o<<15&4022730752),o=l(o^o>>>18)},this.genrand_int31=function(){return this.genrand_int32()>>>1},this.genrand_real1=function(){return this.genrand_int32()*(1/4294967295)},this.genrand_real2=function(){return this.genrand_int32()*(1/4294967296)},this.genrand_real3=function(){return(this.genrand_int32()+.5)*(1/4294967296)},this.genrand_res53=function(){return(67108864*(this.genrand_int32()>>>5)+(this.genrand_int32()>>>6))*(1/9007199254740992)}}t.MersenneTwister19937=a;var n=new a;n.init_genrand((new Date).getTime()%1e9),t.rand=function(e,t){return void 0===e&&(t=0,e=32768),Math.floor(n.genrand_real2()*(e-t)+t)},t.seed=function(e){if("number"!=typeof e)throw new Error("seed(S) must take numeric argument; is "+typeof e);n.init_genrand(e)},t.seed_array=function(e){if("object"!=typeof e)throw new Error("seed_array(A) must take array of numbers; is "+typeof e);n.init_by_array(e)}},132:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return i});var n=a(145),r=a.n(n),l=a(125),o=function(e){var t=e.labels,a=e.data;return function(e){var n=e.getContext("2d").createLinearGradient(0,0,0,240);return n.addColorStop(0,r.a.helpers.color("#00c9ff").alpha(1).rgbString()),n.addColorStop(1,r.a.helpers.color("#00c9ff").alpha(.2).rgbString()),{labels:t,datasets:[{data:a,label:"My First dataset",borderColor:Object(l.a)("primary"),backgroundColor:n,fill:"origin"}]}}},i={tooltips:{intersect:!1},animation:{duration:0},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}}},186:function(e,t,a){"use strict";var n=a(4),r=a(5),l=a(1),o=a.n(l),i=a(0),c=a.n(i),s=a(3),u=a.n(s),d=a(2),m={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,inverse:Object(d.g)(c.a.bool,'Please use the prop "dark"'),dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.p,responsiveTag:d.p,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},f=function(e){var t=e.className,a=e.cssModule,l=e.size,i=e.bordered,c=e.borderless,s=e.striped,m=e.inverse,f=e.dark,p=e.hover,b=e.responsive,h=e.tag,g=e.responsiveTag,y=e.innerRef,E=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(d.l)(u()(t,"table",!!l&&"table-"+l,!!i&&"table-bordered",!!c&&"table-borderless",!!s&&"table-striped",!(!f&&!m)&&"table-dark",!!p&&"table-hover"),a),x=o.a.createElement(h,Object(n.a)({},E,{ref:y,className:v}));if(b){var w=!0===b?"table-responsive":"table-responsive-"+b;return o.a.createElement(g,{className:w},x)}return x};f.propTypes=m,f.defaultProps={tag:"table",responsiveTag:"div"},t.a=f},455:function(e,t,a){"use strict";a.r(t);var n=a(121),r=(a(132),a(1)),l=a.n(r),o=a(125),i=a(129),c=a(140),s=a(113),u=a(114),d=a(103),m=a(98),f=a(186),p=a(99);t.default=function(){return l.a.createElement(n.a,{title:"Tourn\xe9es"},l.a.createElement(s.a,null,l.a.createElement(u.a,null,l.a.createElement(d.a,null,' Rentabilit\xe9 pr\xe9vue des tourn\xe9es "pending"'),l.a.createElement(m.a,{body:!0},l.a.createElement(f.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Livreur"),l.a.createElement("th",null,"Secteur"),l.a.createElement("th",null,"Rentable?"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Ahmed Kelil"),l.a.createElement("td",null,"Alger"),l.a.createElement("td",null,"Oui")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Khalil Said"),l.a.createElement("td",null,"Alger"),l.a.createElement("td",null,"Oui")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Ahmed Bouadi"),l.a.createElement("td",null,"Alger"),l.a.createElement("td",null,"Oui")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"4"),l.a.createElement("td",null,"Hamza Taib"),l.a.createElement("td",null,"Alger"),l.a.createElement("td",null,"Non")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5"),l.a.createElement("td",null,"Khalil Said"),l.a.createElement("td",null,"Alger"),l.a.createElement("td",null,"Oui")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"6"),l.a.createElement("td",null,"Ahmed Bouadi"),l.a.createElement("td",null,"Alger"),l.a.createElement("td",null,"Oui")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"7"),l.a.createElement("td",null,"Hamza Taib"),l.a.createElement("td",null,"Alger"),l.a.createElement("td",null,"Non")))))),l.a.createElement(u.a,{xl:6,lg:12,md:6},l.a.createElement(m.a,null,l.a.createElement(d.a,null,"Vue globale de la rentabilit\xe9"),l.a.createElement(p.a,null,l.a.createElement(c.Pie,{data:{datasets:[{data:[Object(i.a)(),Object(i.a)()],backgroundColor:[Object(o.a)("secondary"),Object(o.a)("info")],label:"Dataset 1"}],labels:["Tourn\xe9es rentables","Tourn\xe9es non rentables"]}}))))))}}}]);
//# sourceMappingURL=11.06431376.chunk.js.map