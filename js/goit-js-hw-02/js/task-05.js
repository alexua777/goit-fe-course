// const checkForSpam = (str) => str.inlcudes('sale') && str.inlcudes('spam');

const checkForSpam = function (str) {
  const strFormated = str.toLowerCase();
  return strFormated.includes('sale') || strFormated.includes('spam');
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
