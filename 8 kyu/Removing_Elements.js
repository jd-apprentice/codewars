// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr){
  for (let i = 1; i < arr.length; i++) {
    arr.splice(i, 1)
  }
  return arr
}
