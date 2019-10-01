let input;
let total = 0;
let inputNum;

while (input !== null) {
  input = prompt('Please enter your number');
  if (input == null || input === '') {
    break;
  }
  inputNum = Number(input);
  total += inputNum;
}

alert(`Total sum is ${total}`);
