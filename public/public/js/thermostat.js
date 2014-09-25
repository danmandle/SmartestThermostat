
$(function() {
  // Handler for .ready() called.
	currentStatus();
	currentWeather();
});

function currentStatus(){
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/thermostat'
	})
	.success(function(data){

		$('#curTemp').text(data.temp);
		$('#targetTemp').text(data.t_heat);
		var currentTemp = $("#extTemp").text();
		if( currentTemp != '' ){
			var tempDiff = data.temp-currentTemp;
			tempDiffRound = Math.round( tempDiff * 10) / 10;

			$("#tempDiff").text(tempDiffRound + " degrees colder ");
			$("#openClose").text(" open ");
		}
	})
}


function currentWeather(){
	console.log('getting weather')
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/weather'
	})
	.success(function(data){

		console.log(data);
		var currentTemp = data.hourly.data[0].apparentTemperature;
		var tempOneHour = data.hourly.data[1].apparentTemperature;
		var tempTwoHours = data.hourly.data[2].apparentTemperature;
		$("#extTemp").text(currentTemp);
		$("#extTempOneHour").text(tempOneHour);
		$("#extTempTwoHours").text(tempTwoHours);
	})
}