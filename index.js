const express = require('express')
const socket = require('socket.io')

// Set up app
const app = express()
const server = app.listen(4000, function() {
  console.log('listening to requests on port 4000')
})

// static files
app.use(express.static('public'))

// socket setup
const io = socket(server)
io.on('connection', function(socket) {
  console.log('made connection to socket', socket.id)

  socket.on('chat', function(data){
    console.log('chat data', data)
    io.sockets.emit('chat', data)
  })

  socket.on('change', function(data){
    console.log('change to', data)
    io.sockets.emit('change', data)
  })
}) 
