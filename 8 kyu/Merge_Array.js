// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
  return Array.from(new Set([arr1, arr2].flat().sort((a, b) => a - b)));
}
