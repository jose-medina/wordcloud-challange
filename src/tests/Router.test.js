var Router = require('../js/router.js');
var test = require('tape');

test('Test Router', function (t) {
	var router;

	t.comment('\n-------------------------------------');
	t.comment('\n');	

	t.ok(Router, 'router exists');

	t.doesNotThrow(function () {
		router = new Router();
	}, Router, 'the router was initialized');

	t.ok(router.routes[''], 'the root "" is registered');
	t.ok(router.routes['topic/:id'], 'the route "topic/:id" is registered');

	t.comment('\n');

	t.end();
});
