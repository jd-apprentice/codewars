// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

function findLongest(array){
  const arr = array.map((b) => b.toString().length)
  const index = arr.indexOf(Math.max(...arr))
  return array[index]
}
