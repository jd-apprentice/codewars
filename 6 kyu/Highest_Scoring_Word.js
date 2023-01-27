// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

const wordsToMarks = (s) =>
  s.split("").reduce((res, c) => (res += c.charCodeAt() - 96), 0);

function high(x) {
  const groups = x.split(" ");
  const maxValues = groups.map(word => wordsToMarks(word));
  const maxValue = Math.max(...maxValues);
  return groups[maxValues.indexOf(maxValue)];
}

high("man i need a taxi up to ubud"); //  'taxi'
high('what time are we climbing up the volcano') //  'volcano'
high('take me to semynak') //  'semynak'
high('aa b') //  'aa'
high('b aa') //  'b'
high('bb d') //  'bb'
high('d bb') //  'd'
high('aaa b') //  'aaa'
