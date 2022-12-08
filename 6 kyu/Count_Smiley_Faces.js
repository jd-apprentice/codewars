// https://www.codewars.com/kata/583203e6eb35d7980400002a

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

const validSmiles = [
  ":)",
  ":D",
  ";)",
  ";D",
  ":~)", 
  ":~D",
  ":-D",
  ":-)",
  ";-D",
  ";-)",
  ";~)",
  ";~D"
];

function countSmileys(arr, count = 0) {
  return arr
    .map((a) => (validSmiles.includes(a) ? count + 1 : 0))
    .reduce((a, b) => a + b, 0);
}
