/**
 * @author: 	Jose Luis Medina Burgos
 * @module 		topicModel
 * @description topic model define what attributes a wordcloud topic
 				has and interpret it in order to generate other attributes 
 */
var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
	/**
	* default attributes
	*/
	props: {
		id: '',
		label: '',
		status: false,
		sentiment: {},
		sentimentScore: 0,
		sentimentClass: '',
		volume: 0,
		maxVolume: 0,
		sizeClass: ''
	},
	/**
	* initialize the model set to new attributes according to
	* the new values
	*/
	initialize: function () {
		this.set('sentimentClass', this._getSentimentClass());
		this.set('sizeClass', this._getSizeClass());
	},
	/**
	* calculate the topic size depending on the topic's volume 
	*/
	_getSizeClass: function () {
		return 'topic-size-' + Math.ceil((this.get('volume') / this.get('maxVolume')) * 6);
	},
	/**
	* calculate the color depending on the topic's sentiment 
	*/
	_getSentimentClass: function () {
		var result;
		var sentimentScore = this.get('sentimentScore');

		switch(true) {
			case sentimentScore > 60:
				result = 'high-sentiment-score';
				break;
			case sentimentScore < 40:
				result = 'low-sentiment-score';
				break;
			default:
				result = 'medium-sentiment-score';
		}

		return result;
	}
});