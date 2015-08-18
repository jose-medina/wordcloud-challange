/**
 * @author: 	Jose Luis Medina Burgos
 * @module 		topicInformationView
 * @description topic information view render the metadata view of an
 				active topic
 */
var AmpersandView = require('ampersand-view');
var templates = require('../templates.js');

module.exports = AmpersandView.extend({
	/**
	* view template
	*/
	template: templates['src/templates/views/topic-information.hbs'],
	/**
	* initialize the view and bind the event listeners
	*/
	initialize: function () {
		this.listenTo(this.model, 'reset change', this.render);
		this.listenTo(this, 'newModel', this._newModel);
	},
	/**
	* it will be executed when the newModel event is triggered
	*/
	_newModel: function (model) {
		this.model.set(this.model.parse(model.toJSON()));
	},
	/**
	* render the view
	*/
	render: function () {
		this.el.innerHTML = this.template(this.model.toJSON());
		
		return this;
	}
});