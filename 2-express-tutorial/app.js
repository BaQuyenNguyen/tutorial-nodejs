const http = require('http')

var server = http.createServer((req, res) => {
    res.writeHead(200, 'content-type', 'text/plain')
    res.write('<h1>Home Page</h1>')
    res.end()
})

server.listen(5000)