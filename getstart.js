var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-api');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var personSchema = mongoose.Schema({
    name: String
  });
  var person = mongoose.model('persons', personSchema);
  var peter = new person({ name: 'Perter' });
  console.log(peter.name);
  peter.save()
});
