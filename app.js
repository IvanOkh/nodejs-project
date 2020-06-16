const http = require("http");

//we can use event driven apporach
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
