(this["webpackJsonpcaja-ritmos"]=this["webpackJsonpcaja-ritmos"]||[]).push([[0],{32:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o,r,a,c,d,s=n(0),l=n.n(s),i=n(18),u=n.n(i),m=(n(27),n(22)),y=n(7),p=n(37),g=n(38),k=n(39),b=n(11),C=n(12),f=n(8),x=(n(32),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),h=n(2),j=Object(f.a)(p.a)(o||(o=Object(y.a)(["\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* width: 400px; */\n    font-family: 'Noto Sans TC', sans-serif;\n    border-radius: 10px;\n    flex-direction: column;\n"]))),H=f.a.button(r||(r=Object(y.a)(["\n    display: flex; \n    justify-content: center; \n    align-items: center; \n    width: 70px;\n    height: 56px;\n    margin: 5px;\n    box-shadow: 0px 10px 10px black;\n    &:active{\n        background-color: red;\n    }\n"])));function O(e){e.play()}var w=Object(f.a)(p.a)(a||(a=Object(y.a)(["\n    background-color: #344fa1;\n    margin-top: 20px;\n    text-align: center; \n    width: 50%;\n    padding: 20px;\n    border-radius: 10px; \n    color: white; \n\n"]))),E=Object(f.a)(p.a)(c||(c=Object(y.a)(["\n    background: #0E1C36;\n    color: white; \n    padding: 20px; \n    position: fixed; \n    top: 0;\n    width: 100%;\n    font-weight: bold; \n    left: 0; \n    font-size: 17px;\n"]))),I=Object(f.a)(p.a)(d||(d=Object(y.a)(["\n    background: #0E1C36;\n    padding: 20px; \n    color: white; \n    position: fixed; \n    bottom: 0; \n    width: 100%;\n    text-align: center; \n    font-weight: bold; \n    left: 0;\n    font-size: 17px; \n"])));function S(e){O(document.getElementById(e.target.firstElementChild.id)),document.getElementById("display").textContent=e.target.id}function B(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2);t[0],t[1];return console.log(x),Object(h.jsx)(l.a.Fragment,{children:Object(h.jsxs)(p.a,{fluid:!0,children:[Object(h.jsx)(E,{fluid:!0,children:"Drum Machine"}),Object(h.jsxs)(j,{children:[Object(h.jsx)(g.a,{style:{background:"#77acf1",padding:"20px",borderRadius:"15px"},id:"drum-machine",children:x.map((function(e){return Object(h.jsx)(k.a,{xs:4,style:{display:"flex",justifyContent:"center"},children:Object(h.jsxs)(H,{className:"drum-pad ",onClick:S,id:e.id,style:{color:"white",fontWeight:"bold",background:"#344fa1"},children:[e.keyTrigger,Object(h.jsx)("audio",{src:e.url,id:e.keyTrigger,className:"clip"})]})})}))}),Object(h.jsx)(w,{id:"display"})]}),Object(h.jsxs)(I,{fluid:!0,className:"footer-container",children:["Desarrollado por Ysnaldo Jose Lopez Hernandez  |",Object(h.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",children:Object(h.jsx)(b.a,{icon:C.a})}),Object(h.jsx)("a",{href:"https://github.com/YsnaldoXVen",target:"_blank",children:Object(h.jsx)(b.a,{icon:C.b})}),Object(h.jsx)("a",{href:"https://twitter.com/lopezh_yjose",target:"_blank",children:Object(h.jsx)(b.a,{icon:C.c})})]})]})})}document.addEventListener("keydown",(function(e){switch(e.key){case"q":document.querySelector("#Heater-1").style.backgroundColor="red",O(document.getElementById(e.key.toUpperCase())),document.getElementById("display").textContent="Heater-1";break;case"w":document.querySelector("#Heater-2").style.backgroundColor="red",O(document.getElementById(e.key.toUpperCase())),document.getElementById("display").textContent="Heater-2";break;case"e":document.querySelector("#Heater-3").style.backgroundColor="red",O(document.getElementById(e.key.toUpperCase())),document.getElementById("display").textContent="Heater-3";break;case"a":document.querySelector("#Heater-4").style.backgroundColor="red",O(document.getElementById(e.key.toUpperCase())),document.getElementById("display").textContent="Heater-4";break;case"s":document.querySelector("#Clap").style.backgroundColor="red",O(document.getElementById(e.key.toUpperCase())),document.getElementById("display").textContent="Clap";break;case"d":document.querySelector("#Open-HH").style.backgroundColor="red",O(document.getElementById(e.key.toUpperCase())),document.getElementById("display").textContent="Open-HH";break;case"z":document.querySelector("#Kick-n-Hat").style.backgroundColor="red",O(document.getElementById(e.key.toUpperCase())),document.getElementById("display").textContent="Kick-n-Hat";break;case"x":document.querySelector("#Kick").style.backgroundColor="red",O(document.getElementById(e.key.toUpperCase())),document.getElementById("display").textContent="Kick";break;case"c":document.querySelector("#Closed-HH").style.backgroundColor="red",O(document.getElementById(e.key.toUpperCase())),document.getElementById("display").textContent="Closed-HH";break;default:console.log("")}}),!1),document.addEventListener("keyup",(function(e){switch(e.key){case"q":document.querySelector("#Heater-1").style.backgroundColor="#344fa1";break;case"w":document.querySelector("#Heater-2").style.backgroundColor="#344fa1";break;case"e":document.querySelector("#Heater-3").style.backgroundColor="#344fa1";break;case"a":document.querySelector("#Heater-4").style.backgroundColor="#344fa1";break;case"s":document.querySelector("#Clap").style.backgroundColor="#344fa1";break;case"d":document.querySelector("#Open-HH").style.backgroundColor="#344fa1";break;case"z":document.querySelector("#Kick-n-Hat").style.backgroundColor="#344fa1";break;case"x":document.querySelector("#Kick").style.backgroundColor="#344fa1";break;case"c":document.querySelector("#Closed-HH").style.backgroundColor="#344fa1";break;default:console.log("")}}),!1);var q=function(){return Object(h.jsx)("div",{className:"App",style:{background:"#d8e3e7"},children:Object(h.jsx)(B,{})})};u.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8ac651a5.chunk.js.map