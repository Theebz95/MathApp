import React, { Component } from 'react';
import MathCards from './MathCards';
import ErrorAlertBox from './ErrorAlertBox';

class Container extends Component {
  


  constructor(props){
    super(props);
    this.state = {
      first: 0,
      second: 0,
      level: 0,
      points: 0,
      time: 30,
      signArray: ["+", "-", "x"],
      selectedSign: "",
      visibility: false,
    };
    //this.addUserPoints=this.addUserPoints.bind(this);
    /**
     * binds function to this class so that other classes will recognize it's not theirs
     */
    this.validateAnswer=this.validateAnswer.bind(this);
    this.toggleAlertBox=this.toggleAlertBox.bind(this);
}
  
  componentDidMount(){
    console.log("hello component did mount");
  }
  componentDidUpdate(){
    console.log("hello componenet did update");
  }

  /**
   * generates a sign (+, -, *) randomly
   */
  generateSign() {
    const index = Math.floor((Math.random() * 3));
    return this.state.signArray[index];
  }
  
  /**
   * generates 2 random numbers from 1 to maxNumber
   * @param {integer} maxNumber 
   */
  generateNumbers(maxNumber) {
    const numbers = {};
    const first = Math.floor((Math.random() * maxNumber) + 1);
    const second = Math.floor((Math.random() * maxNumber) + 1);
    numbers.first = first;
    numbers.second = second;
    return numbers;
  }

  /**
   * resets the state's values to new generated values
   * resets the input value to default (0)
   */
  restart() {
    const randomSign = this.generateSign();
    //if(randomSign==="")
    const randomNum = this.generateNumbers(10);
    this.setState({
      first: randomNum.first,
      second: randomNum.second,
      selectedSign: randomSign
    })
  }

  /**
   * pop up alert box when user enters wrong answer
   * hide alert box when user closes it
   */
  toggleAlertBox(){
    console.log('this is before' + this.state.visibility);
    this.setState((prevState) => ({
      visibility: !prevState.visibility
    }));
    console.log('this is after' + this.state.visibility);
  }
  componentDidMount() {
    this.restart();
    console.log(this.state.selectedSign);
  }
  addUserPoints(ctx, parsedAnswer) {
    console.log("hello",parsedAnswer);
    ctx.setState((prevState) => ({
      points: prevState.points + 1
    }))
    console.log("this is addUserPoints: " + ctx.state.points);
  }

  validateAnswer(answer) {
    const parsedAnswer = parseInt(answer);
    console.log('ANSWER',typeof parsedAnswer,answer);
    switch (this.state.selectedSign) {
      case "+":
        if ((this.state.first + this.state.second) === parsedAnswer) {
          console.log(this.state.first + this.state.second);
          this.addUserPoints(this,parsedAnswer);
          console.log(this.state.points);
          this.restart();
        }
        else {
          this.toggleAlertBox();
        }
        break;
      case "-":
        if (this.state.first - this.state.second === parsedAnswer) {
          this.addUserPoints(this,parsedAnswer);
          this.restart();
        }
        else {
          this.toggleAlertBox();
        }
        break;
      case "x":
        if (this.state.first * this.state.second === parsedAnswer) {
          this.addUserPoints(this,parsedAnswer);
          this.restart();
        }
        else {
          this.toggleAlertBox();
        }
        break;
      default:
        null;
    }
  }

  render() {

    return (
      <div className="Math-Container">
        <MathCards
          points={this.state.points}
          first={this.state.first}
          sign={this.state.selectedSign}
          second={this.state.second}
          validateAnswer={(answer) => this.validateAnswer(answer)}
        />
        <ErrorAlertBox 
          visibility={this.state.visibility}
          toggle={this.toggleAlertBox}
        />
      </div>
    );
  }
}

export default Container;
