const inputArr = require("fs").readFileSync("inputDay10.txt", "utf8").split(/\r?\n/).map((line) => line.split(" ")).map((line) => {
    if (line.length > 1) {
      return [line[0], parseInt(line[1])];
    }
    return line;
  });

let sum = 0;
let cycleCount = 1;
let cycleToCheck = 20;
let x = 1;
let i = 0;
let add = false;
let output = Array(240).fill("?");
while (i < inputArr.length) {
  const line = inputArr[i];
  output[cycleCount - 1] = x;
  if (line.length === 1) {
    cycleCount += 1;
    i++;
  } else {
    if (!add) {
      add = true;
      cycleCount += 1;
    } else {
      x += line[1];
      cycleCount += 1;
      i++;
      add = false;
    }
  }
  // Part 1
  if (cycleCount === cycleToCheck) {
    sum += cycleCount * x;
    cycleToCheck += 40;
  }
}

// Part 2
for (let i = 0; i < output.length; i++) {
  let j = 0;
  if (i < 40) {
    j = 0;
  } else if (i < 80) {
    j = 40;
  } else if (i < 120) {
    j = 80;
  } else if (i < 160) {
    j = 120;
  } else if (i < 200) {
    j = 160;
  } else if (i < 240) {
    j = 200;
  }
  if (Math.abs(output[i] + j - i) <= 1) {
    output[i] = "#";
  } else {
    output[i] = ".";
  }
}

console.log(`Part 1: ${sum}`);
console.log("Part 2:")
console.log(output.slice(0, 40).join(""));
console.log(output.slice(40, 80).join(""));
console.log(output.slice(80, 120).join(""));
console.log(output.slice(120, 160).join(""));
console.log(output.slice(160, 200).join(""));
console.log(output.slice(200, 240).join(""));
