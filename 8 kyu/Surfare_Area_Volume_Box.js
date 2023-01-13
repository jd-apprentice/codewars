// https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript

function getSize(width, height, depth) {
  let surfaceArea = 2 * (width * height + width * depth + height * depth);
  let volume = width * height * depth;
  return [surfaceArea, volume];
}
