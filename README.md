# jquery.facebookLogin
jquery Facebook Login

<h2>How to use</h2>
Insert the script <em>jquery.facebookLogin.js</em> in your page after <a href="http://jquery.com/download/" target="_blank">jQuery</a>.<br/>
Init Facebook login by calling <code>$.facebookLogin.init</code> function, with object containing parameters (see <a href="#user-content-e1">Example 1</a>)<br/>

<h2>Parameters</h2>
<ul>
	<li><em>appId</em>: Your Facebook App Id (required)</li>
	<li><em>success</em>: Callback when login success (optional but useful...)</li>
	<li><em>fail</em>: Callback when login fail (optional)</li>
	<li><em>permissions</em>: Comma separated list of extended Facebook login permissions (optional)</li>
	<li><em>showLogs</em>: Boolean to show logs in console or not (optional)</li>
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