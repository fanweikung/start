const waitTime = 5000;
const waitInterval = 500;
let currentTime =0;
console.log(`setting a ${waitTime/1000} second delay`);

const incTime = () => {
    currentTime+=waitInterval;
    const p = Math.floor((currentTime/waitTime) * 100);
    process.stdout.clearLine(); // clear the last ling wrote to the termial
    process.stdout.cursorTo(0); // move cursor to the start of the line
    process.stdout.write(`waiting... ${p}%`);
};
  //


const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);


    console.log("done");
}

const interval = setInterval(incTime, waitInterval);

// 1st param = the func to invoke when the wait time is up
setTimeout(timerFinished, waitTime);
