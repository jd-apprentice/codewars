// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  return words.join(" ");
}
