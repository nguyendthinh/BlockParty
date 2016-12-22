import React, { Component } from 'react';
import Gameboard from './Gameboard.js'

class Scoreboard extends Component {
  render() {
    return (
      <div id="Scoreboard">
        <div id="current">
          <p id="timer">{this.props.timer}</p>
          <button onClick={e => this.props.newColor(e)}>NEW COLOR SCHEME</button>
          <button onClick={e => this.props.beginGame(e)}>BEGIN GAME</button>
        </div>
        <div id="winmessage">
          <p id="win">YOU WIN!</p>
          <p id="score">YOUR SCORE: {Math.floor((1000/this.props.clicks) * 10)}</p>
        </div>
      </div>
    );

  }
}

export default Scoreboard;
