const inputArr = require("fs")
  .readFileSync("inputDay13.txt", "utf8")
  .split(/\n{2,}/g)
  .map((pair) => pair.split(/\r?\n/).map((packet) => JSON.parse(packet)));

const checkPair = (a, b) => {
  if (a === undefined && b === undefined) {
    return;
  } else if (a === undefined && b !== undefined) {
    return "yes";
  } else if (b === undefined && a !== undefined) {
    return "no";
  }

  if (typeof a === "number" && typeof b === "number") {
    if (a < b) {
      return "yes";
    } else if (a > b) {
      return "no";
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
        return "yes";
      } else if (b[i] === undefined && a[i] !== undefined) {
        return "no";
      }
      let result = checkPair(a[i], b[i]);
      if (result === "yes") {
        return "yes";
      } else if (result === "no") {
        return "no";
      } else if (result === "continue") {
        i++;
        continue;
      } else {
        return;
      }
    }
  } else if (Array.isArray(a) && typeof b === "number") {
    let result = checkPair(a, [b]);
    if (result === "yes") {
      return "yes";
    } else if (result === "no") {
      return "no";
    } else {
      return;
    }
  } else if (typeof a === "number" && Array.isArray(b)) {
    let result = checkPair([a], b);
    if (result === "yes") {
      return "yes";
    } else if (result === "no") {
      return "no";
    }
  } else {
    return;
  }

  return "continue";
};

let orderedPairs = [];

inputArr.forEach((pair, i) => {
  const a = pair[0];
  const b = pair[1];

  let result = checkPair(a, b);
  if (result === "yes") {
    orderedPairs.push(i + 1);
  }
});

console.log(orderedPairs.reduce((a, b) => a + b));

