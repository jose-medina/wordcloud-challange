module.exports = {
	options: {
		// the banner is inserted at the top of the output
		banner: '/*! <%= grunt.template.today("dd-mm-yyyy") %> */\n',
		sourceMap: true,
		sourceMapPrefix: 2
	},
	app: {
		files: {
			'<%= paths.dist %>/js/app.min.js': '<%= paths.dist %>/js/app.js'
		}
	}
}
