function display_tooltype (){
	$( document ).ready(function() {
		$('#tooltype').toggle();
		$('#password').focus();
		$('#password').val('');
		$('#tooltype input').removeClass('wrong');
	});
}

function Send_password (){
	$( document ).ready(function() {
		password_writting = $('#password').val();
		if(password_writting === "kangourou"){
			window.location.href = 'pages/dashboard.html';
		}else{
			$('#password').val('');
			$('#tooltype input').addClass('wrong');
		}
	});
}