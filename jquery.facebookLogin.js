$.facebookLogin = {
	appId : null,
	showLogs : true,
	init:function(params) {
		if(params) {
			for(var param in params) {
				this[param] = params[param];
			}
		}
		this._log('init');
		window.fbAsyncInit = $.proxy(this._onReady, this);
		this._loadScript(document, 'script', 'facebook-jssdk');
	},
	callbackConnected:function(userData) {
		console.log('Default connected callback - Define the callback like this : $.facebookLogin.callbackConnected = function(userData) { ... };');
		console.log(userData);
	},
	callbackFail:function(error) {
		console.log('Default fail callback - Define the callback like this : $.facebookLogin.callbackFail = function(error) { ... };');
		console.log(userData);
	},
	login:function() {
		if(FB) {
			this._log('login');
			FB.login();
		}
		else {
			this._log('login fail (Facebook script not loaded) - retry in one second');
			setTimeout($.proxy(this.login, this), 1000);
		}
	},
	checkLoginState: function() {
		this._log('checkLoginState');
		FB.getLoginStatus($.proxy(function(response) {
			this.statusChangeCallback(response);
		}, this));
	},
	_log: function(message) {
		if(this.showLogs) console.log('$.facebookLogin ' + message);
	},
	_loadScript: function(d, s, id) {
		this._log('loadScript');
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	},
	_onReady: function() {
		this._log('onReady');
		if(!this.appId) {
			console.log('appId undefined - Define your Facebook app id like this : $.facebookLogin.appId = \'{your_app_id}\';');
			return false;
		}
		FB.init({
			appId      : this.appId,
			cookie     : true,
			xfbml      : true,
			version    : 'v2.2'
		});
		FB.getLoginStatus($.proxy(function(response) {
			this._statusChangeCallback(response);
		}, this));
	},
	_statusChangeCallback: function(response) {
		this._log('statusChangeCallback');
		if (response.status === 'connected') {
			this._onConnected();
		} else if (response.status === 'not_authorized') {
			this._log('not authorized');
			this.callbackFail('not authorized');
		} else {
			this._log('not connected');
			this.callbackFail('not connected');
		}
	},
  	_onConnected: function() {
		this._log('onConnected');
		FB.api('/me', $.proxy(function(response) {
			this._log('successful login for: ' + response.name);
			this.callbackConnected(response);
		}, this));
  	}
};