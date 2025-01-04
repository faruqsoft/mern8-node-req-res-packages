/*
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("this is home page")
    }
      if (req.url === "/login") {
        res.end("this is login page")
    }
      if (req.url === "/contact") {
        res.end("this is contact page")
    }
      if (req.url === "/service") {
        res.end("this is service page")
    }

})

server.listen(8080, () => {
    console.log(`Server started at http://localhost:8080`);
});
*/

/*
const http = require("http");
const server = http.createServer((req, res) => {
    let method = req.method;
   if( req.method === "GET" ) {
       res.end("this is get request")
       console.log(`tis is for ${res.statusCode}: ${res.statusMessage}`);
   }
   if (req.method === "POST") {
       res.end("this is post request");
   }
   if (req.method === "PUT") {
       res.end("this is put request");
   }
   if (req.method === "DELETE") {
       res.end("this is deleted request");

   }
   if (req.method === "PATCH") {
       res.end("this is patch request");
   }
})


server.listen(3000, ()=>{
    console.log("Server started on port at http://localhost:3000");
});

*/

const http = require('http');
const server =  http.createServer((req, res) => {
    res.statusCode = 200;//status code apply
    res.setHeader("MERN-BATCH", " EIGHT");//response send by headers
    res.end('helo');
})



server.listen( 4000, ()=>{
    console.log( `Server started on port at http://localhost:4000` );
})
