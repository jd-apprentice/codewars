// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
  return s
    .split("")
    .map(
      (letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i) + "-"
    )
    .join("")
    .slice(0, -1);
}
