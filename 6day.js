const util = require('./util.js');

function run() {
  step1();
  // step2();
}

run();

function step1() {
  const inputLines = util.getFileAsLines();

  inputLines.forEach(findEndOfFirstFourUnique);
}

function step2() {
  const inputLines = util.getFileAsLines();
  
}

function findEndOfFirstFourUnique(line) {
  const numUniques = 14;
  for (let i = numUniques-1; i < line.length; i++) {
    const uniques = new Set();
    for (let j = numUniques-1; j >= 0; j--) {
      uniques.add(line[i - j])
    }
    if (uniques.size >= numUniques) {
      console.log(`Found packet at ${i+1}`)
      return i+1; // answer has first character as 1 and not 0
    }
  }
}