function domainName(url){
  const removeHttps = /(^\w+:|^)\/\//
  const filterHttp = url.replace(removeHttps, '');
  const filterWWW = filterHttp.replace('www.', '')
  const findDot = filterWWW
  const findDotIndex = findDot.indexOf(".")
  const arrLetters = findDot.split("")
  const removeDotCom = arrLetters.slice(arrLetters[arrLetters.length - 1], findDotIndex)
  const domainName = removeDotCom.join("")
  return domainName
}

domainName("http://google.com") // "google";
domainName("http://google.co.jp") // "google");
domainName("www.xakep.ru") // "xakep";
domainName("https://youtube.com") // "youtube";

// https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript
