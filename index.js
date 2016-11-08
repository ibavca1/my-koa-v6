require('babel-register')({presets: [ 'es2016' ]});
require("babel-polyfill");

var app = require('./server').default;


app.listen(3000, function(){
    console.log('Server start on localhost port:', 3000);
});

