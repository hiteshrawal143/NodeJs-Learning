//the http.createserver() method includes request and respond parameters is supplied by node.js
//the request object can be used to get information about the current Http request 
//eg. , url , request header, and data
// the response object can be used to send a reponse for a current Http request
//if  the response from the HTTP server is supposed to be displayed as HTML,
//you should include an HTP header with the correct content type:

const http = require("http");
// const url = require("url");

const server = http.createServer((req , res)=>{
    // console.log(req.url);
    if (req.url = "/"){
        res.end("Hello from Hom Sides");
    } else if (req.url = "/about"){
        res.end("Hello from AboutUS Sides");
    }
});

server.listen(8200,"127.0.0.1", ()=>{
    console.log("listening to the port no 8200");
});
