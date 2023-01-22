// https://www.codewars.com/kata/5a4138acf28b82aa43000117/solutions/javascript

function adjacentElementsProduct1(array) {
  let result = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const operation = array[i] * array[i + 1];
    operation >= result ? (result = operation) : null;
  }

  return result;
}

function adjacentElementsProduct(array) {
  return Math.max(...array.slice(0, -1).map((a, i) => a * array[i + 1]));
}

adjacentElementsProduct([5, 8]); // 40
adjacentElementsProduct([1, 2, 3]); // 6
adjacentElementsProduct([1, 5, 10, 9]); // 90
adjacentElementsProduct([4, 12, 3, 1, 5]); // 48
adjacentElementsProduct([5, 1, 2, 3, 1, 4]); // 6
