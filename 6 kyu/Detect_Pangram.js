// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript

function isPangram (str) {
  for (let i = 1; i <= 26; i++) {
    if (!str.toLowerCase().includes(String.fromCharCode(96 + i))) {
      return false;
    }
  }
  return true;
};
