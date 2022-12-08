// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  
  let zerosArray = []
  let numberOfZeros = arr.forEach((number) => number === 0 ? zerosArray.push(0) : null)
  let cleanArray = arr.filter((number) => number !== 0)
  let finalArray = cleanArray.concat(zerosArray)
  
  return finalArray
}

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// https://www.codewars.com/kata/52597aa56021e91c93000cb0
