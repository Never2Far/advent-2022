const inputArr = require("fs").readFileSync("inputDay5.txt", 'utf8').split(/\n{2,}/g)[1].split(/\r?\n/).map((step) => {
  const match = step.match(/\d+/gm)
  return [parseInt(match[0]), parseInt(match[1]), parseInt(match[2])]
})

const part1Stacks = {
1: 'SLFZDBRH'.split(''),
2: 'RZMBT'.split(''),
3: 'SNHCLZ'.split(''),
4: 'JFCS'.split(''),
5: 'BZRWHGP'.split(''),
6: 'TMNDGZJV'.split(''),
7: 'QPSFWNLG'.split(''),
8: 'RZM'.split(''),
9: 'TRVGLCM'.split('')
}

const part2Stacks = JSON.parse(JSON.stringify(part1Stacks))

// Part 1
inputArr.forEach((step) => {
  let qty = step[0]
  const from = part1Stacks[step[1]]
  const to = part1Stacks[step[2]]
  while (qty > 0) {
    const container = from.shift()
    to.unshift(container)
    qty--
  }
})

let topStacks1 = []
for (const stack in part1Stacks) {
    topStacks1.push(part1Stacks[stack][0])
}


// Part 2
inputArr.forEach((step) => {
  let qty = step[0]
  const from = part2Stacks[step[1]]
  const to = part2Stacks[step[2]]
  const subStack = from.splice(0, qty)
  to.splice(0,0, ...subStack)
})

let topStacks2 = []
for (const stack in part2Stacks) {
    topStacks2.push(part2Stacks[stack][0])
}

console.log(`Part 1: ${topStacks1.join('')}`);
console.log(`Part 2: ${topStacks2.join('')}`);