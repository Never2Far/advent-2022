let start = [0, 0];
let end = [0, 0];
const inputArr = require("fs").readFileSync("inputDay12.txt", "utf8").split(/\r?\n/).map((line, j) =>
    line.split("").map((char, i) => {
      if (char === "E") {
        end[0] = j;
        end[1] = i;
        return 122;
      } else if (char === "S") {
        start[0] = j;
        start[1] = i;
        return 97;
      } else {
        return char.charCodeAt();
      }
    })
  );

let visited = {};
let possibleMoves = [[start[0], start[1]]];
visited[[start[0], start[1]].join(",")] = 0;

while (possibleMoves.length > 0) {
  let current = possibleMoves.shift();
  let stepCount = visited[current.join(",")];
  if (current[0] === end[0] && current[1] === end[1]) {
    console.log(stepCount);
    break;
  }
  let directions = [
    [current[0] + 1, current[1]],
    [current[0] - 1, current[1]],
    [current[0], current[1] + 1],
    [current[0], current[1] - 1],
  ];
  for (const next of directions) {
    if (
      next[0] < 0 ||
      next[1] < 0 ||
      next[0] > inputArr.length - 1 ||
      next[1] > inputArr[0].length - 1 ||
      Object.keys(visited).includes(next.join(",")) ||
      inputArr[next[0]][next[1]] - inputArr[current[0]][current[1]] > 1
    ) {
      continue;
    } else {
      possibleMoves.push([next[0], next[1]]);
      visited[next.join(",")] = stepCount + 1;
    }
  }
}
