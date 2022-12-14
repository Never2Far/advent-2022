const inputArr = require("fs").readFileSync("inputDay13.txt", "utf8").split(/\r?\n/).filter((line) => line !== "").map((packet) => JSON.parse(packet));

inputArr.push([[2]]);
inputArr.push([[6]]);

const checkPair = (a, b) => {
  if (a === undefined && b === undefined) {
    return;
  } else if (a === undefined && b !== undefined) {
    return 1;
  } else if (b === undefined && a !== undefined) {
    return -1;
  }

  if (typeof a === "number" && typeof b === "number") {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return "continue";
    }
  } else if (Array.isArray(a) && Array.isArray(b)) {
    let i = 0;
    let done = false;

    while (!done) {
      if (a[i] === undefined && b[i] === undefined) {
        return "continue";
      } else if (a[i] === undefined && b[i] !== undefined) {
        return 1;
      } else if (b[i] === undefined && a[i] !== undefined) {
        return -1;
      }
      let result = checkPair(a[i], b[i]);
      if (result === 1) {
        return 1;
      } else if (result === -1) {
        return -1;
      } else if (result === "continue") {
        i++;
        continue;
      } else {
        return;
      }
    }
  } else if (Array.isArray(a) && typeof b === "number") {
    let result = checkPair(a, [b]);
    if (result === 1) {
      return 1;
    } else if (result === -1) {
      return -1;
    }
  } else if (typeof a === "number" && Array.isArray(b)) {
    let result = checkPair([a], b);
    if (result === 1) {
      return 1;
    } else if (result === -1) {
      return -1;
    }
  } else {
    return;
  }

  return "continue";
};

const str = inputArr.sort((a, b) => checkPair(a, b)).reverse().map((packet) => JSON.stringify(packet));

console.log((str.indexOf(JSON.stringify([[2]])) + 1) * (str.indexOf(JSON.stringify([[6]])) + 1));