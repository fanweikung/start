const cp = require("child_process")
const { stderr } = require("process")

/* exec is mainly for synchronous process */
//cp.exec("open http://unicodeconsulting.com")
//cp.exec("open -a Terminal .")

cp.exec("lst", (err, data, stderr) => {
    //if (err){throw err} // node js error
    if (err) console.log(stderr) // bash error
    console.log(data)
})

cp.exec("node readStream", (error, data) => {
    if (error){throw error}
    console.log(data)
})