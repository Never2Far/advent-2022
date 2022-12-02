const inputArr = input.split(/\r?\n/).map((line) => line.split(" "));

let score = 0;

inputArr.forEach((round) => {
  switch (round[0]) {
    case "A":
      switch (round[1]) {
        case "X":
          score += 4;
          break;
        case "Y":
          score += 8;
          break;
        case "Z":
          score += 3;
          break;
      }
      break;
    case "B":
      switch (round[1]) {
        case "X":
          score += 1;
          break;
        case "Y":
          score += 5;
          break;
        case "Z":
          score += 9;
          break;
      }
      break;
    case "C":
      switch (round[1]) {
        case "X":
          score += 7;
          break;
        case "Y":
          score += 2;
          break;
        case "Z":
          score += 6;
          break;
      }
      break;
  }
});

let score2 = 0;

inputArr.forEach((round) => {
  switch (round[0]) {
    case "A":
      switch (round[1]) {
        case "X":
          score2 += 3;
          break;
        case "Y":
          score2 += 4;
          break;
        case "Z":
          score2 += 8;
          break;
      }
      break;
    case "B":
      switch (round[1]) {
        case "X":
          score2 += 1;
          break;
        case "Y":
          score2 += 5;
          break;
        case "Z":
          score2 += 9;
          break;
      }
      break;
    case "C":
      switch (round[1]) {
        case "X":
          score2 += 2;
          break;
        case "Y":
          score2 += 6;
          break;
        case "Z":
          score2 += 7;
          break;
      }
      break;
  }
});

console.log(`Part 1: ${score}`);
console.log(`Part 2: ${score2}`);
