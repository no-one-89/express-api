var express = require('express');
var app = express();

app.get('/', function (req, res) {
  let page = "<html>"+
              "<body>"+
                "<h1>index.html</h1>"+
              "</body>"+
            "</html>"
  res.send(page);
});
app.get('/:name', function (req, res) {
  let userName = req.params.name
  let page = "<html>"+
              "<body>"+
                "<h1>"+userName+"的购物车"+"</h1>"+
              "</body>"+
            "</html>"
  res.send(page);
});
app.post('/:name',function(req,res){
  res.send(req.params.name)
})

app.listen(3000,function(){
  console.log('Running on port 3000....');
})
