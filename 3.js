const inputArr = require("fs").readFileSync("inputDay3.txt", 'utf8').split(/\r?\n/).map((line) => line.split(""))

// function to calculate priorities using ASCII values
const getPriority = (char) => {
  if (char === char.toLowerCase()) {
    return char.charCodeAt() - 96
  }
  else {
    return char.charCodeAt() - 38
  }
}

// Part 1
const part1Sum = inputArr.map((line) => {
 const half = Math.ceil(line.length / 2)
 const firstHalf = line.slice(0, half)
 const secondHalf = line.slice(half)
 const commonChar = firstHalf.filter((char) => secondHalf.includes(char))[0]
 return getPriority(commonChar)
}).reduce((sum, n) => sum + n, 0)

// Part 2
const badges = []
for (let i = 0; i < inputArr.length; i += 3) {
  const elf1 = new Set(inputArr[i]);
  const elf2 = new Set(inputArr[i + 1]);
  const elf3 = new Set(inputArr[i + 2]);
  const commonChar = [...elf1].filter((char) => elf2.has(char)).filter((char) => elf3.has(char))[0]
  badges.push(getPriority(commonChar))
}

console.log(`Part 1: ${part1Sum}`);
console.log(`Part 2: ${badges.reduce((sum, n) => sum + n, 0)}`);