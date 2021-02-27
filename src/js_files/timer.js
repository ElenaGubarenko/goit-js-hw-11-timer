class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.targetDateInMS = targetDate.getTime();
    this.daysRef = document.querySelector('[data-value="days"]');
    this.hoursRef = document.querySelector('[data-value="hours"]');
    this.minsRef = document.querySelector('[data-value="mins"]');
    this.secsRef = document.querySelector('[data-value="secs"]');
    this.dateNow = this.dateNow.bind(this);
  }

  dateNow() {
    this.time = this.targetDateInMS - Date.now();
    this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    this.mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((this.time % (1000 * 60)) / 1000);

    this.daysRef.textContent = `${this.days}`;
    this.hoursRef.textContent = `${this.hours}`;
    this.minsRef.textContent = `${this.mins}`;
    this.secsRef.textContent = `${this.secs}`;
  }

  currentTime() {
    return setInterval(this.dateNow, 1000);
  }
}

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2021, 6, 17),
});

newTimer.currentTime();
