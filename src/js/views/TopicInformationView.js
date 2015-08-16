var AmpersandView = require('ampersand-view');
var templates = require('../templates.js');

module.exports = AmpersandView.extend({
	template: templates['./src/templates/topic-information.hbs'],
	initialize: function () {
		this.listenTo(this.model, 'reset change', this.render);
	},
	render: function () {
		this.renderWithTemplate(this.model.toJSON());
		
		return this;
	}
});