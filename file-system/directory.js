const fs = require("fs")


if (fs.existsSync("storage-files")) {
    console.log("already exists")
}
else{
    fs.mkdir("storage-files", err => {
        if (err){
            console.error(`${err}`)
        } 
        else
        console.log("directory created")
    })
}