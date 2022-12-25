// https://www.codewars.com/kata/5513795bd3fafb56c200049e/javascript

function countBy(x, n) {
  return Array.from({length: n}, (v, k) => (k + 1) * x)
}
