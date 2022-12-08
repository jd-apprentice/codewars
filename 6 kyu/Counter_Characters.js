// https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript

const count = string => {
   let counter = {};
   const arr = Array.from(string).flat();
   for(element of arr) {
     counter[element] ? counter[element] += 1 : counter[element] = 1
   }
  return counter;
}
