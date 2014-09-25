var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  request('http://192.168.4.150/tstat', function (error, response, body) {
    if (!error && response.statusCode == 200) {

    	var data = JSON.parse(body);
		res.json(data);
    }
  })
});

module.exports = router;
