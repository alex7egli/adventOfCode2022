const util = require('./util.js');

function run() {
  step1();
}

run();

function step1() {
  const inputLines = util.getFileAsLinesNoTrim();
  const stacks = [];
  const boxLength = 4; // on each line a 'box' is '[L] '
  for (let i = 0; i < inputLines[0].length / boxLength; i++) {
    stacks.push([]);
  }
  inputLines.forEach((line) => {
    if (line.trim().length > 0) {
      if (line.startsWith('move')) {
        // instruction line, e.g.: move 1 from 2 to 1
        // console.log(line);
        const instructions = line.trim().split(' ');
        moveBoxesBetweenStacksStep2(
          Number(instructions[1]),
          Number(instructions[3]) - 1, // stacks are 0 indexed
          Number(instructions[5]) - 1, // stacks are 0 indexed
          stacks);
        // console.log('stacks: ', stacks);
      } else if (line.startsWith(' 1')) {
        // ignore this line, just defining stacks
        console.log('initial stacks: ', stacks);
      } else {
        // must be line defining boxes in stacks
        // console.log('box line: ', line)
        for (let i = 0; i < line.length; i += boxLength) {
          const box = line.substring(i, i + boxLength - 1);
          // console.log(`i: ${i}, box: ${box}`)

          if (box[0] === '[') {
            stacks[i / boxLength].unshift(box[1]);
          }
        }
      }
    }
  });
  console.log(stacks);
  console.log(`ANSWER: ${stacks.map(stack => stack.pop()).join('')}`)
}

function step2() {
  const inputLines = util.getFileAsLines();
}

function moveBoxesBetweenStacksStep1(numBoxes, fromStack, toStack, stacks) {
  for (let i = 0; i < numBoxes; i++) {
    stacks[toStack].push(stacks[fromStack].pop());
  }
}

function moveBoxesBetweenStacksStep2(numBoxes, fromStack, toStack, stacks) {
  stacks[fromStack].splice(stacks[fromStack].length - numBoxes, numBoxes).forEach(box => stacks[toStack].push(box));
}
