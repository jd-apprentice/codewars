// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript

function validateUsr(username) {
  return /^[a-z\d_]{4,16}$/g.test(username)
}

validateUsr('asddsa') // true
validateUsr('a') // false
validateUsr('Hass') // false
validateUsr('Hasd_12assssssasasasasasaasasasasas') // false
validateUsr('') // false
validateUsr('____') // true
validateUsr('012') // false
validateUsr('p1pp1') // true
validateUsr('asd43 34') // false
validateUsr('asd43_34') // true
