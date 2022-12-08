// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/javascript

var countSheep = function (num){
  let finalText = "";
  let count = 0
  for (let i = 0; i < num; i++) {
    count += 1
    finalText += `${count} sheep...`
  }
  return finalText;
}
