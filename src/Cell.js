import React, { Component } from 'react';
import Gameboard from './Gameboard.js'

class Cell extends Component {

  render() {
    return (
      <div id={this.props.cell.index}
            onClick={e => this.props.userClicks(this.props.cell)}
            className="cell"
            style={{backgroundColor: this.props.cell.color}}></div>
    );

  }
}

export default Cell;
