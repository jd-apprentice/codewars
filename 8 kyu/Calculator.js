// https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript

const options = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

function calculator(a, b, sign) {
  if (!options[sign]) return "unknown value";
  if (typeof a !== "number" || typeof b !== "number") return "unknown value";
  return options[sign](a, b);
}
