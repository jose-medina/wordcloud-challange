var AmpersandCollection = require('ampersand-rest-collection');
var TopicModel = require('../models/TopicModel.js');

module.exports = AmpersandCollection.extend({
	url: '../src/data/topics.json',
	model: TopicModel,
	initialize: function () {},
	parse: function (res) {
		var topics = res.topics;
		var maxVolume = 0;

		topics.forEach(function (topic) {
			maxVolume = Math.max(maxVolume, topic.volume);
		});

		topics.forEach(function (topic) {
			topic.maxVolume = maxVolume;
		});

		return topics;
	}
});