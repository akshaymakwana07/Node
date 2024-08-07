
const http = require("http");
const fsPromise = require("fs/promises")

const server = http.createServer(async(req,res)=>{
const path = req.url;
const method = req.method;

console.log(new Date(),path,method)

if(path.includes("file") && method == "GET"){
    const filename = path.split("/").pop();
    console.log(filename);
    const data = await fsPromise.readFile("./" + filename)
    res.end(data)
}
});

server.listen(7878,()=>{
    console.log("server running");

  
   
});


// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// http.createServer(function (req, res) {

//     if(req.url === '/index.html') {
//         const filepath = path.join(__dirname, 'index.html')

//         fs.readFile(filepath, function (err, data) {
//             if(err){
//                 res.writeHead(500, {'Content-Type' : 'text/plain'});
//                 res.write("Internal Server Error");
//                 res.end()
//             }
//             else{
//                 res.writeHead(200, {'Content-Type' : 'text/html'});
//                 res.write(data)
//                 res.end()
//             }
//         })
//     }
//     else{
//         res.writeHead(200, {'Content-Type' : 'text/html'});
//         res.write("Royal Challengers Bangalore &nbsp;");
//         res.write(req.url);
//         res.end();
//     }

   
// }).listen(8080, ()=> {
//     console.log("Server is running on 8080 port")
// })
