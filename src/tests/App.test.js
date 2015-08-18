var AmpersandApp = require('../js/app.js');
var Router = require('../js/router.js');
var test = require('tape');

test('Test App js', function (t) {
	t.comment('\n-------------------------------------');
	t.comment('\n');

	t.ok(AmpersandApp, 'app js exists');

	t.doesNotThrow(function () {
		AmpersandApp.router
	}, Router, 'the router was initialized');

	t.ok(AmpersandApp.onWindowLoad, 'onWindowLoad exists');

	t.ok(AmpersandApp.navigate, 'navigate exists');

	t.throws(function () {
		AmpersandApp.onWindowLoad();
	}, Error, 'but throws an exception cause this topic does not exist');

	t.throws(function () {
		AmpersandApp.navigate('topic/id');
	}, Error, 'navigate to topic/id but throws an exception cause this topic does not exist');

	t.comment('\n');

	t.end();
});
