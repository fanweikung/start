const fs = require("fs")

// read directory synchronously
//console.log(`started reading the files`)
const files = fs.readdirSync("./assets") // synch will block js to continue execute
console.log(`complete`)
console.log(files)
console.log(`started reading the files: executed after files are read synchronously

`)

// read directory with callback function asynchronously 
fs.readdir("./assets", (err, files) => {
    if (err){
        throw err
    }
    console.log(`complete`)
    console.log(files)
})
console.log("started reading the files: executed before the files are read asynchronously")
    



