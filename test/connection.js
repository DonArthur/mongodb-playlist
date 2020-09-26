const mongoose = require('mongoose');

//Connect to mongoDB
mongoose.connect('mongodb://localhost/TestDB');

mongoose.connection.once('open', function() {
   console.log('Connection has been made'); 
}).on('error', function(err) {
    console.log('Connection error: ' + err);
});