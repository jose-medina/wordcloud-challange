var TopicInformationView = require('../js/views/TopicInformationView.js');
var TopicInformationModel = require('../js/models/TopicInformationModel.js');
var test = require('tape');

test('Test Topic Information View', function (t) {
	var topicInfoView;
	var topicInformationModelJson = {
			label: 'test',
			sentimentScore: 10,
			positive: 3,
			neutral: null,
			negative: 5
		};
	var viewEl = document.createElement('div');

	viewEl.setAttribute('id', 'topic-information');
	viewEl.setAttribute('class', 'column');

	t.comment('\n-------------------------------------');
	t.comment('\n');

	t.ok(TopicInformationView, 'the topic information view exists');

	t.doesNotThrow(function () {
		topicInfoView = new TopicInformationView({
			el: viewEl,
			model: new TopicInformationModel(topicInformationModelJson)
		});
	}, 'the topic information view is created');

	t.notEqual(topicInfoView.template, undefined, 'the template is not undefined');

	t.equal(topicInfoView.render(), topicInfoView, 'the view renders correctly');

	t.comment('\n');

	t.end();
});
