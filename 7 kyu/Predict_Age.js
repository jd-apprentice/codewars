// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(
    Math.sqrt(
      [...arguments]
        .map((n) => n * n)
        .reduce((prev, next) => prev + next, 0)
    ) / 2
  );
}
