function check(){
	var flag = false;
	if (document.loginForm.userName.value == "") {
		flag = true;
	} else if(document.loginForm.pass.value == "") {
		flag = true;
	}

	if (flag) {
		alert("記入漏れがあります。");
		return false;
	}
}




