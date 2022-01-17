//module.exports = "Fan"

let count = 0

const inc = () => ++count
const dec = () => --count

const getCount = () => count

/*
inc()
inc()
inc()
dec()
console.log(getCount()) */

module.exports = { inc, dec, getCount}