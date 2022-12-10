// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/javascript

function sortByLength (array) {
  return array.map((a) => a).sort((a, b) => a.length - b.length)
};
