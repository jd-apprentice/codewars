// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers){
  const countryCode = numbers.slice(0, 3)
  const countryCodeParsed = `(${countryCode}) `.replace(/,/g, "")
  const secondHalf = `${numbers.slice(3, 6).join("")}-`
  const finalHalf = numbers.slice(6, numbers.length).join("")
  return countryCodeParsed + secondHalf + finalHalf
}
