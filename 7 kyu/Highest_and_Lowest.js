
/*
https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers){
  let array = numbers.split(" ")
  let transform = array.map(num => parseInt(num))
  const largestNumber = Math.max(...transform)
  const smallestNumber = Math.min(...transform)
  return `${largestNumber} ${smallestNumber}`
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") // OUTPUT -> 42 -9
