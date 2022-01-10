// import the server and start it!
const http = require("http"); // built in node.js module to handle http traffic

const port = 3000; // a port we'll use to watch for traffic

const server = http.createServer((req, res) => {
    // creates our server
    res.statusCode = 200; // http status code returned to the client
    res.setHeader("Content-Type", "text/plain"); // inform the client that we'll be returning text
    res.end("Hello World from Node\n"); // end the request and send a response with the specified message
});

server.listen(port, () => {
    // start watching for connections on the port specified
    console.log(`Server running on port ${port}/`);
});

//Run CMD
//  node index.js 
//  npm init -y
//  yarn add express
