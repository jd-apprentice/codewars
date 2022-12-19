// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/javascript

function invert(array) {
   return array.map((a) => a >= 0 ? -Math.abs(a) : Math.abs(a))
}
