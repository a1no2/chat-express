function registration(){
	var userData = getUserData();
	console.log(userData);
	var socket = io.connect();
	socket.emit('registration', userData);

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