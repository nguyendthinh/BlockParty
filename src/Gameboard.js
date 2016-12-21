import React, { Component } from 'react';
import Cell from './Cell.js'
let _this = null;

class Gameboard extends Component {
  constructor(props) {
    super(props)
    let numCells = 300
    let cellGrid = []
    for (var i = 0; i < numCells; i++) {
      cellGrid.push({index: i, color: this.props.firstFiveColor[Math.floor(Math.random() * this.props.firstFiveColor.length)]})
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
    var lightUp = document.getElementsByClassName("cell")
    //////
    function checkBelow(block, index) {
      var blockColor = block.color
      block.color = clickedColor
      lightUp[index].classList.add("active")
      for (var i = (index + 20); i <= 300; i += 20) {
        if (nextCell[i].color === blockColor) {
          nextCell[i].color = clickedColor
          setTimeout(lightUp[i].classList.add("active"), 500);
        } else {
          return;
        }
      }
    }
    //////
    function checkAbove(block, index) {
      var blockColor = block.color
      block.color = clickedColor
      lightUp[index].classList.add("active")
      for (var i = (index - 20); i >= 0; i -= 20) {
        if (nextCell[i].color === blockColor) {
          nextCell[i].color = clickedColor
          setTimeout(lightUp[i].classList.add("active"), 500);
        } else {
          return;
        }
      }
    }
    //////
    function checkRight(block, index) {
      var blockColor = block.color
      block.color = clickedColor
      lightUp[index].classList.add("active")
      for (var i = (index + 1); i <= 300; i += 1) {
        if (nextCell[i].color === blockColor && i % 20 !==0) {
          nextCell[i].color = clickedColor
          setTimeout(lightUp[i].classList.add("active"), 500);
        } else {
          return;
        }
      }
    }
    //////
    function checkLeft(block, index) {
      var blockColor = block.color
      block.color = clickedColor
      lightUp[index].classList.add("active")
      for (var i = (index - 1); i >= 0; i -= 1) {
        if (nextCell[i].color === blockColor && i % 20 !== 19) {
          nextCell[i].color = clickedColor
          setTimeout(lightUp[i].classList.add("active"), 500);
        } else {
          return;
        }
      }
    }
    //////
    if (blockBelow !== undefined && blockBelow.index <= 299) {
      checkBelow(blockBelow, blockBelow.index)
    }

    if (blockAbove !== undefined && blockAbove.index > 0) {
      checkAbove(blockAbove, blockAbove.index)
    }

    if (blockRight !== undefined && blockRight.index % 20 !== 0) {
      checkRight(blockRight, blockRight.index)
    }

    if (blockLeft !==undefined && blockLeft.index % 20 !== 19) {
    checkLeft(blockLeft, blockLeft.index)
    }
    //////
    function checkColors(array) {
      for (var i = 1; i < array.length; i++) {
        if (array[i].color !== array[0].color) {
          return;
        }
      }
      for (var i = 0; i < array.length; i++) {
        document.getElementsByClassName("cell")[i].classList.remove("active")
      }
      document.getElementById("gameboard").style.backgroundColor = "transparent"

      function chooseRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * letters.length)];
        } return color;
      }

      setInterval(function(){
        for (var i = 0; i < array.length; i++) {
          document.getElementsByClassName("cell")[i].style.backgroundColor = chooseRandomColor()
        }
      }, 100)
    }
    //////
    this.setState({
      cellGrid
    })
    /////
    checkColors(this.state.cellGrid)
    /////
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
      <div id="win">"YOU WIN"</div>
      </div>
    )
  }
}

export default Gameboard;
