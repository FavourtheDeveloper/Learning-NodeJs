const http = require('http');
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {

    // lodash
    const num = _.random(0, 20);
    console.log(num);
    
    res.setHeader('Content-Type', 'text/html')

    let path = './views/';
    if (req.url == '/') {
        path += 'index.html';
        res.statusCode = 200;
    } else if (req.url == '/about') {
        path += 'about.html';
        res.statusCode = 200;
    } else if (req.url == '/aboutme') {
        res.statusCode = 301;
        res.setHeader('Location', '/about')
        res.end()
    } else {
        path += '404page.html';
        res.statusCode = 404;
    }
    
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            res.end(data);
        }
    })
});
server.listen(3000, 'localhost', () => {
    console.log("Server is successful");
})