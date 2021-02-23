(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){"use strict";a.r(t);a(17),a(7),a(9),a(2);var n=a(0),c=a.n(n),l=a(4),r=a.n(l);var s=function(e){var t="https://acvoyager.github.io/7580page/";return c.a.createElement("header",null,c.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg bg-dark"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("a",{className:"navbar-brand",href:"#brand"},"Chang Xu"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"index.html"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"clock.html"},"Clock")),c.a.createElement("li",{className:"nav-item nav-item-current"},c.a.createElement("a",{className:"nav-link",href:"#assignment2"},"Assignment2")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"coming-soon.html"},"Assignment3")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"coming-soon.html"},"Assignment4")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"coming-soon.html"},"Assignment5")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"coming-soon.html"},"Final Project")))))))};var o=function(e){return c.a.createElement("div",{className:"container-fluid d-flex main-heading"},c.a.createElement("p",null,"Take a note."))},i=a(1);var m=function(e){var t="#00B74A",a="#F93154";return c.a.createElement("div",{className:e.className},c.a.createElement("label",{htmlFor:e.inputID,className:"form-label"},e.inputName),c.a.createElement("input",{type:"text",className:"form-control",id:e.inputID,"aria-describedby":e.helpID,value:e.text,onChange:function(t){e.setText(t.target.value)}}),c.a.createElement("div",{id:e.helpID,className:"form-text"},e.helpInfo),c.a.createElement("p",{style:{color:e.isValid?t:a}},e.message))};var u=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(!0),o=Object(i.a)(s,2),u=o[0],p=o[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),f=b[0],E=b[1],h=Object(n.useState)(""),j=Object(i.a)(h,2),v=j[0],N=j[1];Object(n.useEffect)(function(){r(y(v))},[v]);var y=function(t){if(u)return E(""),p(!1),!1;if(0===t.length)E("The name of the new project cannot be empty!");else if(/^[a-zA-Z]+$/.test(t[0])){if(!Object.keys(e.data).includes(t))return E('Name "'.concat(t,'" is valid!')),!0;E('Name "'.concat(t,'" is already used!'))}else E("The first character has to be a letter.");return!1};return c.a.createElement("form",{className:"m-2"},c.a.createElement(m,{className:"mb-3",inputID:"inputProjectName",inputName:"Project Name",helpID:"createHelp",helpInfo:"Enter the new project name here.",message:f,text:v,setText:N,isValid:l}),c.a.createElement("div",{className:"d-flex justify-content-end"},c.a.createElement("button",{type:"button",className:"btn btn-primary me-3",disabled:!l,onClick:function(t){return e.onSubmitClick(v)}},"Submit"),c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:e.onCancelClick},"Cancel")))};var p=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),l=a[0],r=a[1];return c.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},c.a.createElement("div",null,c.a.createElement("input",{className:"form-check-input me-1",type:"checkbox",value:"","aria-label":e.projectName,checked:l,onChange:function(t){var a=!l,n=e.checkedProjects.slice();if(a)n.push(e.projectName);else{var c=n.indexOf(e.projectName);n.splice(c,1)}e.setCheckedProjects(n),r(a)}}),c.a.createElement("span",null,e.projectName)),c.a.createElement("span",{className:"badge bg-primary rounded-pill"},e.num))};var d=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],r=a[1];return c.a.createElement("div",{className:"collapse show mx-1 mt-1",id:"collapseProjectsMenu"},c.a.createElement("div",{className:"div-create-project"},c.a.createElement("p",null,"Indicator for props.data change: "+e.data["Learn React"].length),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary my-2",id:"create-new-button",onClick:function(){r(!l)}},"Create a new project"),l?c.a.createElement(u,{data:e.data,onSubmitClick:function(t){!function(t){var a=Object.assign(e.data);a[t]=[],e.setData(a)}(t),function(t){var a=e.checkedProjects.slice();a.push(t),e.setCheckedProjects(a)}(t),r(!1)},onCancelClick:function(){return r(!1)}}):null),c.a.createElement("ul",{className:"list-group mb-3"},Object.entries(e.data).map(function(e,t){var a={},n=Object(i.a)(e,2),c=n[0],l=n[1];return a.projectName=c,a.noteNum=l.length,a}).slice().reverse().map(function(t,a){return t.projectName?c.a.createElement(p,{key:Object.keys(e.data).length-a,projectName:t.projectName,num:t.noteNum,checkedProjects:e.checkedProjects,setCheckedProjects:e.setCheckedProjects}):null})))};var b=function(e){return c.a.createElement("div",{className:e.className},c.a.createElement("label",{htmlFor:e.selectID,className:"form-label"},e.labelText),c.a.createElement("select",{className:"form-select",id:e.selectID,"aria-label":"{props.labelText}}",onChange:function(t){e.setOption(t.target.value)}},c.a.createElement("option",{defaultValue:e.currentOption},e.currentOption),e.options.map(function(t,a){return t===e.currentOption?null:c.a.createElement("option",{key:a,value:t},t)})))};var f=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),u=o[0],p=o[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),f=b[0],E=b[1];return Object(n.useEffect)(function(){e.setInputText(f),e.setIfInputValid(function(t){if(l)return p(""),r(!1),e.setIfEmpty(!0),!0;if(0===t.length)p(""),e.setIfEmpty(!0);else{if(e.setIfEmpty(!1),!/^[a-zA-Z]+$/.test(t[0]))return p("The first character has to be a letter."),!1;p("Title: ".concat(t))}return!0}(f))},[f]),c.a.createElement(m,{className:"my-1",inputID:"notetext-input-title",inputName:"Please enter the note title (optional)",helpID:"notetext-input-title-help",helpInfo:"Enter the title here.",message:u,text:f,setText:E,isValid:e.ifInputValid})};var E=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),u=o[0],p=o[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),f=b[0],E=b[1];return Object(n.useEffect)(function(){e.setInputText(f),e.setIfInputValid(function(t){if(l)return p(""),r(!1),e.setIfEmpty(!0),!0;if(0===t.length)p(""),e.setIfEmpty(!0);else{if(e.setIfEmpty(!1),!/^[a-zA-Z]+$/.test(t[0]))return p("The first character has to be a letter."),!1;p("Content: ".concat(t))}return!0}(f))},[f]),c.a.createElement(m,{className:"my-1",inputID:"notetext-input-content",inputName:"Please enter the note content (optional)",helpID:"notetext-input-content-help",helpInfo:"Enter the content here.",message:u,text:f,setText:E,isValid:e.ifInputValid})};var h=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(!0),o=Object(i.a)(s,2),m=o[0],u=o[1],p=Object(n.useState)(!0),d=Object(i.a)(p,2),b=d[0],h=d[1],j=Object(n.useState)(""),v=Object(i.a)(j,2),N=v[0],y=v[1],g=Object(n.useState)(!0),O=Object(i.a)(g,2),I=O[0],x=O[1],k=Object(n.useState)(!0),T=Object(i.a)(k,2),S=T[0],C=T[1];return Object(n.useEffect)(function(){e.setIfFormValid(!(m&&I)&&b&&S)},[m,I,b,S]),Object(n.useEffect)(function(){var t={type:"text",title:l,text:N};e.setFormInfo(t)},[l,N]),c.a.createElement("div",{className:"my-2"},c.a.createElement(f,{setIfEmpty:u,ifInputValid:b,setIfInputValid:h,setInputText:r}),c.a.createElement(E,{setIfEmpty:x,ifInputValid:S,setIfInputValid:C,setInputText:y}),c.a.createElement("div",null,c.a.createElement("p",{style:{color:"#FF7700"}},m&&I?"Note: Either title or content should be filled.":b&&S?null:"Note: All input fields need to be valid!")))};var j=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),u=o[0],p=o[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),f=b[0],E=b[1];return Object(n.useEffect)(function(){var t;e.setInputText(f),e.setIfInputValid((t=f,l?(p(""),r(!1),e.setIfEmpty(!0),!1):0===t.length?(p(""),e.setIfEmpty(!0),!1):(e.setIfEmpty(!1),/^[a-zA-Z]+$/.test(t[0])?(p("URL: ".concat(t)),!0):(p("The first character has to be a letter."),!1))))},[f]),c.a.createElement(m,{className:"my-1",inputID:"notelink-input-url",inputName:"Please enter the URL (required)",helpID:"notelink-input-url-help",helpInfo:"Enter the URL here.",message:u,text:f,setText:E,isValid:e.ifInputValid})};var v=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),u=o[0],p=o[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),f=b[0],E=b[1];return Object(n.useEffect)(function(){e.setInputText(f),e.setIfInputValid(function(e){if(l)return p(""),r(!1),!0;if(0===e.length)p("");else{if(!/^[a-zA-Z]+$/.test(e[0]))return p("The first character has to be a letter."),!1;p("Display name: ".concat(e))}return!0}(f))},[f]),c.a.createElement(m,{className:"my-1",inputID:"notelink-input-content",inputName:"Please enter the link display text (optional)",helpID:"notelink-input-content-help",helpInfo:"Enter the text here.",message:u,text:f,setText:E,isValid:e.ifInputValid})};var N=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(!0),o=Object(i.a)(s,2),m=o[0],u=o[1],p=Object(n.useState)(!1),d=Object(i.a)(p,2),b=d[0],f=d[1],E=Object(n.useState)(""),h=Object(i.a)(E,2),N=h[0],y=h[1],g=Object(n.useState)(!0),O=Object(i.a)(g,2),I=O[0],x=O[1];return Object(n.useEffect)(function(){e.setIfFormValid(!m&&b&&I)},[m,b,I]),Object(n.useEffect)(function(){var t={type:"link",url:l,text:N};e.setFormInfo(t)},[l,N]),c.a.createElement("div",{className:"my-2"},c.a.createElement(j,{setIfEmpty:u,ifInputValid:b,setIfInputValid:f,setInputText:r}),c.a.createElement(v,{ifInputValid:I,setIfInputValid:x,setInputText:y}),c.a.createElement("div",null,c.a.createElement("p",{style:{color:"#FF7700"}},m?"Note: The URL cannot be empty!":b&&I?null:"Note: All input fields need to be valid!")))};var y=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),m=o[0],u=o[1],p=Object(n.useState)(Object.values(e.noteTypes)),d=Object(i.a)(p,2),f=d[0],E=(d[1],Object(n.useState)(Object.values(e.noteTypes)[0])),j=Object(i.a)(E,2),v=j[0],y=j[1],g=Object(n.useState)("no project"),O=Object(i.a)(g,2),I=O[0],x=O[1];return c.a.createElement("div",{className:"modal fade",id:"noteModal",tabIndex:"-1","aria-labelledby":"noteModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",id:"noteModalLabel"},"Create a note"),c.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),c.a.createElement("div",{className:"modal-body"},c.a.createElement(b,{options:Object.keys(e.data),className:"my-2",selectID:"select-input-project",labelText:"Select a project where the note will be added",currentOption:I,setOption:function(e){return x(e)}}),c.a.createElement(b,{options:f,className:"my-2",selectID:"select-input-note",labelText:"Select a note type",currentOption:v,setOption:function(e){return y(e)}}),v===e.noteTypes.TEXT?c.a.createElement(h,{setIfFormValid:u,setFormInfo:r}):v===e.noteTypes.LINK?c.a.createElement(N,{setIfFormValid:u,setFormInfo:r}):void 0),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-danger","data-bs-dismiss":"modal"},"Close"),c.a.createElement("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",disabled:!m,onClick:function(){return e.pushToData(I,l)}},"Save Note")))))};var g=function(e){var t="Show project panel",a="Hide project panel",l=Object(n.useState)(!0),r=Object(i.a)(l,2),s=r[0],o=r[1];return c.a.createElement("div",{className:"container-fluid d-flex flex-column"},c.a.createElement("div",{className:"mx-auto my-3"},c.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-add px-4 py-3","data-bs-toggle":"modal","data-bs-target":"#noteModal"},c.a.createElement("span",null,"Add a note"))),c.a.createElement(y,{data:e.data,setData:e.setData,noteTypes:e.noteTypes,pushToData:e.pushToData}),c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("hr",{className:"mt-0"}),c.a.createElement("button",{className:"btn btn-secondary mx-1",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseProjectsMenu","aria-expanded":"true","aria-controls":"collapseProjectsMenu",onClick:function(){o(!s)}},c.a.createElement("span",null,s?a:t)),c.a.createElement(d,{data:e.data,setData:e.setData,checkedProjects:e.checkedProjects,setCheckedProjects:e.setCheckedProjects})))};var O=function(e){return c.a.createElement("div",{className:"note note-text p-2"},c.a.createElement("div",{className:"note-type note-type-text text-muted pt-2"},c.a.createElement("h6",null,"Text"),c.a.createElement("hr",{className:"my-1"})),c.a.createElement("div",{className:"note-text-title"},c.a.createElement("h4",null,e.title)),c.a.createElement("div",{className:"note-text-content"},e.text))};var I=function(e){return c.a.createElement("div",{className:"note note-link p-2"},c.a.createElement("div",{className:"note-type note-type-link text-muted pt-2"},c.a.createElement("h6",null,"Link"),c.a.createElement("hr",{className:"my-1"})),c.a.createElement("div",null,e.text?c.a.createElement("a",{className:"note-link-displayed h4",href:e.url,alt:e.text},e.text):c.a.createElement("a",{className:"note-link-raw",href:e.url,alt:e.url},e.url)))};var x=function(e){return c.a.createElement("div",{className:"col-md-6 col-xl-4 p-2"},e.noteInfo.type===e.noteTypes.TEXT?c.a.createElement(O,{title:e.noteInfo.title,text:e.noteInfo.text}):e.noteInfo.type===e.noteTypes.LINK?c.a.createElement(I,{url:e.noteInfo.url,text:e.noteInfo.text}):void 0)};var k=function(e){var t="Show",a="Hide",l=Object(n.useState)(!0),r=Object(i.a)(l,2),s=r[0],o=r[1],m=function(){return"NoteArea"+e.projectID};return c.a.createElement("div",{className:"container-fluid project-area my-3"},c.a.createElement("div",{className:"project-area-head d-flex align-items-center"},c.a.createElement("span",{className:"h3 mb-0 me-3"},e.projectName),c.a.createElement("button",{className:"btn btn-secondary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+m(),"aria-expanded":"true","aria-controls":m(),onClick:function(){o(!s)}},s?a:t)),c.a.createElement("hr",null),c.a.createElement("div",{className:"project-area-notes row collapse show",id:m()},e.noteArray.map(function(t,a){return c.a.createElement(x,{key:a,noteInfo:t,noteTypes:e.noteTypes})})))};var T=function(e){return c.a.createElement("div",{className:"container-fluid d-flex flex-column"},e.checkedProjects.slice().reverse().map(function(t,a){return c.a.createElement(k,{key:e.checkedProjects.length-a,projectID:a,projectName:t,noteArray:e.data[t],noteTypes:e.noteTypes})}))},S=a(5),C={TEXT:"text",LINK:"link"},D=Object(S.a)({"Learn React":[{type:C.TEXT,title:"Create a new project",text:"cd to the project directory\nnpx create-react-app project-name\ncd project-name\nnpm start"},{type:C.LINK,url:"https://reactjs.org/docs/getting-started.html",text:"React docs"},{type:C.LINK,url:"https://reactstrap.github.io/",text:"Reactstrap docs"},{type:C.TEXT,title:"Create a new project"},{type:C.LINK,url:"https://reactjs.org/docs/getting-started.html",text:"React docs"},{type:C.LINK,url:"https://reactstrap.github.io/",text:"Reactstrap docs"},{type:C.TEXT,text:"cd to the project directory\nnpx create-react-app project-name\ncd project-name\nnpm start"},{type:C.LINK,url:"https://reactjs.org/docs/getting-started.html",text:"React docs"},{type:C.LINK,url:"https://reactstrap.github.io/",text:"Reactstrap docs"}]},"no project",[{type:C.TEXT,title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Justo nec ultrices dui sapien eget mi proin sed libero. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Nisi quis eleifend quam adipiscing. Sit amet tellus cras adipiscing enim eu. Tincidunt tortor aliquam nulla facilisi cras fermentum. Orci phasellus egestas tellus rutrum. Tortor dignissim convallis aenean et. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Purus semper eget duis at tellus. Ut consequat semper viverra nam libero justo laoreet sit amet. Sed enim ut sem viverra aliquet eget. Amet volutpat consequat mauris nunc congue nisi. Aliquet nibh praesent tristique magna."},{type:C.LINK,url:"https://loremipsum.io/generator/",text:"Lorem Ipsum generator"},{type:C.LINK,url:"https://loremipsum.io/generator/"}]);var P=function(e){var t=Object(n.useState)(D),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(Object.keys(l)),o=Object(i.a)(s,2),m=o[0],u=o[1],p=Object(n.useState)(C),d=Object(i.a)(p,2),b=d[0];return d[1],c.a.createElement("div",{className:"row main-content"},c.a.createElement("div",{className:"col-md-3 main-content-left"},c.a.createElement(g,{data:l,setData:r,checkedProjects:m,setCheckedProjects:u,noteTypes:b,pushToData:function(e,t){var a=Object.assign(l);a[e].push(t),console.log("".concat(JSON.stringify(t)," is added to ").concat(e)),r(a)}})),c.a.createElement("div",{className:"col-md-9 main-content-right"},c.a.createElement(T,{data:l,setData:r,checkedProjects:m,setCheckedProjects:u,noteTypes:b})))};var V=function(e){return c.a.createElement("main",{className:"d-flex flex-column page-main flex-grow-1"},c.a.createElement(o,null),c.a.createElement(P,null))};var w=function(e){return c.a.createElement("footer",{className:"footer mt-auto py-3 bg-dark"},c.a.createElement("div",{className:"container",id:"copyright-text"},"@2021 Copyright: Chang Xu"))},L=function(){return c.a.createElement("div",{className:"d-flex flex-column div-app"},c.a.createElement(s,null),c.a.createElement("a",{className:"visually-hidden-focusable",href:"#content"},"Skip to main content"),c.a.createElement(V,null),c.a.createElement(w,null))},F=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)})};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),F()},2:function(e,t,a){},6:function(e,t,a){e.exports=a(18)},9:function(e,t,a){}},[[6,3,2]]]);
//# sourceMappingURL=main.65c041ed.chunk.js.map