module.exports = {
	compile: {
		options: {
			node: true,
			wrapped: true
		},
		files: {
			'<%= paths.src %>/js/templates.js' : [ '<%= paths.src %>/templates/views/**/*.hbs']
		}
	}
};