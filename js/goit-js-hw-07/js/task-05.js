const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', submitHandler);

function submitHandler(event) {
  output.textContent = event.currentTarget.value;

}
