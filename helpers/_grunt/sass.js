module.exports = {
	options: {
		outputStyle: 'nested',
		sourceMap: true
	},
	dist: {
		files: {
			'<%= paths.dist %>/css/main.css': '<%= paths.src %>/sass/main.scss'
		}
	}
};