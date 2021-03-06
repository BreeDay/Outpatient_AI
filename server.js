// Import modules
const http = require('http');
var express = require('express'); // Make sure to run npm install express
var app = express();

// Use static resources
// https://stackoverflow.com/questions/15316908/how-to-render-css-in-nodejs
app.use('/static', express.static('static'));

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
   res.sendFile(`${__dirname}/views/patient.html`);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("listening at http://localhost:%s", port)
})
