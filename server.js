// Import modules
const http = require('http');
var express = require('express'); // Make sure to run npm install express
var bodyParser = require('body-parser');
const path = require('path');
const spawn = require("child_process").spawn;
var app = express();

const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // npm add ejs

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// Use static resources
// https://stackoverflow.com/questions/15316908/how-to-render-css-in-nodejs
app.use('/static', express.static('static'));
// app.use(express.static('public'));

app.get('/', function (req, res) {
   //res.sendFile(`${__dirname}/views/index.html`);
   res.render('index');
})

app.get('/login', function (req, res) {
   //res.sendFile(`${__dirname}/views/login.html`);
   res.render('login');

})

app.get('/signup', function (req, res) {
   //res.sendFile(`${__dirname}/views/login.html`);
   res.render('login');
})

app.get('/patient', function (req, res) {
   const welcomeText = "Welcome from EJS!";
   const testCollection = ["Pie", "Cake", "Cupcakes"];
   const isOrganization = false; // else user

   if (isOrganization) {
      // get org's users as json.
      res.render('org', viewData);
   } else {
      const viewData = {
         username : "caleb",
         welcomeText: welcomeText,
         testCollection: testCollection
      }
      res.render('patient', viewData);
   }

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

app.get('/query', function(req, res) {
   const cityRef = db.collection('cities').doc('SF');
   const doc = cityRef.get();
   if (!doc.exists) {
   console.log('No such document!');
   } else {
   console.log('Document data:', doc.data());
   }
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("listening at http://localhost:%s", port)
})


// References for firestore

// const data = {
//    name: 'Los Angeles',
//    state: 'CA',
//    country: 'USA'
//  };
//  const res = db.collection('cities').doc('LA').set(data);

//  const cityRef = db.collection('cities').doc('TA');
//  const res2 = cityRef.set({
//    capital: false
//  }, { merge: false });
