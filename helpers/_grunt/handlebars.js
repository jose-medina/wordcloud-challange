module.exports = {
	compile: {
		options: {
			helpers: '<%= paths.src %>/js/helpers/handlebars.js',
			node: true
		},
		files: {
			'<%= paths.src %>/js/templates.js' : [ '<%= paths.src %>c/templates/views/**/*.hbs']
		}
	}
};