// Import modules
const http = require('http');
var express = require('express'); // Make sure to run npm install express
var bodyParser = require('body-parser');
const path = require('path');
const spawn = require("child_process").spawn;
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // npm add ejs

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// Use static resources
// https://stackoverflow.com/questions/15316908/how-to-render-css-in-nodejs
app.use('/static', express.static('static'));
// app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile(`${__dirname}/views/index.html`);
})

app.get('/login', function (req, res) {
    res.sendFile(`${__dirname}/views/login.html`);
})

app.get('/signup', function (req, res) {
   res.sendFile(`${__dirname}/views/login.html`);
})

app.get('/patient', function (req, res) {
   res.render('patient');
})

// we shall use this function to make a call to our machine learning model
app.get('/test', function (req, res) {
   const pythonProcess = spawn('python',["test.py", 1, 2]); // cffr: https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js
   pythonProcess.stdout.on('data', (data) => {
      console.log(data.toString());
      res.write(data);
      res.end('end');
   });
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("listening at http://localhost:%s", port)
})
