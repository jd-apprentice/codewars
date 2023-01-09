// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript

function evenNumbers(numbers, number) {
  return numbers.filter(x => x % 2 === 0).slice(-number);
}
