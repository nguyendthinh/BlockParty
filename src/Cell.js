import React, { Component } from 'react';
// import Gameboard from './Gameboard.js'

class Cell extends Component {

  userClick(e) {

    const clickedIndex = this.props.index
    const currentBlock = document.getElementsByClassName("cell")[clickedIndex]
    const currentColor = currentBlock.style.backgroundColor
    const targetCell = document.getElementsByClassName("cell")
    const blocks = [targetCell[clickedIndex + 20],
    targetCell[clickedIndex - 20],
    targetCell[clickedIndex + 1],
    targetCell[clickedIndex - 1]]

    function colorChange(block, index) {
      if (index > 299) {
        return;
      }
      const blockClass = block.style.backgroundColor
      block.style.backgroundColor = currentColor;
      for (var i = (index + 20); i <= 300; i += 20) {
        if (targetCell[i].style.backgroundColor === blockClass) {
          targetCell[i].classList.add('active');
          targetCell[i].style.backgroundColor = currentColor;
        } else {
          return;
        }
      }
    }

        function colorChange2(block, index) {
          if (index < 0) {
            return;
          }
          const blockClass = block.style.backgroundColor
          block.style.backgroundColor = currentColor;
          for (var i = (index - 20); i >= 0; i -= 20) {
            if (targetCell[i].style.backgroundColor === blockClass) {
              targetCell[i].classList.add('active');
              targetCell[i].style.backgroundColor = currentColor;
            } else {
              return;
            }
          }
        }

            function colorChange3(block, index) {
              if (index % 20 === 0 ) {
                return;
              }
              const blockClass = block.style.backgroundColor
              block.style.backgroundColor = currentColor;
              for (var i = (index + 1); i <= 300; i += 1) {
                if (targetCell[i].style.backgroundColor === blockClass && i % 20 !== 0) {
                  targetCell[i].classList.add('active');
                  targetCell[i].style.backgroundColor = currentColor;
                } else {
                  return;
                }
              }
            }

                function colorChange4(block, index) {
                  if (index % 20 === 19) {
                    return;
                  }
                  const blockClass = block.style.backgroundColor
                  block.style.backgroundColor = currentColor;
                  for (var i = (index - 1); i >= 0; i -= 1) {
                    if (targetCell[i].style.backgroundColor === blockClass && i % 20 !== 19) {
                      targetCell[i].classList.add('active');
                      targetCell[i].style.backgroundColor = currentColor;
                    } else {
                      return;}}}

                      colorChange(blocks[0], clickedIndex + 20)
                      colorChange2(blocks[1], clickedIndex - 20)
                      colorChange3(blocks[2], clickedIndex + 1)
                      colorChange4(blocks[3], clickedIndex - 1)

                      function checkColors(array) {
                        for (var i = 1; i < array.length; i++) {
                          if (array[i] !== array[0]) {
                            console.log("keep going");
                            return;
                          } else {
                            console.log("you won!")
                            return;
                          }
                        }
                      }

                          function storeColors() {
                            const colorGrids = []
                            for (var i=0; i < 300; i++) {
                              colorGrids.push(document.getElementsByClassName("cell")[i].style.backgroundColor)
                            } checkColors(colorGrids); }
                            storeColors() }

                            render() {
                              // const colorchoices = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "gray"]
                              // {{backgroundColor: colorchoices[Math.round(Math.random() * colorchoices.length)]
                              function getRandomColor() {
                                var letters = '0123456789ABCDEF';
                                var color = '#';
                                for (var i = 0; i < 6; i++) {
                                  color += letters[Math.floor(Math.random() * 16)];
                                } return color;}

                                return (
                                  <div data-index={this.props.index} onClick={e => this.userClick(e)} className="cell" style={{backgroundColor: getRandomColor()}}></div>
                                );

                              }
                            }

                            export default Cell;

                            //////DRY CODE//////

                            // function colorChange(blockBelow, indexBelow, blockAbove, indexAbove, blockRight, indexRight, blockLeft, indexLeft) {
                            //   const blockBelowColor = blockBelow.style.backgroundColor
                            //   const blockAboveColor = blockAbove.style.backgroundColor
                            //   const blockRightColor = blockRight.style.backgroundColor
                            //   const blockLeftColor = blockLeft.style.backgroundColor
                            //   blockBelowColor.style.backgroundColor = currentColor;
                            //   blockAboveColor.style.backgroundColor = currentColor;
                            //   blockRightColor.style.backgroundColor = currentColor;
                            //   blockLeftColor.style.backgroundColor = currentColor;
                            //
                            //   if (indexBelow > 279) {
                            //     for (var i = (indexBelow + 20); i <= 300; i += 20) {
                            //       if (document.getElementsByClassName("cell")[i].style.backgroundColor === blockBelowColor) {
                            //           document.getElementsByClassName("cell")[i].style.backgroundColor = currentColor;
                            //       } else {
                            //         i = false;
                            //       }
                            //     }
                            //   }
                            //
                            // }
                            //
                            //
                            // colorChange(blocks[0], clickedIndex + 20, blocks[1], clickedIndex - 20, blocks[2], clickedIndex + 1, blocks[3], clickedIndex - 1);
