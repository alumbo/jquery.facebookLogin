# jquery.facebookLogin
Facebook Login with jquery

<h2>How to use</h2>
Insert the script <em>jquery.facebookLogin.js</em> in your page after <a href="http://jquery.com/download/" target="_blank">jQuery</a>.<br/>
Define your appId <code>$.facebookLogin.appId = '{your_app_id}';</code><br/>
Define the connected callback <code>$.facebookLogin.callbackConnected = function(userData) {};</code><br/>
Define the fail callback <code>$.facebookLogin.callbackFail = function(userData) {};</code><br/>
Init Facebook login <code>$.facebookLogin.init();</code><br/>
Call login on button click <code>$.facebookLogin.login();</code><br/>

<h2>Parameters</h2>
<ul>
	<li><em>appId</em>: Your Facebook App Id</li>
	<li><em>showLogs</em>: Boolean to show logs in console or not</li>
	<li><em>callbackConnected</em>: Called when login success</li>
	<li><em>callbackFail</em>: Called when login fail</li>
</ul>


<h2>Examples</h2>

<h3>Example 1</h3>
<code>
	<pre>$.facebookLogin.appId = '{your_app_id}';
$.facebookLogin.callbackConnected = function(userData) {
	console.log('my callback');
	console.log(userData);
};
$.facebookLogin.callbackFail = function(userData) {
	console.log(error);
};
$.facebookLogin.init();</pre>
</code>

<h3>Example 2</h3>
<code>
	<pre>$.facebookLogin.init({
	appId: '{your_app_id}',
	showLogs: false,
	callbackConnected: function(userData) {
		console.log('my callback');
		console.log(userData);
	},
	callbackFail: function(error) {
		console.log(error);
	}
});</pre>
</code>