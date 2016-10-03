var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/digicity-express-api');

var Post = require('./models/post')
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('database start success!')
});

app.get('/', function (req, res) {
  // res.redirect('https://www.google.com.hk')
  let page = "<form method='post' action='/posts'>" +
             "<input type='text' name='title' placeholder='请输入Title' />" +
             "<input type='submit' />" +
             "</form>"
  res.send(page);
});

app.get('/posts', function (req, res) {
  Post.find().exec(function(err, posts) {
   res.send(posts);
 })
});

app.post('/posts',function(req,res){
  // res.send('The post title is : '+req.body.title)
  var post = new Post({title:req.body.title})
  post.save(function(err){
    // 异步执行
    if(err) console.log(err);
    console.log('saved!');
   });
   res.redirect('/posts')

})

app.put('/posts/:id',function(req,res){
  let userName = req.params.id

  console.log(`PUT /posts/:${userName}`);
})
app.delete('/posts/:id',function(req,res){
  res.send('DELETE /posts/:id');
})
app.listen(3000,function(){
  console.log('Running on port 3000....');
})
