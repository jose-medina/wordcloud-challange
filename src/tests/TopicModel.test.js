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

	t.notEqual(topicModel._getSizeClass(), undefined, 'sentiment class is not undefined');

	t.comment('\n');

	t.end();
});
