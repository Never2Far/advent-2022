let part2Mod = 1;
let monkeys = require("fs")
  .readFileSync("inputDay11.txt", "utf8")
  .split(/\n{2,}/g)
  .map((monkey) => monkey.split(/\r?\n/))
  .map((monkey) => {
    return {
      startingItems: monkey[1]
        .split(": ")[1]
        .split(", ")
        .map((item) => parseInt(item)),
      operation: (old) => {
        const eq = monkey[2].split(": new = ")[1].split(" ");
        const x = eq[0] === "old" ? old : parseInt(eq[0]);
        const operand = eq[1];
        const y = eq[2] === "old" ? old : parseInt(eq[2]);
        if (operand === "+") {
          return x + y;
        } else {
          return x * y;
        }
      },
      part2Mod: parseInt(monkey[3].split("divisible by ")[1]),
      test: (item) => {
        const divisor = parseInt(monkey[3].split("divisible by ")[1]);
        const trueDestination = parseInt(
          monkey[4].split("throw to monkey ")[1]
        );
        const falseDestination = parseInt(
          monkey[5].split("throw to monkey ")[1]
        );
        monkeys[
          item % divisor === 0 ? trueDestination : falseDestination
        ].startingItems.push(item);
      },
      inspectedCount: 0,
    };
  });

monkeys.forEach((monkey) => {
  part2Mod *= monkey.part2Mod;
});

Array(10000)
  .fill(0)
  .forEach(() => {
    monkeys.forEach((monkey) => {
      Array(monkey.startingItems.length)
        .fill(0)
        .forEach(() => {
          const item = monkey.startingItems.shift();
          let newItem = monkey.operation(item);
          newItem %= part2Mod;
          monkey.test(newItem);
          monkey.inspectedCount += 1;
        });
    });
  });

const activeCounts = monkeys
  .map((monkey) => {
    return monkey.inspectedCount;
  })
  .sort((a, b) => b - a);

console.log(activeCounts[0] * activeCounts[1]);
