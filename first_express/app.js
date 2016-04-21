var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

// Initialize our app.
var app = express();

// tell jade which folder the template files will be in.
app.set('views', path.join(__dirname, 'views'));
// Set the view engine
app.set('view engine', 'jade');


// Set the ability to parse json.
app.use(bodyParser.json());
// what is this?
app.use(bodyParser.urlencoded({extended: false}));
// Sets our static page for our css and stuff.
app.use(express.static(path.join(__dirname, 'public')));

// homepage
app.get('/', function(req, res) {
  console.log('!Hello World!');
  res.render('index', {title: 'YEAH'});
});

// about page
app.get('/about', function(req, res) {
  res.render('about');
});

// Tells our application to listen on port 3000.
app.listen(3000);
console.log("Server is running on port 3000.");
