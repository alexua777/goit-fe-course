class CountdownTimer {
  constructor(targetDate, selector) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.content = document.querySelector(this.selector);
  }

  startCountdown() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.updateContent(deltaTime);
    }, 1000);
  }

  updateContent(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hour = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const min = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const sec = pad(Math.floor((time % (1000 * 60)) / 1000));
    this.content.querySelector('span[data-value="days"]').textContent = days;
    this.content.querySelector('span[data-value="hours"]').textContent = hour;
    this.content.querySelector('span[data-value="mins"]').textContent = min;
    this.content.querySelector('span[data-value="secs"]').textContent = sec;
  }
}
function pad(value) {
  return String(value).padStart(2, '0');
}

const newObj = new CountdownTimer(new Date('Dec 26, 2019'), '#timer-1');
newObj.startCountdown();

