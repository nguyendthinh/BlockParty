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


// const clickedIndex = this.props.index
// const currentBlock = document.getElementsByClassName("cell")[clickedIndex]
// const currentColor = currentBlock.style.backgroundColor
// const targetCell = document.getElementsByClassName("cell")
// const blocks = [targetCell[clickedIndex + 20],
// targetCell[clickedIndex - 20],
// targetCell[clickedIndex + 1],
// targetCell[clickedIndex - 1]]
//
// function colorChange(block, index) {
//   if (index > 299) {
//     return;
//   }
//   const blockClass = block.style.backgroundColor
//   block.style.backgroundColor = currentColor;
//   for (var i = (index + 20); i <= 300; i += 20) {
//     if (targetCell[i].style.backgroundColor === blockClass) {
//       targetCell[i].classList.add('active');
//       targetCell[i].style.backgroundColor = currentColor;
//     } else {
//       return;
//     }
//   }
// }
//
//     function colorChange2(block, index) {
//       if (index < 0) {
//         return;
//       }
//       const blockClass = block.style.backgroundColor
//       block.style.backgroundColor = currentColor;
//       for (var i = (index - 20); i >= 0; i -= 20) {
//         if (targetCell[i].style.backgroundColor === blockClass) {
//           targetCell[i].classList.add('active');
//           targetCell[i].style.backgroundColor = currentColor;
//         } else {
//           return;
//         }
//       }
//     }
//
//         function colorChange3(block, index) {
//           if (index % 20 === 0 ) {
//             return;
//           }
//           const blockClass = block.style.backgroundColor
//           block.style.backgroundColor = currentColor;
//           for (var i = (index + 1); i <= 300; i += 1) {
//             if (targetCell[i].style.backgroundColor === blockClass && i % 20 !== 0) {
//               targetCell[i].classList.add('active');
//               targetCell[i].style.backgroundColor = currentColor;
//             } else {
//               return;
//             }
//           }
//         }
//
//             function colorChange4(block, index) {
//               if (index % 20 === 19) {
//                 return;
//               }
//               const blockClass = block.style.backgroundColor
//               block.style.backgroundColor = currentColor;
//               for (var i = (index - 1); i >= 0; i -= 1) {
//                 if (targetCell[i].style.backgroundColor === blockClass && i % 20 !== 19) {
//                   targetCell[i].classList.add('active');
//                   targetCell[i].style.backgroundColor = currentColor;
//                 } else {
//                   return;}}}
//
//                   colorChange(blocks[0], clickedIndex + 20)
//                   colorChange2(blocks[1], clickedIndex - 20)
//                   colorChange3(blocks[2], clickedIndex + 1)
//                   colorChange4(blocks[3], clickedIndex - 1)
//
//                   function checkColors(array) {
//                     for (var i = 1; i < array.length; i++) {
//                       if (array[i] !== array[0]) {
//                         console.log("keep going");
//                         return;
//                       } else {
//                         console.log("you won!")
//                         return;
//                       }
//                     }
//                   }
//
//                       function storeColors() {
//                         const colorGrids = []
//                         for (var i=0; i < 300; i++) {
//                           colorGrids.push(document.getElementsByClassName("cell")[i].style.backgroundColor)
//                         } checkColors(colorGrids); }
//                         storeColors() }
//
//
//                         }
