(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{148:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(159),c=t(167),m=t(155);var i=function(e){const{nextItem:a,prevItem:t}=e;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(m.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},s=t(161),o=t(195),d=t(186);a.default=function(e){const{content:a,sidebar:t}=e,{frontMatter:n,metadata:m}=a,{title:u,description:E,nextItem:g,prevItem:v,editUrl:p}=m,{hide_table_of_contents:b}=n;return r.a.createElement(l.a,{title:u,description:E,wrapperClassName:"blog-wrapper"},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(c.a,{frontMatter:n,metadata:m,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,p&&r.a.createElement("a",{href:p,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(d.a,null),"Edit this page")),(g||v)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:g,prevItem:v}))),!b&&a.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{toc:a.toc})))))}},161:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),l=t(153),c=t(155),m=t(55),i=t.n(m);function s({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:i.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:i.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},r.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))))))}},167:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(153),c=t(151),m=t(23),i=t(155),s=t(173),o=t(157),d=t(56),u=t.n(d);const E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:d,isBlogPostPage:g=!1}=e,{date:v,permalink:p,tags:b,readingTime:f}=n,{author:h,title:N,image:_,keywords:k}=t,w=t.author_url||t.authorURL,I=t.author_title||t.authorTitle,y=t.author_image_url||t.authorImageURL,L=Object(o.a)(_,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,k&&k.length&&r.a.createElement("meta",{name:"keywords",content:k.join(",")}),_&&r.a.createElement("meta",{property:"og:image",content:L}),_&&r.a.createElement("meta",{name:"twitter:image",content:L}),_&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${N}`})),r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2",a=v.substring(0,10).split("-"),t=a[0],n=E[parseInt(a[1],10)-1],c=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},g?N:r.a.createElement(i.a,{to:p},N)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:v,className:u.a.blogPostDate},n," ",c,", ",t," ",f&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(f)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},y&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:y,alt:h})),r.a.createElement("div",{className:"avatar__intro"},h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},h)),r.a.createElement("small",{className:"avatar__subtitle"},I)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:s.a},a)),(b.length>0||d)&&r.a.createElement("footer",{className:"row margin-vert--lg"},b.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),b.map((({label:e,permalink:a})=>r.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},e)))),d&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:n.permalink,"aria-label":`Read more about ${N}`},r.a.createElement("strong",null,"Read More"))))))}},186:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r),c=t(153),m=t(58),i=t.n(m);a.a=({className:e,...a})=>l.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(i.a.iconEdit,e)},a),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},195:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(153);var c=function(e,a,t){const[r,l]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),a=e.find((e=>{const{top:a}=e.getBoundingClientRect();return a>=t}));if(a){if(a.getBoundingClientRect().top>=t){const t=e[e.indexOf(a)-1];return null!=t?t:a}return a}return e[e.length-1]}();if(n){let t=0,c=!1;const m=document.getElementsByClassName(e);for(;t<m.length&&!c;){const e=m[t],{href:i}=e,s=decodeURIComponent(i.substring(i.indexOf("#")+1));n.id===s&&(r&&r.classList.remove(a),e.classList.add(a),l(e),c=!0),t+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},m=t(57),i=t.n(m);const s="table-of-contents__link";function o({toc:e,isChild:a}){return e.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},e.map((e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:`#${e.id}`,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(o,{isChild:!0,toc:e.children}))))):null}a.a=function({toc:e}){return c(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(i.a.tableOfContents,"thin-scrollbar")},r.a.createElement(o,{toc:e}))}}}]);