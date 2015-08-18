/**
 * @author: 	Jose Luis Medina Burgos
 * @module 		topicInformationModel
 * @description topic information model defines what attributes the topic
				metadata view has. They will be taken from the active topic item model
 */
var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
	/**
	* default attributes
	*/
	props: {
		label: '',
		sentimentScore: 0,
		positive: 0,
		neutral: 0,
		negative: 0
	},
	/**
	* initialize the model
	*/
	initialize: function () {},
	/**
	* returns the value or 0 if it is 0 or null/undefined
	*/
	_valueOrZero: function (value) {
		return value ? value : 0;
	},
	/**
	* parse the attributes before storing them
	*/
	parse: function (res) {
		return {
			label: res.label,
			sentimentScore: res.sentimentScore,
			positive: this._valueOrZero(res.sentiment.positive),
			neutral: this._valueOrZero(res.sentiment.neutral),
			negative: this._valueOrZero(res.sentiment.negative)
		}
	}
});