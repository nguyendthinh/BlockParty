import React, { Component } from 'react';
import Gameboard from './Gameboard.js'

class Scoreboard extends Component {

  render() {
    return (
      <div id="gamebegin">
          <p>{this.props.clicks}</p>
          <p>{this.props.timer}</p>
          <button onClick={e => this.props.newColor(e)}>New Game/Color Scheme</button>
          <button onClick={e => this.props.beginGame(e)}>Begin Game</button>
      </div>
    );

  }
}

export default Scoreboard;
