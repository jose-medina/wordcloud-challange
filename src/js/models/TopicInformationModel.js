var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
	props: {
		label: '',
		sentimentScore: 0,
		positive: 0,
		neutral: 0,
		negative: 0
	},
	initialize: function () {
	},
	_valueOrZero: function (value) {
		return value ? value : 0;
	},
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