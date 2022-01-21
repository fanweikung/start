// import the EventEmitter class from the events module. Use {} to deconstruct the object??
const {EventEmitter} = require("events")
const firstEmitter = new EventEmitter()

// listener/sub
firstEmitter.on("My First Event", (greeting) => {
    console.log(`${greeting}`)
})

// emit/pub; result false when no listener
console.log(
firstEmitter.emit("My First Event", "Hello")
)
