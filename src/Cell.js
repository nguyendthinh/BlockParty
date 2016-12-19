import React, { Component } from 'react';
// import Gameboard from './Gameboard.js'

class Cell extends Component {

  userClick(e) {

    const clickedIndex = this.props.index
    const currentBlock = document.getElementsByClassName("cell")[clickedIndex]
    const currentColor = currentBlock.style.backgroundColor
    const blocks = [document.getElementsByClassName("cell")[clickedIndex + 20],
                    document.getElementsByClassName("cell")[clickedIndex - 20],
                    document.getElementsByClassName("cell")[clickedIndex + 1],
                    document.getElementsByClassName("cell")[clickedIndex - 1]]

      function colorChange(block, index) {
        if (index > 279) {
          return;
        }
        const blockClass = block.style.backgroundColor
        block.style.backgroundColor = currentColor;
          for (var i = (index + 20); i <= 300; i += 20) {
            if (document.getElementsByClassName("cell")[i].style.backgroundColor === blockClass) {
                document.getElementsByClassName("cell")[i].style.backgroundColor = currentColor;
            } else {
              return;
            }}}

            function colorChange2(block, index) {
              if (index < 0) {
                return;
              }
              const blockClass = block.style.backgroundColor
              block.style.backgroundColor = currentColor;
                for (var i = (index - 20); i >= 0; i -= 20) {
                  if (document.getElementsByClassName("cell")[i].style.backgroundColor === blockClass) {
                      document.getElementsByClassName("cell")[i].style.backgroundColor = currentColor;
                  } else {
                    return;
                  }}}

                  function colorChange3(block, index) {
                    const blockClass = block.style.backgroundColor
                    block.style.backgroundColor = currentColor;
                      for (var i = (index + 1); i <= 300; i += 1) {
                        if (document.getElementsByClassName("cell")[i].style.backgroundColor === blockClass) {
                            document.getElementsByClassName("cell")[i].style.backgroundColor = currentColor;
                        } else {
                          return;
                        }}}

                        function colorChange4(block, index) {
                          const blockClass = block.style.backgroundColor
                          block.style.backgroundColor = currentColor;
                            for (var i = (index - 1); i >= 0; i -= 1) {
                              if (document.getElementsByClassName("cell")[i].style.backgroundColor === blockClass) {
                                  document.getElementsByClassName("cell")[i].style.backgroundColor = currentColor;
                              } else {
                                return;
                              }}}

                              colorChange(blocks[0], clickedIndex + 20)
                              colorChange2(blocks[1], clickedIndex - 20)
                              colorChange3(blocks[2], clickedIndex + 1)
                              colorChange4(blocks[3], clickedIndex - 1)

    }


  render() {
    const colorchoices = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "gray"]

    return (
        <div data-index={this.props.index} onClick={e => this.userClick(e)} className="cell" style={{backgroundColor: colorchoices[Math.round(Math.random() * colorchoices.length)]}}></div>
    );

  }
}

export default Cell;
