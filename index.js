var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/peter', function (req, res) {
  console.log('Hello PPPPeter!');
});
app.get('/roger', function (req, res) {
  console.log('Hello RRRRoger!');
});

app.listen(3000,function(){
  console.log('Running on port 3000....');
})
