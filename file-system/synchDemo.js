const fs = require("fs")

const files = fs.readdirSync("./storage-files")

console.log(`files: ${files}`)
console.log(`this comes after`)