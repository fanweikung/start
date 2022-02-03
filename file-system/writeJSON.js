const fs = require("fs")
const { stringify } = require("querystring")

let data = { 
    name: "Bob"}

fs.writeFile("name.json", stringify(data), (err) => {
    console.log(`write finished`, err)

})