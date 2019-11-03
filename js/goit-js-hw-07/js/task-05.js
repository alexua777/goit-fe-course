const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', submitHandler);

function submitHandler(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value === '') {
    output.textContent = 'незнакомец';
    return;
  }
  output.textContent = event.currentTarget.value;

}
