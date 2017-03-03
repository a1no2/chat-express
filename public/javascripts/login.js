// window.onload = function(){
// 	socket.on('getData', function(data){
// 		console.log("帰ってきた:" + data);
// 	});
// }


function registration(){
	var userData = getUserData();
	console.log(userData);
	var socket = io.connect();
	socket.emit('registration', userData);

	location.href='./chat';
	
}





function getUserData(){
	var userData = [
		document.getElementById("name").value,
		document.getElementById("pass").value
	];
	return userData;
}