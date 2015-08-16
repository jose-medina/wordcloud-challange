var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
	props: {
		id: '',
		label: '',
		sentiment: {},
		sentimentScore: 0
	},
	initialize: function () {}
});