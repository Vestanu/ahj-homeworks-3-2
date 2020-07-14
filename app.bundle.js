!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports='<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <meta name=viewport content="width=device-width,initial-scale=1"> <meta http-equiv=X-UA-Compatible content="ie=edge"> <title>Document</title> </head> <body> <div class=form-tasks> <div class="error hidden"> <span>Введите задачу</span> <span class=close-error>x</span> </div> <form id=input-form> <p>TOP Tasks</p> <input type=text id=input-task> </form> <p>Pinned Tasks:</p> <div id=pinned class=div-task></div> <p>All Tasks:</p> <div id=all-tasks class=div-task></div> </div> </body> </html>'},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1);class s{constructor(e,t){this.id=e,this.name=t,this.pinned=!1}}const i=new class{constructor(){this.tasks=[]}addTask(e){this.tasks.push(new s(this.tasks.length,e))}},a=new class{constructor(){this.divPinned=document.getElementById("pinned"),this.divAllTasks=document.getElementById("all-tasks")}redrawTasks(e){this.divPinned.innerHTML="",this.divAllTasks.innerHTML="";const t=e.some(e=>e.pinned),n=e.every(e=>e.pinned);t||(this.divPinned.innerHTML="<p>No Pinned Tasks</p>"),n&&(this.divAllTasks.innerHTML="<p>No Tasks Found</p>");for(const t of e){const e=document.createElement("div");e.className="item-task",e.dataset.id=t.id,e.innerHTML=`\n        <p>${t.name}</p>\n        <div class="checked">${t.pinned?"V":""}</div>\n        `,t.pinned?this.divPinned.appendChild(e):this.divAllTasks.appendChild(e)}}};(new class{constructor(){this.divPinned=document.getElementById("pinned"),this.divAllTasks=document.getElementById("all-tasks"),this.formInput=document.getElementById("input-form"),this.elementInput=document.getElementById("input-task"),this.elementError=document.querySelector(".error")}init(){!function(e){e.addTask("Купить хлеб"),e.addTask("Постирать носки"),e.addTask("Погладить кота");const[...t]=e.tasks;t[2].pinned=!0}(i),a.redrawTasks(i.tasks),this.eventsTasks()}eventsTasks(){this.formInput.addEventListener("submit",e=>{e.preventDefault();if(""!==this.elementInput.value)this.elementError.classList.contains("hidden")||this.elementError.classList.add("hidden"),i.addTask(this.elementInput.value),this.elementInput.value="",this.filterTask(this.elementInput.value);else{this.elementError.classList.remove("hidden");const e=this.elementInput.offsetTop-this.elementError.offsetHeight;this.elementError.style.top=e-5+"px"}}),this.elementInput.addEventListener("input",()=>{this.filterTask(this.elementInput.value)}),this.divPinned.addEventListener("click",e=>{if("checked"===e.target.className){const t=e.target.closest(".item-task").dataset.id;this.moveTask(t,!1)}}),this.divAllTasks.addEventListener("click",e=>{if("checked"===e.target.className){const t=e.target.closest(".item-task").dataset.id;this.moveTask(t,!0)}}),this.elementError.addEventListener("click",e=>{"close-error"===e.target.className&&this.elementError.classList.add("hidden")})}filterTask(e){const t=i.tasks.filter(t=>{const n=e.trim().toLowerCase();return t.name.toLowerCase().includes(n)||t.pinned});a.redrawTasks(t)}moveTask(e,t){const n=i.tasks.findIndex(t=>t.id===Number(e));i.tasks[n].pinned=t,this.filterTask(this.elementInput.value)}}).init()}]);
