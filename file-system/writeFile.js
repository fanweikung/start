const fs = require("fs")

const md = `
# This is a new file

We can write text to a file with fs.writeFile

* readdir
* readFile
* writeFile

`

fs.writeFile("./assets/note.md", md.trim(), err => {
    if (err)
    {
        console.error(`${err}`)
    }
    console.log("file saved")
})