var express = require('express');
var app = express();

app.get('/posts', function (req, res) {
  // let page = "<html>"+
  //             "<body>"+
  //               "<h1>index.html</h1>"+
  //             "</body>"+
  //           "</html>"
  res.send('GET /posts');
});

app.get('/posts/:id', function (req, res) {
let userName = req.params.id
  res.send(`GET /posts/:${userName}`);
});

app.put('/posts/:id',function(req,res){
  let userName = req.params.id

  console.log(`PUT /posts/:${userName}`);
})

app.post('/posts',function(req,res){
  res.send('POST /posts');
})

app.delete('/posts/:id',function(req,res){
  res.send('DELETE /posts/:id');
})

app.listen(3000,function(){
  console.log('Running on port 3000....');
})
