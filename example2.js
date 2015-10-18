$.facebookLogin.init({
	appId: '{your_app_id}',
	showLogs: false,
	callbackConnected: function(userData) {
		console.log('my callback');
		console.log(userData);
	},
	callbackFail: function(error) {
		console.log(error);
	}
});