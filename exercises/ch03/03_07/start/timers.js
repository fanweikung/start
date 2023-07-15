const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => console.log("done");

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;
const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime / 1000} seconds`);
};

setInterval(incTime, waitInterval);
