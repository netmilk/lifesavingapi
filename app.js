var app = require('express')();

port = process.env.PORT || 3000

app.post('/912', function (req, res) {
  res.status(201).json({"message": "You will live!"});
});

var server = app.listen(port)
console.log('Listening on http://localhost:' + port);
