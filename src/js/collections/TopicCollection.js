var AmpersandCollection = require('ampersand-rest-collection');
var TopicModel = require('../models/TopicModel.js');

module.exports = AmpersandCollection.extend({
	url: '../src/data/topics.json',
	model: TopicModel,
	initialize: function () {},
	parse: function (res) {
		return res.topics;
	}
});