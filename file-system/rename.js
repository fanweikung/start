const fs = require("fs")


// synchronous version
fs.renameSync("./assets/colors.json", "./assets/colorData.json")

// asynchronous version
fs.rename("./assets/note.md", "./storage-files/note.md", err => {
    if (err)
    {
        throw err
    }
})

setTimeout(() => {
fs.unlinkSync("./storage-files/color.md")}, 5000)

// put back
setTimeout(() => {
    fs.renameSync("./assets/colorData.json","./assets/colors.json")}, 5000)
 // put back    
setTimeout(() => {
    fs.renameSync("./storage-files/note.md","./assets/note.md")}, 5000)    

// TODO: should import append.js module to create the color.md file