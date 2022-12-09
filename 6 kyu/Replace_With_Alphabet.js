// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript

const values = {};
for (let i = 1; i <= 26; i++) {
  values[String.fromCharCode(96 + i)] = i;
}

function alphabetPosition(text) {
  return text
    .split(" ")
    .map((a) => a.split(""))
    .map((a) => a.map((b) => values[b.toLowerCase()]))
  	.flat()
    .filter((a) => a !== undefined)
    .join(" ")
    .replace(/,/g, " ")
}
