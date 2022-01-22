const {EventEmitter} = require("events")

class TicketManager extends EventEmitter{// class declaration shouldn't have ()

    //Even though we declared that TicketManager is a child class of EventEmitter, we still need to call super() to get access to the methods and properties of EventEmitter. The super() function calls the constructor of the parent function, which in this case is EventEmitter.
    //Finally, we create a supply property for the object with this.supply and give it the value passed in by the constructor.
    constructor(supply){
        super()
        this.supply = supply
    }
    buy(email, price){
      if (this.supply > 0) {
          this.supply--
          this.emit("buy", email, price, Date.now())
        }
      else {
          this.emit("error", new Error("There are no more tickets left to purchase"))
        }
      }
    }


module.exports = TicketManager
