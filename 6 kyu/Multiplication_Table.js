// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

// First solution
const multiplicationTable = (size) => {
  const arr = []
  for (let i = 1; i <= size; i++) {
    arr.push(Array.from({length: size}, (_, j) => (j + 1) * i))
  }
  return arr
}

multiplicationTable(3) // [[1,2,3], [2,4,6], [3,6,9]]
