const fs = require('fs')

// read a text file synchronously
//const file = fs.readFileSync("./assets/README.md", "utf-8")
//console.log(file)

// read a text file asynchronously
fs.readFile("./assets/README.md", "utf-8", (err, file) => {
    if (err)
    {
        console.error(`${err}`)
        process.exit()
    }
    console.log(file)
})

// read an image/binary file
fs.readFile("./assets/Alex.jpg", (err, img) => {
    if (err){
        console.error(`${err}`)
        process.exit()
    }
    console.log("file content read")
    console.log(img)
})