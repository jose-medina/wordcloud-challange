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
	template: templates['src/templates/views/topic-item.hbs'],
	events: {
		'click a': 'onTopicClicked'
	},
	initialize: function () {
		this.listenTo(this.model, 'change:status', this._toggleState);
	},
	onTopicClicked: function (event) {
		event.preventDefault();

		this.model.set('status', true);
		// go to the new location
		AmpersandApp.navigate('topic/' + encodeURIComponent(this.model.get('id')));
	},
	_toggleState: function (model, value) {
		value ? this.el.classList.add('js-active') : this.el.classList.remove('js-active');
	},
	render: function () {
		this.renderWithTemplate(this.model.toJSON());
		
		return this;
	}
});