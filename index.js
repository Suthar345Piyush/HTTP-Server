const http = require("http");
const fs = require("fs");

const firstServer = http.createServer((req, res) => {
 const log = `${Date.now()} :${req.url} New Req Received\n`;
 fs.appendFile("log.txt" , log, (err , data) => {
  switch(req.url){
    case "/":
      res.end("HomePage");
      break;
    case "/about":
      res.end("Aboutus");
      break;
    case "/contactUs":
      res.end("ContactUs");
      break;
    default :
      res.end("404 Not Found");
  }
 });

 // we can support multiroute using switch , for panel request always use non blocking request 

});
// this arrow function is responsible for requests to the server 



firstServer.listen(8001, () => console.log("Server Started"));