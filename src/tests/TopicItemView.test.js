var TopicItemView = require('../js/views/TopicItemView.js');
var TopicModel = require('../js/models/TopicModel.js');
var data = require('../data/topics.json');
var test = require('tape');

test('Test Topic Information View', function (t) {
	var topicInfoView;

	var viewEl = document.createElement('div');

	viewEl.setAttribute('id', 'wordcloud');
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
