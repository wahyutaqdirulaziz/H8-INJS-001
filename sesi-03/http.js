const http = require("http")
const port = 3000
const fs = require("fs")

http.createServer(function (request, response) {
  // Konvensi
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  fs.readFile("./index.html", "utf-8", (err, data) => {
    if(err) {
      console.log(err)
    } else {
      console.log(data)
      let html = data
      response.write(html) // Sync
      response.end()
    }
  })
}).listen(port)

// 90% Async
// functionOrMethod(() => {})
// janji.then().catch()

console.log("Listening on port:", port)