var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,r="object"==typeof self&&self&&self.Object===Object&&self,c=a||r||Function("return this")(),f=Object.prototype.toString,u=Math.max,s=Math.min,p=function(){return c.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(b(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=b(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var r=o.test(e);return r||l.test(e)?i(e.slice(2),r?2:8):n.test(e)?NaN:+e}const y=e=>fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,flags,population,languages`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})),d=e=>{const{capital:t,flags:n,name:o,population:l}=e[0];return`\n    <img src="${n.svg}" alt="${o.official}flag" width="20px">\n    <h2>${o.official}</h2>\n    <ul>\n        <li>capital:${t}</li>\n        <li>population:${l}</li>\n        <li>languages:${Object.values(e[0].languages)}</li>\n    </ul>\n    `},h=document.querySelector("#search-box"),j=e=>y(e).then((e=>{if(1===e.length){const t=d(e);console.log(t),document.querySelector(".country-info").insertAdjacentHTML("beforebegin",d())}})).catch((e=>console.log(e)));h.addEventListener("input",(()=>{const e=document.querySelector("#search-box").value;j(e)}));
//# sourceMappingURL=index.6386f313.js.map