module.exports = function(grunt) {

	require('time-grunt')(grunt);

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
            dev: {
                options: {
                    sassDir: './src/sass',
                    cssDir: './dist/css',
                    noLineComments: false
                }
            }
        },
		browserify: {
			dist: {
				files: {
					'dist/js/common.js': 'src/js/app.js'
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

	grunt.registerTask('css', [
		'compass:dev'
	]);

	grunt.registerTask('js', [
		'browserify'
	]);

	grunt.registerTask('build', [
		'handlebars',
		'css',
		'js'
	]);

	grunt.registerTask('default', ['build']);

};