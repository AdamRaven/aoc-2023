const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

function calculateSum(document) {
  const lines = document.trim().split('\n');
  let sum = 0;

  lines.forEach(line => {
    const digits = line.match(/\d/g); 
    if (digits && digits.length >= 1) {
      const calibrationValue = parseInt(digits[0] + digits[digits.length - 1]);
      sum += calibrationValue;
    }
  });

  return sum;
}

const totalSum = calculateSum(input);
console.log(totalSum);
