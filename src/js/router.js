/**
 * @author: 	Jose Luis Medina Burgos
 * @module 		router
 * @description define the app routes
 */
var AmpersandRouter = require('ampersand-router');

module.exports = AmpersandRouter.extend({
	routes: {
		'' : 			'initialize',	// index
		'topic/:id' :   'showTopic'		// show topic with id :id
	}
});
