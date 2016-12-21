import React, { Component } from 'react';
import Gameboard from './Gameboard.js';

class App extends Component {
  constructor(props){
    super()
    let firstFiveColor = []
    function chooseRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
      } return color;
    }
    for (var i = 0; i < 5; i++) {
      firstFiveColor.push(chooseRandomColor())
    }

    this.state = {
      firstFiveColor
    }
  }


  render() {
    console.log(this.state.firstFiveColor)
    let firstFiveColor = this.state.firstFiveColor

    return (
      <div className="App">
        <Gameboard firstFiveColor={firstFiveColor} />
      </div>
    );
  }
}

export default App;
