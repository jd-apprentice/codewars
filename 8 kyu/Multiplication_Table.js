// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

const table = {
  1: "1 * ",
  2: "2 * ",
  3: "3 * ",
  4: "4 * ",
  5: "5 * ",
  6: "6 * ",
  7: "7 * ",
  8: "8 * ",
  9: "9 * ",
  10: "10 * ",
};

function multiTable(number) {
  return Array(Object.keys(table).length)
    .fill(null)
    .map(
      (_, i) =>
        table[i + 1] + number + " = " + Object.keys(table).map(Number)[i] * number
    )
    .join("\n");
}
