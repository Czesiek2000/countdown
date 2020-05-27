const countdown = document.getElementById('countdown');
// Deadline date in ms
const deadline = new Date('Jan 30, 2023 13:00:00').getTime();

function count() {
  // today date in ms
  const now = new Date().getTime();
  // Count distance from deadline to today
  let countTime = deadline - now;

  // Calculation to deadline
  const days = Math.floor(countTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((countTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countTime % (1000 * 60)) / 1000);

  // console.log(days);
  // display values on screen
  countdown.innerHTML = `
  <div class="date">${days}<span> Days</span></div> 
  <div class="date">${hours}<span> Hours</span></div>
  <div class="date">${mins}<span> Minutes</span></div>
  <div class="date">${seconds}<span> Seconds</span></div>
  `;
  
  if (countTime < 0) {
    // // Stop interval
    clearInterval(interval);
    // style the output if reach a Date
    countdown.classList.add('center');
    countdown.innerHTML = 'Reachead !';
  }
}

// Interval to make countdown run
const interval = setInterval(() => {
  count();
}, 1000);

