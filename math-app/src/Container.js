import React, { Component } from 'react';
import MathCards from './MathCards';

class Container extends Component {
    state = {
        first:0,
        second:0,
        level:0,
        time:30,
        signArray:["+", "-", "x"],
        selectedSign:"",
    }
    
  generateSign(){
    const index = Math.floor((Math.random() * 2));
    return this.state.signArray[index];
  }
  generateNumbers(maxNumber){
    const numbers = {};
    const first = Math.floor((Math.random() * maxNumber) + 1);
    const second = Math.floor((Math.random() * maxNumber) + 1);
    numbers.first = first;
    numbers.second = second;
    return numbers;
  }

  restart(){
    const randomNum = this.generateNumbers(10);
    const randomSign = this.generateSign();
      this.setState({
        first:randomNum.first,
        second:randomNum.second,
        selectedSign: randomSign,
      })
  }

  componentDidMount(){
    this.restart();
    console.log(this.state.selectedSign);
  }

  validateAnswer(answer){
    const parsedAnswer = parseInt(answer);
    console.log(typeof answer);
    console.log(this.state.selectedSign);
    switch(this.state.selectedSign) {
      case "+":
          
          if((this.state.first + this.state.second) === parsedAnswer)
          {
            console.log(this.state.first + this.state.second);
            this.restart();
          }
          else{
            alert("Wrong Answer!");
          }
          break;
      case "-":
          if (this.state.first - this.state.second === parsedAnswer) {
            this.restart();
          }
          else{
            alert("Wrong Answer!");
          }
          break;
      case "x":
          if (this.state.first * this.state.second === parsedAnswer) {
            this.restart();
          }
          else{
            alert("Wrong Answer!");
          }
          break;
      default:
          null;
    }
  }

  render() {
    return (
      <div className="Math-Container">
        <MathCards first={this.state.first} sign={this.state.selectedSign} second={this.state.second} validateAnswer={(answer)=>this.validateAnswer(answer)} />
      </div>
    );
  }
}

export default Container;
