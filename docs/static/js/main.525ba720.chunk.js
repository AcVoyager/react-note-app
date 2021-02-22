(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){},2:function(e,t,a){},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);a(23),a(7),a(9),a(2);var n=a(0),c=a.n(n),r=a(4),l=a.n(r);var s=function(e){var t="https://acvoyager.github.io/7580page/";return c.a.createElement("header",null,c.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg bg-dark"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("a",{className:"navbar-brand",href:"#brand"},"Chang Xu"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"index.html"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"clock.html"},"Clock")),c.a.createElement("li",{className:"nav-item nav-item-current"},c.a.createElement("a",{className:"nav-link",href:"#assignment2"},"Assignment2")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"coming-soon.html"},"Assignment3")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"coming-soon.html"},"Assignment4")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"coming-soon.html"},"Assignment5")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:t+"coming-soon.html"},"Final Project")))))))};var o=function(e){return c.a.createElement("div",{className:"container-fluid d-flex main-heading"},c.a.createElement("p",null,"Take a note."))},i=a(1);var m=function(e){var t="#00B74A",a="#F93154";return c.a.createElement("div",null,c.a.createElement("label",{htmlFor:e.inputID,className:"form-label"},e.inputName),c.a.createElement("input",{type:"text",className:"form-control",id:e.inputID,"aria-describedby":e.helpID,value:e.text,onChange:function(t){e.setText(t.target.value)}}),c.a.createElement("div",{id:e.helpID,className:"form-text"},e.helpInfo),c.a.createElement("p",{style:{color:e.isValid?t:a}},e.message))};var u=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(!0),o=Object(i.a)(s,2),u=o[0],d=o[1],p=Object(n.useState)(""),v=Object(i.a)(p,2),f=v[0],b=v[1],E=Object(n.useState)(""),h=Object(i.a)(E,2),N=h[0],g=h[1];Object(n.useEffect)(function(){l(j(N))},[N]);var j=function(t){if(u)return b(""),d(!1),!1;if(0===t.length)b("The name of the new project cannot be empty!");else{if(!Object.keys(e.data).includes(t))return b('Name "'.concat(t,'" is valid!')),!0;b('Name "'.concat(t,'" is already used!'))}return!1};return c.a.createElement("form",{className:"m-2"},c.a.createElement("div",{className:"mb-3"},c.a.createElement(m,{inputID:"inputProjectName",inputName:"Project Name",helpID:"createHelp",helpInfo:"Enter the new project name here.",message:f,text:N,setText:g,isValid:r})),c.a.createElement("div",{className:"d-flex justify-content-end"},c.a.createElement("button",{type:"button",className:"btn btn-primary me-3",disabled:!r,onClick:function(t){return e.onSubmitClick(N)}},"Submit"),c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:e.onCancelClick},"Cancel")))};var d=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),r=a[0],l=a[1];return c.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},c.a.createElement("div",null,c.a.createElement("input",{className:"form-check-input me-1",type:"checkbox",value:"","aria-label":e.projectName,checked:r,onChange:function(t){var a=!r,n=e.checkedProjects.slice();if(a)n.unshift(e.projectName);else{var c=n.indexOf(e.projectName);n.splice(c,1)}e.setCheckedProjects(n),l(a)}}),c.a.createElement("span",null,e.projectName)),c.a.createElement("span",{className:"badge bg-primary rounded-pill"},e.num))};var p=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],l=a[1];return c.a.createElement("div",{className:"collapse show mx-1 mt-1",id:"collapseProjectsMenu"},c.a.createElement("div",{className:"div-create-project"},c.a.createElement("button",{type:"button",className:"btn btn-outline-primary my-2",id:"create-new-button",onClick:function(){l(!r)}},"Create a new project"),r?c.a.createElement(u,{data:e.data,onSubmitClick:function(t){!function(t){var a=Object.assign(e.data);a[t]=[],e.setData(a)}(t),function(t){var a=e.checkedProjects.slice();a.unshift(t),e.setCheckedProjects(a)}(t),l(!1)},onCancelClick:function(){return l(!1)}}):null),c.a.createElement("ul",{className:"list-group mb-3"},Object.entries(e.data).map(function(e,t){var a={},n=Object(i.a)(e,2),c=n[0],r=n[1];return a.projectName=c,a.noteNum=r.length,a}).map(function(t,a){return t.projectName?c.a.createElement(d,{key:a,projectName:t.projectName,num:t.noteNum,checkedProjects:e.checkedProjects,setCheckedProjects:e.setCheckedProjects}):null})))};a(17);var v=function(e){return c.a.createElement("div",{className:"container-fluid d-flex flex-column"},c.a.createElement("div",{className:"mx-auto my-3"},c.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-add px-4 py-3"},c.a.createElement("span",null,"Add a note"))),c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("hr",{className:"mt-0"}),c.a.createElement("button",{className:"btn btn-outline-secondary mx-1",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseProjectsMenu","aria-expanded":"true","aria-controls":"collapseProjectsMenu"},c.a.createElement("span",null,"Toggle projects panel")),c.a.createElement(p,{data:e.data,setData:e.setData,checkedProjects:e.checkedProjects,setCheckedProjects:e.setCheckedProjects})))};var f=function(e){return c.a.createElement("div",null,c.a.createElement("div",null,e.title),c.a.createElement("div",null,e.text))};var b=function(e){return c.a.createElement("div",null,c.a.createElement("div",null,e.url),c.a.createElement("div",null,e.text))};var E=function(e){return c.a.createElement("div",{className:"note-div col-sm-6 col-xl-3"},e.noteInfo.type==e.noteTypes.TEXT?c.a.createElement(f,{title:e.noteInfo.title,text:e.noteInfo.text}):e.noteInfo.type==e.noteTypes.LINK?c.a.createElement(b,{url:e.noteInfo.url,text:e.noteInfo.text}):void 0)};var h=function(e){return c.a.createElement("div",{className:"container-fluid project-area"},c.a.createElement("div",null,c.a.createElement("h4",null,e.projectName)),c.a.createElement("hr",null),c.a.createElement("div",{className:"notes-area row"},e.noteArray.map(function(t,a){return c.a.createElement(E,{key:a,noteInfo:t,noteTypes:e.noteTypes})})))};a(19);var N=function(e){return c.a.createElement("div",{className:"container-fluid d-flex flex-column"},e.checkedProjects.map(function(t,a){return c.a.createElement(h,{key:a,projectName:t,noteArray:e.data[t],noteTypes:e.noteTypes})}))},g=(a(21),a(5)),j={TEXT:"text",LINK:"link"},y=Object(g.a)({"Learn React":[{type:j.TEXT,title:"Create a new project",text:"cd to the project directory\nnpx create-react-app project-name\ncd project-name\nnpm start"},{type:j.LINK,url:"https://reactjs.org/docs/getting-started.html",text:"React docs"},{type:j.LINK,url:"https://reactstrap.github.io/",text:"Reactstrap docs"},{type:j.TEXT,title:"Create a new project",text:"cd to the project directory\nnpx create-react-app project-name\ncd project-name\nnpm start"},{type:j.LINK,url:"https://reactjs.org/docs/getting-started.html",text:"React docs"},{type:j.LINK,url:"https://reactstrap.github.io/",text:"Reactstrap docs"},{type:j.TEXT,title:"Create a new project",text:"cd to the project directory\nnpx create-react-app project-name\ncd project-name\nnpm start"},{type:j.LINK,url:"https://reactjs.org/docs/getting-started.html",text:"React docs"},{type:j.LINK,url:"https://reactstrap.github.io/",text:"Reactstrap docs"}]},"no project",[{type:j.TEXT,title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Justo nec ultrices dui sapien eget mi proin sed libero. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Nisi quis eleifend quam adipiscing. Sit amet tellus cras adipiscing enim eu. Tincidunt tortor aliquam nulla facilisi cras fermentum. Orci phasellus egestas tellus rutrum. Tortor dignissim convallis aenean et. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Purus semper eget duis at tellus. Ut consequat semper viverra nam libero justo laoreet sit amet. Sed enim ut sem viverra aliquet eget. Amet volutpat consequat mauris nunc congue nisi. Aliquet nibh praesent tristique magna."},{type:j.LINK,url:"https://loremipsum.io/generator/",text:"Lorem Ipsum generator"}]);var x=function(e){var t=Object(n.useState)(y),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(Object.keys(r)),o=Object(i.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)(j),p=Object(i.a)(d,2),f=p[0];return p[1],c.a.createElement("div",{className:"row main-content"},c.a.createElement("div",{className:"col-md-3 main-content-left"},c.a.createElement(v,{data:r,setData:l,checkedProjects:m,setCheckedProjects:u})),c.a.createElement("div",{className:"col-md-9 main-content-right"},c.a.createElement(N,{data:r,setData:l,checkedProjects:m,setCheckedProjects:u,noteTypes:f})))};var k=function(e){return c.a.createElement("main",{className:"d-flex flex-column page-main flex-grow-1"},c.a.createElement(o,null),c.a.createElement(x,null))};var C=function(e){return c.a.createElement("footer",{className:"footer mt-auto py-3 bg-dark"},c.a.createElement("div",{className:"container",id:"copyright-text"},"@2021 Copyright: Chang Xu"))},T=function(){return c.a.createElement("div",{className:"d-flex flex-column div-app"},c.a.createElement(s,null),c.a.createElement("a",{className:"visually-hidden-focusable",href:"#content"},"Skip to main content"),c.a.createElement(k,null),c.a.createElement(C,null))},I=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,27)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),I()},6:function(e,t,a){e.exports=a(24)},9:function(e,t,a){}},[[6,3,2]]]);
//# sourceMappingURL=main.525ba720.chunk.js.map