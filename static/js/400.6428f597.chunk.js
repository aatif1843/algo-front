"use strict";(self.webpackChunkalgo_website=self.webpackChunkalgo_website||[]).push([[400],{9400:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var l=n(5043),a=n(253),s=n(4783),i=n(6579),o=n(7929),r=n(3216),m=n(9672),d=n(579);const c=()=>{const e=(0,r.zy)().state.id,[t,n]=(0,l.useState)(""),[c,h]=(0,l.useState)(""),[g,p]=(0,l.useState)(""),[x,u]=(0,l.useState)(""),[j,b]=(0,l.useState)(""),[w,f]=(0,l.useState)(""),[_,N]=(0,l.useState)(""),[v,y]=(0,l.useState)(""),k=m.q.BLOGCATEGORY,z="".concat(m.q.LISTBLOG,"/").concat(e),C=m.q.ADDCOMMENT,S=m.q.LISTBLOG,L=e=>new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});(0,l.useEffect)((()=>{I(),M(),q()}),[]);const I=()=>{fetch(z).then((e=>e.json())).then((e=>{f(e.data),y(e.data._id),B(e.data._id),console.log(v)})).catch((e=>{console.error("Error fetching blog categories:",e)}))},q=()=>{fetch(k).then((e=>e.json())).then((e=>{n(e.data),console.log("listblogcategoryname",t)})).catch((e=>{console.error("Error fetching blog categories:",e)}))},B=e=>{fetch("".concat(m.q.LISTCOMMENT).concat(e)).then((e=>e.json())).then((e=>{N(e.data)})).catch((e=>{console.error("Error fetching blog categories:",e)}))},M=()=>{fetch(S).then((e=>e.json())).then((e=>{h(e.data)})).catch((e=>{console.error("Error fetching blog categories:",e)}))};return(0,d.jsxs)("div",{children:[(0,d.jsx)(a.A,{}),(0,d.jsxs)("div",{"data-elementor-type":"single-post","data-elementor-id":11,className:"elementor elementor-11 elementor-location-single post-115 post type-post status-publish format-standard has-post-thumbnail hentry category-stock-market","data-elementor-post-type":"elementor_library",children:[(0,d.jsx)("div",{className:"elementor-element elementor-element-a5ad72f e-flex e-con-boxed e-con e-parent","data-id":"a5ad72f","data-element_type":"container","data-settings":'{"background_background":"classic"}',"data-core-v316-plus":"true",children:(0,d.jsx)("div",{className:"e-con-inner",children:(0,d.jsxs)("div",{className:"elementor-element elementor-element-6f20195c e-con-full e-flex e-con e-child","data-id":"6f20195c","data-element_type":"container",children:[(0,d.jsx)("div",{className:"elementor-element elementor-element-0d7308c elementor-widget elementor-widget-heading","data-id":"0d7308c","data-element_type":"widget","data-widget_type":"heading.default",children:(0,d.jsxs)("div",{className:"elementor-widget-container",children:[(0,d.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n\t\t\t\t\t\t\t\t/*! elementor - v3.20.0 - 13-03-2024 */\n\t\t\t\t\t\t\t\t.elementor-heading-title {\n\t\t\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\t\tline-height: 1\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {\n\t\t\t\t\t\t\t\t\tcolor: inherit;\n\t\t\t\t\t\t\t\t\tfont-size: inherit;\n\t\t\t\t\t\t\t\t\tline-height: inherit\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-small {\n\t\t\t\t\t\t\t\t\tfont-size: 15px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-medium {\n\t\t\t\t\t\t\t\t\tfont-size: 19px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-large {\n\t\t\t\t\t\t\t\t\tfont-size: 29px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xl {\n\t\t\t\t\t\t\t\t\tfont-size: 39px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xxl {\n\t\t\t\t\t\t\t\t\tfont-size: 59px\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t"}}),(0,d.jsx)("h6",{className:"elementor-heading-title elementor-size-default",children:(0,d.jsx)("a",{href:"#",rel:"tag",children:w.blog_category})})]})}),(0,d.jsx)("div",{className:"elementor-element elementor-element-6bfff8b0 elementor-invisible elementor-widget elementor-widget-heading","data-id":"6bfff8b0","data-element_type":"widget","data-settings":'{"_animation":"fadeInLeft"}',"data-widget_type":"heading.default",children:(0,d.jsx)("div",{className:"elementor-widget-container",children:(0,d.jsx)("h1",{className:"elementor-heading-title elementor-size-default",children:w.title})})}),(0,d.jsx)("div",{className:"elementor-element elementor-element-5e662ec7 elementor-align-left elementor-invisible elementor-widget elementor-widget-post-info","data-id":"5e662ec7","data-element_type":"widget","data-settings":'{"_animation":"fadeInRight"}',"data-widget_type":"post-info.default",children:(0,d.jsxs)("div",{className:"elementor-widget-container",children:[(0,d.jsx)("link",{rel:"stylesheet",href:"'https://algoedge.io//wp-content/plugins/elementor/assets/css/widget-icon-list.min.css"}),(0,d.jsx)("link",{rel:"stylesheet",href:"'https://algoedge.io//wp-content/plugins/elementor-pro/assets/css/widget-theme-elements.min.css"}),(0,d.jsxs)("ul",{className:"elementor-inline-items elementor-icon-list-items elementor-post-info",children:[(0,d.jsx)("li",{className:"elementor-icon-list-item elementor-repeater-item-3c7b83e elementor-inline-item",itemProp:"datePublished",children:(0,d.jsxs)("a",{href:"2024/02/15/index.html",children:[(0,d.jsx)("span",{className:"elementor-icon-list-icon",children:(0,d.jsx)(i.g,{icon:o.okg})}),(0,d.jsx)("span",{className:"elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date",children:L(w.createdAt)})]})}),(0,d.jsx)("li",{className:"elementor-icon-list-item elementor-repeater-item-a7d1004 elementor-inline-item",itemProp:"commentCount",children:(0,d.jsxs)("a",{href:"index.html@p=115.html#respond",children:[(0,d.jsx)("span",{className:"elementor-icon-list-icon",children:(0,d.jsx)(i.g,{icon:o.DN2})}),(0,d.jsxs)("span",{className:"elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-comments",children:["No Comments"," "]})]})})]})]})})]})})}),(0,d.jsx)("div",{className:"elementor-element elementor-element-2fa900b8 e-flex e-con-boxed e-con e-parent","data-id":"2fa900b8","data-element_type":"container","data-core-v316-plus":"true",children:(0,d.jsxs)("div",{className:"e-con-inner",children:[(0,d.jsxs)("div",{className:"elementor-element elementor-element-569daa6b e-con-full e-flex e-con e-child","data-id":"569daa6b","data-element_type":"container",children:[(0,d.jsx)("div",{className:"elementor-element elementor-element-3ce128ce elementor-widget elementor-widget-theme-post-content","data-id":"3ce128ce","data-element_type":"widget","data-widget_type":"theme-post-content.default",children:(0,d.jsx)("div",{className:"elementor-widget-container",dangerouslySetInnerHTML:{__html:w.content}})}),(0,d.jsx)("div",{className:"elementor-element elementor-element-3439a2e e-flex e-con-boxed e-con e-child","data-id":"3439a2e","data-element_type":"container",children:(0,d.jsxs)("div",{className:"e-con-inner",children:[(0,d.jsx)("div",{className:"elementor-element elementor-element-4c4231d elementor-widget elementor-widget-heading","data-id":"4c4231d","data-element_type":"widget","data-widget_type":"heading.default",children:(0,d.jsx)("div",{className:"elementor-widget-container",children:(0,d.jsx)("h5",{className:"elementor-heading-title elementor-size-default",children:"Share it :"})})}),(0,d.jsx)("div",{className:"elementor-element elementor-element-125cebf7 elementor-share-buttons--skin-flat elementor-grid-4 elementor-share-buttons--color-custom elementor-grid-mobile-0 elementor-share-buttons--shape-circle elementor-share-buttons--view-icon elementor-widget elementor-widget-share-buttons","data-id":"125cebf7","data-element_type":"widget","data-widget_type":"share-buttons.default",children:(0,d.jsxs)("div",{className:"elementor-widget-container",children:[(0,d.jsx)("link",{rel:"stylesheet",href:"wp-content/plugins/elementor-pro/assets/css/widget-share-buttons.min.css"}),(0,d.jsxs)("div",{className:"elementor-grid",children:[(0,d.jsx)("div",{className:"elementor-grid-item",children:(0,d.jsx)("div",{className:"elementor-share-btn elementor-share-btn_facebook",role:"button",tabIndex:0,"aria-label":"Share on facebook",children:(0,d.jsxs)("span",{className:"elementor-share-btn__icon",children:[(0,d.jsx)("svg",{className:"e-font-icon-svg e-fab-facebook",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})})," "]})})}),(0,d.jsx)("div",{className:"elementor-grid-item",children:(0,d.jsx)("div",{className:"elementor-share-btn elementor-share-btn_twitter",role:"button",tabIndex:0,"aria-label":"Share on twitter",children:(0,d.jsxs)("span",{className:"elementor-share-btn__icon",children:[(0,d.jsx)("svg",{className:"e-font-icon-svg e-fab-twitter",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})})," "]})})}),(0,d.jsx)("div",{className:"elementor-grid-item",children:(0,d.jsx)("div",{className:"elementor-share-btn elementor-share-btn_whatsapp",role:"button",tabIndex:0,"aria-label":"Share on whatsapp",children:(0,d.jsxs)("span",{className:"elementor-share-btn__icon",children:[(0,d.jsx)("svg",{className:"e-font-icon-svg e-fab-whatsapp",viewBox:"0 0 448 512",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"})})," "]})})}),(0,d.jsx)("div",{className:"elementor-grid-item",children:(0,d.jsx)("div",{className:"elementor-share-btn elementor-share-btn_telegram",role:"button",tabIndex:0,"aria-label":"Share on telegram",children:(0,d.jsxs)("span",{className:"elementor-share-btn__icon",children:[(0,d.jsx)("svg",{className:"e-font-icon-svg e-fab-telegram",viewBox:"0 0 496 512",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"})})," "]})})})]})]})})]})}),(0,d.jsx)("div",{className:"elementor-element elementor-element-23031594 elementor-author-box--image-valign-top elementor-author-box--avatar-yes elementor-author-box--name-yes elementor-author-box--biography-yes elementor-author-box--link-no elementor-widget elementor-widget-author-box","data-id":23031594,"data-element_type":"widget","data-widget_type":"author-box.default",children:(0,d.jsx)("div",{className:"elementor-widget-container",style:{overflowY:"scroll",maxHeight:"200px  "},children:_&&_.map(((e,t)=>(0,d.jsxs)("div",{className:"elementor-author-box card",style:{marginBottom:"4%",display:"flex"},onClick:()=>alert(e._id),children:[(0,d.jsx)("div",{className:"elementor-author-box__avatar",style:{width:"10%"},children:(0,d.jsx)("img",{src:"/download.jpg",alt:"Natalie Stanley",loading:"lazy",style:{borderRadius:"50%"}})}),(0,d.jsxs)("div",{className:"elementor-author-box__text",style:{width:"90%"},children:[(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"elementor-author-box__name",children:e.name})}),(0,d.jsx)("div",{className:"elementor-author-box__bio",children:e.comment})]})]})))})}),(0,d.jsx)("div",{className:"elementor-element elementor-element-4bd79943 elementor-widget elementor-widget-post-comments","data-id":"4bd79943","data-element_type":"widget","data-widget_type":"post-comments.theme_comments",children:(0,d.jsx)("div",{className:"elementor-widget-container",children:(0,d.jsx)("section",{id:"comments",className:"comments-area",children:(0,d.jsxs)("div",{id:"respond",className:"comment-respond",children:[(0,d.jsxs)("h2",{id:"reply-title",className:"comment-reply-title",children:["Comment",(0,d.jsx)("small",{children:(0,d.jsx)("a",{rel:"nofollow",id:"cancel-comment-reply-link",href:"index.html@p=115.html#respond",style:{display:"none"},children:"Cancel reply"})})]}),(0,d.jsxs)("div",{className:"comment-form",children:[(0,d.jsxs)("p",{className:"comment-notes",children:[(0,d.jsx)("span",{id:"email-notes",children:"Your email address will not be published."})," ",(0,d.jsxs)("span",{className:"required-field-message",children:["Required fields are marked"," ",(0,d.jsx)("span",{className:"required",children:"*"})]})]}),(0,d.jsxs)("p",{className:"comment-form-comment",children:[(0,d.jsxs)("label",{htmlFor:"comment",children:["Comment ",(0,d.jsx)("span",{className:"required",children:"*"})]})," ",(0,d.jsx)("textarea",{id:"comment",name:"comment",cols:45,rows:8,maxLength:65525,value:g,onChange:e=>p(e.target.value),required:""})]}),(0,d.jsxs)("p",{className:"comment-form-author",children:[(0,d.jsxs)("label",{htmlFor:"author",children:["Name ",(0,d.jsx)("span",{className:"required",children:"*"})]})," ",(0,d.jsx)("input",{id:"author",name:"author",type:"text",value:j,onChange:e=>b(e.target.value),size:30,maxLength:245,autoComplete:"name",required:""})]}),(0,d.jsxs)("p",{className:"comment-form-email",children:[(0,d.jsxs)("label",{htmlFor:"email",children:["Email ",(0,d.jsx)("span",{className:"required",children:"*"})]})," ",(0,d.jsx)("input",{id:"email",name:"email",type:"email",value:x,onChange:e=>u(e.target.value),size:30,maxLength:100,"aria-describedby":"email-notes",autoComplete:"email",required:""})]}),(0,d.jsxs)("p",{className:"form-submit",children:[(0,d.jsx)("input",{name:"submit",type:"submit",id:"submit",className:"submit",defaultValue:"Post Comment",onClick:()=>{fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j,comment:g,email:x,blog_id:w._id})}).then((e=>e.json())).then((e=>{!0===e.status?(B(),p(""),u(""),b("")):console.error("Error: Blogcategory not created successfully")})).catch((e=>{}))}})," ",(0,d.jsx)("input",{type:"hidden",name:"comment_post_ID",defaultValue:115,id:"comment_post_ID"}),(0,d.jsx)("input",{type:"hidden",name:"comment_parent",id:"comment_parent",defaultValue:0})]})]})]})})})})]}),(0,d.jsxs)("div",{className:"elementor-element elementor-element-7d78940d e-con-full e-flex e-con e-child","data-id":"7d78940d","data-element_type":"container",children:[(0,d.jsxs)("div",{className:"elementor-element elementor-element-2364e4b3 e-con-full e-flex elementor-invisible e-con e-child","data-id":"2364e4b3","data-element_type":"container","data-settings":'{"background_background":"classic","animation":"fadeInUp"}',children:[(0,d.jsx)("div",{className:"elementor-element elementor-element-7b46a6a1 elementor-widget elementor-widget-heading","data-id":"7b46a6a1","data-element_type":"widget","data-widget_type":"heading.default",children:(0,d.jsx)("div",{className:"elementor-widget-container",children:(0,d.jsx)("h4",{className:"elementor-heading-title elementor-size-default",children:"Popular Categories"})})}),(0,d.jsx)("div",{className:"elementor-element elementor-element-68e0c206 elementor-widget elementor-widget-elementskit-category-list","data-id":"68e0c206","data-element_type":"widget","data-widget_type":"elementskit-category-list.default",children:(0,d.jsx)("div",{className:"elementor-widget-container",children:(0,d.jsx)("div",{className:"ekit-wid-con",children:(0,d.jsx)("ul",{className:"elementor-icon-list-items",children:t&&t.map(((e,t)=>(0,d.jsx)("li",{className:"elementor-icon-list-item",children:(0,d.jsxs)("a",{href:"#",children:[(0,d.jsx)("span",{className:"elementor-icon-list-icon",children:(0,d.jsx)(i.g,{icon:o._2z})}),(0,d.jsxs)("span",{className:"elementor-icon-list-text",children:[" ",e.blog_category_name.charAt(0).toUpperCase()+e.blog_category_name.slice(1).toLowerCase()]})]})})))})})})})]}),(0,d.jsxs)("div",{className:"elementor-element elementor-element-108729d3 e-con-full e-flex elementor-invisible e-con e-child","data-id":"108729d3","data-element_type":"container","data-settings":'{"background_background":"classic","animation":"fadeInUp"}',children:[(0,d.jsx)("div",{className:"elementor-element elementor-element-4b8b13d5 elementor-widget elementor-widget-heading","data-id":"4b8b13d5","data-element_type":"widget","data-widget_type":"heading.default",children:(0,d.jsx)("div",{className:"elementor-widget-container",children:(0,d.jsx)("h3",{className:"elementor-heading-title elementor-size-default",children:"Doing It Right Before Your trading."})})}),(0,d.jsx)("div",{className:"elementor-element elementor-element-aa88978 elementor-widget elementor-widget-text-editor","data-id":"aa88978","data-element_type":"widget","data-widget_type":"text-editor.default",children:(0,d.jsxs)("div",{className:"elementor-widget-container",children:[(0,d.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n\t\t\t\t\t\t\t\t\t/*! elementor - v3.20.0 - 13-03-2024 */\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\tbackground-color: #69727d;\n\t\t\t\t\t\t\t\t\t\tcolor: #fff\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\tcolor: #69727d;\n\t\t\t\t\t\t\t\t\t\tborder: 3px solid;\n\t\t\t\t\t\t\t\t\t\tbackground-color: transparent\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\tmargin-top: 8px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {\n\t\t\t\t\t\t\t\t\t\twidth: 1em;\n\t\t\t\t\t\t\t\t\t\theight: 1em\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\tfloat: left;\n\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t\t\t\t\t\tfont-size: 50px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor .elementor-drop-cap-letter {\n\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t"}}),(0,d.jsx)("p",{children:"Ultricies augue id venenatis at egestas aenean semper ac lectus praesent consequat."})]})}),(0,d.jsx)("div",{className:"elementor-element elementor-element-f3a9969 elementor-widget elementor-widget-button","data-id":"f3a9969","data-element_type":"widget","data-widget_type":"button.default",children:(0,d.jsx)("div",{className:"elementor-widget-container",children:(0,d.jsx)("div",{className:"elementor-button-wrapper",children:(0,d.jsx)("a",{className:"elementor-button elementor-button-link elementor-size-sm",href:"index.html@p=115.html#",children:(0,d.jsx)("span",{className:"elementor-button-content-wrapper",children:(0,d.jsx)("span",{className:"elementor-button-text",children:"Discover More"})})})})})})]}),(0,d.jsx)("div",{className:"elementor-element elementor-element-63dc7457 e-flex e-con-boxed elementor-invisible e-con e-child","data-id":"63dc7457","data-element_type":"container","data-settings":'{"background_background":"classic","animation":"fadeInUp"}',children:(0,d.jsxs)("div",{className:"e-con-inner",children:[(0,d.jsx)("div",{className:"elementor-element elementor-element-7b7ef73 elementor-widget elementor-widget-heading","data-id":"7b7ef73","data-element_type":"widget","data-widget_type":"heading.default",children:(0,d.jsx)("div",{className:"elementor-widget-container",children:(0,d.jsx)("h5",{className:"elementor-heading-title elementor-size-default",children:"Latest Post"})})}),(0,d.jsx)("div",{className:"elementor-element elementor-element-5241bc1c elementor-grid-1 elementor-posts--thumbnail-left elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-posts","data-id":"5241bc1c","data-element_type":"widget","data-settings":'{"classic_columns":"1","classic_row_gap":{"unit":"px","size":14,"sizes":[]},"classic_columns_tablet":"2","classic_columns_mobile":"1","classic_row_gap_tablet":{"unit":"px","size":"","sizes":[]},"classic_row_gap_mobile":{"unit":"px","size":"","sizes":[]}}',"data-widget_type":"posts.classic",children:(0,d.jsxs)("div",{className:"elementor-widget-container",children:[(0,d.jsx)("link",{rel:"stylesheet",href:"wp-content/plugins/elementor-pro/assets/css/widget-posts.min.css"}),(0,d.jsx)("div",{className:"elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid",children:c&&c.map((e=>(0,d.jsxs)("article",{className:"elementor-post elementor-grid-item post-123 post type-post status-publish format-standard has-post-thumbnail hentry category-investment",children:[(0,d.jsx)("a",{className:"elementor-post__thumbnail__link",href:"index.html@p=123.html",tabIndex:-1,children:(0,d.jsx)("div",{className:"elementor-post__thumbnail",children:(0,d.jsx)("img",{width:1280,height:687,src:"".concat(m.q.BaseURL).concat(e.image),className:"attachment-full size-full wp-image-118",alt:"Business people, coach and stock market presentation in meeting for trading, graph and chart monito"})})}),(0,d.jsxs)("div",{className:"elementor-post__text",children:[(0,d.jsx)("div",{className:"elementor-post__title",children:(0,d.jsx)("a",{href:"index.html@p=123.html",children:e.title})}),(0,d.jsx)("div",{className:"elementor-post__meta-data",children:(0,d.jsx)("span",{className:"elementor-post-date",children:L(e.createdAt)})})]})]})))})]})})]})})]})]})})]}),(0,d.jsx)(s.A,{})]})}},9672:(e,t,n)=>{n.d(t,{q:()=>a});const l="http://52.14.130.62:8000/",a={BaseURL:"http://52.14.130.62:8000/",LISTBLOG:l+"Listblog",ADDBLOG:l+"blog",BLOGCATEGORY:l+"blogcategory",ADDCOMMENT:l+"addcomment",LISTCOMMENT:l+"listcomment/"}}}]);
//# sourceMappingURL=400.6428f597.chunk.js.map