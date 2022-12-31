// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(integer, limit) {
  return Array.from({ length: limit / integer }, (v, i) => i + 1)
    .map((a) => a * integer)
    .filter((b) => b <= limit);
}

findMultiples(5, 25); // [5, 10, 15, 20, 25])
findMultiples(1, 2); // [1, 2])
findMultiples(5, 7); // [5])
findMultiples(4, 27); // [4, 8, 12, 16, 20, 24])
findMultiples(11, 54); // [11, 22, 33, 44])
findMultiples(8, 310); // [ 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240, 248, 256, 264, 272, 280, 288, 296, 304 ]
