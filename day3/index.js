const http = require("http");
const fsPromise = require("fs/promises")

const server = http.createServer((req,res)=>{
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