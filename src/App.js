//import logo from './logo.svg';
import React, { Component } from "react";
import { Button, Card, Header, Transition, Image} from 'semantic-ui-react'
import './App.css';
import baguette from './images/baguettecard.png';

class Task extends React.Component {
  
  constructor(props) {
    super(props);

    //this.handleCheck = this.handleCheck.bind(this);
  }

  // handleCheck(theStepNumber) {
  //   if (theStepNumber == 2) {
  //     console.log('step 2 bishhh');
  //   }
  // }

  render() {
    return (
      <div class="ui checkbox">
        <input type="checkbox" checked={this.props.checkOn} onClick={() => this.props.onPressChild(this.props.numberStep)}/>
        <label>{this.props.stepTime} - {this.props.text}</label>
        <div className='extra'>{this.props.timeInfo}</div>
      </div>
    )
  }

}

class Time extends React.Component {
  constructor(props){
      super(props);
      this.timer = 0;
      this.state = {
          time: new Date()
      };
  }
  componentWillMount(){
      // set up timer
      this.timer = setTimeout(() => {
          this.setState({
              time: new Date()
          });
          this.componentWillMount();
      }, Math.floor(Date.now() / 1000) * 1000 + 1000 - Date.now());
  }
  componentWillUnmount(){
      // remove timer
      clearTimeout(this.timer);
  }
  
  render() {
      // render the current time
      return this.state.time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }
}

