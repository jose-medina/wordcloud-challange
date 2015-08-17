module.exports = {
	dist: {
		files: {
			'<%= paths.dist %>/js/common.js': '<%= paths.src %>/js/app.js'
		}
	}
};