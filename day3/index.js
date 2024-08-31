const http = require("http");
const fsPromise = require("fs/promises");
const server = http.createServer(async (req, res) => {
  const path = req.url;
  const method = req.method;    


  console.log(new Date(), path, method);


  if (path.includes("file") && method == "GET") {
    var filename = path.split("/index.html").pop();
    console.log(filename);
    const data = await fsPromise.readFile("/" + "index.html");
    res.end(data);
  }


  res.end("data")
});


server.listen(3000, () => {
  console.log("server running");
});