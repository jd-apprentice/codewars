// https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript

function mango(quantity, price){
  return Math.floor(quantity / 3) * 2 * price + (quantity % 3) * price;
}
