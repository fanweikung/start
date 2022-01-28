const events = require("events")

const emitter = new events.EventEmitter

// listener
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message} `)
})

// pass user input data to emitter
process.stdin.on("data", data => {
    const input = data.toString().trim()
    if (input === "exit")
    {
        emitter.emit("customEvent", "Googdbye!", "process")
        process.exit()
    }
    else{
        emitter.emit("customEvent", input, "terminal")
    }
})

emitter.emit("customEvent", "Hello", "Computer")
emitter.emit("customEvent", "This is fun", "Fan-Wei")
