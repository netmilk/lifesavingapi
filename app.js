var app = require('express')();

port = process.env.PORT || 3000

app.post('/112', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(201);
  res.send(new Buffer(JSON.stringify({"message": "You will live!"})));
});

var server = app.listen(port)
console.log('Listening on http://localhost:' + port);
