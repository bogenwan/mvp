var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('../client'));


app.get('/search', function(req, res) {

});

app.post('/add', function(req, res) {

});

app.delete('/delete', function(req, res) {

});








app.listen(port, function() {
  console.log('listening to ', port);
});
