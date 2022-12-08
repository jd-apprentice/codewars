// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  let counter = {};
  for (element of arr) {
    if (counter[element]) {
      counter[element] += 1;
    } else {
      counter[element] = 1;
    }
  }
  
  return +Object.entries(counter).find(([_, v]) => v === 1)[0]
}
