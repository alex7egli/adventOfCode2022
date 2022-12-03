const util = require('./util.js');

const shapeMap = {
  'A': 1, // rock
  'B' : 2, // paper
  'C': 3, // scissors
  'X' : 1, // rock
  'Y': 2, // paper
  'Z': 3 // scissors
};
const meMinusThemAsScore = {
  '-2' : 6,
  '-1': 0,
  '0': 3, // draw
  '1': 6,
  '2': 0
};
const myShapeGivenRound = {
  'A X': 3,
  'B X': 1,
  'C X': 2,
  'A Y': 1,
  'B Y': 2,
  'C Y': 3,
  'A Z': 2,
  'B Z': 3,
  'C Z': 1
}

function run() {
  // step1();
  step2();
}

run();

function step1() {
  const inputLines = util.getFileAsLines();
  const total = inputLines.reduce((totalScore, currentRound) => {
    const round = currentRound.split(' ');
    const score = scoreRound(shapeMap[round[1]], shapeMap[round[0]]);
    return totalScore + score;
  }, 0);
  
  console.log(total);
}

function step2() {
  const inputMap = {
    'X' : 0, // loss
    'Y': 3, // draw
    'Z': 6 // win
  };

  const inputLines = util.getFileAsLines();

  const total = inputLines.reduce((totalScore, currentRound) => {
    const round = currentRound.split(' ');
    const score = myShapeGivenRound[currentRound] + inputMap[round[1]];
    return totalScore + score;
  }, 0);
  
  console.log(total);
}

function scoreRound(myShape, theirShape) {
  return myShape + meMinusThemAsScore[(myShape - theirShape).toString()];
}
