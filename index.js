var express = require('express');
var app = express();
app.listen(3000);

var rout = require('./rout');

app.use('/birds', rout);