import React, { Component } from 'react';
import Cell from './Cell.js'

class Gameboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cell: 300,
    }

  };

  render() {
    const cellGrid = [];

    for (var i = 0; i < this.state.cell; i++) {
      cellGrid.push(<Cell key={i} index={i}/>)
    }


    return (
      <div id="gameboard">
        {cellGrid}
      </div>
    );
  }
}

export default Gameboard;
