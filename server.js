const http = require('http');
const { log } = require('console');

const server = http.createServer((req, res) => {
    console.log("Request Made");
    
    res.setHeader('Content-Type', 'text/html')
    
    res.write("<h1>Hello FavourtheDev</h1>")
    res.end();
});
server.listen(3000, 'localhost', () => {
    console.log("Server is successful");
})