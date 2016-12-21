import React, { Component } from 'react';
import Cell from './Cell.js'
// const colorchoices = ["red", "orange"]
let _this = null;
function getRandomColor() {
                    var letters = '0123456789ABCDEF';
                    var color = '#';
                    for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * letters.length)];
                     } return color;
                  }

class Gameboard extends Component {
  constructor(props) {
    super()
    let numCells = 300
    let cellGrid = []
    for (var i = 0; i < numCells; i++) {
      cellGrid.push({index: i, color: getRandomColor()})
    }
    this.state = {
      cellGrid
    }
    _this = this
  }

  returnValues(cell) {
    var clickedColor = cell.color
    var clickedIndex = cell.index
    let cellGrid = this.state.cellGrid;
    let nextCell = _this.state.cellGrid;
    var blockBelow = cellGrid[clickedIndex + 20]
    var blockAbove = cellGrid[clickedIndex - 20]
    var blockRight = cellGrid[clickedIndex + 1]
    var blockLeft = cellGrid[clickedIndex - 1]

    function checkBelow(block, index) {
      if (index > 299) {
        return;
      }
      var blockColor = block.color
      block.color = clickedColor
      for (var i = (index + 20); i <= 300; i += 20) {
        if (nextCell[i].color === blockColor) {
          nextCell[i].color = clickedColor
        } else {
          return;
        }
      }
    }

    function checkAbove(block, index) {
      if (index < 0) {
        return;
      }
      var blockColor = block.color
      block.color = clickedColor
      for (var i = (index - 20); i >= 0; i -= 20) {
        if (nextCell[i].color === blockColor) {
          nextCell[i].color = clickedColor
        } else {
          return;
        }
      }
    }

    function checkRight(block, index) {
      if (index % 20 === 0) {
        return;
      }
      var blockColor = block.color
      block.color = clickedColor
      for (var i = (index + 1); i <= 300; i += 1) {
        if (nextCell[i].color === blockColor && i % 20 !==0) {
          nextCell[i].color = clickedColor
        } else {
          return;
        }
      }
    }

    function checkLeft(block, index) {
      if (index % 20 === 19) {
        return;
      }
      var blockColor = block.color
      block.color = clickedColor
      for (var i = (index - 1); i >= 0; i -= 1) {
        if (nextCell[i].color === blockColor && i % 20 !== 19) {
          nextCell[i].color = clickedColor
        } else {
          return;
        }
      }
    }

    if (blockBelow !== undefined) {
      checkBelow(blockBelow, blockBelow.index)
    }

    if (blockAbove !== undefined) {
      checkAbove(blockAbove, blockAbove.index)
    }
    checkRight(blockRight, blockRight.index)
    checkLeft(blockLeft, blockLeft.index)

    this.setState({
      cellGrid
    })

  }


  render() {
    let cellGrid = this.state.cellGrid.map((cell) => {
      return (
        <Cell ref="child"
        cell={cell}
        returnValues={(cell) => this.returnValues(cell)}
        key={cell.index}/>
      )
    })

    return (
      <div id="gameboard">
      {cellGrid}
      </div>
    )
  }
}

export default Gameboard;
