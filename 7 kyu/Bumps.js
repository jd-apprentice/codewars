// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

function bump(x) {
  return x
    .split("")
    .map((a) => (a === "n" ? 1 : null))
    .filter((b) => b === 1)
    .reduce((prev, next) => prev + next, 0) <= 15
    ? "Woohoo!"
    : "Car Dead";
}
