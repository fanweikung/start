const fs = require("fs")

/*
fs.readdir("./storage-files", (err, data) => {
    if (err)
    {throw err}
    console.log(`files: ${data}`)
})*/

/* use the old way to write function */
function phonenumber(err, data){
    //if (err){throw err}
    if(err){console.error(`${err}`)}
    console.log(`files:${data}`)
}
fs.readdir("./storage-files", phonenumber)

console.log(`this comes after`)
