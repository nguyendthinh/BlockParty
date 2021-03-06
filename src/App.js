import React, { Component } from 'react';
import Gameboard from './Gameboard.js';
import Scoreboard from './Scoreboard.js';

class App extends Component {
  constructor(props){
    super()
    let firstFiveColor = [];
    this.state = {
      firstFiveColor,
    }
    for (var i = 0; i < 3; i++) {
      firstFiveColor.push("white")
    }
  }


  render() {
    let firstFiveColor = this.state.firstFiveColor
    return (
      <div className="App">
      <div id="titlebackground">
        <h1 id="title">BLOCK PARTY</h1>
      </div>
        <Gameboard firstFiveColor={firstFiveColor} />
      </div>
    );
  }
}

export default App;
