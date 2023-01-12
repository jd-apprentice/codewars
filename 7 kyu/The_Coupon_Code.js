// https://www.codewars.com/kata/539de388a540db7fec000642/javascript

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
  );
}
