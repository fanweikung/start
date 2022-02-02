const cp = require("child_process")
const { write } = require("fs")

// pass in 2nd and more arg as an array
const questionApp = cp.spawn("node", ["questions.js"])

questionApp.stdin.write("Fan\n")
questionApp.stdin.write("LA\n")
questionApp.stdin.write("Change the world\n")

questionApp.stdout.on("data", data => {
    console.log(`from the Question app: ${data}`)
})

questionApp.on("close", () => {
    console.log("Question app process exited.")
})