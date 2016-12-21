import React, { Component } from 'react';
import Gameboard from './Gameboard.js'

class Scoreboard extends Component {

  render() {
    return (
      <div id="gamebegin">
          <button onClick={e => this.props.beginGame(e)}>Begin Game</button>
      </div>
    );

  }
}

export default Scoreboard;
