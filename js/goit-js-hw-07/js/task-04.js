const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

incrementBtn.addEventListener('click', incrementHandler);
decrementBtn.addEventListener('click', decrementHandler);

let counterValue = 0;

function incrementHandler() {
  counterValue += 1;
  value.textContent = counterValue;

}

function decrementHandler() {
  counterValue -= 1;
  value.textContent = counterValue;

}
