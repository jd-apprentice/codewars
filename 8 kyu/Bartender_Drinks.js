// https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

const drink = {
  "jabroni": "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer":	"Hipster Craft Beer",
	"bike gang member":	"Moonshine",
	"politician":	"Your tax dollars",
	"rapper":	"Cristal",
}

function getDrinkByProfession(param){
  const text = param.toLowerCase()
  return drink[text] || "Beer"
}
