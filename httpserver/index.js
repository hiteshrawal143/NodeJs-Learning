// note - in this file every different different phase we can check on my Github commit.
//the http.createserver() method includes request and respond parameters is supplied by node.js
//the request object can be used to get information about the current Http request 
//eg. , url , request header, and data
// the response object can be used to send a reponse for a current Http request
//if  the response from the HTTP server is supposed to be displayed as HTML,
//you should include an HTP header with the correct content type:

const http = require("http");
const fs = require("fs");
// const url = require("url");

const server = http.createServer((req , res)=>{
    const data =fs.readFileSync(`${__dirname}/UserData/userapi.json`, "utf-8");
        const objData = JSON.parse(data);
    // console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from Home Sides");
    }else if (req.url == "/about"){
           res.end("Hello from AboutUS Sides");
    }else if (req.url == "/contact"){
        res.end("Hello from contactUS Sides");
    }else if(req.url =="/userapi"){
        res.writeHead(200,{"content-type": "application/json" });
        res.end(objData[0].name);
        }else{
        res.writeHead(404,{"Content-type" : "text/html"});  //Sends a response header to the request. 
        //The status code is a 3-digit HTTP status code, like 404. The last argument, 
        //headers, are the response headers. Optionally one can give a human-readable 
        //statusMessage as the second argument. 
        res.end("<h1> 404 Error Pages, page doen`t exist </h1>")
    }
});

server.listen(8200,"127.0.0.1", ()=>{
    console.log("listening to the port no 8200");
});
