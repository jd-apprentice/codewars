// https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript

function calculateAge(a, b) {
  if (a > b)
    return `You will be born in ${Math.abs(a - b)} ${
      Math.abs(a - b) == 1 ? "year" : "years"
    }.`;
  if (a == b) return "You were born this very year!";
  return `You are ${Math.abs(a - b)} ${
    Math.abs(a - b) == 1 ? "year old" : "years old"
  }.`;
}

