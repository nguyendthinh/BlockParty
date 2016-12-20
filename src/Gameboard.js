import React, { Component } from 'react';
import Cell from './Cell.js'
const colorchoices = ["red", "orange"]

class Gameboard extends Component {
  constructor(props) {
    super()
    let numCells = 300
    let cells = []
    for (var i = 0; i < numCells; i++) {
      cells.push({index: i, color: colorchoices[Math.floor(Math.random() * 2)]})
    }
    this.state = {
      cells
    }
  }

  returnValues(cell) {
    console.log(cell)
  }

  triggerColorChange(e) {
    this.refs.child.colorChange(e)
  }

  render() {
    let cells = this.state.cells.map((cell) => {
      return (
        <Cell ref="child"
              cell={cell}
              returnValues={(cell) => this.returnValues(cell)}
              key={cell.index}/>
      )
    })


    return (
      <div id="gameboard">
        {cells}
      </div>
    )
  }
}

export default Gameboard;
