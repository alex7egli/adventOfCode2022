const fs = require('fs');

module.exports = {
  getFileAsLines
}

function getFileAsLines(filename = './input.txt') {
  const fileData = fs.readFileSync(filename, 'utf-8');
  return fileData.split('\n').map(line => line.trim());
}