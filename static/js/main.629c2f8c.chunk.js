(this["webpackJsonproam-chessboard"]=this["webpackJsonproam-chessboard"]||[]).push([[0],{11:function(t,e,a){t.exports=a(20)},16:function(t,e,a){},17:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(9),o=a.n(s),i=(a(16),a(3)),u=a(4),c=a(7),l=a(5),h=a(6),d=(a(17),a(18),a(10)),p=a(2),m=a.n(p),y=a(1),f=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(c.a)(this,Object(l.a)(e).call(this,t))).checkKey=function(t){var e=a.state,n=e.n,r=e.i,s=e.j,o=e.stepsCount;if("37"==(t=t||window.event).keyCode){if(s-1>=0){console.log("left");var i=a.state.outputArray,u=a.state.j-1;i.push([a.state.i,u]),a.setState({outputArray:i,j:u,stepsCount:o+1}),a.changeGrid()}}else if("38"==t.keyCode){if(console.log("up"),r-1>=0){i=a.state.outputArray,u=a.state.i-1;i.push([u,a.state.j]),a.setState({outputArray:i,i:u,stepsCount:o+1}),a.changeGrid()}}else if("39"==t.keyCode){if(s+1<n){console.log("right");i=a.state.outputArray,u=a.state.j+1;i.push([a.state.i,u]),a.setState({outputArray:i,j:u,stepsCount:o+1}),a.changeGrid()}}else if("40"==t.keyCode&&r+1<n){console.log("down");i=a.state.outputArray,u=a.state.i+1;i.push([u,a.state.j]),a.setState({outputArray:i,i:u,stepsCount:o+1}),a.changeGrid()}},a.changeGrid=function(){for(var t=0,e=[],n=[],r=0;r<a.state.n;r++)for(var s=0;s<a.state.n;s++)e={boxArray:[r,s],boxNumber:++t,selectedBox:r===a.state.i&&s===a.state.j},n.push(e);a.setState({arrayObject:n})},a._submit=function(){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(window.addEventListener("keydown",a.checkKey));case 2:return t.next=4,m.a.awrap(a.setState({outputArray:[],i:0,j:0,n:parseInt(a.state.gridInput),stepsCount:0}));case 4:return t.next=6,m.a.awrap(a.changeGrid());case 6:case"end":return t.stop()}}))},a._reset=function(){window.location.reload()},a.state={n:5,m:8,gridInput:5,arrayObject:[],selectedBox:3,i:0,j:0,outputArray:[[0,0]],stepsCount:0},a._NChange=a._NChange.bind(Object(y.a)(a)),a._MChange=a._MChange.bind(Object(y.a)(a)),a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.changeGrid(),window.addEventListener("keydown",this.checkKey)}},{key:"_NChange",value:function(t){this.setState({gridInput:t.target.value,outputArray:[]})}},{key:"_MChange",value:function(t){this.setState({m:parseInt(t.target.value),outputArray:[]})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"formContainer"},r.a.createElement("div",{className:"innerContainer"},r.a.createElement("text",null,"grid (n):\xa0\xa0"),r.a.createElement("input",{type:"number",value:this.state.gridInput,onChange:this._NChange})),r.a.createElement("div",null,r.a.createElement("text",null,"No. of steps (m): "),r.a.createElement("input",{type:"number",value:this.state.m,onChange:this._MChange})),r.a.createElement("button",{onClick:this._submit,className:"submitBtn"},"Submit")),r.a.createElement("text",{style:{marginTop:"3rem"}}," \xa0",this.state.n+" X "+this.state.n),r.a.createElement("text",null," \xa0","No. of Steps: "+this.state.stepsCount),r.a.createElement("text",{style:{fontSize:12}},"Block Traversed: ",JSON.stringify(this.state.outputArray)),r.a.createElement("table",{className:"tableGrid"},r.a.createElement("tbody",null,Object(d.a)(Array(this.state.n+1)).map((function(e,a){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row"},key:a},t.state.arrayObject.slice(t.state.n*a-t.state.n,t.state.n*a).map((function(t,e){return r.a.createElement("div",{key:e,className:"boxGrid",style:{backgroundColor:!0===t.selectedBox?"yellow":"#FFFFFF"}},t.boxNumber)})))})))),this.state.m===this.state.stepsCount?(window.removeEventListener("keydown",this.checkKey),r.a.createElement("div",null,r.a.createElement("text",null,"OUTPUT: ",JSON.stringify(this.state.outputArray)),r.a.createElement("button",{onClick:this._reset,className:"submitBtn"},"RESET"))):null)}}]),e}(n.Component),b=function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(f,null)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.629c2f8c.chunk.js.map