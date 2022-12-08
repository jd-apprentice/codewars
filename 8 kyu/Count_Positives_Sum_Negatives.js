// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  const validate = input == null || input.length <= 0 || !input;
  return validate
    ? []
    : [
        input.filter((v) => v > 0).length,
        input.filter((v) => v < 0).reduce((a, b) => a + b, 0),
      ];
}
