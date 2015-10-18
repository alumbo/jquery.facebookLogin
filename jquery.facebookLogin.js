$.facebookLogin = {
	appId: null,
	showLogs: true,
	permissions: 'email',
	connected: false,
	init: function(params) {
		if(params) {
			for(var param in params) {
				this[param] = params[param];
			}
		}
		this._log('init');
		window.fbAsyncInit = $.proxy(this._onReady, this);
		this._loadScript(document, 'script', 'facebook-jssdk');
	},
	success: function(userData) {
		console.log('Default success callback - Define the callback like this : $.facebookLogin.success = function(userData) { ... };');
		console.log(userData);
	},
	fail: function(error) {
		console.log('Default fail callback - Define the callback like this : $.facebookLogin.fail = function(error) { ... };');
		console.log(userData);
	},
	login: function() {
		if(FB) {
			this._log('login');
			FB.login($.proxy(this.checkLoginState, this), {
				scope: this.permissions,
				return_scopes: true
			});
		}
		else {
			this._log('login fail (Facebook script not loaded) - retry in one second');
			setTimeout($.proxy(this.login, this), 1000);
		}
	},
	logout: function() {
		if(FB && this.connected) {
			this._log('logout');
			FB.logout();
		}
	},
	checkLoginState: function() {
		this._log('checkLoginState');
		FB.getLoginStatus($.proxy(function(response) {
			this._statusChangeCallback(response);
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
			this.connected = true;
			this._onConnected();
		} else if (response.status === 'not_authorized') {
			this._log('not authorized');
			this.connected = false;
			this.fail('not authorized');
		} else {
			this._log('not connected');
			this.connected = false;
			this.fail('not connected');
		}
	},
	_onConnected: function() {
		this._log('onConnected');
		FB.api('/me', $.proxy(function(response) {
			this._log('successful login for: ' + response.name);
			this.success(response);
		}, this));
	}
};