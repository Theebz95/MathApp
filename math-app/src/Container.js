import React, { Component } from 'react';
import MathCards from './MathCards';

class Container extends Component {
    state = {
        first:0,
        second:0,
        level:0,
        time:30,
        signArray:["+", "-", "x"]
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

  componentDidMount(){
      const randomNum = this.generateNumbers(10)
      this.setState({
        first:randomNum.first,
        second:randomNum.second,
      })
  }

  render() {
    return (
      <div className="Math-Container">
        <MathCards first={this.state.first} sign={this.generateSign()} second={this.state.second} />
      </div>
    );
  }
}

export default Container;
