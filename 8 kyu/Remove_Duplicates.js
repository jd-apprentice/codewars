// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

const distinct = (a) => [...new Set(a)]

distinct([1]) // [1]);
distinct([1,2]) // [1,2]);
distinct([1,1,2]) // [1,2]);
