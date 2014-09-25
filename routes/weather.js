var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  request('https://api.forecast.io/forecast/41a60913b906e685e92c7d78be124d2a/40.0169682,-105.2734373', function (error, response, body) {
    if (!error && response.statusCode == 200) {

    	var data = JSON.parse(body);
		res.json(data);
    }
  })
});

module.exports = router;
