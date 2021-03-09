// //import logo from './logo.svg';
// import React, { Component } from "react";
// import { Button, Card, Header, Image, Container, Item} from 'semantic-ui-react'
// import './App.css';

// class Task extends React.Component {
  
//   constructor(props) {
//     super(props);

//     this.state = {
//       whichStep: 0,
//       checked: false,
//       text: '',
//       additionalTime: 0
//     };

//     this.handleCheck = this.handleCheck.bind(this);
//   }

//   handleCheck() {
//     if (this.whichStep == 0) {
      
//     }

//   }

//   render() {
//     return (
//       <div class="ui checkbox">
//         <input type="checkbox" name="mixCheckName" onClick={this.handleCheck}/>
//         <label>{this.text}{this.state.mixTime} </label>
//       </div>
//     )
//   }

// }

// class Time extends React.Component {
//   constructor(props){
//       super(props);
//       this.timer = 0;
//       this.state = {
//           time: new Date()
//       };
//   }
//   componentWillMount(){
//       // set up timer
//       this.timer = setTimeout(() => {
//           this.setState({
//               time: new Date()
//           });
//           this.componentWillMount();
//       }, Math.floor(Date.now() / 1000) * 1000 + 1000 - Date.now());
//   }
//   componentWillUnmount(){
//       // remove timer
//       clearTimeout(this.timer);
//   }
  
//   render() {
//       // render the current time
//       return this.state.time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
//   }
// }

// class TimerWindow extends Component { 
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentTime: <Time />,
//       mixTime: '',
//       roomTempTime: '',
//       coldRiseTime: '',
//       bringRoomTempTime: '',
//       moreIngredientsTime: '',
//       riseRoomTempTime: '',
//       proofTime: '',
//       bakeTime: '',
//       coolTime: '',
//       doneTime: ''
//     }

//     this.onPress = this.onPress.bind(this);
//     this.mixCheck = this.mixCheck.bind(this);
//     this.roomTempCheck = this.roomTempCheck.bind(this);
//     this.coldRiseCheck = this.coldRiseCheck.bind(this);
//     this.bringRoomTempCheck = this.bringRoomTempCheck.bind(this);
//     this.moreIngredientsCheck = this.moreIngredientsCheck.bind(this);
//     this.riseRoomTempCheck = this.riseRoomTempCheck.bind(this);
//     this.proofCheck = this.proofCheck.bind(this);
//     this.bakeCheck = this.bakeCheck.bind(this);
//     this.coolCheck = this.coolCheck.bind(this);
//     this.doneCheck = this.doneCheck.bind(this);
//   }
    
//   onPress() { 
//     let pressDate = new Date();
    
//     pressDate.setTime(Date.now());
//     this.setState({ mixTime: 'Now' });
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ roomTempTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ coldRiseTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 43200000);
//     this.setState({ bringRoomTempTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ moreIngredientsTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ riseRoomTempTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 10800000);
//     this.setState({ proofTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ bakeTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 1800000);
//     this.setState({ coolTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ doneTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});

//   }

//   mixCheck() { 
//     let pressDate = new Date();
    
//     pressDate.setTime(Date.now());
//     this.setState({ mixTime: 'Done' });
//     this.setState({ roomTempTime: 'Now' });
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ coldRiseTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 43200000);
//     this.setState({ bringRoomTempTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ moreIngredientsTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ riseRoomTempTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 10800000);
//     this.setState({ proofTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ bakeTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 1800000);
//     this.setState({ coolTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ doneTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});

//   }

//   roomTempCheck() { 
//     let pressDate = new Date();
    
//     pressDate.setTime(Date.now());
//     this.setState({ mixTime: 'Done' });
//     this.setState({ roomTempTime: 'Done' });
//     this.setState({ coldRiseTime: 'Now'});
//     pressDate.setTime(pressDate.getTime() + 43200000);
//     this.setState({ bringRoomTempTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ moreIngredientsTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ riseRoomTempTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 10800000);
//     this.setState({ proofTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ bakeTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 1800000);
//     this.setState({ coolTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ doneTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});

//   }

//   coldRiseCheck() { 
//     let pressDate = new Date();
    
