var AmpersandView = require('ampersand-view');
var templates = require('../templates.js');

module.exports = AmpersandView.extend({
	template: templates['./src/templates/wordcloud.hbs'],
	initialize: function () {
		this.collection.fetch({reset: true});

		this.listenTo(this.collection, 'reset change', this.render);
	},
	render: function () {
		this.el.innerHTML = this.template(this.collection.toJSON());
	}
});