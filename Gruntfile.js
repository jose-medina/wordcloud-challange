module.exports = function(grunt) {

	require('jit-grunt')(grunt);

	require('time-grunt')(grunt);
	
	var options = {
		// Project settings
		config: {
			// in this directory you can find your grunt config tasks
			src: 'helpers/_grunt/*.js'
		},
		// define your path structure
		paths: {
			// helpers folder with grunt
			helper: 'helpers',
			// resources folder with working files
			src: 'src',
			// dist folder
			dist: '_dist'
		}
	};

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);
	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	grunt.registerTask('css', [
		'sass',
		'cssmin'
	]);

	grunt.registerTask('js', [
		'handlebars',
		'browserify:dist',
		'uglify:app'
	]);

	grunt.registerTask('build', [
		'clean',
		'assemble:app',
		'css',
		'js'
	]);

	grunt.registerTask('dev', [
		'build',
		'watch'
	]);

	grunt.registerTask('default', ['build']);

};