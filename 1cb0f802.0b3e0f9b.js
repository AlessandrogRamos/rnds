(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{151:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=n.a.createContext({}),s=function(e){var r=n.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return t?n.a.createElement(f,c(c({ref:r},d),{},{components:t})):n.a.createElement(f,c({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},85:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var a=t(3),n=t(7),o=(t(0),t(151)),i={id:"glossario",title:"Gloss\xe1rio",sidebar_label:"Gloss\xe1rio"},c={unversionedId:"rel/intro/glossario",id:"rel/intro/glossario",isDocsHomePage:!1,title:"Gloss\xe1rio",description:"Certificado digital",source:"@site/docs\\rel\\intro\\glossario.md",slug:"/rel/intro/glossario",permalink:"/rnds/docs/rel/intro/glossario",version:"current",lastUpdatedAt:1606864832,sidebar_label:"Gloss\xe1rio",sidebar:"someSidebar",previous:{title:"Modelo Computacional",permalink:"/rnds/docs/rel/mc-rel"},next:{title:"Objetivo",permalink:"/rnds/docs/sa/objetivo-sa"}},l=[{value:"Certificado digital",id:"certificado-digital",children:[]},{value:"FHIR",id:"fhir",children:[]},{value:"ICP-Brasil",id:"icp-brasil",children:[]},{value:"Payload",id:"payload",children:[]},{value:"RNDS",id:"rnds",children:[]},{value:"TI",id:"ti",children:[]}],d={toc:l};function s(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"certificado-digital"},"Certificado digital"),Object(o.b)("p",null,"Identidade de pessoa f\xedsica (e-CPF) ou de pessoa jur\xeddica (e-CNPJ) no mundo digital."),Object(o.b)("h3",{id:"fhir"},"FHIR"),Object(o.b)("p",null,"FHIR \xe9 acr\xf4nimo de ",Object(o.b)("em",{parentName:"p"},"Fast Healthcare Interoperability Resources"),". Conforme o ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://hl7.org/fhir/"}),"HL7 FHIR"),', FHIR \xe9 "um padr\xe3o para troca de dados em sa\xfade".'),Object(o.b)("h3",{id:"icp-brasil"},"ICP-Brasil"),Object(o.b)("p",null,"Infraestrutura de Chaves P\xfablicas Brasileira. Conforme o Instituto Nacional de Tecnologia da Informa\xe7\xe3o (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.gov.br/iti/pt-br/assuntos/icp-brasil"}),"ITI"),'), a ICP-Brasil "\xe9 uma cadeia hier\xe1rquica de confian\xe7a que viabiliza a emiss\xe3o de certificados digitais para identifica\xe7\xe3o virtual do cidad\xe3o."'),Object(o.b)("h3",{id:"payload"},"Payload"),Object(o.b)("p",null,"Conte\xfado efetivo ou dado propriamente dito, a ser transferido, de uma mensagem.\nConsulte a defini\xe7\xe3o na ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Payload_(computing)"}),"wikipedia"),"."),Object(o.b)("h3",{id:"rnds"},"RNDS"),Object(o.b)("p",null,"Rede Nacional de Dados em Sa\xfade. O portal da RNDS \xe9 ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://rnds.saude.gov.br"}),"https://rnds.saude.gov.br"),"."),Object(o.b)("h3",{id:"ti"},"TI"),Object(o.b)("p",null,"Acr\xf4nimo de Tecnologia da Informa\xe7\xe3o. Tamb\xe9m \xe9 comum o emprego de TIC (Tecnologias da Informa\xe7\xe3o e Comunica\xe7\xe3o)."))}s.isMDXComponent=!0}}]);