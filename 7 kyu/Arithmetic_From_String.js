// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/javascript

const cases = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

function arithmetic(a, b, operator){
  const [firstNumber, secondNumber] = [parseInt(a), parseInt(b)]
  return cases[operator](firstNumber, secondNumber);
}
