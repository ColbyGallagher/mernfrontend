(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),r=t.n(c),m=(t(22),t(6)),i=t(1),u=(t(23),function(e){return l.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},l.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),s=(t(24),function(e){return l.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),o=(t(25),function(e){return l.a.createElement("li",{className:"user-item"},l.a.createElement(s,{className:"user-item__content"},l.a.createElement(m.b,{to:"/".concat(e.uid,"/places")},l.a.createElement("div",{className:"user-item__image"},l.a.createElement(u,{image:e.image,alt:e.name})),l.a.createElement("div",{className:"user-item__info"},l.a.createElement("h2",null,e.name),l.a.createElement("h3",null,e.placeCount," ",1===e.placeCount?"place":"places")))))}),E=(t(31),function(e){return 0===e.items.length?l.a.createElement("div",{className:"center"},l.a.createElement("h2",null,"No users found")):l.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return l.a.createElement(o,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.placeCount})})))}),d=function(){return l.a.createElement(E,{items:[{id:"u1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUsT2OS-43VY5Y13EvZb0Hay-TVEy0BY7JGQ&usqp=CAU",name:"Colby Gallagher",placeCount:5},{id:"u2",image:"https://media-exp1.licdn.com/dms/image/C5603AQGiu5YjnacN6Q/profile-displayphoto-shrink_800_800/0?e=1600300800&v=beta&t=dJE_UvpFJvzfAaTVLoXSTBTla_wEU6UuV0vnZb_Jjao",name:"Zoe Ebert",placeCount:1}]})},p=function(){return l.a.createElement("h2",null,"New Place works!")},f=t(16),h=(t(32),function(e){return l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement(m.c,{to:"/",exact:!0},"All users")),l.a.createElement("li",null,l.a.createElement(m.c,{to:"/u1/places"},"My places")),l.a.createElement("li",null,l.a.createElement(m.c,{to:"/places/new"},"Add place")),l.a.createElement("li",null,l.a.createElement(m.c,{to:"/auth"},"Authenticate")))}),v=(t(33),function(e){return l.a.createElement("header",{className:"main-header"},e.children)}),g=(t(34),function(e){var a=l.a.createElement("aside",{className:"side-drawer"},e.children);return r.a.createPortal(a,document.getElementById("drawer-hook"))}),N=(t(35),function(e){return r.a.createPortal(l.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),b=(t(36),function(e){var a=Object(n.useState)(!1),t=Object(f.a)(a,2),c=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,c&&l.a.createElement(N,{onClick:function(){r(!1)}}),c&&l.a.createElement(g,null,l.a.createElement("nav",{className:"main-navigation__drawer-nav"},l.a.createElement(h,null))),l.a.createElement(v,null,l.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){r(!0)}},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("h1",{className:"main-navigation__title"},l.a.createElement(m.b,{to:"/"},"Your Places")),l.a.createElement("nav",{className:"main-navigation__header-nav"},l.a.createElement(h,null))))}),_=function(){return l.a.createElement(m.a,null,l.a.createElement(b,null),l.a.createElement("main",null,l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/",exact:!0},l.a.createElement(d,null)),l.a.createElement(i.b,{path:"/places/new",exact:!0},l.a.createElement(p,null)),l.a.createElement(i.a,{to:"/"}))))};r.a.render(l.a.createElement(_,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.f27d3116.chunk.js.map