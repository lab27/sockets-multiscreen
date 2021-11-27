// make connection 
const socket = io.connect('http://localhost:4000')

// dom 
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');


// event
btn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  })
})

socket.on('chat', function(data){
  output.innerHTML += '<p><strong>' + data.handle + ': ' + '</strong>' + data.message + '</p>'
})

socket.on('change', function(data){
  console.log('should be changing to', data);
  document.body.style.backgroundColor = data.color
})