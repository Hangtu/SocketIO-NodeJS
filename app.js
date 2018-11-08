var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

/*
 function isiPhone(){
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    }
    var lostFocus = function() {
        setTimeout(function(){
        var value = $('#citi-autocomplete-content-searchbox-livesearch').val();
            $('#citi-autocomplete-content-searchbox-livesearch').val('').focus().val(value);},-1);
    };
    if(isiPhone()){
        $('body').on('blur','#citi-autocomplete-content-searchbox-livesearch', function(e){   
         $(this).focus();
         e.stopImmediatePropagation();
         e.preventDefault();   //prevent the click from jumping esp on hashes
        //lostFocus();
         e.stopPropagation();
       });
    }
*/