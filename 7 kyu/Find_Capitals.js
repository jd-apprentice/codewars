// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

var capitals = function (word) {
  return [...new Set([...word].map((a) => word.indexOf(a.toUpperCase())))]
    .filter((b) => b !== -1)
    .sort((a, b) => a - b);
};

capitals("CodEWaRs"); // [0,3,4,6]
