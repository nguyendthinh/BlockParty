import React, { Component } from 'react';
import Gameboard from './Gameboard.js';
import Scoreboard from './Scoreboard.js';
let firstFiveColor = [];

class App extends Component {
  constructor(props){
    super()
    this.state = {
      firstFiveColor,
    }
    function chooseRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
      } return color;
    }
    for (var i = 0; i < 3; i++) {
      firstFiveColor.push(chooseRandomColor())
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
