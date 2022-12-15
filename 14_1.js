const inputArr = require("fs")
  .readFileSync("inputDay14.txt", "utf8")
  .split(/\r?\n/)
  .map((line) =>
    line.split(" -> ").map((coord) => coord.split(",").map((n) => parseInt(n)))
  );

const maxY = Math.max(...inputArr.flat().map((pair) => pair[1]));
let caveMap = {};
inputArr.forEach((path) => {
  for (let i = 0; i < path.length; i++) {
    const point = path[i];
    caveMap[point.join(",")] = "#";
    if (i + 1 <= path.length - 1) {
      const endPoint = path[i + 1];
      if (endPoint[0] - point[0] === 0) {
        let dy = endPoint[1] - point[1];
        if (dy > 0) {
          dir = 1;
        } else if (dy < 0) {
          dir = -1;
        }
        let i = 1;
        while (i <= Math.abs(dy)) {
          caveMap[[point[0], point[1] + i * dir].join(",")] = "#";
          i++;
        }
      } else if (endPoint[1] - point[1] === 0) {
        let dx = endPoint[0] - point[0];
        let dir;
        if (dx > 0) {
          dir = 1;
        } else if (dx < 0) {
          dir = -1;
        }
        let i = 1;
        while (i <= Math.abs(dx)) {
          caveMap[[point[0] + i * dir, point[1]].join(",")] = "#";
          i++;
        }
      }
    }
  }
});

let sandX = 500;
let sandY = 0;
while (true) {
  if (
    caveMap[[sandX, sandY + 1].join(",")] !== "#" &&
    caveMap[[sandX, sandY + 1].join(",")] !== "S"
  ) {
    sandY += 1;
    if (sandY > maxY) {
      break;
    }
    continue;
  } else if (
    caveMap[[sandX, sandY + 1].join(",")] === "#" ||
    caveMap[[sandX, sandY + 1].join(",")] === "S"
  ) {
    if (
      caveMap[[sandX - 1, sandY + 1].join(",")] !== "#" &&
      caveMap[[sandX - 1, sandY + 1].join(",")] !== "S"
    ) {
      sandY += 1;
      sandX -= 1;
      continue;
    } else if (
      caveMap[[sandX + 1, sandY + 1].join(",")] !== "#" &&
      caveMap[[sandX + 1, sandY + 1].join(",")] !== "S"
    ) {
      sandY += 1;
      sandX += 1;
      continue;
    } else {
      caveMap[[sandX, sandY].join(",")] = "S";
      sandX = 500;
      sandY = 0;
      continue;
    }
  }
}

console.log(Object.values(caveMap).filter((v) => v === "S").length);
