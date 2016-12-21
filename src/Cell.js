import React, { Component } from 'react';
import Gameboard from './Gameboard.js'

class Cell extends Component {

  render() {
    return (
      <div data-index={this.props.index}
            onClick={e => this.props.returnValues(this.props.cell)}
            className="cell"
            style={{backgroundColor: this.props.cell.color}}></div>
    );

  }
}

export default Cell;
