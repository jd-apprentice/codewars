// https://www.codewars.com/kata/5aa736a455f906981800360d/javascript

function feast(beast, dish) {
  return (
    dish.startsWith(beast.split("")[0]) &&
    dish.endsWith(beast.split("")[beast.split("").length - 1])
  );
}
