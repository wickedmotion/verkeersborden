(()=>{var e={622:()=>{}},r={};function t(a){var n=r[a];if(void 0!==n)return n.exports;var o=r[a]={exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=t(622),r=document.getElementById("traffic-signs-container"),a="/static/",n=".png";fetch(a).then((function(e){return e.text()})).then((function(e){(new DOMParser).parseFromString(e,"text/html").querySelectorAll("a").forEach((function(e){var t=e.getAttribute("href");if(t.endsWith(n)){var o=document.createElement("img");o.src=a+t,o.alt="Verkeersbord",o.classList.add("traffic-sign"),o.id=t.slice(0,-n.length),r.appendChild(o)}}))}));var o=document.getElementById("quiz-container");new e.Quiz([{question:"Wat betekent dit verkeersbord?",imageUrl:"https://www.verkeersborden.com/assets/preview/borden-waarschuwing-gevaarlijke-bocht-links_1.png",choices:[{text:"Gevaarlijke bocht naar links",correct:!0},{text:"Gevaarlijke bocht naar rechts",correct:!1},{text:"Voorrangsweg",correct:!1},{text:"Voetgangersoversteekplaats",correct:!1}]},{question:"Wat betekent dit verkeersbord?",imageUrl:"https://www.verkeersborden.com/assets/preview/borden-waarschuwing-gevaarlijke-drempels_1.png",choices:[{text:"Gevaarlijke bocht naar links",correct:!1},{text:"Gevaarlijke drempels in de weg",correct:!0},{text:"Voorrangsweg",correct:!1},{text:"Voetgangersoversteekplaats",correct:!1}]}],o).render()})()})();