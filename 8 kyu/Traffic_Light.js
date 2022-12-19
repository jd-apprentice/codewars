// https://www.codewars.com/kata/58649884a1659ed6cb000072/javascript

const lights = {
  green: "yellow",
  yellow: "red",
  red: "green"
}

function updateLight(current) {
  return lights[current]
}
