const TicketManager = require("./ticketManager")
const EmailService = require("./emailService")
const DatabaseService = require("./databaseService")

const ticketManager = new TicketManager(3)
const emailService = new EmailService
const databaseService = new DatabaseService

ticketManager.on("buy", (email, price, timestamp) => {
  console.log("someone bought a ticket")
  emailService.send(email)
  databaseService.save(email, price, timestamp)
})

// handel error grachfully, should be standard practice
ticketManager.on("error", (error) => {
  console.error(`gracefully handel our ${error}`)
})
/*
ticketManager.buy("test@email.com", 10)
ticketManager.buy("test@email.com", 10)
ticketManager.buy("test@email.com", 10)
ticketManager.buy("test@email.com", 10)
*/
console.log(`We have ${ticketManager.listenerCount("buy")} listerner(s) for the buy event`)
console.log(`We have ${ticketManager.listenerCount("error")} listerner(s) for the error event`)

const onBuy = () => {
  console.log("I will be removed soon")
}
// 2nd listener to test "off"
ticketManager.on("buy", onBuy)
console.log(`We added a new listener brnng the total count of the buy event to ${ticketManager.listenerCount("buy")}`)
ticketManager.buy("test@email.com", 20)

// turn off the second listener
ticketManager.off("buy", onBuy) /// the off function requires reference to the callcack function
console.log(`Wwe now have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`)
ticketManager.buy("test@email.com", 20)

// turn off all listener
ticketManager.removeAllListeners("buy")
console.log(`Wwe now have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`)
ticketManager.buy("test@email.com", 20) // when the event is emitted, nothing reacts to it
console.log("the last ticket was bought")
