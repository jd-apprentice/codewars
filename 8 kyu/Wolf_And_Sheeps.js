// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue) {
  const wolf = queue.indexOf("wolf");
  const sheep = queue.lastIndexOf("sheep");
  const result = sheep - wolf;
  const string = `Oi! Sheep number ${result}! You are about to be eaten by a wolf!`;
  return result < 0 ? "Pls go away and stop eating my sheep" : string;
}
