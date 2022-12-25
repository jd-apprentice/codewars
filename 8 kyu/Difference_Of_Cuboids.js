// https://www.codewars.com/kata/58cb43f4256836ed95000f97/javascript

function findDifference(a, b) {
  return Math.abs(
    a.reduce((prev, next) => prev * next) -
    b.reduce((prev, next) => prev * next)
  );
}

findDifference([3, 2, 5], [1, 4, 4]); // 14);
findDifference([9, 7, 2], [5, 2, 2]); // 106);
findDifference([11, 2, 5], [1, 10, 8]); // 30);
findDifference([4, 4, 7], [3, 9, 3]); // 31);
findDifference([15, 20, 25], [10, 30, 25]); // 0);
