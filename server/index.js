var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// 关闭同源策略，开放CORS
var cors = require('cors')
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/digicity-express-api');

var Post = require('./models/post')
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('database start success!')
});

app.get('/posts', function (req, res) {
  Post.find().exec(function(err, posts) {
    res.json({ posts: posts})
  });
});

app.get('/post/:id', function (req, res) {
  Post.findOne({_id:req.params.id}).exec(function(err, posts) {
   res.json({post:posts});
 })
  // res.send(req.params.id)
});

app.put('/post/:id', function (req, res) {
  Post.update({_id:req.params.id},{$set:{title:req.body.title,category:req.body.category,content:req.body.content}}).exec(function(err, posts) {
   res.json({post:posts});
   if(err) return console.log(err);
   console.log('saved!');
 })
});
//
app.delete('/post/:id', function (req, res) {
  console.log('delete');
  Post.remove({_id:req.params.id}).exec(function(err, posts) {
   res.json({post:posts});
 })

});

app.post('/posts',function(req,res){
  // res.send('The post title is : '+req.body.title)
  var post = new Post({title:req.body.title,category:req.body.category,content:req.body.content})
  post.save(function(err){
    // console.log(req.body);
    // 异步执行
    if(err) return console.log(err);
    console.log('saved!');
   });
   res.json({message:'成功'})
 // res.redirect('http://www.baidu.com')
})

// app.put('/posts/:id',function(req,res){
//   let userName = req.params.id
//
//   console.log(`PUT /posts/:${userName}`);
// })
// app.delete('/posts/:id',function(req,res){
//   res.send('DELETE /posts/:id');
// })
app.listen(3000,function(){
  console.log('Running on port 3000....');
})
