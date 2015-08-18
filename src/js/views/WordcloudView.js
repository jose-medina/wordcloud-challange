/**
 * @author: 	Jose Luis Medina Burgos
 * @module 		wordcloudView
 * @description word cloud view that renders the different 
 				topics and control which one is selected
 */
var AmpersandView = require('ampersand-view');
var TopicItemView = require('./TopicItemView.js');
var templates = require('../templates.js');

module.exports = AmpersandView.extend({
	/**
	* view template
	*/
	template: templates['src/templates/views/wordcloud.hbs'],
	/**
	* initialize the view, fetch the collection and bind event listeners
	*/
	initialize: function () {
		this.subviews = {};
		this.collection.fetch({reset: true});

		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this, 'newTopicSelected', this._newTopicSelected);
	},
	/**
	* set the current topic when a new one is selected
	*/
	_newTopicSelected: function (topic) {
		// set status of old active item to false
		this.currentTopic && this.currentTopic.model.set('status', false);
		// set the status of the new active item to true
		this.currentTopic = topic;
		this.currentTopic.model.set('status', true);
	},
	/**
	* instantiate and cache a new subview
	*/
	setSubview: function (model) {
		this.subviews[model.get('id')] = this.renderSubview(new TopicItemView({
			model: model
		}), this.el);
	},
	/**
	* get a cached subview
	*/
	getSubview: function (id) {
		return this.subviews[id];
	},
	/**
	* render the view and the subview (topics)
	*/
	render: function () {
		var that = this;

		this.el.innerHTML = this.template();

		this.collection.models.forEach(function (model) {
			that.setSubview(model);
		});
	}
});