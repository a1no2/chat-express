function registration(){
	var userData = getUserData();
	console.log(userData);
	var socket = io.connect();
	socket.emit('registration', userData);
	socket.on('getData', function(data){
		console.log("帰ってきた" + data);
	});
	location.href='./chat';
	
}


function login(){

}


function getUserData(){
	var userData = [
		document.getElementById("name").value,
		document.getElementById("pass").value
	];
	return userData;
}