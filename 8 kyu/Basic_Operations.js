// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

const basicOp = (op, v1, v2) => {
  const operations = {
    "+": v1 + v2,
    "-": v1 - v2,
    "*": v1 * v2,
    "/": v1 / v2
  }
 return operations[op]
}

basicOp('+', 4, 7) // 11;
basicOp('-', 15, 18) // -3;
basicOp('*', 5, 5) // 25;
basicOp('/', 49, 7) // 7;
