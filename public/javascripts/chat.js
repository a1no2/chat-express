var socket;
//鯖からmessageを受けとる準備する
window.onload = function(){
	socket = io.connect();
	socket.on('fromSever_Message', function(data){
		console.log(data.text);
		var list = document.getElementById("chatOrchid");
		var str = document.createTextNode(data.name + ": " + data.text);
		var ls = document.createElement("li");
		ls.appendChild(str);
		list.insertBefore(ls, list.firstChild);
	});
}

// messageを鯖に送る
function send(){
	// var name = document.getElementById('text');
	var name = "名無し";
	var text = document.getElementById('text');
	if (text.value != "") {
		socket.emit('message', {text: text.value, name: name});
		text.value = "";

	}

}

