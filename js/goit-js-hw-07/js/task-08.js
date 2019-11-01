const refs = {
  create: document.querySelector('button[data-action="render"]'),
  remove: document.querySelector('button[data-action="destroy"]'),
  result: document.querySelector('#boxes'),
  number: document.querySelector('input[type="number"]'),
};

function createBoxes(amount) {
  const element = Array(amount).fill('').map((e, i) => {
    const elem = document.createElement('div');
    elem.style.cssText = `height: ${30 + i * 10}px; width: ${30 + i * 10}px`;
    elem.style.background = getRandomColor();
    return elem;
  });
  console.log(element);
  return element;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function inputHandler(event) {
  refs.number.value = event.currentTarget.value;
}

function createHandler() {
  const resultValue = Number(refs.number.value);
  const boxes = createBoxes(resultValue);
  refs.result.append(...boxes);
}

function destroyBoxes() {
  refs.result.innerHTML = '';
}

refs.create.addEventListener('click', createHandler);
refs.remove.addEventListener('click', destroyBoxes);
refs.number.addEventListener('input', inputHandler);
