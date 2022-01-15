/* The first argument is the callback function and the second argument is a delay in milliseconds. The function is designed to wait the appropriate amount of time, then invoke your callback function.
*/
setTimeout(function () {
    console.log("call back 10 seconds later...");
  }, 10000);

/* easier to read */
const callback = function() {
    console.log("callback 5 seconds later")
}

setTimeout(callback, 5000)
  