// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

const noBoringZeros = n => n === 0 ? n : Number(n.toString().replace(/0+$/, ''))
