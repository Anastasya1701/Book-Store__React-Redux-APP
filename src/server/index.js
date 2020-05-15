// const Pusher = require('pusher');
// const http = require('http')

// const hostname = '127.0.0.1'
// const port = '3000'

// const pusher = new Pusher({
//     appId: '980609',
//     key: '6e15fb10e06eea04f873',
//     secret: '6fc53ffbd56204368e8b',
//     cluster: 'eu',
//     forceTLS: true
//   });

// const requestHendler = (request, response) => {

//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');

//      response.end('Re-store server connected')
// }

// const server = http.createServer(requestHendler);

// const data = JSON.stringify({
//     todo: 'Buy the milk'
// })

// const options = {
//     hostname: '127.0.0.1',
//     port: '3000',
//     path: '/trigger',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Content-Length': data.length
//     }
//   }

// const req = http.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`)

//     const socketId =request.body.socket_id;
//     pusher.trigger('my-channel', 'my-event',
//     { "message": "Pusher on our own server on Node.js" },
//     socketId)

//     res.on('data', d => {
//       process.stdout.write(d)
//     })
//   })

//   req.on('error', error => {
//     console.error(error)
//   })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

//
// app.post('/trigger', function(req, resp) {
//     const socketId = req.body.socket_id
//     console.log('socketId', socketId)
//     // pusher.trigger('my-channel', 'my-event',
//     //     { message: "Pusher on our own server on Node.js" },
//     //     socketId)
// })
//


let express = require( 'express' );
const http = require('http')
let Pusher = require( 'pusher' );
const logger = require('morgan');
const bodyParser = require('body-parser')
const router = require('express').Router();

let app = express();
app.use(bodyParser.json())

let pusher = new Pusher({
    appId: '980609',
    key: '6e15fb10e06eea04f873',
    secret: '6fc53ffbd56204368e8b',
});

router.post( '/trigger', function( req, res ) {
    let socketId = req.body.socket_id;
    console.log('socketId', socketId)
    pusher.trigger( 'my-channel', 'my-event', { message: "hello world" }, socketId );
} );

const hostname = '127.0.0.1'
let port = 3001


const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
