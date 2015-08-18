var TopicCollection = require('../js/collections/TopicCollection.js');
var Topics = require('../data/topics.json');
var test = require('tape');

test('Test Topic Collection', function (t) {
	var collection;

	t.comment('\n-------------------------------------');
	t.comment('\n');

	t.ok(TopicCollection, 'the collection exists');

	t.doesNotThrow(function () {
		collection = new TopicCollection();
	}, 'the collection is created');

	t.ok(collection.model, 'the collection has a model');

	t.ok(collection.url, 'the collection has a url');

	t.equal(collection.url, '../src/data/topics.json', 'the url is ../src/data/topics.json');

	t.doesNotThrow(function () {
		collection.parse(Topics)
	}, 'the topics are correctly parsed');

	t.comment('\n');

	t.end();
});
