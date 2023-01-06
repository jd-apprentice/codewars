// https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript

function rainAmount(water) {
  return water >= 40
    ? "Your plant has had more than enough water for today!"
    : `You need to give your plant ${40 - water}mm of water`;
}
