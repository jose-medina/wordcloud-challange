var WordcloudView = require('../js/views/WordcloudView.js');
var TopicItemView = require('../js/views/TopicItemView.js');
var TopicModel = require('../js/models/TopicModel.js');
var TopicCollection = require('../js/collections/TopicCollection.js');
var data = require('../data/topics.json');
var test = require('tape');

test('Test Wordcloud View', function (t) {
	var wordcloudView;
	var viewEl = document.createElement('div');

	t.comment('\n-------------------------------------');
	t.comment('\n');

	t.ok(WordcloudView, 'the wordcloud view exists');

	viewEl.setAttribute('id', 'wordcloud');
	viewEl.setAttribute('class', 'column');

	t.doesNotThrow(function () {
		wordcloudView = new WordcloudView({
			el: viewEl,
			collection: new TopicCollection()
		});
	}, 'the wordcloud view is created');

	t.notEqual(wordcloudView.template, undefined, 'the template is not undefined');

	t.equal(wordcloudView.render(), wordcloudView, 'the view renders correctly');

	t.doesNotThrow(function () {
		wordcloudView.getSubview(data.topics[0]['id']);
	}, TopicItemView, 'on getSubview a TopicItemView is expected');

	t.doesNotThrow(function () {
		wordcloudView.setSubview(new TopicModel(data.topics[0]));
	}, 'on setSubview a TopicItemView is initialized and no exceptions are expected');

	t.comment('\n');

	t.end();
});
