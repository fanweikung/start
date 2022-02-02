const fs = require("fs")
const writeStream = fs.createWriteStream("../assets/myFile.txt", "utf-8")
const readStream = fs.createReadStream("../assets/lorum-ipsum.md")
//process.stdout.write("Hello")
//process.stdout.write(" World\n")
/*
writeStream.write("Hello")
writeStream.write(" Word\n")
process.stdin.on("data", data => {
    writeStream.write(data)
})*/
/*
readStream.on("data", data => {
    writeStream.write(data)
})*/

//process.stdin.pipe(writeStream)

// essentailly copy the file
readStream.pipe(writeStream)