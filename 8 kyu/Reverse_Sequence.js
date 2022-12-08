// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/

const reverseSeq = (n) => {
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers.reverse();
};

reverseSeq(5);
