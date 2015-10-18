# jquery.facebookLogin
jquery Facebook Login

<h2>How to use</h2>
Insert the script <em>jquery.facebookLogin.js</em> in your page after <a href="http://jquery.com/download/" target="_blank">jQuery</a>.<br/>
Init Facebook login by calling <code>$.facebookLogin.init</code> function, with object containing parameters (see <a href="#user-content-e1">Example 1</a>)<br/>

<h2>Parameters</h2>
<ul>
	<li><em>appId</em>: Your Facebook App Id (required)</li>
	<li><em>callbackConnected</em>: Called when login success (optional but useful...)</li>
	<li><em>callbackFail</em>: Called when login fail (optional)</li>
	<li><em>showLogs</em>: Boolean to show logs in console or not (optional)</li>
</ul>


<h2>Examples</h2>

<h3 id="e1">Example 1</h3>
<pre><code>$.facebookLogin.init({
	appId: '{your_app_id}',
	callbackConnected: function(userData) {
		console.log('my callback');
		console.log(userData);
	},
	callbackFail: function(error) {
		console.log(error);
	}
});</code></pre>

<h3>Example 2</h3>
<pre><code>$.facebookLogin.appId = '{your_app_id}';
$.facebookLogin.showLogs = false;
$.facebookLogin.callbackConnected = function(userData) {
	console.log('my callback');
	console.log(userData);
};
$.facebookLogin.callbackFail = function(error) {
	console.log(error);
};
$.facebookLogin.init();</code></pre>