//     pressDate.setTime(Date.now());
//     this.setState({ mixTime: 'Done' });
//     this.setState({ roomTempTime: 'Done' });
//     this.setState({ coldRiseTime: 'Done' });
//     this.setState({ bringRoomTempTime: 'Now'});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ moreIngredientsTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ riseRoomTempTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 10800000);
//     this.setState({ proofTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ bakeTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 1800000);
//     this.setState({ coolTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ doneTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});

//   }

//   bringRoomTempCheck() { 
//     let pressDate = new Date();
    
//     pressDate.setTime(Date.now());
//     this.setState({ mixTime: 'Done' });
//     this.setState({ roomTempTime: 'Done' });
//     this.setState({ coldRiseTime: 'Done' });
//     this.setState({ bringRoomTempTime: 'Done'});
//     this.setState({ moreIngredientsTime: 'Now'});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ riseRoomTempTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 10800000);
//     this.setState({ proofTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ bakeTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 1800000);
//     this.setState({ coolTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ doneTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});

//   }

//   moreIngredientsCheck() { 
//     let pressDate = new Date();
    
//     pressDate.setTime(Date.now());
//     this.setState({ mixTime: 'Done' });
//     this.setState({ roomTempTime: 'Done' });
//     this.setState({ coldRiseTime: 'Done' });
//     this.setState({ bringRoomTempTime: 'Done'});
//     this.setState({ moreIngredientsTime: 'Done'});
//     this.setState({ riseRoomTempTime: 'Now'});
//     pressDate.setTime(pressDate.getTime() + 10800000);
//     this.setState({ proofTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ bakeTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 1800000);
//     this.setState({ coolTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ doneTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});

//   }

//   riseRoomTempCheck() { 
//     let pressDate = new Date();
    
//     pressDate.setTime(Date.now());
//     this.setState({ mixTime: 'Done' });
//     this.setState({ roomTempTime: 'Done' });
//     this.setState({ coldRiseTime: 'Done' });
//     this.setState({ bringRoomTempTime: 'Done'});
//     this.setState({ moreIngredientsTime: 'Done'});
//     this.setState({ riseRoomTempTime: 'Done'});
//     this.setState({ proofTime: 'Now'});
//     pressDate.setTime(pressDate.getTime() + 3600000);
//     this.setState({ bakeTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 1800000);
//     this.setState({ coolTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ doneTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});

//   }

//   proofCheck() { 
//     let pressDate = new Date();
    
//     pressDate.setTime(Date.now());
//     this.setState({ mixTime: 'Done' });
//     this.setState({ roomTempTime: 'Done' });
//     this.setState({ coldRiseTime: 'Done' });
//     this.setState({ bringRoomTempTime: 'Done'});
//     this.setState({ moreIngredientsTime: 'Done'});
//     this.setState({ riseRoomTempTime: 'Done'});
//     this.setState({ proofTime: 'Done'});
//     this.setState({ bakeTime: 'Now'});
//     pressDate.setTime(pressDate.getTime() + 1800000);
//     this.setState({ coolTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ doneTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});

//   }

//   bakeCheck() { 
//     let pressDate = new Date();
    
//     pressDate.setTime(Date.now());
//     this.setState({ mixTime: 'Done' });
//     this.setState({ roomTempTime: 'Done' });
//     this.setState({ coldRiseTime: 'Done' });
//     this.setState({ bringRoomTempTime: 'Done'});
//     this.setState({ moreIngredientsTime: 'Done'});
//     this.setState({ riseRoomTempTime: 'Done'});
//     this.setState({ proofTime: 'Done'});
//     this.setState({ bakeTime: 'Done'});
//     this.setState({ coolTime: 'Now'});
//     pressDate.setTime(pressDate.getTime() + 600000);
//     this.setState({ doneTime: pressDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});

//   }

//   coolCheck() { 
//     let pressDate = new Date();
    
