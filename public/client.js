// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  var socket = io("http://localhost:8123");
  socket.on('count', function(count){
    console.log(count);
    $('#count').html(count);
  });

});
