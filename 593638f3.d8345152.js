(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{142:function(e,o,r){"use strict";r.d(o,"a",(function(){return l})),r.d(o,"b",(function(){return m}));var n=r(0),a=r.n(n);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function i(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?i(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function c(e,o){if(null==e)return{};var r,n,a=function(e,o){if(null==e)return{};var r,n,a={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),d=function(e){var o=a.a.useContext(u),r=o;return e&&(r="function"==typeof e?e(o):s(s({},o),e)),r},l=function(e){var o=d(e.components);return a.a.createElement(u.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return a.a.createElement(a.a.Fragment,{},o)}},b=a.a.forwardRef((function(e,o){var r=e.components,n=e.mdxType,t=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(r),b=n,m=l["".concat(i,".").concat(b)]||l[b]||p[b]||t;return r?a.a.createElement(m,s(s({ref:o},u),{},{components:r})):a.a.createElement(m,s({ref:o},u))}));function m(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var t=r.length,i=new Array(t);i[0]=b;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<t;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},96:function(e,o,r){"use strict";r.r(o),r.d(o,"frontMatter",(function(){return i})),r.d(o,"metadata",(function(){return s})),r.d(o,"toc",(function(){return c})),r.d(o,"default",(function(){return d}));var n=r(3),a=r(7),t=(r(0),r(142)),i={id:"erros",title:"Erros",sidebar_label:"Erros"},s={unversionedId:"publico-alvo/ti/erros",id:"publico-alvo/ti/erros",isDocsHomePage:!1,title:"Erros",description:"Requisi\xe7\xf5es",source:"@site/docs\\publico-alvo\\ti\\erros.md",slug:"/publico-alvo/ti/erros",permalink:"/rnds/docs/publico-alvo/ti/erros",version:"current",lastUpdatedAt:1611526727,sidebar_label:"Erros",sidebar:"someSidebar",previous:{title:"Requisi\xe7\xf5es",permalink:"/rnds/docs/publico-alvo/ti/requisicoes"},next:{title:"Autentica\xe7\xe3o",permalink:"/rnds/docs/publico-alvo/ti/autenticacao"}},c=[{value:"Requisi\xe7\xf5es",id:"requisi\xe7\xf5es",children:[]},{value:"Erros",id:"erros",children:[]}],u={toc:c};function d(e){var o=e.components,r=Object(a.a)(e,["components"]);return Object(t.b)("wrapper",Object(n.a)({},u,r,{components:o,mdxType:"MDXLayout"}),Object(t.b)("h3",{id:"requisi\xe7\xf5es"},"Requisi\xe7\xf5es"),Object(t.b)("h4",{id:"obter-token"},"Obter token"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "longa sequencia aqui. Este token ser\xe1 necess\xe1rio, o valor deste campo, em todas as demais requisi\xe7\xf5es. Ele ser\xe1 fornecido por meio do header X-Authorization-Server, conforme detalhado abaixo.",\n  "scope": "read write",\n  "token_type": "jwt",\n  "expires_in": 1800000\n}\n')),Object(t.b)("p",null,"O valor da propriedade ",Object(t.b)("strong",{parentName:"p"},"access_token")," ser\xe1 empregado em todas as demais requisi\xe7\xf5es. As requisi\xe7\xf5es fazem uso deste valor por\nmeio do header ",Object(t.b)("strong",{parentName:"p"},"X-Authorization-Server"),". Em particular, o valor deste ",Object(t.b)("em",{parentName:"p"},"header")," deve ser fornecido no seguinte formato:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre"},"X-Authorization-Server: Bearer <valor-de-access-token-aqui>\n")),Object(t.b)("p",null,"Conv\xe9m observar que esta n\xe3o \xe9 a \xfanica informa\xe7\xe3o de seguran\xe7a exigida, outro ",Object(t.b)("em",{parentName:"p"},"header"),", ",Object(t.b)("strong",{parentName:"p"},"Authorization"),", cujo valor deve ser o CNS do requisitante, tamb\xe9m deve ser fornecido nas requisi\xe7\xf5es aos servi\xe7os ",Object(t.b)("em",{parentName:"p"},"EHR"),"."),Object(t.b)("h4",{id:"c\xf3digo-inv\xe1lido-cns"},"C\xf3digo inv\xe1lido CNS"),Object(t.b)("p",null,"Na consulta por profissional via CNS, se o c\xf3digo CNS \xe9 inv\xe1lido, por exemplo, ent\xe3o tem-se o resultado abaixo:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "processing",\n      "diagnostics": "Resource Practitioner/<codivo-invalido> is not known"\n    }\n  ]\n}\n')),Object(t.b)("h4",{id:"submeter-bundle-com-identificador-inv\xe1lido-do-solicitante"},"Submeter bundle com identificador inv\xe1lido do solicitante"),Object(t.b)("p",null,"O identificador do solicitante, ap\xf3s devidamente cadastrado, pode ser recuperado conforme ilustrado abaixo, pelo Portal de Servi\xe7os:"),Object(t.b)("p",null,Object(t.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1735792/90821002-9eb30f80-e308-11ea-8636-58645a1fa3c2.png",alt:"image"})),Object(t.b)("p",null,'O identificador que acima segue ocultado, deve ser fornecido no lugar do texto "qualquer", no trecho da requisi\xe7\xe3o (bundle),\nconforme ilustrado abaixo:'),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'    "identifier": {\n        "system": "http://www.saude.gov.br/fhir/r4/NamingSystem/BRRNDS-qualquer",\n        "value": "valor-unico-do-bundle-para-o-lab"\n    },\n')),Object(t.b)("p",null,'Se o valor "qualquer" n\xe3o \xe9 substitu\xeddo pelo identificador do solicitante, a resposta ser\xe1 aquela abaixo:'),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "security",\n      "diagnostics": "(EHR-ERR881) Voc\xea n\xe3o possui autoriza\xe7\xe3o para utilizar esse sistema de origem: http://www.saude.gov.br/fhir/r4/NamingSystem/BRRNDS-qualquer"\n    }\n  ]\n}\n')),Object(t.b)("h4",{id:"422-submeter-recurso-com-n\xfamero-que-n\xe3o-\xe9-\xfanico-para-o-laborat\xf3rio"},"(422) Submeter recurso com n\xfamero que n\xe3o \xe9 \xfanico para o laborat\xf3rio"),Object(t.b)("p",null,"Este identificador \xe9 aquele fornecido por meio da propriedade ",Object(t.b)("strong",{parentName:"p"},"identifier.value")," do ",Object(t.b)("em",{parentName:"p"},"bundle"),"."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "processing",\n      "diagnostics": "(EHR-ERR866) O identifier informado j\xe1 foi utilizado para cadastrar outro documento e n\xe3o pode ser repetido."\n    }\n  ]\n}\n')),Object(t.b)("h3",{id:"erros"},"Erros"),Object(t.b)("h4",{id:"requisi\xe7\xf5es-dependem-de-valores-de-entrada"},"Requisi\xe7\xf5es dependem de valores de entrada"),Object(t.b)("p",null,"A consulta a um estabelecimento de sa\xfade via seu CNES exige que o c\xf3digo correspondente seja fornecido na URL, por exemplo,\n",Object(t.b)("inlineCode",{parentName:"p"},"https://ehr-services.hmg.saude.gov.br/api;fhir/r4/Organization/2337991"),". Se o c\xf3digo, neste exemplo, ",Object(t.b)("inlineCode",{parentName:"p"},"2337991")," ou outro n\xe3o\n\xe9 fornecido, ent\xe3o voc\xea receber\xe1 como resposta o conte\xfado abaixo:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "processing",\n      "diagnostics": "Invalid request: The FHIR endpoint on this server does not know how to handle GET operation[Organization/] with parameters [[]]"\n    }\n  ]\n}\n')),Object(t.b)("h4",{id:"requisi\xe7\xe3o-com-consist\xeancia-verificada"},"Requisi\xe7\xe3o com consist\xeancia verificada"),Object(t.b)("p",null,"A consulta por CNES retorna a resposta abaixo se o profissional de sa\xfade em nome do qual a\nrequisi\xe7\xe3o \xe9 feita (valor omitido na resposta abaixo) n\xe3o possui v\xednculo com a credencial tamb\xe9m omitida."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "security",\n      "diagnostics": "(EHR-ERR906) Profissional CNS <numero aqui> n\xe3o autorizado, pois n\xe3o possui v\xednculo CBO autorizado em nenhum dos estabelecimentos autorizados para a credencial <numero aqui>."\n    }\n  ]\n}\n')),Object(t.b)("h4",{id:"401-token-empregado-para-a-requisi\xe7\xe3o-expirou"},"(401) Token empregado para a requisi\xe7\xe3o expirou"),Object(t.b)("p",null,"Lembre-se de que o ",Object(t.b)("em",{parentName:"p"},"token"),", quando obtido, tem uma validade de 30 minutos. Ap\xf3s estes 30 minutos\nqualquer requisi\xe7\xe3o que o utilize ir\xe1 retornar algo similar ao conte\xfado abaixo:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-js"},'{\n    "resourceType": "OperationOutcome",\n    "issue": [\n        {\n            "severity": "error",\n            "code": "security",\n            "diagnostics": "(EHR-ERR882) O token de certificado usado para autorizar o acesso n\xe3o \xe9 v\xe1lido. JWT expired at 2020-08-19T23:54:28Z. Current time: 2020-08-20T11:00:27Z, a difference of 39959356 milliseconds.  Allowed clock skew: 0 milliseconds."\n        }\n    ]\n}\n')),Object(t.b)("h4",{id:"422-valor-de-status-diferente-de-final"},'(422) Valor de "status" diferente de "final"'),Object(t.b)("p",null,"Se tentar submeter um laudo, cujo ",Object(t.b)("strong",{parentName:"p"},"status")," \xe9 diferente de ",Object(t.b)("strong",{parentName:"p"},"final"),", conforme ilustrado abaixo"),Object(t.b)("p",null,Object(t.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1735792/91478272-f5bf6400-e875-11ea-98ab-ac7961384967.png",alt:"image"})),Object(t.b)("p",null,"e compat\xedvel com o perfil ",Object(t.b)("a",{parentName:"p",href:"https://simplifier.net/redenacionaldedadosemsaude/brestadoobservacao-1.0"},"Estado da Observa\xe7\xe3o"),", ter\xe1 como resposta"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-js"},'{\n    "resourceType": "OperationOutcome",\n    "issue": [\n        {\n            "severity": "error",\n            "code": "processing",\n            "diagnostics": "(EHR-ERR924) Ao enviar um documento \xe9 obrigat\xf3rio utilizar o status: final"\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);