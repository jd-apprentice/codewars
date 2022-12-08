// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  const reducer = (prev, next) => prev + next
  let positiveNumbers = arr.filter(numero => numero > 0)
  let result = positiveNumbers.reduce(reducer, 0)
  return result
}

const positiveSum = (arr) => arr.filter(numero => numero > 0).reduce((prev, next) => prev + next, 0)

positiveSum([1,-4,7,12]) // OUTPUTS -> 20
