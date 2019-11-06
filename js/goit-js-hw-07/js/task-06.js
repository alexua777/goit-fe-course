const input = document.querySelector('#validation-input');
input.addEventListener('input', inputHandler);

let resultValue = 0;

function inputHandler(event) {
  resultValue = event.currentTarget.value.length;

  if (resultValue === Number(input.getAttribute('data-length'))) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
