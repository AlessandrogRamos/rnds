(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(7),o=(a(0),a(151)),l={id:"fhirpath",title:"FHIRPath",sidebar_label:"FHIRPath"},c={unversionedId:"rnds/tools/fhirpath",id:"rnds/tools/fhirpath",isDocsHomePage:!1,title:"FHIRPath",description:"Implementa\xe7\xf5es do FHIR retornam, em geral, representa\xe7\xf5es de recursos em JSON. Neste caso, o JSON retornado pode ser consultado por meio de JsonPath. H\xe1 vasta informa\xe7\xe3o sobre o Jsonpath, como a possibilidade de execu\xe7\xe3o de consultas online, a especifica\xe7\xe3o detalhada, tutorial e at\xe9 aplica\xe7\xe3o em java) que executa Jsonpath.",source:"@site/docs\\rnds\\tools\\fhirpath.md",slug:"/rnds/tools/fhirpath",permalink:"/rnds/docs/rnds/tools/fhirpath",version:"current",lastUpdatedAt:1611436320,sidebar_label:"FHIRPath",sidebar:"someSidebar",previous:{title:"Bibliotecas",permalink:"/rnds/docs/rnds/tools/bibliotecas"},next:{title:"keytool",permalink:"/rnds/docs/rnds/tools/keytool"}},s=[{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",children:[]},{value:"Opera\xe7\xe3o trivial",id:"opera\xe7\xe3o-trivial",children:[]}],p={toc:s};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Implementa\xe7\xf5es do FHIR retornam, em geral, representa\xe7\xf5es de recursos em JSON. Neste caso, o JSON retornado pode ser consultado por meio de JsonPath. H\xe1 vasta informa\xe7\xe3o sobre o Jsonpath, como a possibilidade de execu\xe7\xe3o de consultas ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://jsonpath.com/"}),"online"),", a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://goessner.net/articles/JsonPath/"}),"especifica\xe7\xe3o detalhada"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.baeldung.com/guide-to-jayway-jsonpath"}),"tutorial")," e at\xe9 aplica\xe7\xe3o em ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/json-path/JsonPath"}),"java"),") que executa Jsonpath."),Object(o.b)("p",null,"FHIRPath \xe9 similar a JsonPath, contudo, cont\xe9m fun\xe7\xf5es espec\xedficas para FHIR. FHIRPath tamb\xe9m \xe9 usado pela ",Object(o.b)("em",{parentName:"p"},"Clinical Quality Language")," (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cql.hl7.org/index.html"}),"CQL"),")."),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://hl7.org/fhirpath/"}),"defini\xe7\xe3o de FHIRPath")," tamb\xe9m est\xe1 dispon\xedvel, inclusive em ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/HL7/FHIRPath/blob/master/spec/index.adoc"}),"detalhes"),". "),Object(o.b)("p",null,"Consultas baseadas em FHIRPath podem ser executadas por meio do portal ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://clinfhir.com"}),"clinfhir"),". Adicionalmente, pode-se usar a implementa\xe7\xe3o ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/HL7/fhirpath.js"}),"fhirpath")," em Javascript, dentre outras op\xe7\xf5es."),Object(o.b)("p",null,"Esta implementa\xe7\xe3o \xe9 empregada nos exemplos fornecidos abaixo."),Object(o.b)("h3",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ git clone https://github.com/kyriosdata/rnds\n$ cd rnds/tools/fhirpath\n$ yarn install\n")),Object(o.b)("p",null,"Em projeto existente (depend\xeancias de desenvolvimento):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ yarn add fhirpath --dev\n")),Object(o.b)("h3",{id:"opera\xe7\xe3o-trivial"},"Opera\xe7\xe3o trivial"),Object(o.b)("p",null,"Contando quantas entradas possuem no documento ",Object(o.b)("strong",{parentName:"p"},"exemplo.json"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Qual o tipo do recurso?")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "resourceType"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Quando o ",Object(o.b)("em",{parentName:"li"},"Bundle")," foi atualizado pela \xfaltima vez?")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "meta.lastUpdated"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Qual o identificador local (definido pelo laborat\xf3rio) do ",Object(o.b)("em",{parentName:"li"},"Bundle"),"?")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "identifier.value"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Quantos recursos est\xe3o reunidos no ",Object(o.b)("em",{parentName:"li"},"Bundle"),"?")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ npm run fhirpath -- -f exemplo.json -e "entry.count()"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Quais os tipos dos recursos reunidos no ",Object(o.b)("em",{parentName:"li"},"Bundle"),"?")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "entry.resource.resourceType"\n')))}i.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=i(a),d=n,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);