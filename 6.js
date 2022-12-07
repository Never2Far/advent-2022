const inputArr = require("fs").readFileSync("inputDay6.txt", 'utf8').split('')

let packetMarkerFound = false
let messageMarkerFound = false
let i = 3
let j = 13
let packetMarker = [0, ...inputArr.slice(0,3)]
let messageMarker = [0, ...inputArr.slice(0,13)]

while(!packetMarkerFound || !messageMarkerFound) {
  packetMarker.shift()
  packetMarker.push(inputArr[i])
  messageMarker.shift()
  messageMarker.push(inputArr[j])
  if ([...new Set(packetMarker)].length === 4 || packetMarkerFound) {
    packetMarkerFound = true
  }
  else {
    i++
  }

  if ([...new Set(messageMarker)].length === 14 || messageMarkerFound) {
    messageMarkerFound = true
  }
  else {
    j++
  }
}

console.log(`Part 1: ${i + 1}`);
console.log(`Part 2: ${j + 1}`);