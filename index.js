var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/write', function (req, res) {
  let page = "<form method='post' action='/posts'>" +
             "<input type='text' name='title' />" +
             "<input type='submit' />" +
             "</form>"
  res.send(page);
});

app.post('/posts',function(req,res){
  res.send(req.body.title)

})

app.delete('/posts/:id',function(req,res){
  res.send('DELETE /posts/:id');
})

app.get('/posts/:id', function (req, res) {
let userName = req.params.id
  res.send(`GET /posts/:${userName}`);
});

app.put('/posts/:id',function(req,res){
  let userName = req.params.id

  console.log(`PUT /posts/:${userName}`);
})

app.listen(3000,function(){
  console.log('Running on port 3000....');
})
