var app = require('express')();

port = process.env.PORT || 3000

//app.post('/rescue', function (req, res) {
//  res.json({"message": "You will live!"});
//})

var server = app.listen(port)
console.log('Listening on http://localhost:' + port);