class TimerWindow extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      currentTime: <Time />,
      mixTime: '',
      roomTempTime: '',
      coldRiseTime: '',
      bringRoomTempTime: '',
      moreIngredientsTime: '',
      riseRoomTempTime: '',
      proofTime: '',
      bakeTime: '',
      coolTime: '',
      doneTime: '',

      step1CheckOn: false,
      step2CheckOn: false,
      step3CheckOn: false,
      step4CheckOn: false,
      step5CheckOn: false,
      step6CheckOn: false,
      step7CheckOn: false,
      step8CheckOn: false,
      step9CheckOn: false,
      step10CheckOn: false,

      cardVisible: false,

      transitionIn: 500,
      transitionOut: 0
    }

    this.onPress = this.onPress.bind(this);
  }

  updateAllTimes(rightNow, stepNumber) {
    if (stepNumber == 0) {
      this.setState({ mixTime: 'Now'});
      this.setState({ step1CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ roomTempTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step2CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ coldRiseTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step3CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 43200000);
      this.setState({ bringRoomTempTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step4CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ moreIngredientsTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step5CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ riseRoomTempTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step6CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 10800000);
      this.setState({ proofTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step7CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ bakeTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step8CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 1800000);
      this.setState({ coolTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step9CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ doneTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step10CheckOn: false});
    } else if (stepNumber == 1) {
      this.setState({ mixTime: 'Done'});
      this.setState({ step1CheckOn: true});
      this.setState({ roomTempTime: 'Now'});
      this.setState({ step2CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ coldRiseTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step3CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 43200000);
      this.setState({ bringRoomTempTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step4CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ moreIngredientsTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step5CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ riseRoomTempTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step6CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 10800000);
      this.setState({ proofTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step7CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ bakeTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step8CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 1800000);
      this.setState({ coolTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step9CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ doneTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step10CheckOn: false});
    } else if (stepNumber == 2) {
      this.setState({ mixTime: 'Done'});
      this.setState({ step1CheckOn: true});
      this.setState({ roomTempTime: 'Done'});
      this.setState({ step2CheckOn: true});
      this.setState({ coldRiseTime: 'Now'});
      this.setState({ step3CheckOn: false});
      //console.log(rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
      rightNow.setTime(rightNow.getTime() + 43200000);
      this.setState({ bringRoomTempTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step4CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ moreIngredientsTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step5CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ riseRoomTempTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step6CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 10800000);
      this.setState({ proofTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step7CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ bakeTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step8CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 1800000);
      this.setState({ coolTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step9CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ doneTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step10CheckOn: false});
    } else if (stepNumber == 3) {
      this.setState({ mixTime: 'Done'});
      this.setState({ step1CheckOn: true});
      this.setState({ roomTempTime: 'Done'});
      this.setState({ step2CheckOn: true});
      this.setState({ coldRiseTime: 'Done'});
      this.setState({ step3CheckOn: true});
      this.setState({ bringRoomTempTime: 'Now'});
      this.setState({ step4CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ moreIngredientsTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step5CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ riseRoomTempTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step6CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 10800000);
      this.setState({ proofTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step7CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ bakeTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step8CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 1800000);
      this.setState({ coolTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step9CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ doneTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step10CheckOn: false});
    } else if (stepNumber == 4) {
      this.setState({ mixTime: 'Done'});
      this.setState({ step1CheckOn: true});
      this.setState({ roomTempTime: 'Done'});
      this.setState({ step2CheckOn: true});
      this.setState({ coldRiseTime: 'Done'});
      this.setState({ step3CheckOn: true});
      this.setState({ bringRoomTempTime: 'Done'});
      this.setState({ step4CheckOn: true});
      this.setState({ moreIngredientsTime: 'Now'});
      this.setState({ step5CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ riseRoomTempTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step6CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 10800000);
      this.setState({ proofTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step7CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ bakeTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step8CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 1800000);
      this.setState({ coolTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step9CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ doneTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step10CheckOn: false});
    } else if (stepNumber == 5) {
      this.setState({ mixTime: 'Done'});
      this.setState({ step1CheckOn: true});
      this.setState({ roomTempTime: 'Done'});
      this.setState({ step2CheckOn: true});
      this.setState({ coldRiseTime: 'Done'});
      this.setState({ step3CheckOn: true});
      this.setState({ bringRoomTempTime: 'Done'});
      this.setState({ step4CheckOn: true});
      this.setState({ moreIngredientsTime: 'Done'});
      this.setState({ step5CheckOn: true});
      this.setState({ riseRoomTempTime: 'Now'});
      this.setState({ step6CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 10800000);
      this.setState({ proofTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step7CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ bakeTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step8CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 1800000);
      this.setState({ coolTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step9CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ doneTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step10CheckOn: false});
    } else if (stepNumber == 6) {
      this.setState({ mixTime: 'Done'});
      this.setState({ step1CheckOn: true});
      this.setState({ roomTempTime: 'Done'});
      this.setState({ step2CheckOn: true});
      this.setState({ coldRiseTime: 'Done'});
      this.setState({ step3CheckOn: true});
      this.setState({ bringRoomTempTime: 'Done'});
      this.setState({ step4CheckOn: true});
      this.setState({ moreIngredientsTime: 'Done'});
      this.setState({ step5CheckOn: true});
      this.setState({ riseRoomTempTime: 'Done'});
      this.setState({ step6CheckOn: true});
      this.setState({ proofTime: 'Now'});
      rightNow.setTime(rightNow.getTime() + 3600000);
      this.setState({ step7CheckOn: false});
      this.setState({ bakeTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step8CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 1800000);
      this.setState({ coolTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step9CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ doneTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step10CheckOn: false});
    } else if (stepNumber == 7) {
      this.setState({ mixTime: 'Done'});
      this.setState({ step1CheckOn: true});
      this.setState({ roomTempTime: 'Done'});
      this.setState({ step2CheckOn: true});
      this.setState({ coldRiseTime: 'Done'});
      this.setState({ step3CheckOn: true});
      this.setState({ bringRoomTempTime: 'Done'});
      this.setState({ step4CheckOn: true});
      this.setState({ moreIngredientsTime: 'Done'});
      this.setState({ step5CheckOn: true});
      this.setState({ riseRoomTempTime: 'Done'});
      this.setState({ step6CheckOn: true});
      this.setState({ proofTime: 'Done'});
      this.setState({ step7CheckOn: true});
      this.setState({ bakeTime: 'Now'});
      this.setState({ step8CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 1800000);
      this.setState({ coolTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step9CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ doneTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step10CheckOn: false});
    } else if (stepNumber == 8) {
      this.setState({ mixTime: 'Done'});
      this.setState({ step1CheckOn: true});
      this.setState({ roomTempTime: 'Done'});
      this.setState({ step2CheckOn: true});
      this.setState({ coldRiseTime: 'Done'});
      this.setState({ step3CheckOn: true});
      this.setState({ bringRoomTempTime: 'Done'});
      this.setState({ step4CheckOn: true});
      this.setState({ moreIngredientsTime: 'Done'});
      this.setState({ step5CheckOn: true});
      this.setState({ riseRoomTempTime: 'Done'});
      this.setState({ step6CheckOn: true});
      this.setState({ proofTime: 'Done'});
      this.setState({ step7CheckOn: true});
      this.setState({ bakeTime: 'Done'});
      this.setState({ step8CheckOn: true});
      this.setState({ coolTime: 'Now'});
      this.setState({ step9CheckOn: false});
      rightNow.setTime(rightNow.getTime() + 600000);
      this.setState({ doneTime: rightNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
      this.setState({ step10CheckOn: false});
    } else if (stepNumber >= 9) {
      this.setState({ mixTime: 'Done'});
      this.setState({ step1CheckOn: true});
      this.setState({ roomTempTime: 'Done'});
      this.setState({ step2CheckOn: true});
      this.setState({ coldRiseTime: 'Done'});
      this.setState({ step3CheckOn: true});
      this.setState({ bringRoomTempTime: 'Done'});
      this.setState({ step4CheckOn: true});
      this.setState({ moreIngredientsTime: 'Done'});
      this.setState({ step5CheckOn: true});
      this.setState({ riseRoomTempTime: 'Done'});
      this.setState({ step6CheckOn: true});
      this.setState({ proofTime: 'Done'});
      this.setState({ step7CheckOn: true});
      this.setState({ bakeTime: 'Done'});
      this.setState({ step8CheckOn: true});
      this.setState({ coolTime: 'Done'});
      this.setState({ step9CheckOn: true});
      this.setState({ doneTime: 'Wooh!'});
      //this.setState({ step10CheckOn: true});
      if (stepNumber == 10) {
        this.setState({ 
          transitionIn: 0,
          transitionOut: 2000
        });
        this.setState({ cardVisible: false});
      }
    }
  }

  onPress = (stepNumber) => {
    let rightNowOG = new Date();
    rightNowOG.setTime(Date.now());
    // if (stepNumber == 0) {
    //   rightNowOG.setTime(Date.now());
    // } else if (stepNumber == 1) {
    //   rightNowOG.setTime(Date.now());
    // } else if (stepNumber == 2) {
    //   rightNowOG.setTime(Date.now());
    // } else if (stepNumber == 3) {
    //   rightNowOG.setTime(Date.now() - 600000 - 3600000 - 43200000);
    // } else if (stepNumber == 4) {
    //   console.log('Step 4');
    //   rightNowOG.setTime(Date.now() - 600000 - 3600000 - 43200000 - 3600000);
    // } else if (stepNumber == 5) {
    //   rightNowOG.setTime(Date.now() - 600000 - 3600000 - 43200000 - 3600000 - 600000);
    // } else if (stepNumber == 6) {
    //   rightNowOG.setTime(Date.now() - 600000 - 3600000 - 43200000 - 3600000 - 600000 - 10800000);
    // } else if (stepNumber == 7) {
    //   rightNowOG.setTime(Date.now() - 600000 - 3600000 - 43200000 - 3600000 - 600000 - 10800000 - 3600000);
    // } else if (stepNumber == 8) {
    //   rightNowOG.setTime(Date.now() - 600000 - 3600000 - 43200000 - 3600000 - 600000 - 10800000 - 3600000 - 1800000);
    // } else if (stepNumber == 9) {
    //   rightNowOG.setTime(Date.now() - 600000 - 3600000 - 43200000 - 3600000 - 600000 - 10800000 - 3600000 - 1800000 - 600000);
    // }
    this.setState({ 
      transitionIn: 500,
      transitionOut: 0
    });
    this.setState({ cardVisible: true});
    this.updateAllTimes(rightNowOG, stepNumber);
  }

  render() {
    return (
      <div class="ui container">
        <h3 class="ui centered header">Current Time: {this.state.currentTime}</h3>
        <div className='row'>
          <div className='column'>
            <Transition visible={!this.state.cardVisible} animation='scale' duration={this.state.transitionOut}>
              <Button animated onClick={() => this.onPress(0)}>
                <Button.Content visible>BAKE</Button.Content>
                <Button.Content hidden>
                  BEGIN
                </Button.Content>
              </Button>
            </Transition>
            <Transition visible={this.state.cardVisible} animation='scale' duration={this.state.transitionIn}>
              <Button animated onClick={() => this.onPress(0)}>
                <Button.Content visible>BAKE</Button.Content>
                <Button.Content hidden>
                  BEGIN
                </Button.Content>
              </Button>
            </Transition>
          </div>
          <Transition visible={this.state.cardVisible} animation='scale' duration={this.state.transitionIn}>
            <div className='column'>
              {/* <Transition visible={!this.state.cardVisible} animation='scale' duration={500} wrapped ui={false}>
                <Image src={baguette} wrapped ui={false} width="200" />
              </Transition> */}
              
                <Card>
                  <Card.Header>
                    <Header>Time of Step</Header>
                  </Card.Header>
                  <Card.Content>
                    <Card.Description>
                      <Task 
                        text='Mix Initial Ingredients'
                        stepTime={this.state.mixTime}
                        numberStep={1}
                        onPressChild={this.onPress}
                        timeInfo='10 minutes'
                        checkOn={this.state.step1CheckOn}
                      />
                    </Card.Description>
                    <Card.Description>
                      <Task 
                        text='Room Temp Rise'
                        stepTime={this.state.roomTempTime}
                        numberStep={2}
                        onPressChild={this.onPress}
                        timeInfo='1 hour'
                        checkOn={this.state.step2CheckOn}
                      />
                    </Card.Description>
                    <Card.Description>
                      <Task 
                        text='Cold Rise'
                        stepTime={this.state.coldRiseTime}
                        numberStep={3}
                        onPressChild={this.onPress}
                        timeInfo='12 hours'
                        checkOn={this.state.step3CheckOn}
                      />
                    </Card.Description>
                    <Card.Description>
                      <Task 
                        text='Bring To Room Temp'
                        stepTime={this.state.bringRoomTempTime}
                        numberStep={4}
                        onPressChild={this.onPress}
                        timeInfo='1 hour'
                        checkOn={this.state.step4CheckOn}
                      />
                    </Card.Description>
                    <Card.Description>
                      <Task 
                        text='More Ingredients'
                        stepTime={this.state.moreIngredientsTime}
                        numberStep={5}
                        onPressChild={this.onPress}
                        timeInfo='10 minutes'
                        checkOn={this.state.step5CheckOn}
                      />
                    </Card.Description>
                    <Card.Description>
                      <Task 
                        text='Rise @ Room Temp'
                        stepTime={this.state.riseRoomTempTime}
                        numberStep={6}
                        onPressChild={this.onPress}
                        timeInfo='3 hours'
                        checkOn={this.state.step6CheckOn}
                      />
                    </Card.Description>
                    <Card.Description>
                      <Task 
                        text='Proof'
                        stepTime={this.state.proofTime}
                        numberStep={7}
                        onPressChild={this.onPress}
                        timeInfo='1 hour'
                        checkOn={this.state.step7CheckOn}
                      />
                    </Card.Description>
                    <Card.Description>
                      <Task 
                        text='Bake'
                        stepTime={this.state.bakeTime}
                        numberStep={8}
                        onPressChild={this.onPress}
                        timeInfo='30 minutes'
                        checkOn={this.state.step8CheckOn}
                      />
                    </Card.Description>
                    <Card.Description>
                      <Task 
                        text='Cool time'
                        stepTime={this.state.coolTime}
                        numberStep={9}
                        onPressChild={this.onPress}
                        timeInfo='10 minutes'
                        checkOn={this.state.step9CheckOn}
                      />
                    </Card.Description>
                    <Card.Description>
                      <Task 
                        text='Done'
                        stepTime={this.state.doneTime}
                        numberStep={10}
                        onPressChild={this.onPress}
                        timeInfo=''
                        checkOn={this.state.step10CheckOn}
                      />
                    </Card.Description>
                  </Card.Content>
                </Card>   
            </div> 
          </Transition> 
        </div>
      </div>
    ); 
  }
}


function App() {
  return (
    <div>
      <TimerWindow />
    </div>
  );
}

export default App;
