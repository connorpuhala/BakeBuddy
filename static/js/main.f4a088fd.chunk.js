(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{106:function(e,t,i){},107:function(e,t,i){},115:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i.n(s),o=i(34),h=i.n(o),m=(i(105),i(106),i(52)),a=i(53),c=i(29),r=i(56),T=i(55),S=i(127),p=i(129),d=i(128),l=i(131),u=(i(107),i.p,i.p+"static/media/alarmbeep.502ff83e.wav"),g=i(2),O=function(e){Object(r.a)(i,e);var t=Object(T.a)(i);function i(e){var s;return Object(m.a)(this,i),(s=t.call(this,e)).timer=0,s.state={time:new Date,isRunning:!1,isChecked:!1},s.handleCheck=s.handleCheck.bind(Object(c.a)(s)),s}return Object(a.a)(i,[{key:"componentWillMount",value:function(){var e=this;this.timer=setTimeout((function(){e.setState({time:new Date}),e.componentWillMount()}),1e3*Math.floor(Date.now()/1e3)+1e3-Date.now())}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"handleCheck",value:function(){this.setState((function(e){return{isChecked:!e.isChecked}}))}},{key:"render",value:function(){console.log(this.props.startTime),console.log(this.props.nextStepTime),console.log(this.state.time.getTime());var e=this.props.startTime+this.props.nextStepTime;(e-this.state.time>0&&0==this.state.isRunning&&this.setState({isRunning:!0}),e-this.state.time<=0&&1==this.state.isRunning)&&(this.setState({isRunning:!1}),1==this.state.isChecked&&0==this.props.checkNine&&0==this.props.checkTen&&new Audio(u).play());return Object(g.jsxs)("div",{class:"ui checkbox",children:[Object(g.jsx)("input",{type:"checkbox",name:"example",onChange:this.handleCheck}),Object(g.jsx)("label",{children:"Alarm"})]})}}]),i}(n.a.Component),k=function(e){Object(r.a)(i,e);var t=Object(T.a)(i);function i(e){var s;return Object(m.a)(this,i),(s=t.call(this,e)).timer=0,s.state={time:new Date,isRunning:!1},s}return Object(a.a)(i,[{key:"componentWillMount",value:function(){var e=this;this.timer=setTimeout((function(){e.setState({time:new Date}),e.componentWillMount()}),1e3*Math.floor(Date.now()/1e3)+1e3-Date.now())}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"msToTime",value:function(e){parseInt(e%1e3/100);var t=Math.floor(e/1e3%60),i=Math.floor(e/6e4%60),s=Math.floor(e/36e5%24);return"Step Timer: "+(s=s<10?"0"+s:s)+":"+(i=i<10?"0"+i:i)+":"+(t=t<10?"0"+t:t)}},{key:"render",value:function(){console.log(this.props.startTime),console.log(this.props.nextStepTime),console.log(this.state.time.getTime());var e=this.props.startTime+this.props.nextStepTime;return e-this.state.time>0?this.msToTime(e-this.state.time):"Ready"}}]),i}(n.a.Component),C=function(e){Object(r.a)(i,e);var t=Object(T.a)(i);function i(e){return Object(m.a)(this,i),t.call(this,e)}return Object(a.a)(i,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{class:"ui checkbox",children:[Object(g.jsx)("input",{type:"checkbox",checked:this.props.checkOn,onClick:function(){return e.props.onPressChild(e.props.numberStep)}}),Object(g.jsxs)("label",{children:[this.props.stepTime," - ",this.props.text]}),Object(g.jsx)("div",{className:"extra",children:this.props.timeInfo})]})}}]),i}(n.a.Component),j=function(e){Object(r.a)(i,e);var t=Object(T.a)(i);function i(e){var s;return Object(m.a)(this,i),(s=t.call(this,e)).timer=0,s.state={time:new Date},s}return Object(a.a)(i,[{key:"componentWillMount",value:function(){var e=this;this.timer=setTimeout((function(){e.setState({time:new Date}),e.componentWillMount()}),1e3*Math.floor(Date.now()/1e3)+1e3-Date.now())}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){return this.state.time.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}}]),i}(n.a.Component),b=function(e){Object(r.a)(i,e);var t=Object(T.a)(i);function i(e){var s;return Object(m.a)(this,i),(s=t.call(this,e)).onPress=function(e){var t=new Date;t.setTime(Date.now()),0==e?s.setState({nextStepTime:6e5}):1==e?s.setState({nextStepTime:36e5}):2==e?s.setState({nextStepTime:432e5}):3==e?s.setState({nextStepTime:36e5}):4==e?s.setState({nextStepTime:6e5}):5==e?s.setState({nextStepTime:108e5}):6==e?s.setState({nextStepTime:36e4}):7==e?s.setState({nextStepTime:18e5}):8==e?s.setState({nextStepTime:6e5}):e>=9&&s.setState({nextStepTime:0}),s.setState({transitionIn:500,transitionOut:0}),s.setState({cardVisible:!0}),s.updateAllTimes(t,e)},s.state={currentTime:Object(g.jsx)(j,{}),mixTime:"",roomTempTime:"",coldRiseTime:"",bringRoomTempTime:"",moreIngredientsTime:"",riseRoomTempTime:"",proofTime:"",bakeTime:"",coolTime:"",doneTime:"",step1CheckOn:!1,step2CheckOn:!1,step3CheckOn:!1,step4CheckOn:!1,step5CheckOn:!1,step6CheckOn:!1,step7CheckOn:!1,step8CheckOn:!1,step9CheckOn:!1,step10CheckOn:!1,nextStepTime:"",cardVisible:!1,alarmChecked:!1,transitionIn:500,transitionOut:0},s.onPress=s.onPress.bind(Object(c.a)(s)),s.handleCheck=s.handleCheck.bind(Object(c.a)(s)),s}return Object(a.a)(i,[{key:"handleCheck",value:function(){}},{key:"updateAllTimes",value:function(e,t){0==t?(this.setState({mixTime:"Now"}),this.setState({step1CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({roomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step2CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({coldRiseTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step3CheckOn:!1}),e.setTime(e.getTime()+432e5),this.setState({bringRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step4CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({moreIngredientsTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step5CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({riseRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):1==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Now"}),this.setState({step2CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({coldRiseTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step3CheckOn:!1}),e.setTime(e.getTime()+432e5),this.setState({bringRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step4CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({moreIngredientsTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step5CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({riseRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):2==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Now"}),this.setState({step3CheckOn:!1}),e.setTime(e.getTime()+432e5),this.setState({bringRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step4CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({moreIngredientsTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step5CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({riseRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):3==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Now"}),this.setState({step4CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({moreIngredientsTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step5CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({riseRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):4==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Now"}),this.setState({step5CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({riseRoomTempTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):5==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Done"}),this.setState({step5CheckOn:!0}),this.setState({riseRoomTempTime:"Now"}),this.setState({step6CheckOn:!1}),e.setTime(e.getTime()+108e5),this.setState({proofTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step7CheckOn:!1}),e.setTime(e.getTime()+36e5),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):6==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Done"}),this.setState({step5CheckOn:!0}),this.setState({riseRoomTempTime:"Done"}),this.setState({step6CheckOn:!0}),this.setState({proofTime:"Now"}),e.setTime(e.getTime()+36e5),this.setState({step7CheckOn:!1}),this.setState({bakeTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):7==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Done"}),this.setState({step5CheckOn:!0}),this.setState({riseRoomTempTime:"Done"}),this.setState({step6CheckOn:!0}),this.setState({proofTime:"Done"}),this.setState({step7CheckOn:!0}),this.setState({bakeTime:"Now"}),this.setState({step8CheckOn:!1}),e.setTime(e.getTime()+18e5),this.setState({coolTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):8==t?(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Done"}),this.setState({step5CheckOn:!0}),this.setState({riseRoomTempTime:"Done"}),this.setState({step6CheckOn:!0}),this.setState({proofTime:"Done"}),this.setState({step7CheckOn:!0}),this.setState({bakeTime:"Done"}),this.setState({step8CheckOn:!0}),this.setState({coolTime:"Now"}),this.setState({step9CheckOn:!1}),e.setTime(e.getTime()+6e5),this.setState({doneTime:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),this.setState({step10CheckOn:!1})):t>=9&&(this.setState({mixTime:"Done"}),this.setState({step1CheckOn:!0}),this.setState({roomTempTime:"Done"}),this.setState({step2CheckOn:!0}),this.setState({coldRiseTime:"Done"}),this.setState({step3CheckOn:!0}),this.setState({bringRoomTempTime:"Done"}),this.setState({step4CheckOn:!0}),this.setState({moreIngredientsTime:"Done"}),this.setState({step5CheckOn:!0}),this.setState({riseRoomTempTime:"Done"}),this.setState({step6CheckOn:!0}),this.setState({proofTime:"Done"}),this.setState({step7CheckOn:!0}),this.setState({bakeTime:"Done"}),this.setState({step8CheckOn:!0}),this.setState({coolTime:"Done"}),this.setState({step9CheckOn:!0}),this.setState({doneTime:"Wooh!"}),10==t&&(this.setState({transitionIn:0,transitionOut:2e3}),this.setState({cardVisible:!1})))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{class:"ui container",children:[Object(g.jsxs)("h3",{class:"ui centered header",children:["Current Time: ",this.state.currentTime]}),Object(g.jsxs)("div",{className:"row-a",children:[Object(g.jsx)("div",{className:"column",children:Object(g.jsx)("h5",{class:"ui centered header",children:Object(g.jsx)(k,{nextStepTime:this.state.nextStepTime,startTime:Date.now()})})}),Object(g.jsx)("div",{className:"column",children:Object(g.jsx)("h5",{class:"ui centered header",children:Object(g.jsx)(O,{nextStepTime:this.state.nextStepTime,startTime:Date.now(),checkNine:this.state.step9CheckOn,checkTen:this.state.step10CheckOn})})})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"column",children:[Object(g.jsx)(S.a,{visible:!this.state.cardVisible,animation:"scale",duration:this.state.transitionOut,children:Object(g.jsxs)(p.a,{animated:!0,onClick:function(){return e.onPress(0)},children:[Object(g.jsx)(p.a.Content,{visible:!0,children:"BAKE"}),Object(g.jsx)(p.a.Content,{hidden:!0,children:"BEGIN"})]})}),Object(g.jsx)(S.a,{visible:this.state.cardVisible,animation:"scale",duration:this.state.transitionIn,children:Object(g.jsx)("div",{children:Object(g.jsxs)(p.a,{animated:!0,onClick:function(){return e.onPress(0)},children:[Object(g.jsx)(p.a.Content,{visible:!0,children:"BAKE"}),Object(g.jsx)(p.a.Content,{hidden:!0,children:"BEGIN"})]})})})]}),Object(g.jsx)(S.a,{visible:this.state.cardVisible,animation:"scale",duration:this.state.transitionIn,children:Object(g.jsx)("div",{className:"column",children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(d.a.Header,{children:Object(g.jsx)(l.a,{children:"Time of Step"})}),Object(g.jsxs)(d.a.Content,{children:[Object(g.jsx)(d.a.Description,{children:Object(g.jsx)(C,{text:"Mix Initial Ingredients",stepTime:this.state.mixTime,numberStep:1,onPressChild:this.onPress,timeInfo:"10 minutes",checkOn:this.state.step1CheckOn})}),Object(g.jsx)(d.a.Description,{children:Object(g.jsx)(C,{text:"Room Temp Rise",stepTime:this.state.roomTempTime,numberStep:2,onPressChild:this.onPress,timeInfo:"1 hour",checkOn:this.state.step2CheckOn})}),Object(g.jsx)(d.a.Description,{children:Object(g.jsx)(C,{text:"Cold Rise",stepTime:this.state.coldRiseTime,numberStep:3,onPressChild:this.onPress,timeInfo:"12 hours",checkOn:this.state.step3CheckOn})}),Object(g.jsx)(d.a.Description,{children:Object(g.jsx)(C,{text:"Bring To Room Temp",stepTime:this.state.bringRoomTempTime,numberStep:4,onPressChild:this.onPress,timeInfo:"1 hour",checkOn:this.state.step4CheckOn})}),Object(g.jsx)(d.a.Description,{children:Object(g.jsx)(C,{text:"More Ingredients",stepTime:this.state.moreIngredientsTime,numberStep:5,onPressChild:this.onPress,timeInfo:"10 minutes",checkOn:this.state.step5CheckOn})}),Object(g.jsx)(d.a.Description,{children:Object(g.jsx)(C,{text:"Rise @ Room Temp",stepTime:this.state.riseRoomTempTime,numberStep:6,onPressChild:this.onPress,timeInfo:"3 hours",checkOn:this.state.step6CheckOn})}),Object(g.jsx)(d.a.Description,{children:Object(g.jsx)(C,{text:"Proof",stepTime:this.state.proofTime,numberStep:7,onPressChild:this.onPress,timeInfo:"1 hour",checkOn:this.state.step7CheckOn})}),Object(g.jsx)(d.a.Description,{children:Object(g.jsx)(C,{text:"Bake",stepTime:this.state.bakeTime,numberStep:8,onPressChild:this.onPress,timeInfo:"30 minutes",checkOn:this.state.step8CheckOn})}),Object(g.jsx)(d.a.Description,{children:Object(g.jsx)(C,{text:"Cool time",stepTime:this.state.coolTime,numberStep:9,onPressChild:this.onPress,timeInfo:"10 minutes",checkOn:this.state.step9CheckOn})}),Object(g.jsx)(d.a.Description,{children:Object(g.jsx)(C,{text:"Done",stepTime:this.state.doneTime,numberStep:10,onPressChild:this.onPress,timeInfo:"",checkOn:this.state.step10CheckOn})})]})]})})})]})]})}}]),i}(s.Component);var x=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,132)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,h=t.getTTFB;i(e),s(e),n(e),o(e),h(e)}))};h.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root")),f()}},[[115,1,2]]]);
//# sourceMappingURL=main.f4a088fd.chunk.js.map