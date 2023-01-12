// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = firstAttacker.includes(fighter1.name) ? fighter1 : fighter2;
  let defender = firstAttacker.includes(fighter1.name) ? fighter2 : fighter1;
  
  while (defender.health > 0) {
    defender.health -= attacker.damagePerAttack;
    [attacker, defender] = [defender, attacker];
  }
  
  return attacker.toString();
}
