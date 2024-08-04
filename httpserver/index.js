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
    // console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from Home Sides");
    }else if (req.url == "/about"){
           res.end("Hello from AboutUS Sides");
    }else if (req.url == "/contact"){
        res.end("Hello from contactUS Sides");
    }else if(req.url =="/userapi"){
        fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err , data)=> {
            console.log(data);
            // res.end("Hello from userAPI Sides");
            res.end(data);
        });
    }
    else{
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
