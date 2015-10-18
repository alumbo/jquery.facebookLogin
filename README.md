# jquery.facebookLogin
jquery Facebook Login

<h2>How to use</h2>
Insert the script <em>jquery.facebookLogin.js</em> in your page after <a href="http://jquery.com/download/" target="_blank">jQuery</a>.<br/>
Init Facebook login by calling <code>$.facebookLogin.init</code> function, with object containing parameters (see <a href="#user-content-e1">Example 1</a>)<br/>

<h2>Methods</h2>
<ul>
	<li><code>init</code>: Load facebook script and try to connect</li>
	<li><code>login</code>: Show facebook login popup</li>
	<li><code>logout</code>: Facebook logout</li>
	<li><code>checkLoginState</code>: Checking the Facebook login state</li>
</ul>

<h2>Parameters</h2>
<ul>
	<li><code>appId</code>: Your Facebook App Id (required)</li>
	<li><code>success</code>: Callback method called when login success (optional but useful...)</li>
	<li><code>fail</code>: Callback method called when login fail (optional)</li>
	<li><code>permissions</code>: Comma separated list of extended Facebook login permissions (optional) - default : 'email'</li>
	<li><code>showLogs</code>: Boolean to show logs in console or not (optional) - default : true</li>
</ul>

<h2>Variables</h2>
<ul>
	<li><code>connected</code>: Is user connected to Facebook</li>
</ul>


<h2>Examples</h2>

<h3 id="e1">Example 1</h3>
<pre><code>$.facebookLogin.init({
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
});</code></pre>

<h3>Example 2</h3>
<pre><code>$.facebookLogin.appId = '{your_app_id}';
$.facebookLogin.showLogs = false;
$.facebookLogin.permissions = 'email,user_birthday';
$.facebookLogin.success = function(userData) {
	console.log('success');
	console.log(userData);
};
$.facebookLogin.fail = function(error) {
	console.log(error);
};
$.facebookLogin.init();</code></pre>