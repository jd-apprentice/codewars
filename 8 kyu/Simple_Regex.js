// https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript

function validateCode (code) {
 return Array.isArray(code.toString().match(/^[123]/g))
}
