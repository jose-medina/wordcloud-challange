module.exports = {
	dist: {
		files: {
			'<%= paths.dist %>/js/common.js': ['<%= paths.src %>/js/app.js']
		}
	},
	tests: {
		src: ['<%= paths.src %>/tests/**/*.test.js'],
		dest: '<%= paths.src %>/tests/specs.js',
		options: {

		}
	}
};
