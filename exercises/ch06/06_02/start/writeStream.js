const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/MyFile.txt", "utf-8");
// const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

// writeStream.write("Hello ");
// writeStream.write("World\n");
// process.stdout.write("Hello ");
// process.stdout.write("World\n");

process.stdin.on("data", (data) => {
  writeStream.write(data);
});
// readStream.on("data", (data) => {
//   writeStream.write(data);
// });

process.stdin.pipe(writeStream);
// readStream.pipe(writeStream);
