const http = require("http");

http.createServer((req,res)=>{
  res.end("CI/CD Pipeline Working 🚀");
}).listen(3000);
