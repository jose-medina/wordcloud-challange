var AmpersandView = require('ampersand-view');
var TopicItemView = require('./TopicItemView.js');
var templates = require('../templates.js');

module.exports = AmpersandView.extend({
	template: templates['src/templates/views/wordcloud.hbs'],
	initialize: function () {
		this.subviews = {};
		this.collection.fetch({reset: true});

		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this, 'newTopicSelected', this._newTopicSelected);
	},
	showTopic: function () {
		console.debug(arguments)
	},
	_newTopicSelected: function (topic) {
		// set status of old active item to false
		this.currentTopic && this.currentTopic.model.set('status', false);
		// set the status of the new active item to true
		this.currentTopic = topic;
		this.currentTopic.model.set('status', true);
	},
	setSubview: function (model) {
		this.subviews[model.get('id')] = this.renderSubview(new TopicItemView({
			model: model
		}), this.el);
	},
	getSubview: function (id) {
		return this.subviews[id];
	},
	render: function () {
		var that = this;

		this.el.innerHTML = this.template();

		this.collection.models.forEach(function (model) {
			that.setSubview(model);
		});
	}
});