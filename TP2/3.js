const http = require('http');
const fs = require('fs');

// Request handler 
const requestListener = function (req, res) {
    // Read file and show content in response
    fs.readFile(__dirname + '/test.txt', function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
};

// Create server and add request handler in callback
const server = http.createServer(requestListener);

// Listen server on 1337 port
server.listen(1337, "localhost", () => {
    console.log(`Server is running`);
});