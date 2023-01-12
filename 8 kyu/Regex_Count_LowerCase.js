// https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript

function lowercaseCount(str) {
  return str.match(/[a-z]/g)?.length || 0
}

lowercaseCount("abc"); // 3);
lowercaseCount("abcABC123"); // 3);
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"); // 3);
lowercaseCount(""); // 0)
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"); // 0)
lowercaseCount("abcdefghijklmnopqrstuvwxyz"); // 26);
