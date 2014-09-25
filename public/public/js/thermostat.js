
function currentStatus(){
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/thermostat'
	})
	.success(function(data){
		console.log(data);
	})
}