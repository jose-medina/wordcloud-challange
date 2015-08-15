module.exports = function(grunt) {

	require('time-grunt')(grunt);

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			dist: {
				files: {
					'dist/js/common.js': 'src/js/router.js'
				}
			}
		},
		handlebars: {
			compile: {
				options: {
					helpers: require('./src/js/helpers/handlebars.js'),
					node: true
				},
				files: {
					'./src/js/templates.js' : [ './src/templates/**/*.hbs']
				}
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {}
			}
		}
	});

	grunt.registerTask('test', ['']);

	grunt.registerTask('build', [
		'handlebars',
		'browserify'
	]);

	grunt.registerTask('default', ['build']);

};