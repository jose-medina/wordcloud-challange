var AmpersandView = require('ampersand-view');
var templates = require('../templates.js');

module.exports = AmpersandView.extend({
	template: templates['src/templates/views/topic-information.hbs'],
	initialize: function () {
		this.listenTo(this.model, 'reset change', this.render);
	},
	render: function () {
		this.el.innerHTML = this.template(this.model.toJSON());
		
		return this;
	}
});