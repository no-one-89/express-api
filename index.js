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
app.get('/about', function (req, res) {
  let page = "<html>"+
              "<body>"+
                "<h1>about.html</h1>"+
              "</body>"+
            "</html>"
  res.send(page);
});
app.get('/roger', function (req, res) {
  let page = "<html>"+
              "<body>"+
                "<h1>roger.html</h1>"+
              "</body>"+
            "</html>"
  res.send(page);
});

app.listen(3000,function(){
  console.log('Running on port 3000....');
})
