var AmpersandApp = require('ampersand-app');
var Router = require('./router.js');
var WordcloudView = require('./views/WordcloudView.js');
var TopicInformationView = require('./views/TopicInformationView.js');
var TopicCollection = require('./collections/TopicCollection.js');
var TopicModel = require('./models/TopicModel.js');

AmpersandApp.extend({
    router: new Router(),
    onWindowLoad: function () {
		var wordcloudView = new WordcloudView({
			el: document.getElementById('wordcloud'),
			collection: new TopicCollection()
		});

		var topicInformationView = new TopicInformationView({
			el: document.getElementById('topic-information'),
			model: new TopicModel()
		});

		this.router.on('route:showTopic', function (id) {
			var model = wordcloudView.getSubview(id).model;
			topicInformationView.model.set(model.toJSON());
		});

		this.router.history.start({pushState: true, root: ''});
    },
    navigate: function (page) {
        var url = (page.charAt(0) === '/') ? page.slice(1) : page;
        this.router.history.navigate(url, {trigger: true});
    }
});

window.onload = AmpersandApp.onWindowLoad.bind(AmpersandApp);