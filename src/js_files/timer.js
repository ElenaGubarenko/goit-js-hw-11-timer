// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const targetDate = new Date(2021, 6, 17);
const targetDateInMS = targetDate.getTime();
const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');
let intervalId = null;
console.log();

const dateNow = () => {
  let time = targetDateInMS - Date.now();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minsRef.textContent = `${mins}`;
  secsRef.textContent = `${secs}`;
};

const currentTime = () => {
  return setInterval(dateNow, 1000);
};

currentTime();
