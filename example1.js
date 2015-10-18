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