$.facebookLogin.appId = '{your_app_id}';
$.facebookLogin.showLogs = false;
$.facebookLogin.success = function(userData) {
	console.log('success');
	console.log(userData);
};
$.facebookLogin.fail = function(error) {
	console.log(error);
};
$.facebookLogin.init();