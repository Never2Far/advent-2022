const inputArr = require("fs").readFileSync("inputDay8.txt", "utf8").split(/\r?\n/).map((line) => line.split("").map((num) => parseInt(num)));

// Part 1

// let visibleTreeCount = 0;
// for (let y = 0; y < inputArr.length; y++) {
//   const row = inputArr[y];

//   if (y === 0 || y === inputArr.length - 1) {
//     visibleTreeCount += row.length;
//   } else {
//     for (let x = 0; x < row.length; x++) {
//       const tree = row[x];
//       const column = inputArr.map((treeRow) => treeRow[x]);
   
//       if (x === 0 || x === row.length - 1) {
//         visibleTreeCount += 1;
//       } else {
//         if (Math.max(...row.slice(0, x)) < tree) {
//           visibleTreeCount += 1;
//         }
//         else if (Math.max(...row.slice(x + 1)) < tree) {
//           visibleTreeCount += 1;
//         }
//         else if (Math.max(...column.slice(0, y)) < tree) {
//           visibleTreeCount += 1;
//         }
//         else if (Math.max(...column.slice(y + 1)) < tree) {
//           visibleTreeCount += 1;
//         }
//       }
//     }
//   }
// }


// Parts 1 & 2

let visibleTreeCount = 0;
let highestVisibilityScore = 0;
for (let y = 0; y < inputArr.length; y++) {
  const row = inputArr[y];
  if (y === 0 || y === inputArr.length - 1) {
    visibleTreeCount += row.length;
  } else {
    for (let x = 0; x < row.length; x++) {
      const tree = row[x];
      let treeScore = [];
      const column = inputArr.map((treeRow) => treeRow[x]);
      let visible = [true, true, true, true]
      if (x === 0 || x === row.length - 1) {
        treeScore.push(0);
        visibleTreeCount += 1;
      } else {
        const left = row.slice(0, x);
        let leftScore = 0;
        for (let i = left.length - 1; i > -1; i--) {
          const nextTree = left[i];
          if (nextTree < tree) {
            leftScore += 1;
          } else if (nextTree >= tree) {
            leftScore += 1;
            visible[0] = false
            break;
          } else {
            visible[0] = false
            break;
          }
        }

        const right = row.slice(x + 1);
        let rightScore = 0;
        for (let i = 0; i < right.length; i++) {
          const nextTree = right[i];
          if (nextTree < tree) {
            rightScore += 1;
          } else if (nextTree >= tree) {
            rightScore += 1;
            visible[1] = false
            break;
          } else {
            visible[1] = false
            break;
          }
        }

        const up = column.slice(0, y);
        let upScore = 0;
        for (let i = up.length - 1; i > -1; i--) {
          const nextTree = up[i];
          if (nextTree < tree) {
            upScore += 1;
          } else if (nextTree >= tree) {
            upScore += 1;
            visible[2] = false
            break;
          } else {
            visible[2] = false
            break;
          }
        }

        const down = column.slice(y + 1);
        let downScore = 0;
        for (let i = 0; i < down.length; i++) {
          const nextTree = down[i];
          if (nextTree < tree) {
            downScore += 1;
          } else if (nextTree >= tree) {
            downScore += 1;
            visible[3] = false
            break;
          } else {
            visible[3] = false
            break;
          }
        }
        if (visible.some((dir) => dir === true)) {
          visibleTreeCount += 1
        }
        treeScore = [leftScore, rightScore, upScore, downScore];
      }
      treeScore = treeScore.reduce((a, b) => a * b);
      highestVisibilityScore = Math.max(treeScore, highestVisibilityScore);
    }
  }
}

console.log(`Part 1: ${visibleTreeCount}`);
console.log(`Part 2: ${highestVisibilityScore}`);
