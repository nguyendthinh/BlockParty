import React, { Component } from 'react';
import Cell from './Cell.js'
import Scoreboard from './Scoreboard.js'
let _this = null;
function chooseRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  } return color;
}

class Gameboard extends Component {
  constructor(props) {
    super(props)
    let numCells = 150
    let cellGrid = []
    for (var i = 0; i < numCells; i++) {
      cellGrid.push({index: i, color: this.props.firstFiveColor[Math.floor(Math.random() * this.props.firstFiveColor.length)]})
    }
    this.state = {
      cellGrid,
      clicks: 0,
      timer: 12,
      timerID: "",
      startGame: false
    }
    _this = this
  }

  userClicks(cell) {
    if (_this.state.startGame === false || _this.state.cellGrid[0].color === "white") {
      return;
    }
    var clickedColor = cell.color
    var clickedIndex = cell.index
    let cellGrid = this.state.cellGrid;
    let nextCell = _this.state.cellGrid;
    var blockBelow = cellGrid[clickedIndex + 15]
    var blockAbove = cellGrid[clickedIndex - 15]
    var blockRight = cellGrid[clickedIndex + 1]
    var blockLeft = cellGrid[clickedIndex - 1]
    var lightUp = document.getElementsByClassName("cell")
    //////
    function checkBelow(block, index) {
      var blockColor = block.color
      block.color = clickedColor
      lightUp[index].classList.add("active")
      for (var i = (index + 15); i <= 300; i += 15) {
        if (nextCell[i] === undefined) {
          return;
        }
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
      for (var i = (index - 15); i >= 0; i -= 15) {
        if (nextCell[i] === undefined) {
          return;
        }
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
        if (nextCell[i] === undefined) {
          return;
        }
        if (nextCell[i].color === blockColor && i % 15 !== 0) {
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
        if (nextCell[i] === undefined) {
          return;
        }
        if (nextCell[i].color === blockColor && i % 15 !== 14) {
          nextCell[i].color = clickedColor
          setTimeout(lightUp[i].classList.add("active"), 500);
        } else {
          return;
        }
      }
    }
    //////
    if (blockBelow !== undefined && blockBelow.index <= 149) {
      checkBelow(blockBelow, blockBelow.index)
    }

    if (blockAbove !== undefined && blockAbove.index > 0) {
      checkAbove(blockAbove, blockAbove.index)
    }

    if (blockRight !== undefined && blockRight.index % 15 !== 0) {
      checkRight(blockRight, blockRight.index)
    }

    if (blockLeft !==undefined && blockLeft.index % 15 !== 14) {
      checkLeft(blockLeft, blockLeft.index)
    }
    //////
    function checkColors(array) {
      let _this = this
      for (var i = 1; i < array.length; i++) {
        if (array[i].color !== array[0].color) {
          return;
        }
      }
      document.getElementById("current").style.display = "none"
      document.getElementById("winmessage").style.display = "flex"
      for (var i = 0; i < array.length; i++) {
        document.getElementsByClassName("cell")[i].classList.remove("active")
      }

      setInterval(function(){
        for (var i = 0; i < array.length; i++) {
          document.getElementsByClassName("cell")[i].style.backgroundColor = chooseRandomColor()
        }
      }, 100)

    }
    //////
    this.setState({
      cellGrid,
      clicks: this.state.clicks + 1
    })
    checkColors(_this.state.cellGrid)
    /////
  }

  newColor(e) {
    let cellGrid = this.state.cellGrid
    let firstFourColor = []
    for (var i = 0; i < 3; i++) {
      firstFourColor.push(chooseRandomColor())
    }
    for (var i = 0; i < cellGrid.length; i++) {
      cellGrid[i].color = firstFourColor[Math.floor(Math.random() * this.props.firstFiveColor.length)]
      document.getElementsByClassName("cell")[i].classList.add("active")
    }
    this.setState({
      cellGrid,
      clicks: 0,
      timer: 12,
      timerID: clearInterval(this.state.timerID),
      startGame: false
    })
  }

  beginGame(e) {
    let _this = this

    let timerID = setInterval(() => {
      if (_this.state.timer !== 0) {
        _this.setState({
          timer: _this.state.timer - 1,
          timerID: timerID,
          startGame: true
        })
      } else {
        changeRandomBlock(_this)
          _this.setState({
            timer: 12,
            timerID: timerID
          })
      }
    }, 1000)

    function changeRandomBlock(_this) {
      for (var i = 0; i < 20; i++) {
        _this.state.cellGrid[Math.floor(Math.random() * _this.state.cellGrid.length)].color = "black"
      }
    }

  }

  restart(e) {
    window.location.reload(true);
  }

  render() {
    let cellGrid = this.state.cellGrid.map((cell) => {
      return (
        <Cell ref="child"
        cell={cell}
        userClicks={(cell) => this.userClicks(cell)}
        key={cell.index}/>
      )
    })

    return (
      <div id="gameboard">
      <div id="grid">
      {cellGrid}
      </div>
      <Scoreboard restart={e => this.restart(e)} clicks={this.state.clicks} timer={this.state.timer} beginGame={e => this.beginGame(e)} newColor={e => this.newColor(e)}/>
      </div>
    )
  }
}

export default Gameboard;
