(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{104:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return i})),r.d(a,"metadata",(function(){return c})),r.d(a,"rightToc",(function(){return s})),r.d(a,"default",(function(){return d}));var t=r(2),o=r(6),n=(r(0),r(121)),i={id:"validacao",title:"Valida\xe7\xe3o de Recursos",sidebar_label:"Valida\xe7\xe3o"},c={unversionedId:"rel/tools/validacao",id:"rel/tools/validacao",isDocsHomePage:!1,title:"Valida\xe7\xe3o de Recursos",description:"A valida\xe7\xe3o permite identificar a conformidade",source:"@site/docs\\rel\\tools\\validacao.md",slug:"/rel/tools/validacao",permalink:"/rnds/docs/rel/tools/validacao",editUrl:"https://github.com/kyriosdata/rnds/edit/master/guia/docs/rel/tools/validacao.md",version:"current",sidebar_label:"Valida\xe7\xe3o",sidebar:"someSidebar",previous:{title:"keytool",permalink:"/rnds/docs/rel/tools/keytool"},next:{title:"Objetivo",permalink:"/rnds/docs/sa/objetivo-sa"}},s=[{value:"Interface gr\xe1fica",id:"interface-gr\xe1fica",children:[]},{value:"Linha de comandos",id:"linha-de-comandos",children:[]},{value:"Implementa\xe7\xf5es",id:"implementa\xe7\xf5es",children:[]}],l={rightToc:s};function d(e){var a=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(t.a)({},l,r,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"A valida\xe7\xe3o permite identificar a conformidade\nde um recurso em rela\xe7\xe3o a v\xe1rios crit\xe9rios. Por exemplo,\nassegurar que um resultado de exame cont\xe9m todas as informa\xe7\xf5es necess\xe1rias conforme definidas pela RNDS. H\xe1 v\xe1rios outros cenarios, consulte ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/validation.html"}),"Validating Resources"),"\npara detalhes."),Object(n.b)("h3",{id:"interface-gr\xe1fica"},"Interface gr\xe1fica"),Object(n.b)("p",null,"No ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://servicos-datasus.saude.gov.br/detalhe/UZQjoYDDFN"}),"Portal de Servi\xe7os")," da RNDS,\ndentre os v\xe1rios artefatos disponibilizados est\xe1 o ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://doc-0k-b0-docs.googleusercontent.com/docs/securesc/pv16ckcadsrom8ll89o65she880al4qi/je4967phlp7b1fhq5kovqf8gnaakio7m/1599249225000/10214180060604046643/00115241587149400156/19c5hNwXv8qZk8Ylq-PJAnTFPr8_d5z8n?e=download&authuser=0&nonce=m7h2r4gkh32jk&user=00115241587149400156&hash=31u37radoua6t6fot61ga1qad9qsauev"}),"Validador local aplicativo"),". Abaixo segue uma ilustra\xe7\xe3o da execu\xe7\xe3o deste aplicativo."),Object(n.b)("p",null,Object(n.b)("img",Object(t.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1735792/92491044-21244600-f1c8-11ea-921b-541e9b77d967.png",alt:"image"}))),Object(n.b)("p",null,"Este validador \xe9 uma aplica\xe7\xe3o gr\xe1fica por meio do qual \xe9 poss\xedvel fornecer as defini\xe7\xf5es ou personaliza\xe7\xf5es\nde FHIR estabelecidas pela RNDS e um documento JSON, por exemplo, cuja conformidade com as defini\xe7\xf5es\ndeve ser verificada."),Object(n.b)("h3",{id:"linha-de-comandos"},"Linha de comandos"),Object(n.b)("p",null,"Uma alternativa para valida\xe7\xe3o \xe9 usar o aplicativo de linha de comandos ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/hapifhir/org.hl7.fhir.core/"}),"validator"),", devidamente ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator"}),"documentado")," e que permite seu uso via linha de comandos. Abaixo segue o formato de um comando para validar um recurso conforme defini\xe7\xf5es e depositar o resultado em um arquivo JSON."),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-shell"}),"java -jar validador_cli.jar <recurso para validar> -ig <diretorio de definicoes> -recurse -output resultado.json\n")),Object(n.b)("p",null,"O recurso pode ser o resultado de exame laboratorial, arquivo JSON. As ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"../rnds/perfis"}),"defini\xe7\xf5es")," est\xe3o amplamente dispon\xedveis.\nNo acomando acima a sa\xedda ser\xe1 depositada em ",Object(n.b)("strong",{parentName:"p"},"resultado.json"),". Em tempo, a representa\xe7\xe3o JSON do recurso ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"http://hl7.org/fhir/operationoutcome.html"}),"OperationOutcome"),"."),Object(n.b)("h2",{id:"implementa\xe7\xf5es"},"Implementa\xe7\xf5es"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/hapifhir/org.hl7.fhir.core"}),"https://github.com/hapifhir/org.hl7.fhir.core"))))}d.isMDXComponent=!0},121:function(e,a,r){"use strict";r.d(a,"a",(function(){return p})),r.d(a,"b",(function(){return b}));var t=r(0),o=r.n(t);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var a=o.a.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):c(c({},a),e)),r},p=function(e){var a=d(e.components);return o.a.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},m=o.a.forwardRef((function(e,a){var r=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=t,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||n;return r?o.a.createElement(b,c(c({ref:a},l),{},{components:r})):o.a.createElement(b,c({ref:a},l))}));function b(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=r.length,i=new Array(n);i[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<n;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);