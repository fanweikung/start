const fs = require("fs")

let data = require("./data.json")
// prove this is an object by accessing its property
console.log(data.name)


fs.readFile("./data.json", "utf-8", (err, data) => {
    if (err)
    {throw err}
    // undefined if trying to access its name property
    // console.log(data.name)
    data = JSON.parse(data)
    console.log(data.name)
})

