var AmpersandView = require('ampersand-view');
var AmpersandApp = require('ampersand-app');
var templates = require('../templates.js');

module.exports = AmpersandView.extend({
	template: templates['./src/templates/topic-item.hbs'],
	events: {
		'click a': 'onTopicClicked'
	},
	initialize: function () {},
	onTopicClicked: function (event) {
		event.preventDefault();

		this.parent.onTopicClicked(event.delegateTarget.getAttribute('href'));
	},
	render: function () {
		this.renderWithTemplate(this.model.toJSON());
		
		return this;
	}
});