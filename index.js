

const http = require('http')
const port = 3001

const  requestHandler = (request, response) => {
    console.log(request.url)
    console.log(request.method)
    console.log(request.headers)

    response.writeHead(200, {'Content-Type': 'text/plain' })
    response.end('Our Common Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if(err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
