var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-api');



var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var userSchema = mongoose.Schema({
    name: String,
    password: String,
    age: String
  })
  var User = mongoose.model('user', userSchema);
  // cat 是实际数据库中记录的名字
  // var peter = new User({ name: 'Flower', password: '111', age: '33' });
  // 成功构建一条数据记录
  // peter.save()

  User.findById({_id: '57edc840419a230e386c8ae2'}, function(err, user) {
     user.age = 'rrrrr'
     user.save(function(err){
       console.log('更新了！')
        User.find().exec(function(err, users) {
         // 异步执行
         console.log(users);
       });
    });
   });
   console.log("我先出来了")
  // User.findById({_id: '57edc0c69b2cdb0b7a8d5b27'}, function(err, user) {
  //     user.remove(function(err){
  //       console.log('删除了！')
  //       User.find().exec(function(err, users) {
  //         // 异步执行
  //         console.log(users);
  //       });
  //     });
  //   });
});
