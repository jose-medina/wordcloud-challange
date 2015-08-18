var TopicInformationModel = require('../js/models/TopicInformationModel.js');
var TopicModel = require('../js/models/TopicModel.js');
var data = require('../data/topics.json');
var test = require('tape');

test('Test Topic Information Model', function (t) {	
	var topicInfoModel;
	var topicModel;
	var topicInformationModelJson = {
			label: 'test',
			sentimentScore: 10,
			positive: 3,
			neutral: null,
			negative: 5
		};

	t.comment('\n-------------------------------------');
	t.comment('\n');

	t.ok(TopicInformationModel, 'the model exists');

	t.doesNotThrow(function () {
		topicModel = new TopicModel(data.topics[0]);
	}, 'the topic model is created');

	t.doesNotThrow(function () {
		topicInfoModel = new TopicInformationModel(topicModel.toJSON());
	}, 'the topic information model is created');

	t.doesNotThrow(function () {
		topicInfoModel.parse(topicModel.toJSON());
	}, 'the topic information model parses topic model correctly');
	
	t.notEqual(topicInfoModel.parse(topicModel.toJSON()).neutral, undefined, 'positive is not undefined or null');

	t.notEqual(topicInfoModel.parse(topicModel.toJSON()).neutral, undefined, 'neutral is not undefined or null');

	t.notEqual(topicInfoModel.parse(topicModel.toJSON()).neutral, undefined, 'negative is not undefined or null');
	
	t.comment('\n');

	t.end();
});
