"use strict";var e=require("react");function n(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}n(".test {\n  display: inline-block;\n  margin: 2em auto;\n  border: 2px solid #000;\n  font-size: 2em;\n}\n\n.buttonExample {\n  background: red;\n}");n(".card {\n  background: #ffffff;\n  border: 1px solid #ebebeb;\n  width: 250px;\n  padding: 10px; }\n  .card__header {\n    height: 160px; }\n    .card__header img {\n      height: 100%;\n      width: 100%;\n      background-size: cover; }\n  .card__description {\n    font-size: 18px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 10px 0px;\n    text-align: justify; }\n  .card__action {\n    display: flex;\n    justify-content: flex-end; }\n    .card__action button {\n      border: none;\n      background: #065fd4;\n      color: #fff;\n      height: 35px;\n      padding: 0px 20px;\n      border-radius: 3px;\n      cursor: pointer;\n      font-family: Arial, Helvetica, sans-serif;\n      text-transform: uppercase;\n      font-weight: bold; }\n");module.exports=function(n){return e.createElement("div",{className:"card"},e.createElement("header",{className:"card__header"},e.createElement("img",{src:n.photo})),e.createElement("main",{className:"card__description"},n.text),e.createElement("footer",{className:"card__action"},e.createElement("button",{onClick:function(e){n.handleClick(e)}},"read")))};
//# sourceMappingURL=index.js.map
