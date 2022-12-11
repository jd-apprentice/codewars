// https://www.codewars.com/kata/5547929140907378f9000039/javascript

function shortcut (string) {
  return string.split("").map((a) => a.replace(/[aeiou]/g, "")).join("")
}
