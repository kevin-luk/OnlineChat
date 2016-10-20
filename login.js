$(function() {
		$("$msg").ajaxStart(function() {
		alert("ajaxStart")
		// $(this).html("Loading...");
	});

	$("$msg").ajaxStop(function() {
		alert("ajaxStop")
		// $(this).html("Enjoy!");
	});

	$("#btn-login").click(function() {
		var $username = $("#username"),
				$password = $("#password");

				if ( $username != "" && $password != "" ) {
					alert("transfer to next page");
				} else {
					if ($username == "") {
						alert("username is empty!");
						$username.focus();
					} else {
						alert("password is empty!");
						$password.focus();
					}
				}

	});

})