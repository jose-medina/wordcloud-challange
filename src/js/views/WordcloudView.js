var AmpersandView = require('ampersand-view');
var AmpersandApp = require('ampersand-app');
var TopicItemView = require('./TopicItemView.js');
var templates = require('../templates.js');

module.exports = AmpersandView.extend({
	template: templates['src/templates/views/wordcloud.hbs'],
	initialize: function () {
		this.subviews = {};
		this.collection.fetch({reset: true});

		this.listenTo(this.collection, 'reset', this.render);
	},
	onTopicClicked: function (id) {
		AmpersandApp.navigate(id);
	},
	showTopic: function () {
		console.debug(arguments)
	},
	setSubview: function (model) {
		this.subviews[model.get('id')] = this.renderSubview(new TopicItemView({
			model: model
		}), this.el);
	},
	setCurrentSubview: function (topic) {
		this.currentSubview && this.currentSubview.model.set('status', false);
		this.currentSubview = topic;
		this.currentSubview.model.set('status', true);
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