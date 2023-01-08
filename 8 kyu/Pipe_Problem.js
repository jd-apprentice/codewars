// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

const pipeFix = (num) => {
  return Array.from(
    { length: Math.max(...num) - Math.min(...num) + 1 },
    (_, i) => i + Math.min(...num)
  );
};
