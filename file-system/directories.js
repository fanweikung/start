const fs = require("fs")
const { appendFile } = require("./append")

fs.readdirSync("./storage-files").forEach(file =>{
    fs.unlinkSync(`./storage-files/${file}`)
})

fs.rmdir("./storage-files", err => {
    if (err){throw error}
    console.log("storage-files directory removed")
})

//put back directory
setTimeout(() => {
    fs.mkdirSync("./storage-files")
    console.log("re-created storage-files directory after 3 seconds")}, 3000)

//put back file
setTimeout(() => {
    appendFile()
    console.log("re-create color.md file. after 6 seocnds")}, 6000)