const util = require('./util.js');

function run() {
  // step1();
  step2();
}

run();

function step2() {
  const inputLines = util.getFileAsLines();
  // console.log(inputLines);

  let vals = [], current = 0;
  inputLines.forEach(line => {
    if (line.length === 0) {
      vals.push(current);
      current = 0;
    } else {
      current += Number(line);
    }
  });

  vals.sort((a, b) => b - a)
  console.log(vals[0] + vals[1] + vals[2]);
}

function step1() {
  const inputLines = util.getFileAsLines();
  // console.log(inputLines);

  let highest = 0, current = 0;
  inputLines.forEach(line => {
    if (line.length === 0) {
      highest = Math.max(highest, current);
      current = 0;
    } else {
      current += Number(line);
    }
  });

  console.log(highest);
}