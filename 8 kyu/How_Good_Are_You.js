// https://www.codewars.com/kata/5601409514fc93442500010b/javascript

function betterThanAverage(classPoints, yourPoints) {
  return (
    Math.round(classPoints.reduce((a, b) => a + b, 0) / classPoints.length) <
    yourPoints
  );
}
