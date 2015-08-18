/**
 * @author: 	Jose Luis Medina Burgos
 * @module 		topicInformationView
 * @description topic information view render the metadata view of an
 				active topic
 */
var AmpersandView = require('ampersand-view');
var templates = require('../templates.js');

module.exports = AmpersandView.extend({
	template: templates['src/templates/views/topic-information.hbs'],
	initialize: function () {
		this.listenTo(this.model, 'reset change', this.render);
		this.listenTo(this, 'newModel', this._newModel);
	},
	_newModel: function (model) {
		this.model.set(this.model.parse(model.toJSON()));
	},
	render: function () {
		this.el.innerHTML = this.template(this.model.toJSON());
		
		return this;
	}
});