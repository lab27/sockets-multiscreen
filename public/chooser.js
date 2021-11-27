// make connection 
console.log('i am chooser');
const socket = io.connect('http://localhost:4000')

// dom 
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');

// event
red.addEventListener('click', function() {
  socket.emit('change', {
    color: 'red',
    image: '1.jpg'
  })
})
green.addEventListener('click', function() {
  socket.emit('change', {
    color: 'green',
    image: '3.jpg'
  })
})
blue.addEventListener('click', function() {
  socket.emit('change', {
    color: 'blue',
    image: '2.jpg'
  })
})
yellow.addEventListener('click', function() {
  socket.emit('change', {
    color: 'yellow',
    image: '4.jpg'
  })
})

socket.on('change', function(data){
  document.body.style.backgroundColor = data.color
})