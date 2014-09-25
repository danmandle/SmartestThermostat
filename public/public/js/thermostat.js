
$(function() {
  // Handler for .ready() called.
	currentStatus();
});

function currentStatus(){
	console.log('yo')
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/thermostat'
	})
	.success(function(data){

		console.log(data);
	})
}