const input = document.querySelector('#validation-input');
input.addEventListener('input', inputHandler);
const result = document.body.addEventListener('click', resultHandler);

let resultValue = 0;

function inputHandler(event) {
  resultValue = event.currentTarget.value.length;

}

function resultHandler(event) {

  if (event.currentTarget === event.target) {
    if (resultValue > Number(input.getAttribute('data-length'))) {
      input.classList.add('invalid');
    }
    input.classList.add('valid');
  }
}
