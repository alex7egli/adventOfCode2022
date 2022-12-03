const util = require('./util.js');

function run() {
  // step1();
  step2();
}

run();

function step1() {
  const inputLines = util.getFileAsLines();
  const sum = inputLines.reduce((sum, rucksackContents) => {
    // turn both halves into a Set of letters for easy searching
    let firstHalf = new Set();
    let secondHalf = new Set();
    for (let i = 0; i < rucksackContents.length; i++) {
      if (i < rucksackContents.length / 2) {
        firstHalf.add(rucksackContents.charCodeAt(i));
      } else {
        secondHalf.add(rucksackContents.charCodeAt(i));
      }
    }
    
    // Find first item in first half that is also in second half
    let dupeCharCode = -1;
    for (let charCode of firstHalf) {
      if (secondHalf.has(charCode)) {
        dupeCharCode = charCode;
        break;
      }
    }
    // console.log(rucksackContents, firstHalf, secondHalf, getValueForCharCode(dupeCharCode))
    return sum + getValueForCharCode(dupeCharCode);
  }, 0)
  console.log(sum)
}

function step2() {
  const inputLines = util.getFileAsLines();
  let groupLines = [];
  let sum = 0;
  inputLines.forEach(rucksackContents => {
    groupLines.push(rucksackContents);
    if (groupLines.length === 3) {
      // Convert line to set for easy searching
      const sets = groupLines.map(lineToSet);

      let dupeCharCode = findDupeInAllSets(sets);

      sum += getValueForCharCode(dupeCharCode);
      groupLines = [];
    }
  
  })
  console.log(sum)
}

function lineToSet(line) {
  const result = new Set();
  for (let i = 0; i < line.length; i++) {
    result.add(line.charCodeAt(i));
  }
  return result;
}

function findDupeInAllThreeSets(sets) {
  for (let charCode of sets[0]) {
    if (sets[1].has(charCode)) {
      if (sets[2].has(charCode)) {
        return charCode;
      }
    }
  }
}

// Convert char code to value for puzzle
function getValueForCharCode(charCode) {
  if (charCode < 91) {
    // uppercase
    return charCode - 38; // A = 65, 65 - 38 = 27
  } else {
    // lowercase
    return charCode - 96; // a = 97, 97 - 96 = 1
  }
}