
$(function() {
  // Handler for .ready() called.
	currentStatus();
	currentWeather();
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