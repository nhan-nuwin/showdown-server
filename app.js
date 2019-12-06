const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = 3001;

const app = express();

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  console.log('User connected', socket.id);
  
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('pingServer', () => {
    socket.emit('pong');
  });


})

server.listen(port, () => console.log(`Listening on port ${port}`))
