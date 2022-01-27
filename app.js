// const name = require("./myModule")
// console.log(name)

const counter = require("./myModule")
counter.inc()
counter.inc()
counter.inc()
counter.dec()
console.log(counter.getCount())

/* destructure the functions; no need to preface */
const {inc, dec, getCount} = require("./myModule")
inc()
inc()
dec()
console.log(getCount())
