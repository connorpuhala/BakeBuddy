(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{106:function(e,t,i){},107:function(e,t,i){},115:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i.n(s),o=i(33),h=i.n(o),m=(i(105),i(106),i(38)),a=i(74),c=i(75),r=i(77),T=i(76),S=i(127),p=i(129),g=i(128),d=i(131),O=(i(107),i.p,i(4)),u=function(e){Object(r.a)(i,e);var t=Object(T.a)(i);function i(e){return Object(a.a)(this,i),t.call(this,e)}return Object(c.a)(i,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{class:"ui checkbox",children:[Object(O.jsx)("input",{type:"checkbox",checked:this.props.checkOn,onClick:function(){return e.props.onPressChild(e.props.numberStep)}}),Object(O.jsxs)("label",{children:[this.props.stepTime," - ",this.props.text]}),Object(O.jsx)("div",{className:"extra",children:this.props.timeInfo})]})}}]),i}(n.a.Component),l=function(e){Object(r.a)(i,e);var t=Object(T.a)(i);function i(e){var s;return Object(a.a)(this,i),(s=t.call(this,e)).timer=0,s.state={time:new Date},s}return Object(c.a)(i,[{key:"componentWillMount",value:function(){var e=this;this.timer=setTimeout((function(){e.setState({time:new Date}),e.componentWillMount()}),1e3*Math.floor(Date.now()/1e3)+1e3-Date.now())}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){return this.state.time.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}}]),i}(n.a.Component),k=function(e){Object(r.a)(i,e);var t=Object(T.a)(i);function i(e){var s;return Object(a.a)(this,i),(s=t.call(this,e)).onPress=function(e){var t=new Date;t.setTime(Date.now()),s.setState({transitionIn:500,transitionOut:0}),s.setState({cardVisible:!0}),s.updateAllTimes(t,e)},s.state={currentTime:Object(O.jsx)(l,{}),mixTime:"",roomTempTime:"",coldRiseTime:"",bringRoomTempTime:"",moreIngredientsTime:"",riseRoomTempTime:"",proofTime:"",bakeTime:"",coolTime:"",doneTime:"",step1CheckOn:!1,step2CheckOn:!1,step3CheckOn:!1,step4CheckOn:!1,step5CheckOn:!1,step6CheckOn:!1,step7CheckOn:!1,step8CheckOn:!1,step9CheckOn:!1,step10CheckOn:!1,cardVisible:!1,transitionIn:500,transitionOut:0},s.onPress=s.onPress.bind(Object(m.a)(s)),s}return Object(c.a)(i,[{key:"updateAllTimes",value:function(e,t){0==t?(this.setState({mixTime:"Now"}),this.setState({step1CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({roomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step2CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({coldRiseTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step3CheckOn:!1}),e.setTime(e.getTime()+432e5),this.setState({bringRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step4CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({moreIngredientsTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step5CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({riseRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):1==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Now"}),this.setState({step2CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({coldRiseTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step3CheckOn:!1}),e.setTime(e.getTime()+432e5),this.setState({bringRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step4CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({moreIngredientsTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step5CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({riseRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):2==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Now"}),this.setState({step3CheckOn:!1}),e.setTime(e.getTime()+432e5),this.setState({bringRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step4CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({moreIngredientsTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step5CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({riseRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):3==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Now"}),this.setState({step4CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({moreIngredientsTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step5CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({riseRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):4==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Now"}),this.setState({step5CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({riseRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):5==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Done"}),this.setState({step5CheckOn:!0}),this.setState({riseRoomTempTime:"Now"}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):6==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Done"}),this.setState({step5CheckOn:!0}),this.setState({riseRoomTempTime:"Done"}),this.setState({step6CheckOn:!0}),this.setState({proofTime:"Now"}),e.setTime(e.getTime()+36e5),this.setState({step7CheckOn:!1}),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):7==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Done"}),this.setState({step5CheckOn:!0}),this.setState({riseRoomTempTime:"Done"}),this.setState({step6CheckOn:!0}),this.setState({proofTime:"Done"}),this.setState({step7CheckOn:!0}),this.setState({bakeTime:"Now"}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):8==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Done"}),this.setState({step5CheckOn:!0}),this.setState({riseRoomTempTime:"Done"}),this.setState({step6CheckOn:!0}),this.setState({proofTime:"Done"}),this.setState({step7CheckOn:!0}),this.setState({bakeTime:"Done"}),this.setState({step8CheckOn:!0}),this.setState({coolTime:"Now"}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):t>=9&&(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Done"}),this.setState({step5CheckOn:!0}),this.setState({riseRoomTempTime:"Done"}),this.setState({step6CheckOn:!0}),this.setState({proofTime:"Done"}),this.setState({step7CheckOn:!0}),this.setState({bakeTime:"Done"}),this.setState({step8CheckOn:!0}),this.setState({coolTime:"Done"}),this.setState({step9CheckOn:!0}),this.setState({doneTime:"Wooh!"}),10==t&&(this.setState({transitionIn:0,transitionOut:2e3}),this.setState({cardVisible:!1})))}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{class:"ui container",children:[Object(O.jsxs)("h3",{class:"ui centered header",children:["Current Time: ",this.state.currentTime]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)(S.a,{visible:!this.state.cardVisible,animation:"scale",duration:this.state.transitionOut,children:Object(O.jsxs)(p.a,{animated:!0,onClick:function(){return e.onPress(0)},children:[Object(O.jsx)(p.a.Content,{visible:!0,children:"BAKE"}),Object(O.jsx)(p.a.Content,{hidden:!0,children:"BEGIN"})]})}),Object(O.jsx)(S.a,{visible:this.state.cardVisible,animation:"scale",duration:this.state.transitionIn,children:Object(O.jsxs)(p.a,{animated:!0,onClick:function(){return e.onPress(0)},children:[Object(O.jsx)(p.a.Content,{visible:!0,children:"BAKE"}),Object(O.jsx)(p.a.Content,{hidden:!0,children:"BEGIN"})]})})]}),Object(O.jsx)(S.a,{visible:this.state.cardVisible,animation:"scale",duration:this.state.transitionIn,children:Object(O.jsx)("div",{className:"column",children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(g.a.Header,{children:Object(O.jsx)(d.a,{children:"Time of Step"})}),Object(O.jsxs)(g.a.Content,{children:[Object(O.jsx)(g.a.Description,{children:Object(O.jsx)(u,{text:"Mix Initial Ingredients",stepTime:this.state.mixTime,numberStep:1,onPressChild:this.onPress,timeInfo:"10 minutes",checkOn:this.state.step1CheckOn})}),Object(O.jsx)(g.a.Description,{children:Object(O.jsx)(u,{text:"Room Temp Rise",stepTime:this.state.roomTempTime,numberStep:2,onPressChild:this.onPress,timeInfo:"1 hour",checkOn:this.state.step2CheckOn})}),Object(O.jsx)(g.a.Description,{children:Object(O.jsx)(u,{text:"Cold Rise",stepTime:this.state.coldRiseTime,numberStep:3,onPressChild:this.onPress,timeInfo:"12 hours",checkOn:this.state.step3CheckOn})}),Object(O.jsx)(g.a.Description,{children:Object(O.jsx)(u,{text:"Bring To Room Temp",stepTime:this.state.bringRoomTempTime,numberStep:4,onPressChild:this.onPress,timeInfo:"1 hour",checkOn:this.state.step4CheckOn})}),Object(O.jsx)(g.a.Description,{children:Object(O.jsx)(u,{text:"More Ingredients",stepTime:this.state.moreIngredientsTime,numberStep:5,onPressChild:this.onPress,timeInfo:"10 minutes",checkOn:this.state.step5CheckOn})}),Object(O.jsx)(g.a.Description,{children:Object(O.jsx)(u,{text:"Rise @ Room Temp",stepTime:this.state.riseRoomTempTime,numberStep:6,onPressChild:this.onPress,timeInfo:"3 hours",checkOn:this.state.step6CheckOn})}),Object(O.jsx)(g.a.Description,{children:Object(O.jsx)(u,{text:"Proof",stepTime:this.state.proofTime,numberStep:7,onPressChild:this.onPress,timeInfo:"1 hour",checkOn:this.state.step7CheckOn})}),Object(O.jsx)(g.a.Description,{children:Object(O.jsx)(u,{text:"Bake",stepTime:this.state.bakeTime,numberStep:8,onPressChild:this.onPress,timeInfo:"30 minutes",checkOn:this.state.step8CheckOn})}),Object(O.jsx)(g.a.Description,{children:Object(O.jsx)(u,{text:"Cool time",stepTime:this.state.coolTime,numberStep:9,onPressChild:this.onPress,timeInfo:"10 minutes",checkOn:this.state.step9CheckOn})}),Object(O.jsx)(g.a.Description,{children:Object(O.jsx)(u,{text:"Done",stepTime:this.state.doneTime,numberStep:10,onPressChild:this.onPress,timeInfo:"",checkOn:this.state.step10CheckOn})})]})]})})})]})]})}}]),i}(s.Component);var C=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(k,{})})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,132)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,h=t.getTTFB;i(e),s(e),n(e),o(e),h(e)}))};h.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),b()}},[[115,1,2]]]);
//# sourceMappingURL=main.4ed12390.chunk.js.map