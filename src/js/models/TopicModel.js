var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
	props: {
		id: '',
		label: '',
		sentiment: {},
		sentimentScore: 0,
		sentimentClass: '',
		volume: 0,
		maxVolume: 0,
		sizeClass: ''
	},
	initialize: function () {
		this.set('sentimentClass', this._getSentimentClass());
		this.set('sizeClass', this._getSizeClass());
	},
	_getSizeClass: function () {
		return 'topic-size-' + Math.ceil((this.get('volume') / this.get('maxVolume')) * 6);
	},
	_getSentimentClass: function () {
		var result;
		var sentimentScore = this.get('sentimentScore');

		switch(true) {
			case sentimentScore > 60:
				result = 'high-sentiment-score';
				break;
			case sentimentScore < 40:
				result = 'medium-sentiment-score';
				break;
			default:
				result = 'low-sentiment-score';
		}

		return result;
	}
});