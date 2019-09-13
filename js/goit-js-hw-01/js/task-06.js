let input;
let total = 0;
let inputNum;

while (input !== null) {
  input = prompt('Please enter your number');
  if (input == null || input == '') {

    break;
  }
  inputNum = Number(input);
  console.log(input);
  total += inputNum;
  console.log(total);


}

alert(`Total sum is ${total}`);
