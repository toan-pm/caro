(window.webpackJsonpcaro=window.webpackJsonpcaro||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(2),o=n.n(a),s=(n(10),n(3)),u=n(4),c=(n(11),"EMPTY"),l="CIRCLE",m="CROSS";function p(e){var t=e.position,n=e.value,r=e.takeTurn;return i.a.createElement("div",{className:"square",onClick:function(){n==c&&r(t)}},n==l&&i.a.createElement(f,null),n==m&&i.a.createElement(v,null))}function f(){return i.a.createElement("svg",{width:"100",height:"100",viewBox:"-50 -50 100 100",className:"circle"},i.a.createElement("circle",{cx:"0",cy:"0",r:"40"}))}function v(){return i.a.createElement("svg",{width:"100",height:"100",viewBox:"-50 -50 100 100",className:"cross"},i.a.createElement("line",{x1:"-40",y1:"-40",x2:"40",y2:"40"}),i.a.createElement("line",{x1:"-40",y1:"40",x2:"40",y2:"-40"}))}function E(e){var t=e.winner,n=e.reset;return i.a.createElement("div",{className:"result"},t==l&&"Circle won the game",t==m&&"Cross won the game","It is a tie"==t&&"It is a tie",i.a.createElement("button",{onClick:n},"Reset"))}var w=function(){var e=i.a.useState({player:l,positions:[c,c,c,c,c,c,c,c,c]}),t=Object(u.a)(e,2),n=t[0],r=t[1],a=function(e){if(e[0]==l&&e[1]==l&&e[2]==l)return l;if(e[3]==l&&e[4]==l&&e[5]==l)return l;if(e[6]==l&&e[7]==l&&e[8]==l)return l;if(e[0]==l&&e[3]==l&&e[6]==l)return l;if(e[1]==l&&e[4]==l&&e[7]==l)return l;if(e[2]==l&&e[5]==l&&e[8]==l)return l;if(e[0]==l&&e[4]==l&&e[8]==l)return l;if(e[2]==l&&e[4]==l&&e[6]==l)return l;if(e[0]==m&&e[1]==m&&e[2]==m)return m;if(e[3]==m&&e[4]==m&&e[5]==m)return m;if(e[6]==m&&e[7]==m&&e[8]==m)return m;if(e[0]==m&&e[3]==m&&e[6]==m)return m;if(e[1]==m&&e[4]==m&&e[7]==m)return m;if(e[2]==m&&e[5]==m&&e[8]==m)return m;if(e[0]==m&&e[4]==m&&e[8]==m)return m;if(e[2]==m&&e[4]==m&&e[6]==m)return m;if(e.every((function(e){return e!=c})))return"It is a tie"}(n.positions);function o(e){var t=Object(s.a)(n.positions);t[e]=n.player,r({player:n.player==l?m:l,positions:t})}return i.a.createElement("div",null,i.a.createElement("div",{className:"grid"},i.a.createElement(p,{position:0,value:n.positions[0],takeTurn:o}),i.a.createElement(p,{position:1,value:n.positions[1],takeTurn:o}),i.a.createElement(p,{position:2,value:n.positions[2],takeTurn:o}),i.a.createElement(p,{position:3,value:n.positions[3],takeTurn:o}),i.a.createElement(p,{position:4,value:n.positions[4],takeTurn:o}),i.a.createElement(p,{position:5,value:n.positions[5],takeTurn:o}),i.a.createElement(p,{position:6,value:n.positions[6],takeTurn:o}),i.a.createElement(p,{position:7,value:n.positions[7],takeTurn:o}),i.a.createElement(p,{position:8,value:n.positions[8],takeTurn:o})),a&&i.a.createElement(E,{winner:a,reset:function(){r({player:l,positions:[c,c,c,c,c,c,c,c,c]})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.95394c35.chunk.js.map