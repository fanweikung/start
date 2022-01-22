const TicketManager = require("./ticketManager")
const ticketManager = new TicketManager(10)

ticketManager.on("buy", () => {
    console.log("someone bought a ticket")
})

ticketManager.buy("test@email.com", 20)
ticketManager.buy("test@email.com", 20)

// When you add a listener you can only capture events that come after.
ticketManager.once("buy", () => {
  console.log("This only gets called once")
})

ticketManager.buy("test@email.com", 20)
ticketManager.buy("test@email.com", 20)
