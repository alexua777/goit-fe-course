let input;
let total = 0;
let inputNum;

while (input !== null) {
  input = prompt('Please enter your number');

  inputNum = Number(input);
  console.log(input);
  total += inputNum;
  console.log(total);
  if (input == null) {
    break;
  }
}

alert(`Total sum is ${total}`);
