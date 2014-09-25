
$(function() {
  // Handler for .ready() called.
	currentStatus();
});

function currentStatus(){
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/thermostat'
	})
	.success(function(data){

		$('#curTemp').text(data.temp);
		$('#targetTemp').text(data.t_heat);
	})
}