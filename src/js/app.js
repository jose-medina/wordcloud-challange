/**
 * @author: 	Jose Luis Medina Burgos
 * @module 		app
 * @description main module that controls the app
 */
var AmpersandApp = require('ampersand-app');
var Router = require('./router.js');
var WordcloudView = require('./views/WordcloudView.js');
var TopicInformationView = require('./views/TopicInformationView.js');
var TopicCollection = require('./collections/TopicCollection.js');
var TopicInformationModel = require('./models/TopicInformationModel.js');

AmpersandApp.extend({
    router: new Router(),
    onWindowLoad: function () {
		var wordcloudView = new WordcloudView({
			el: document.getElementById('wordcloud'),
			collection: new TopicCollection()
		});

		var topicInformationView = new TopicInformationView({
			el: document.getElementById('topic-information'),
			model: new TopicInformationModel()
		});

		this.router.on('route:showTopic', function (id) {
			var topic = wordcloudView.getSubview(decodeURIComponent(id));
			wordcloudView.trigger('newTopicSelected', topic);
			topicInformationView.trigger('newModel', topic.model);
		});

		this.router.history.start({pushState: true, root: ''});
    },
    navigate: function (page) {
        var url = (page.charAt(0) === '/') ? page.slice(1) : page;
        this.router.history.navigate(url, {trigger: true});
    }
});

window.onload = AmpersandApp.onWindowLoad.bind(AmpersandApp);

module.exports = AmpersandApp;