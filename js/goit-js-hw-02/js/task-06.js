const number = [];
let input;
let total = 0;

const numbersTotal = function () {
  while (input !== null) {
    input = prompt('Please enter your number');

    number.push(input);
    if (input == null) {
      number.pop();
      break;
    }
  }
  // const numberInt = [];
  for (let i = 0; i < number.length; i++) {
    number[i] = Number(number[i]);
    total += number[i];
  }
  if (number.length > 0) {
    return total;
  }
  return 'Array is empty';
};

console.log(`Total sum is ${numbersTotal()}`);
