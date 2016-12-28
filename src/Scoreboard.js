import React, { Component } from 'react';
import Gameboard from './Gameboard.js'

class Scoreboard extends Component {
  render() {
    return (
      <div id="Scoreboard">
        <div className="current">
          <button onClick={e => this.props.newColor(e)}>NEW COLOR SCHEME</button>
          <button onClick={e => this.props.beginGame(e)}>BEGIN GAME</button>
        </div>
        <div className="winmessage">
          <button onClick={e => this.props.restart(e)}>START NEW GAME</button>
        </div>
      </div>
    );

  }
}

export default Scoreboard;
