const fs = require('fs');

const input = fs.readFileSync('test2.txt', 'utf-8');

function convertToNumber(digit) {
  const digitMapping = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const lowercaseDigit = digit.toLowerCase();
  return digitMapping[lowercaseDigit] !== undefined ? digitMapping[lowercaseDigit] : parseInt(digit) || 0;
}

function calculateSum(document) {
  const lines = document.trim().split('\n');
  let sum = 0;

  lines.forEach(line => {
    const allDigits = line.match(/\d+|[a-zA-Z]+/g);

    console.log(line);
    console.log(allDigits);

    if (allDigits && allDigits.length >= 1) {
      const lineSum = allDigits.reduce((acc, digit) => acc + convertToNumber(digit), 0);
      console.log(lineSum)
      sum += lineSum;
    }
  });

  return sum;
}

const totalSum = calculateSum(input);
console.log(totalSum);
