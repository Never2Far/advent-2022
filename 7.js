const inputArr = require("fs").readFileSync("inputDay7.txt", "utf8").split(/\r?\n/).map((line) => line.split(" "));

let currentDirectory = {};
let root = {};
let currentPath = [];

inputArr.forEach((line) => {
  if (line[0] === "$") {
    if (line[1] === "cd") {
      if (line[2] === "/") {
        currentDirectory = root;
        currentPath = [];
      } else if (line[2] === "..") {
        currentDirectory = currentPath.pop();
      } else {
        currentPath.push(currentDirectory);
        currentDirectory = currentDirectory[line[2]];
      }
    }
  } else {
    if (line[0] === "dir") {
      if (!Object.keys(currentDirectory).includes(line[1])) {
        currentDirectory[line[1]] = {};
      }
    } else {
      currentDirectory[line[1]] = parseInt(line[0]);
    }
  }
});

// part 1
const getSizePart1 = (dir = root) => {
  if (typeof dir === "number") {
    return [dir, 0];
  }
  let size = 0;
  let ans = 0;
  Object.values(dir).forEach((child) => {
    let [s, a] = getSizePart1(child);
    size += s;
    ans += a;
  });
  if (size <= 100000) {
    ans += size;
  }
  return [size, ans];
};


// part 2
const getDirectorySize = (dir = root) => {
  if (typeof dir === "number") {
    return dir;
  }
  return Object.values(dir).map((child) => {
      return getDirectorySize(child);
    }).reduce((sum, n) => sum + n, 0);
};

const getSizePart2 = (dir = root) => {
  let ans = 25425424525;
  if (getDirectorySize(dir) >= getDirectorySize() - 40000000) {
    ans = getDirectorySize(dir);
  }
  Object.values(dir).forEach((child) => {
    if (typeof child !== "number") {
      ans = Math.min(ans, getSizePart2(child));
    }
  });
  return ans;
};

console.log(`Part 1: ${getSizePart1()[1]}`);
console.log(`Part 2: ${getSizePart2()}`);
