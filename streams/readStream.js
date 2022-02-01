const fs = require("fs")
const readStream = fs.createReadStream("../assets/lorum-ipsum.md", "utf-8")

let fileTxt = ""

console.log("Type something...")
//process.stdin.on("data", data => {
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`)
  fileTxt += data
})

readStream.once("data", data => {
    console.log(data)
})

readStream.on("end", data => {
    console.log("Finished reading file")
    console.log(`In total I read ${fileTxt.length -1} characters`)

})