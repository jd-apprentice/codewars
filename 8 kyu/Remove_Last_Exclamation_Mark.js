// https://www.codewars.com/kata/57fae964d80daa229d000126/javascript

function remove(string) {
  return string.split("").lastIndexOf("!") === string.split("").length - 1
    ? string.split("").slice(0, -1).join("")
    : string.split("").join("")
}

remove("Hi!"); // "Hi");
remove("Hi!!!"); // "Hi!!");
remove("!Hi"); // "!Hi");
remove("!Hi!"); // "!Hi");
remove("Hi! Hi!"); // "Hi! Hi");
remove("Hi"); // "Hi");
