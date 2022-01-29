const fs = require("fs")
const { appendFile } = require("./append")

// synchronous version
fs.renameSync("./assets/colors.json", "./assets/colorData.json")
console.log("renamed colors.json to colorData.json synchronously")

// asynchronous version
fs.rename("./assets/note.md", "./storage-files/note.md", err => {
    if (err)
    {
        throw err
    }
    console.log("moved note.md from assets/ to storage-files asynchronously")
})

fs.unlinkSync("./storage-files/color.md")
console.log("delete color.md synchronously")

// put back
setTimeout(() => {
    fs.renameSync("./assets/colorData.json","./assets/colors.json")
console.log("putback colors.json after 3 seconds")}, 3000)
 // put back    
setTimeout(() => {
    fs.renameSync("./storage-files/note.md","./assets/note.md")
console.log("put back note.md after 6 seconds")}, 6000)    

// recreate color.md by calling the appendFile function from append module
setTimeout(() => {
    appendFile()
console.log(`re-added color.md after 9 seconds
all done!`)}, 9000)