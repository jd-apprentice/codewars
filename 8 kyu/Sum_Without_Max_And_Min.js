// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
  // Condition to give 0
  const condition = Array.isArray(array) && array.length > 2
  if (!condition) return 0
  
  // Find min, max and remove it from the array
  const maxElement = Math.max(...array);
  const minElement = Math.min(...array);
  const findMin = array.indexOf(minElement);
  array.splice(findMin, 1)
  const findMax = array.indexOf(maxElement);
  array.splice(findMax, 1)
  
  return array.reduce((prev, next) => prev + next, 0)
}
