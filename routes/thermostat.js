var express = require('express');
var router = express.Router();
var request = require('request');
var client = require('twilio')('ACf1896a377fb540bc9bf586f98654f25e', '8699ddc1138f0039702edf05c05eff5c');

/* GET home page. */
router.get('/', function(req, res) {
  request('http://192.168.4.150/tstat', function (error, response, body) {
    if (!error && response.statusCode == 200) {

    	var data = JSON.parse(body);
		res.json(data);
    }
  })
});

router.post('/sendSMS', function(req, res){
	console.log('starting to send SMS');
	client.sendMessage({

	    to:'+19787588860', // Any number Twilio can deliver to
	    from: '+13036474919', // A number you bought from Twilio and can use for outbound communication
	    body: req.body.msg // body of the SMS message

	}, function(err, responseData) { //this function is executed when a response is received from Twilio
		console.log('done sending SMS', err, responseData)

	    if (!err) { // "err" is an error received during the request, if any

	        // "responseData" is a JavaScript object containing data received from Twilio.
	        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
	        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

	        console.log(responseData.from); // outputs "+14506667788"
	        console.log(responseData.body); // outputs "word to your mother."

	    }
	});
})

module.exports = router;
