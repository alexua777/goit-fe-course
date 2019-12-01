const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

let isActive = false;
let switcher;

const randomIntegerFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);


function startSwitcher() {
  if (isActive) {
    return;
  }
  switcher = setInterval(() => {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    console.log(colors[index]);
    refs.body.setAttribute('style', `background: ${colors[index]}`);
    isActive = true;

  }, 1000);

}

function stopUpdateBg() {
  clearInterval(switcher);
  isActive = false;
}
refs.startBtn.addEventListener('click', startSwitcher);
refs.stopBtn.addEventListener('click', stopUpdateBg);
