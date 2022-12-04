const inputArr = require("fs").readFileSync("inputDay4.txt", 'utf8').split(/\r?\n/).map((line) => line.split(",").map((pair) => pair.split("-").map((char) => parseInt(char))));

let containedCount = 0
let overlapCount = 0
inputArr.forEach((pair) => {
  if ((pair[0][0] >= pair[1][0] && pair[0][1] <= pair [1][1]) || (pair[1][0] >= pair[0][0] && pair[1][1] <= pair [0][1])) {
    containedCount += 1
  }
  if (
    (pair[0][1] >= pair[1][0] && pair[0][0] <= pair [1][1]) 
  ) {
    overlapCount += 1
  }
})

console.log(`Part 1: ${containedCount}`)
console.log(`Part 2: ${overlapCount}`)