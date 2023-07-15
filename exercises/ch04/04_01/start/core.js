var path = require("path");
var util = require("util");

const dirUpload = path.join(__dirname, "www", "files", "uploads");
console.log(dirUpload);

util.log(path.basename(__filename));
