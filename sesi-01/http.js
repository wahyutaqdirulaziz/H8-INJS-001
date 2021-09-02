const http = require("http")
const port = 3000

http.createServer(function (request, response) {
  response.end("Hello World dari Node JS Server")
}).listen(port)

console.log("Listening on port " + port)