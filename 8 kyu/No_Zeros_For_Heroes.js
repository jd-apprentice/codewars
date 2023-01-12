// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

const noBoringZeros = n => 0 || Number(n.toString().replace(/0+$/, ''))
