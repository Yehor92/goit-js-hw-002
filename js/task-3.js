function checkForSpam(message) {
  const blackListWord1 = message.toLowerCase().includes('spam');
  const blackListWord2 = message.toLowerCase().includes('sale');
  if (blackListWord1 || blackListWord2) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
