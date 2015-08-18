var TopicItemView = require('../js/views/TopicItemView.js');
var TopicModel = require('../js/models/TopicModel.js');
var data = require('../data/topics.json');
var test = require('tape');

test('Test Topic Item View', function (t) {
	var topicItemView;

	t.comment('\n-------------------------------------');
	t.comment('\n');

	t.ok(TopicItemView, 'the topic information view exists');

	t.doesNotThrow(function () {
		topicItemView = new TopicItemView({
			model: new TopicModel(data.topics[0])
		});
	}, 'the topic information view is created');

	topicItemView.model.on('change:status', function (id) {
		t.pass('change status on topic click');

		t.comment('\n');

		t.end();
	});

	t.notEqual(topicItemView.template, undefined, 'the template is not undefined');

	t.equal(topicItemView.render(), topicItemView, 'the view renders correctly');

	t.doesNotThrow(function () {
		topicItemView.onTopicClicked({preventDefault: function () {}});
	}, 'on topic click is expected an exception');

});
