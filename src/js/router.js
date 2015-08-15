var AmpersandRouter = require('ampersand-router');
var WordcloudView = require('./views/WordcloudView.js');
var TopicCollection = require('./collections/TopicCollection.js');

var AppRouter = AmpersandRouter.extend({
	routes: {
		'' : 			'initialize',	// index
		'topic/:id' :   'showTopic'		// show topic with id :id
	},
	initialize: function () {
		console.debug('index');

		var collection = new TopicCollection();
		new WordcloudView({el: document.getElementById('app'), collection: collection});
	},
	showTopic: function (id) {
		console.debug('showTopic' + id);
	}
});

var appRouter = new AppRouter();
appRouter.history.start();

module.exports = appRouter;