module.exports = {
	options: {
		processImport: false,
		sourceMap: true
	},
	minify: {
		files: {
			'<%= paths.dist %>/css/main.min.css': '<%= paths.dist %>/css/**/*.css'
		}
	}
};