var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// index and users directories
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// views engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set static files dir
app.use(express.static(path.join(__dirname, 'public')));

// middleware (body-parser)
// parse x-www-form-urlencoded & json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// index and users routes
app.use('/', index);
app.use('/api', users);

// run server
app.listen(3000, ()=>{console.log('Server started on port 3000')});
