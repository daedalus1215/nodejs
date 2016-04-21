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
  console.log('Received request for homepage.');
  res.render('index', {title: 'Computer Not Working?'});
});

// about page
app.get('/about', function(req, res) {
  console.log('Received request for about page.');
  res.render('about');
});

// contact page
app.get('/contact', function(req, res) {
  console.log('Received request for contact page.');
  res.render('contact');
});

app.post('/contact/send', function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'yahoo', 
    auth: {
      user: 'ladams1776@yahoo.com',
      pass: ''
    }
  });
  
  var mailOptions = {
    from: 'Larry Adams <ladams1776@yahoo.com>',
    to: 'ladams14641@yahoo.com',
    subject: 'Testing website submission',
    text: 'You have a submission with the following details... Name: '+req.body.name+' Email: '+req.body.email+'Message: '+req.body.message,
    html: '<p>You have a submission with the following details... Name: '+req.body.name+' Email: '+req.body.email+'Message: '+req.body.message+'</p>'
  };
  
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message Sent: '+info.response);
      res.redirect('/');
    }
    transporter.close();
  });
});


// Tells our application to listen on port 3000.
app.listen(3000);
console.log("Server is running on port 3000.");
