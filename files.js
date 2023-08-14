const fs = require('fs');

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString())
// })

fs.writeFile('./docs/blog1.txt', "HY, FavourtheDev", () => {
    console.log("File was written");
})

fs.writeFile('./docs/blog2.txt', "XUP FavourtheDev", () => {
    console.log("File was written again");
})