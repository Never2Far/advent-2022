const inputArr = require("fs").readFileSync("inputDay9.txt", "utf8").split(/\r?\n/).map((line) => line.split(" ")).map((line) => [line[0], parseInt(line[1])]);


// Part 1

let posH = { x: 0, y: 0 };
let posT = { x: 0, y: 0 };

const visited = new Set();
visited.add("0,0");

inputArr.forEach((line) => {
  let qty = line[1];
  let dir = line[0];

  Array(qty)
    .fill(qty)
    .forEach(() => {
      switch (dir) {
        case "R":
          posH.x += 1;
          break;
        case "L":
          posH.x -= 1;
          break;
        case "U":
          posH.y += 1;
          break;
        case "D":
          posH.y -= 1;
          break;
      }

      let dx = posH.x - posT.x;
      let dy = posH.y - posT.y;

      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        if (dx === 0) {
          posT.y += Math.floor(dy / 2);
        } else if (dy === 0) {
          posT.x += Math.floor(dx / 2);
        } else {
          if (dx > 0) {
            posT.x += 1;
          } else {
            posT.x -= 1;
          }

          if (dy > 0) {
            posT.y += 1;
          } else {
            posT.y -= 1;
          }
        }
      }
      visited.add(Object.values(posT).join(","));
    });
});



//Part 2
let knots = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];

const visited2 = new Set();
visited2.add("0,0");

inputArr.forEach((line) => {
  let qty = line[1];
  let dir = line[0];

  Array(qty)
    .fill(qty)
    .forEach(() => {
      switch (dir) {
        case "R":
          knots[0].x += 1;
          break;
        case "L":
          knots[0].x -= 1;
          break;
        case "U":
          knots[0].y += 1;
          break;
        case "D":
          knots[0].y -= 1;
          break;
      }
      for (let i = 0; i < knots.length - 1; i++) {
        let dx = knots[i].x - knots[i + 1].x;
        let dy = knots[i].y - knots[i + 1].y;
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
          if (dx === 0) {
            knots[i + 1].y += Math.floor(dy / 2);
          } else if (dy === 0) {
            knots[i + 1].x += Math.floor(dx / 2);
          } else {
            if (dx > 0) {
              knots[i + 1].x += 1;
            } else {
              knots[i + 1].x -= 1;
            }

            if (dy > 0) {
              knots[i + 1].y += 1;
            } else {
              knots[i + 1].y -= 1;
            }
          }
        }
      }
      visited2.add(Object.values(knots[9]).join(","));
    });
});


console.log(`Part 1: ${[...visited].length}`);
console.log(`Part 2: ${[...visited2].length}`);
