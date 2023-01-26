// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(array1, array2) {
  let result = 0;
  const arr = array1.map((a, i) =>
    array2[i] === a
      ? (result += 4)
      : array1[i].length > array2[i].length
      ? (result += 0)
      : (result -= 1)
  );
  return result < 0 ? 0 : result;
}
