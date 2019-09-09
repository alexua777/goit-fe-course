let input;
let total = 0;
let inputInt;

do {
  input = prompt('Please enter your number');
  inputInt = parseInt(input);
  console.log(inputInt);
  total += inputInt;
  console.log(total);
} while (input !== null);

alert(`Total sum is ${total}`);
