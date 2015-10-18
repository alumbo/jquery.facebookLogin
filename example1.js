$.facebookLogin.appId = '{your_app_id}';
$.facebookLogin.callbackConnected = function(userData) {
	console.log('my callback');
	console.log(userData);
};
$.facebookLogin.callbackFail = function(userData) {
	console.log(error);
};
$.facebookLogin.init();