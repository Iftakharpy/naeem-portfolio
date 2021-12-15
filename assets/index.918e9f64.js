import{j as l,P as p,M as g,r as o,i as h,R as b,a as f}from"./vendor.12326f39.js";const u=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}};u();const e=l.exports.jsx,c=l.exports.jsxs;function N({menuOpen:t,setMenuOpen:s}){return e("div",{className:"topbar "+(t&&"active"),children:c("div",{className:"wrapper",children:[c("div",{className:"left",children:[e("a",{href:"#intro",className:"logo",children:"Naeem Shah"}),c("div",{className:"itemContainer",children:[e(p,{className:"icon"}),e("span",{children:"+8801765794806"})]}),c("div",{className:"itemContainer",children:[e(g,{className:"icon"}),e("span",{children:"naeem.shah1500@gmail.com"})]})]}),e("div",{className:"right",children:c("div",{className:"hamburger",onClick:()=>s(!t),children:[e("span",{className:"line1"}),e("span",{className:"line2"}),e("span",{className:"line3"})]})})]})})}function y(){const t=o.exports.useRef();return o.exports.useEffect(()=>{h(t.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Computer Programming","Designing","Finance","Accounting"]})},[]),c("div",{className:"intro",id:"intro",children:[e("div",{className:"left",children:e("div",{className:"imgContainer",children:e("img",{src:"/naeem-portfolio/assets/personal-imgs/naeem_shah.jpg",alt:""})})}),c("div",{className:"right",children:[c("div",{className:"wrapper",children:[e("h2",{children:"Hi There, I'm"}),e("h1",{children:"Naeem Shah"}),c("h3",{children:["Student of ",e("span",{ref:t})]})]}),e("a",{href:"#portfolio",children:e("img",{src:"/naeem-portfolio/assets/down.png",alt:""})})]})]})}function C({id:t,title:s,active:a,setSelected:r}){return e("li",{className:a?"portfolioList active":"portfolioList",onClick:()=>r(t),children:s})}const m=[{id:1,title:"Social Media App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:2,title:"Rampa UI Design",img:"https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900"},{id:3,title:"E-commerce Web Design",img:"https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900"},{id:4,title:"Relax Mobile App",img:"https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900"},{id:5,title:"Hero Web Design",img:"https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900"},{id:6,title:"Banking App",img:"https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900"}],v=[{id:1,title:"Web Social Media App",img:"https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900"},{id:2,title:"Web Rampa UI Design",img:"https://cdn.dribbble.com/users/3967258/screenshots/15463803/media/4fddb9a2caf3b3bd634060f706a91e73.png?compress=1&resize=1200x900"},{id:3,title:"Web E-commerce Design",img:"https://cdn.dribbble.com/users/3637068/screenshots/15467010/media/69a3279182b75365013fe285733d1122.png?compress=1&resize=1200x900"},{id:4,title:"Web Relax App",img:"https://cdn.dribbble.com/users/2264844/screenshots/15463998/media/d85e92a332c41094f68e1f716884f7ce.jpg?compress=1&resize=1200x900"},{id:5,title:"Web Design",img:"https://cdn.dribbble.com/users/387658/screenshots/15458608/media/e92ec1dd33dd1170ae3dc9c5272f2693.jpg?compress=1&resize=1200x900"},{id:6,title:"Web Banking App",img:"https://cdn.dribbble.com/users/6384483/screenshots/15468426/media/ce9479fa1f8dba3a4a49840d76e55e31.png?compress=1&resize=1200x900"}],A=[{id:1,title:"Mobile Social Media App",img:"https://cdn.dribbble.com/users/2597268/screenshots/15468893/media/44313553d73ba41580f1df69749bba28.jpg?compress=1&resize=1200x900"},{id:2,title:"Mobile Rampa UI Design",img:"https://cdn.dribbble.com/users/5920881/screenshots/15463142/media/b5a460223798bd85d835710806e2f3dd.png?compress=1&resize=1200x900"},{id:3,title:"Mobile E-commerce Design",img:"https://cdn.dribbble.com/users/1998175/screenshots/15459384/media/48ac2b43ebe81ba0866afea1383cc939.png?compress=1&resize=1200x900"},{id:4,title:"Mobile Relax App",img:"https://cdn.dribbble.com/users/2083704/screenshots/15468619/media/cd958306c7a772449e1ac23bd65ce506.png?compress=1&resize=1200x900"},{id:5,title:"Mobile Hero Design",img:"https://cdn.dribbble.com/users/26642/screenshots/15462545/media/1a202ef5c8338b6f78634e6edc1ba350.png?compress=1&resize=1200x900"},{id:6,title:"Mobile Banking App",img:"https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900"}],G=[{id:1,title:"Design Social Media App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:2,title:"Design Rampa UI Design",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:3,title:"Design E-commerce Web Design",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:4,title:"Design Relax Mobile App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:5,title:"Design Keser Web Design",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:6,title:"Design Banking App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"}],H=[{id:1,title:"Content Social Media App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:2,title:"Content Rampa UI Design",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:3,title:"Content E-commerce Web Design",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:4,title:"Content Relax Mobile App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:5,title:"Content Keser Web Design",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:6,title:"Content Banking App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"}];function q(){const[t,s]=o.exports.useState("featured"),[a,r]=o.exports.useState([]),i=[{id:"featured",title:"Featured"},{id:"web",title:"Web App"},{id:"mobile",title:"Mobile App"},{id:"design",title:"Design"},{id:"content",title:"Content"}];return o.exports.useEffect(()=>{switch(t){case"featured":r(m);break;case"web":r(v);break;case"mobile":r(A);break;case"design":r(G);break;case"content":r(H);break;default:r(m)}},[t]),c("div",{className:"portfolio",id:"portfolio",children:[e("h1",{children:"Portfolio"}),e("ul",{children:i.map(n=>e(C,{title:n.title,active:t===n.id,setSelected:s,id:n.id}))}),e("div",{className:"container",children:a.map(n=>c("div",{className:"item",children:[e("img",{src:n.img,alt:""}),e("h3",{children:n.title})]}))})]})}function x(){const[t,s]=o.exports.useState(0),a=[{id:"1",icon:"/naeem-portfolio/assets/mobile.png",title:"Back-end Development",desc:"Using Python as the back-end programming language. ",img:"/naeem-portfolio/assets/certificates/mosh-python.PNG"},{id:"2",icon:"/naeem-portfolio/assets/globe.png",title:"Front-End Development",desc:"Using Java Script as the back-end programming language.",img:"/naeem-portfolio/assets/certificates/mosh-react.PNG"},{id:"3",icon:"/naeem-portfolio/assets/writing.png",title:"Data Base",desc:"MySQL is used by me.",img:"/naeem-portfolio/assets/certificates/mosh-sql.PNG"}],r=i=>{s(i==="left"?t>0?t-1:2:t<a.length-1?t+1:0)};return c("div",{className:"works",id:"works",children:[e("div",{className:"slider",style:{transform:`translateX(-${t*100}vw)`},children:a.map(i=>e("div",{className:"container",children:c("div",{className:"item",children:[e("div",{className:"left",children:c("div",{className:"leftContainer",children:[e("div",{className:"imgContainer",children:e("img",{src:i.icon,alt:""})}),e("h2",{children:i.title}),e("p",{children:i.desc}),e("span",{children:"Projects"})]})}),e("div",{className:"right",children:e("img",{src:i.img,alt:""})})]})}))}),e("img",{src:"/naeem-portfolio/assets/arrow.png",className:"arrow left",alt:"",onClick:()=>r("left")}),e("img",{src:"/naeem-portfolio/assets/arrow.png",className:"arrow right",alt:"",onClick:()=>r()})]})}function S(){const[t,s]=o.exports.useState(!1);return c("div",{className:"contact",id:"contact",children:[e("div",{className:"left",children:e("img",{src:"/naeem-portfolio/assets/shake.svg",alt:""})}),c("div",{className:"right",children:[e("h2",{children:"Contact."}),c("form",{onSubmit:r=>{r.preventDefault(),s(!0)},children:[e("h3",{type:"text",children:"Email: Naeem.shah1500@gmail.com"}),c("h3",{type:"text",children:["Github : ",e("a",{href:"https://github.com/NaeemShah1",children:"NaeemShah1"})," "]}),c("h3",{type:"text",children:["Linkdin:-"," ",e("a",{href:"https://www.linkedin.com/in/naeem-shah-b724181aa",children:"https://www.linkedin.com/in/naeem-shah-b724181aa"})," "]})]})]})]})}function k({menuOpen:t,setMenuOpen:s}){return e("div",{className:"menu "+(t&&"active"),children:c("ul",{children:[e("li",{onClick:()=>s(!1),children:e("a",{href:"#intro",children:"Home"})}),e("li",{onClick:()=>s(!1),children:e("a",{href:"#portfolio",children:"Portfolio"})}),e("li",{onClick:()=>s(!1),children:e("a",{href:"#works",children:"Works"})}),e("li",{onClick:()=>s(!1),children:e("a",{href:"#contact",children:"Contact"})})]})})}function M(){const[t,s]=o.exports.useState(!1);return c("div",{className:"app",children:[e(N,{menuOpen:t,setMenuOpen:s}),e(k,{menuOpen:t,setMenuOpen:s}),c("div",{className:"sections",children:[e(y,{}),e(q,{}),e(x,{}),e(S,{})]})]})}b.render(e(f.StrictMode,{children:e(M,{})}),document.getElementById("root"));
