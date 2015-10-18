$.facebookLogin.init({
	appId: '{your_app_id}',
	success: function(userData) {
		console.log('success');
		console.log(userData);
	},
	fail: function(error) {
		console.log(error);
	}
});

$('#facebook-login').bind('click', function() {
	$.facebookLogin.login();
});

$('#facebook-logout').bind('click', function() {
	$.facebookLogin.logout();
});