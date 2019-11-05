const input = document.querySelector('#validation-input');
input.addEventListener('input', inputHandler);
// document.body.addEventListener('click', resultHandler);

let resultValue = 0;

function inputHandler(event) {


  resultValue = event.currentTarget.value.length;

  if (resultValue === Number(input.getAttribute('data-length'))) {
    input.classList.remove('invalid');
    input.classList.add('valid');

  } else input.classList.add('invalid');
}

// function resultHandler(event) {
//   input.classList.remove('invalid');
//   input.classList.remove('valid');
//   if (resultValue === Number(input.getAttribute('data-length'))) {
//     input.classList.add('valid');
//   }
//   input.classList.add('invalid');
// }
