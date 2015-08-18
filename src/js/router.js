/**
 * @author: 	Jose Luis Medina Burgos
 * @module 		router
 * @description define the app routes
 */
var AmpersandRouter = require('ampersand-router');

module.exports = AmpersandRouter.extend({
	/**
	* app routes
	*/
	routes: {
		'' : 			'initialize',	// index
		'topic/:id' :   'showTopic'		// show topic with id :id
	}
});
