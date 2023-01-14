// https://www.codewars.com/users/jd_apprentice/completed_solutions

const vowels = {
  97: "a",
  101: "e",
  105: "i",
  111: "o",
  117: "u",
};

function isVow(a) {
  return a.map((b) => vowels[b] || b);
}
