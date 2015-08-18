/**
 * @author: 	Jose Luis Medina Burgos
 * @module 		topicItemView
 * @description topic item view render one topic of the wordcloud and
 				triggers the app navigate
 */
var AmpersandView = require('ampersand-view');
var AmpersandApp = require('ampersand-app');
var templates = require('../templates.js');

module.exports = AmpersandView.extend({
	/**
	* view template
	*/
	template: templates['src/templates/views/topic-item.hbs'],
	/**
	* bind ui event listeners
	*/
	events: {
		'click a': 'onTopicClicked'
	},
	/**
	* initialize the view and bind the event listeners
	*/
	initialize: function () {
		this.listenTo(this.model, 'change:status', this._toggleState);
	},
	/**
	* navigate to a new topic if a topic is clicked and change status
	*/
	onTopicClicked: function (event) {
		event.preventDefault();

		this.model.set('status', true);
		// go to the new location
		AmpersandApp.navigate('topic/' + encodeURIComponent(this.model.get('id')));
	},
	/**
	* toggle the status class
	*/
	_toggleState: function (model, value) {
		value ? this.el.classList.add('js-active') : this.el.classList.remove('js-active');
	},
	/**
	* render the view
	*/
	render: function () {
		this.renderWithTemplate(this.model.toJSON());
		
		return this;
	}
});