(this.webpackJsonpparcelfinder=this.webpackJsonpparcelfinder||[]).push([[0],{42:function(e,t,r){"use strict";r.r(t);var s=r(2),c=r.n(s),a=r(17),n=r.n(a),i=(r(8),r(6)),d=r(7),o=r.p+"static/media/shipping-fast-solid.dc7b0b73.svg",l=r.p+"static/media/dhl-brands.98507257.svg",u=r(0),j=function(e){var t,r,s,c=e.data,a=e.eraseHandler,n=null===(t=c.events[0])||void 0===t?void 0:t.timestamp;return Object(u.jsxs)("div",{className:"card",id:c.id,children:[Object(u.jsx)("span",{className:"hide",onClick:a,children:"X"}),Object(u.jsxs)("div",{className:"card-row",children:[Object(u.jsx)("h3",{children:"DHL Shipment"}),Object(u.jsx)("img",{src:l,className:"provider-logo",alt:"Provider Logo"})]}),Object(u.jsxs)("div",{className:"card-row",children:[Object(u.jsx)("span",{children:"Tracking number: "}),Object(u.jsx)("span",{children:c.id})]}),Object(u.jsxs)("div",{className:"card-row",children:[Object(u.jsx)("span",{children:"From"}),Object(u.jsx)("span",{children:null!==(r=c.origin.address.countryCode)&&void 0!==r?r:c.origin.address.addressLocality})]}),Object(u.jsxs)("div",{className:"card-row",children:[Object(u.jsx)("span",{children:"To"}),Object(u.jsx)("span",{children:null!==(s=c.destination.address.countryCode)&&void 0!==s?s:c.destination.address.addressLocality})]}),Object(u.jsxs)("div",{className:"card-row",children:[Object(u.jsx)("span",{children:"Current location: "}),Object(u.jsx)("span",{children:c.status.description})]}),Object(u.jsxs)("div",{className:"card-row",children:[Object(u.jsx)("span",{children:"Last updated: "}),Object(u.jsx)("span",{children:n})]})]})},p=r(18),h=r.n(p);var m=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),r=t[0],c=t[1],a=Object(s.useState)([]),n=Object(d.a)(a,2),l=n[0],p=n[1];Object(s.useEffect)((function(){localStorage.getItem("localList")&&JSON.parse(localStorage.getItem("localList")).forEach((function(e){return m(e.shipNr)}))}),[]),Object(s.useEffect)((function(){localStorage.setItem("localList",JSON.stringify(r))}),[r]);var m=function(e){var t={method:"GET",url:"https://api-eu.dhl.com/track/shipments",params:{trackingNumber:"".concat(e)},headers:{"DHL-API-Key":"".concat("vMy7rCUMwczrcYGQSsrZvuf6d1oAuONk")}};h.a.request(t).then((function(e){var t=e.data.shipments;c((function(e){return[].concat(Object(i.a)(e),[{shipNr:t[0].id,carrier:"DHL"}])})),p((function(e){return[].concat(Object(i.a)(e),[t[0]])}))})).catch((function(e){switch(e.response.status){case 400:b("Parcel not found.");break;case 429:b("No more API requests possible.");break;default:b("Unknown error")}}))},b=function(e){var t=document.createElement("p");t.innerText=e,t.className="errorMsg",document.querySelector(".error-display").appendChild(t)},O=function(e){c(r.filter((function(t){return t.shipNr!==e.target.parentElement.id}))),p(l.filter((function(t){return t.id!==e.target.parentElement.id})))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{className:"header",children:[Object(u.jsx)("span",{className:"strong",children:"Parcel"}),"finder",Object(u.jsx)("img",{src:o,className:"logo",alt:"Parcelfinder Logo"})]}),Object(u.jsxs)("form",{className:"form",id:"form",onSubmit:function(e){var t;e.preventDefault(),null===(t=document.querySelector(".errorMsg"))||void 0===t||t.remove(),r.some((function(t){return t.shipNr===e.target.shipInput.value}))?b("Parcel already in list."):m(e.target.shipInput.value)},children:[Object(u.jsx)("input",{type:"text",name:"shipInput",id:"shipInput",className:"input",placeholder:"Enter shipment number here"}),Object(u.jsx)("button",{type:"submit",className:"submit",children:"Search"})]}),Object(u.jsx)("div",{className:"error-display"}),Object(u.jsx)("div",{className:"card-container",children:l.map((function(e,t){return Object(u.jsx)(j,{eraseHandler:O,data:e},t)}))})]})};n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))},8:function(e,t,r){}},[[42,1,2]]]);
//# sourceMappingURL=main.cf4a4954.chunk.js.map