// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  return String(str
    .split(" ")
    .map((a) => a.split(""))
    .map((a) => a.reverse())  
    .map((a) => a.join("")))
    .replace(/,/g, " ")
}
