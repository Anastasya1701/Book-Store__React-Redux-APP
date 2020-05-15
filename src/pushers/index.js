import Pusher from 'pusher-js'

Pusher.logToConsole = true;


let pusher = new Pusher('6e15fb10e06eea04f873', {
    cluster: 'eu',
    forceTLS: true
});

const channel = pusher.subscribe('my-channel');

let socketId;
export const subscribeChannel = () => {
    channel.bind('my-event', function (data) {

        console.log('data', data)
        console.log('An event was triggered with message: ' + data.message)
        return socketId = pusher.connection.socket_id
    })
}
