const fs = require('fs');

module.exports = {
  getFileAsLines,
  getFileAsLinesNoTrim
}

function getFileAsLines(filename = './input.txt') {
  const fileData = fs.readFileSync(filename, 'utf-8');
  return fileData.split('\n').map(line => line.trim());
}

function getFileAsLinesNoTrim(filename = './input.txt') {
  const fileData = fs.readFileSync(filename, 'utf-8');
  return fileData.split('\n');
}