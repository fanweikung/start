const EventEmitter = require("events")


class ClassManager extends EventEmitter{
    constructor (seats) {
        super()
        this.seats = seats
    }
    signup (name){
        if (this.seats > 0)
        {
        
        this.seats--
        this.emit("signup", name, this.seats)
        }
        else
        {
            this.emit("error", new Error("There is no seats left in the class"))
        }
    }
}

const eventEmitter = new ClassManager(3)

eventEmitter.on("signup", (name, seats) => {
    console.log(`${name} just signed up, the class has ${seats} left.`)
})

eventEmitter.on("error", (error) => {
    console.error(`Gracefully handle error: ${error}`)
})

eventEmitter.signup("Fan")
eventEmitter.signup("Addy")
eventEmitter.signup("Kelly")
eventEmitter.signup("July")

/* 
console.log(
    eventEmitter.emit("signup", "Fan")
) 
*/