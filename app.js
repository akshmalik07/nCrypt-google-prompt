var path = require('path');
var express = require('express');
var app = express();
const port=process.env.PORT||3000

var htmlPath = path.join(__dirname, 'html');

app.use(express.static(htmlPath));

app.listen(port, function(){
    console.log('Port started')
})