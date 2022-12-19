// https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript

function fakeBin(x) {
  return x
    .split("")
    .map(Number)
    .map((a) => (a < 5 ? "0" : "1"))
    .join("");
}
