const fs = require("fs");

// Reading a file

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString())
// })

// Writing a file

// fs.writeFile('./docs/blog1.txt', "HY, FavourtheDev", () => {
//     console.log("File was written");
// })

// fs.writeFile('./docs/blog2.txt', "XUP FavourtheDev", () => {
//     console.log("File was written again");
// })

// Creating directories

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("directory created");
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Directory removed sussesfully");
//     })
// }

// Deleting files

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File deleted");
  });
}
