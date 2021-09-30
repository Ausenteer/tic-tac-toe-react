(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],{29:function(n,e,t){},31:function(n,e,t){"use strict";t.r(e);var r,i=t(0),o=t.n(i),c=t(5),a=t.n(c),d=t(3),s=t(11),l=t(2),u="tomato",p="cornflowerblue",b=Object(l.a)(r||(r=Object(s.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    width: 100%;\n    overflow-x: hidden;\n    height: 100%;\n    box-sizing: border-box;\n    overflow-y: scroll;\n    margin: 0;\n    background-color: ",";\n}\n\n  a {\n    text-decoration: none;\n  }\n  button {\n    border-width: 0;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: inherit;\n  }\n"])),"#E8E8E8"),f=(t(29),l.b.div.withConfig({displayName:"Container",componentId:"sc-q2ek45-0"})(["font-weight:700;padding-right:8px;padding-left:8px;margin-right:auto;margin-left:auto;max-width:900px;display:flex;flex-direction:column;align-items:center;margin-bottom:15px;"])),h=l.b.header.withConfig({displayName:"Header",componentId:"sc-1vk2d02-0"})(["min-height:10vh;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;margin-bottom:40px;background:linear-gradient( 120deg,",",",");"],u,p),x=t(1),m=function(){return Object(x.jsx)(h,{children:Object(x.jsx)("h1",{children:"Tic Tac Toe (react game)"})})},g=d.d,j=l.b.div.withConfig({displayName:"NumberWinsWrapper",componentId:"sc-l13z57-0"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-column-gap:10px;grid-row-gap:15px;font-size:22px;margin-bottom:15px;text-align:end;p{padding:4px;}p:nth-child(1){background-color:tomato;color:white;border-radius:4px;}p:nth-child(3){background-color:cornflowerblue;color:white;border-radius:4px;}"]),v=function(n){return{numberWins:n.numberWins}},w=function(){var n=g(v,d.b).numberWins;return Object(x.jsxs)(j,{children:[Object(x.jsx)("p",{children:"X:"}),Object(x.jsx)("p",{children:n.X}),Object(x.jsx)("p",{children:"O:"}),Object(x.jsx)("p",{children:n.O})]})},O=t(16),y=t(15),k=t.n(y),C=function(n){return{board:n.board,currentMove:n.currentMove,winner:n.winner}},S=l.b.div.withConfig({displayName:"BoardWrapper",componentId:"sc-6jwbfb-0"})(["width:450px;height:450px;color:#000;display:grid;grid-template:repeat(3,1fr)/repeat(3,1fr);font-size:45px;margin-top:15px;margin-bottom:15px;@media (max-width:400px){width:350px;height:350px;}"]),M=l.b.div.withConfig({displayName:"Square",componentId:"sc-5soaq6-0"})(["display:flex;justify-content:center;align-items:center;margin:2px;cursor:pointer;background-color:#fff;color:",";border-radius:10px;"],(function(n){return(e=n.player)?"X"===e?u:p:"#fff";var e})),W=t(6),I=function(n,e,t){var r;return n.filter((function(n){return n===e})).length===t&&(r=e),r},N=function(n,e){for(var t,r,i,o,c=n.length,a=[],d=[],s=[],l=function(l){if(void 0!==(t=I(n[l],e,c)))return"break";if(s=n.map((function(n){return n[l]})),void 0!==(o=I(s,e,c)))return"break";var u=l;u=c-1-u,d.push(n[l][u]),r=I(d,e,c),a.push(n[l][l]),i=I(a,e,c)},u=0;u<c;u+=1){if("break"===l(u))break}return t||o||r||i},z={board:Array(3).fill(Array(3).fill("")),currentMove:"X",winner:"",countStep:0,numberWins:{X:0,O:0}},F=Object(W.b)({name:"game",initialState:z,reducers:{setSymbol:function(n,e){var t=e.payload,r=t.row,i=t.col;n.countStep+=1;var o=Math.pow(n.board.length,2);if(""===n.board[r][i]){var c="X"===n.currentMove?"O":"X";n.board[r][i]=n.currentMove;var a=N(n.board,n.currentMove);a?(n.winner=a,n.numberWins[a]+=1):n.currentMove=c,n.countStep!==o||n.winner||(n.winner="noWinner",n.numberWins.X+=1,n.numberWins.O+=1)}},startNewGame:function(n){n.board=z.board,n.currentMove=z.currentMove,n.winner=z.winner,n.countStep=z.countStep}}}),X=F.actions,T=X.setSymbol,B=X.startNewGame,E=F.reducer,A=l.b.button.withConfig({displayName:"Button",componentId:"sc-4088na-0"})(["width:450px;background-color:darkgrey;padding:20px;border-radius:10px;font-size:30px;color:black;@media (max-width:400px){width:350px;}"]),q=l.b.div.withConfig({displayName:"ModalWrapper",componentId:"sc-11j979a-0"})(["height:100vh;width:100vw;background-color:rgba(0,0,0,0.4);position:fixed;top:0;left:0;display:flex;justify-content:center;align-items:center;font-size:30px;opacity:",";transition:0.5s;pointer-events:",";;div{padding:20px;border-radius:12px;background-color:#fff;transform:",";transition:0.4s all;}"],(function(n){return n.active?"1":"0"}),(function(n){return n.active?"all":"none"}),(function(n){return n.active?"scale(1)":"scale(0.5)"})),G=function(n){var e=n.active,t=n.setActive,r=n.children;return Object(x.jsx)(q,{onClick:function(){return t(!1)},active:e,children:Object(x.jsx)("div",{children:r})})},H=function(){var n=g(C),e=n.board,t=n.winner,r=Object(i.useState)(!1),o=Object(O.a)(r,2),c=o[0],a=o[1];Object(i.useEffect)((function(){t&&a(!0)}),[t]);var s=Object(d.c)(),l=e.map((function(n,e){return n.map((function(n,r){return Object(x.jsx)(M,{tabIndex:0,role:"button",onClick:function(){return n=e,i=r,void(t||s(T({row:n,col:i})));var n,i},player:n,children:n})}))})),u="\u041f\u043e\u0431\u0435\u0434\u0438\u043b\u0438 ".concat(t),p=t&&Object(x.jsx)(k.a,{width:window.innerWidth,height:window.innerHeight});return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{children:l}),Object(x.jsx)(A,{role:"button",onClick:function(){return s(B())},children:"\u041d\u041e\u0412\u0410\u042f \u0418\u0413\u0420\u0410"}),Object(x.jsx)(G,{active:c,setActive:a,children:Object(x.jsx)("p",{children:u})}),p]})},D=l.b.div.withConfig({displayName:"InfoGameWrapper",componentId:"sc-31rjdm-0"})(["display:flex;font-size:22px;p:last-child{margin-left:5px;width:23px;}"]),J=function(){var n=g(C).currentMove;return Object(x.jsxs)(D,{children:[Object(x.jsx)("p",{children:"\u041a\u0442\u043e \u0445\u043e\u0434\u0438\u0442:"}),Object(x.jsx)("p",{children:n})]})},L=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b,{}),Object(x.jsx)(m,{}),Object(x.jsxs)(f,{children:[Object(x.jsx)(w,{}),Object(x.jsx)(J,{}),Object(x.jsx)(H,{})]})]})},P=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),o(n),c(n)}))},U=Object(W.a)({reducer:E,devTools:!1});a.a.render(Object(x.jsx)(d.a,{store:U,children:Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(L,{})})}),document.getElementById("root")),P()}},[[31,1,2]]]);
//# sourceMappingURL=main.7bcdbaf1.chunk.js.map