//     pressDate.setTime(Date.now());
//     this.setState({ mixTime: 'Done' });
//     this.setState({ roomTempTime: 'Done' });
//     this.setState({ coldRiseTime: 'Done' });
//     this.setState({ bringRoomTempTime: 'Done'});
//     this.setState({ moreIngredientsTime: 'Done'});
//     this.setState({ riseRoomTempTime: 'Done'});
//     this.setState({ proofTime: 'Done'});
//     this.setState({ bakeTime: 'Done'});
//     this.setState({ coolTime: 'Done'});
//     this.setState({ doneTime: 'Wooh!'});

//   }

//   doneCheck() { 
//     // Wooh!

//   }

//   render() {
//     return (
//       <div class="ui container">
//         <h3 class="ui centered header">Current Time: {this.state.currentTime}</h3>
//         <div className='row'>
//           <div className='column'>
//             {/* <Button onClick={this.onPress}>BEGIN BAKING</Button> */}
//             <Button animated onClick={this.onPress}>
//               <Button.Content visible>BAKE</Button.Content>
//               <Button.Content hidden>
//                 BEGIN
//               </Button.Content>
//             </Button>
//           </div>
//           <div className='column'>
//             <Card>
//               <Card.Header>
//                 <Header>Time of Step</Header>
//               </Card.Header>
//               <Card.Content>
//                 <Card.Description>
//                   <div class="ui checkbox">
//                     <input type="checkbox" name="mixCheckName" onClick={this.mixCheck}/>
//                     <label>Mix Initial Ingredients: {this.state.mixTime} </label>
//                   </div>
//                 </Card.Description>
//                 <Card.Description>
//                   <div class="ui checkbox">
//                     <input type="checkbox" name="roomTempCheck" onClick={this.roomTempCheck}/>
//                     <label>Room Temp Rise: {this.state.roomTempTime} </label>
//                   </div>
//                 </Card.Description>
//                 <Card.Description>
//                   <div class="ui checkbox">
//                     <input type="checkbox" name="mixCheck" onClick={this.coldRiseCheck}/>
//                     <label>Cold Rise: {this.state.coldRiseTime}</label>
//                   </div>
//                 </Card.Description>
//                 <Card.Description>
//                   <div class="ui checkbox">
//                     <input type="checkbox" name="mixCheck" onClick={this.bringRoomTempCheck}/>
//                     <label>Bring To Room Temp: {this.state.bringRoomTempTime}</label>
//                   </div>
//                 </Card.Description>
//                 <Card.Description>
//                   <div class="ui checkbox">
//                     <input type="checkbox" name="mixCheck" onClick={this.moreIngredientsCheck}/>
//                     <label>More Ingredients: {this.state.moreIngredientsTime}</label>
//                   </div>
//                 </Card.Description>
//                 <Card.Description>
//                   <div class="ui checkbox">
//                     <input type="checkbox" name="mixCheck" onClick={this.riseRoomTempCheck}/>
//                     <label>Rise @ Room Temp: {this.state.riseRoomTempTime}</label>
//                   </div>
//                 </Card.Description>
//                 <Card.Description>
//                   <div class="ui checkbox">
//                     <input type="checkbox" name="mixCheck" onClick={this.proofCheck}/>
//                     <label>Proof: {this.state.proofTime}</label>
//                   </div>
//                 </Card.Description>
//                 <Card.Description>
//                   <div class="ui checkbox">
//                     <input type="checkbox" name="mixCheck" onClick={this.bakeCheck}/>
//                     <label>Bake: {this.state.bakeTime}</label>
//                   </div>
//                 </Card.Description>
//                 <Card.Description>
//                   <div class="ui checkbox">
//                     <input type="checkbox" name="mixCheck" onClick={this.coolCheck}/>
//                     <label>Cool time: {this.state.coolTime}</label>
//                   </div>
//                 </Card.Description>
//                 <Card.Description>
//                   <div class="ui checkbox">
//                     <input type="checkbox" name="mixCheck" onClick={this.doneCheck}/>
//                     <label>Done: {this.state.doneTime}</label>
//                   </div>
//                 </Card.Description>
//               </Card.Content>
//             </Card>
//           </div> 
//         </div>
//       </div>
//     ); 
//   }
// }


// function App() {
//   return (
//     <div>
//       <TimerWindow />
//     </div>
//   );
// }

// export default App;
