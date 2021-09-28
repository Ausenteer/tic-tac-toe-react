(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],{28:function(n,e,r){},30:function(n,e,r){"use strict";r.r(e);var t,i=r(0),o=r.n(i),c=r(6),a=r.n(c),d=r(3),s=r(12),u=r(2),l="#ffc72c",b=Object(u.a)(t||(t=Object(s.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    width: 100%;\n    overflow-x: hidden;\n    height: 100%;\n    box-sizing: border-box;\n    overflow-y: scroll;\n    margin: 0;\n    background-color: ",";\n}\n\n  a {\n    text-decoration: none;\n  }\n  button {\n    border-width: 0;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: inherit;\n  }\n"])),"#E8E8E8"),p=(r(28),u.b.div.withConfig({displayName:"Container",componentId:"sc-q2ek45-0"})(["font-size:30px;font-weight:700;padding-right:8px;padding-left:8px;margin-right:auto;margin-left:auto;max-width:900px;display:flex;flex-direction:column;align-items:center;"])),f=u.b.header.withConfig({displayName:"Header",componentId:"sc-1vk2d02-0"})(["background-color:#ffc72c;min-height:10vh;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;margin-bottom:60px;"]),m=r(1),g=function(){return Object(m.jsx)(f,{children:Object(m.jsx)("h1",{children:"Tic Tac Toe (react game)"})})},x=d.d,h=u.b.div.withConfig({displayName:"NumberWinsWrapper",componentId:"sc-l13z57-0"})(["display:grid;grid-template-columns:2fr 1fr;grid-template-rows:1fr 1fr;grid-column-gap:10px;grid-row-gap:15px;font-size:22px;margin-bottom:15px;text-align:end;"]),j=function(n){return{numberWins:n.numberWins}},v=function(){var n=x(j,d.b).numberWins;return Object(m.jsxs)(h,{children:[Object(m.jsx)("p",{children:"\u041f\u043e\u0431\u0435\u0434 \u0443 \u043a\u0440\u0435\u0441\u0442\u0438\u043a\u043e\u0432:"}),Object(m.jsx)("p",{children:null===n||void 0===n?void 0:n.X}),Object(m.jsx)("p",{children:"\u041f\u043e\u0431\u0435\u0434 \u0443 \u043d\u043e\u043b\u0438\u043a\u043e\u0432:"}),Object(m.jsx)("p",{children:null===n||void 0===n?void 0:n.O})]})},O=function(n){return{board:n.board,currentMove:n.currentMove,winner:n.winner}},w=u.b.div.withConfig({displayName:"BoardWrapper",componentId:"sc-6jwbfb-0"})(["width:450px;height:450px;background-color:",";color:#000;border:6px solid ",";border-radius:10px;display:grid;grid-template:repeat(3,1fr)/repeat(3,1fr);"],l,l),y=u.b.div.withConfig({displayName:"Square",componentId:"sc-5soaq6-0"})(["display:flex;justify-content:center;align-items:center;margin:2px;border:4px solid #ffc72c;cursor:pointer;background-color:#fff;border-radius:2px;"]),k=r(7),C=function(n,e,r){var t;return n.filter((function(n){return n===e})).length===r&&(t=e),t},S=function(n,e){for(var r,t,i,o,c=n.length,a=[],d=[],s=[],u=function(u){if(void 0!==(r=C(n[u],e,c)))return"break";if(s=n.map((function(n){return n[u]})),void 0!==(o=C(s,e,c)))return"break";var l=u;l=c-1-l,d.push(n[u][l]),t=C(d,e,c),a.push(n[u][u]),i=C(a,e,c)},l=0;l<c;l+=1){if("break"===u(l))break}return r||o||t||i},I=r(5),M=function(n,e){var r=Object(I.a)({},e);return"\u043d\u0438\u0447\u044c\u044f"===n?(r.X+=1,r.O+=1):r[n]+=1,r},N={board:Array(3).fill(Array(3).fill("")),currentMove:"X",winner:"",countStep:0,numberWins:{X:0,O:0}},W=Object(k.b)({name:"game",initialState:N,reducers:{setSymbol:function(n,e){var r=e.payload,t=r.row,i=r.col;if(n.countStep+=1,""===n.board[t][i]){var o="X"===n.currentMove?"O":"X";n.board[t][i]=n.currentMove;var c=S(n.board,n.currentMove);c?(n.winner=c,n.numberWins=M(c,n.numberWins)):n.currentMove=o}},startNewGame:function(n){n.board=N.board,n.currentMove=N.currentMove,n.winner=N.winner,n.countStep=N.countStep}}}),F=W.actions,z=F.setSymbol,T=F.startNewGame,X=W.reducer,B=u.b.button.withConfig({displayName:"Button",componentId:"sc-4088na-0"})(["width:450px;margin-top:15px;background-color:",";padding:20px;border-radius:10px;"],l),E=function(){var n=x(O),e=n.board,r=n.winner,t=Object(d.c)(),i=e.map((function(n,e){return n.map((function(n,i){return Object(m.jsx)(y,{tabIndex:0,role:"button",onClick:function(){return n=e,o=i,void(r||t(z({row:n,col:o})));var n,o},children:n})}))}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w,{children:i}),Object(m.jsx)(B,{role:"button",onClick:function(){return t(T())},children:"\u041d\u041e\u0412\u0410\u042f \u0418\u0413\u0420\u0410"})]})},q=u.b.div.withConfig({displayName:"InfoGameWrapper",componentId:"sc-31rjdm-0"})(["display:flex;background-color:",";padding:5px;border-top-left-radius:10px;border-top-right-radius:10px;p:last-child{margin-left:5px;width:23px;}"],l),G=function(){var n=x(O).currentMove;return Object(m.jsxs)(q,{children:[Object(m.jsx)("p",{children:"\u041a\u0442\u043e \u0445\u043e\u0434\u0438\u0442:"}),Object(m.jsx)("p",{children:n})]})},A=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{}),Object(m.jsx)(g,{}),Object(m.jsxs)(p,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(G,{}),Object(m.jsx)(E,{})]})]})},D=function(n){n&&n instanceof Function&&r.e(3).then(r.bind(null,31)).then((function(e){var r=e.getCLS,t=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;r(n),t(n),i(n),o(n),c(n)}))},H=Object(k.a)({reducer:X,devTools:!1});a.a.render(Object(m.jsx)(d.a,{store:H,children:Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(A,{})})}),document.getElementById("root")),D()}},[[30,1,2]]]);
//# sourceMappingURL=main.94c7cdce.chunk.js.map