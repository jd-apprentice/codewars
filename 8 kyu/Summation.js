// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/javascript

var summation = function (num) {
  return Array.from({length: num + 1}, (v, i) => i).reduce((a, b) => a + b)
}
