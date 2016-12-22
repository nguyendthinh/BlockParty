import React, { Component } from 'react';
import Gameboard from './Gameboard.js'

class Scoreboard extends Component {

  render() {
    return (
      <div id="Scoreboard">
        <div id="current">
          <p>{this.props.timer}</p>
          <button onClick={e => this.props.newColor(e)}>New Game/Color Scheme</button>
          <button onClick={e => this.props.beginGame(e)}>Begin Game</button>
        </div>
        <div id="winmessage">
          <p>YOU WIN!</p>
          <p>YOUR SCORE: {this.props.clicks}</p>
        </div>
      </div>
    );

  }
}

export default Scoreboard;
