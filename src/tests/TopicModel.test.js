var TopicModel = require('../js/models/TopicModel.js');
var data = require('../data/topics.json');
var test = require('tape');

test('Test Topic Information Model', function (t) {
	var topicModel;

	t.comment('\n-------------------------------------');
	t.comment('\n');

	t.ok(TopicModel, 'the model exists');

	t.doesNotThrow(function () {
		topicModel = new TopicModel(data.topics[0]);
	}, 'the topic model is created');
	
	topicModel.set('maxVolume', 100);

	t.notEqual(topicModel._getSizeClass(), 'topic-size-NaN', 'size class is calculated correctly');

	t.notEqual(topicModel._getSentimentClass(), undefined, 'sentiment class is not undefined');

	topicModel.set('sentimentScore', 61);

	t.deepEqual(topicModel._getSentimentClass(), 'high-sentiment-score', 'to a sentimentScore of 61 the sentimentClass is "high-sentiment-score"');

	topicModel.set('sentimentScore', 45);

	t.deepEqual(topicModel._getSentimentClass(), 'medium-sentiment-score', 'to a sentimentScore of 45 the sentimentClass is "medium-sentiment-score"');

	topicModel.set('sentimentScore', 39);

	t.deepEqual(topicModel._getSentimentClass(), 'low-sentiment-score', 'to a sentimentScore of 39 the sentimentClass is "low-sentiment-score"');

	t.comment('\n');

	t.end();
});
