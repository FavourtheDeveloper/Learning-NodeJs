const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding : 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => {
//     console.log("-----NEW CHUNK-----");
//     console.log(chunk)
//     writeStream.write("\n New Chucnk \n")
//     writeStream.write(chunk)
// })

// Same as this below. It does the same thing...
readStream.pipe(writeStream);