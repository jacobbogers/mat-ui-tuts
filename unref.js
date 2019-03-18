
const dgram = require('dgram');

const socket  = dgram.createSocket('udp4');
// dont bind or send, unless the socket gets "unreffed" will the systemt go down


console.log('socket bounded, shouldnt exit');s

setTimeout(()=> {
    socket.unref();
    console.log("socket unreffed");
}, 10000);