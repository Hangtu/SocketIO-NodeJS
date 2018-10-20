var io = require('socket.io')(); // yes, no server arg here; it's not required

module.exports = io;

/*module.exports = function (io) {

  var express = require('express');
  var router = express.Router();
    
    function close (){
      return "Hello";
    }
    
    io.on('connection', function(socket){

      var i = 0;
        setInterval(function() {
          io.emit('chat message', "Hello Hang Tu" + i);
           i++;
        }, 5000);


      function getConnectedSockets() {
          return Object.values(io.of("/").connected);
      }

     
        getConnectedSockets().forEach(function(s) {
          s.disconnect(true);
        });
      

        socket.on('chat message', function(msg){
          io.emit('chat message', msg);  
        });
        
      });

      return router;
}*/
