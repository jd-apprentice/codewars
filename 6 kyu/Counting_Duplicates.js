// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript

function duplicateCount(text) {
  let dict = {};
  for (letter of text.toLowerCase().split("")) {
    if (dict[letter]) {
      dict[letter] += 1;
    } else {
      dict[letter] = 1;
    }
  }
  
  return Object.entries(dict)
    .map((a) => a.filter((a) => a > 1))
    .filter((a) => a.length).length;
}
