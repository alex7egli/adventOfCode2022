const util = require('./util.js');

function run() {
  // step1();
  step2();
}

run();

function step1() {
  const inputLines = util.getFileAsLines();
  let count = 0;
  inputLines.forEach(line => {
    let assignments = line.split(',');
    assignments[0] = assignments[0].split('-').map(val => Number(val));
    assignments[1] = assignments[1].split('-').map(val => Number(val));
    if (assignments[0][0] <= assignments[1][0] && assignments[0][1] >= assignments[1][1]) {
      // first range completely includes second range
      count++
    } else if (assignments[1][0] <= assignments[0][0] && assignments[1][1] >= assignments[0][1]) {
      // second range completely includes first range
      count++
    }
  })
  console.log(count);
}

function step2() {
  const inputLines = util.getFileAsLines();
  let count = 0;
  inputLines.forEach(line => {
    let assignments = line.split(',');
    assignments[0] = assignments[0].split('-').map(val => Number(val));
    assignments[1] = assignments[1].split('-').map(val => Number(val));
    // only two cases where they don't overlap
    if (!(assignments[0][1] < assignments[1][0] || assignments[0][0] > assignments[1][1])) {
      count++
    }
  })
  console.log(count);
}