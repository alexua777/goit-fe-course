const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
input.addEventListener('input', rangeHandler);

function rangeHandler(event) {

  text.style.fontSize = `${event.currentTarget.value }px`;
  console.log(event.currentTarget.value);
}
