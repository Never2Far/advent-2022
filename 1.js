const sortedSums = require("fs").readFileSync("inputDay1.txt", 'utf8').split(/\n{2,}/g).map((line) => line.split(/\s/).map((c) => parseInt(c))).map((elfArr) => elfArr.reduce((sum, n) => sum + n, 0)).sort((a,b) => {return b - a})

console.log(`Part 1: ${sortedSums[0]}`);
console.log(`Part 2: ${sortedSums[0] + sortedSums[1] + sortedSums[2]}`);