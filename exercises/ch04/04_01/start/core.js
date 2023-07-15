var path = require("path");
var util = require("util");
var { getHeapStatistics } = require("v8");

const dirUpload = path.join(__dirname, "www", "files", "uploads");
console.log(dirUpload);

util.log(dirUpload);
util.log(path.basename(__filename));
util.log(getHeapStatistics());
