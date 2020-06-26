const http = require("http");

//we can use event driven apporach
const server = http.createServer((req, res) => {
  console.log(req);
});
//startup on port 3000
console.log("Up and running on localhost:3000");
server.listen(3000);
