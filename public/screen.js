// make connection 
const socket = io.connect('http://localhost:4000')

socket.on('change', function(data){
  console.log('should be changing to', data);
  document.body.style.backgroundColor = data.color
  document.body.style.backgroundImage = `url(${data.image})`
})