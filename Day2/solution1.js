const fs = require('fs');

function isGamePossible(line) {
  const subgames = line.split(":")[1].split(";");
  console.log(subgames)
  for (const subgame of subgames) {
      for (const numCubes of subgame.split(',')) {
          const [num, color] = numCubes.trim().split(' ');
          if (parseInt(num) > Cubes[color]) {
              return false;
          }
      }
  }
  return true;
}

const input = fs.readFileSync('test1.txt', 'utf-8');
const lines = input.split("\n");

const Cubes = {
  "red": 12,
  "green": 13,
  "blue": 14
};

let RESULT = 0;

for (let index = 0; index < lines.length; index++) {
  const line = lines[index];
  if (isGamePossible(line)) {
      RESULT += (index + 1);
  }
}

console.log(RESULT);
