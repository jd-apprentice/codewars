// https://www.codewars.com/kata/57a429e253ba3381850000fb/javascript

function bmi(weight, height) {
  const condition = weight / (height * height)
  if (condition <= 18.5) return "Underweight"
  if (condition <= 25.0) return "Normal"
  if (condition <= 30.0) return "Overweight"
  return "Obese"
}
