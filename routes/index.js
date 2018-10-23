var express = require('express');
var router = express.Router();
var io = require('./socketIO');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  io.emit('chat message', "Hola Mi amor");
});

io.on('connection', function(socket){

    console.log('a user connected');

    socket.on('chat message', function(msg){
      io.emit('chat message', msg);  
    });
    
  });


module.exports = router;
