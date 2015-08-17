module.exports = {
	configFiles: {
		options: {
			reload: false
		},
		files: [
			'<%= paths.helper %>/_grunt/*.js',
			'Gruntfile.js'
		]
	},
	js: {
		files: '<%= paths.src %>/js/{,*/}*.js',
		tasks: 'browserify'
	},
	scss: {
		files: '<%= paths.src %>/sass/**/*',
		tasks: ['sass'],
		options: {
			spawn: false
		}
	},
	templates: {
		files: ['<%= paths.src %>/{templates/layouts,templates/pages,templates/partials}/**/{,*/}*.hbs'],
		tasks: ['assemble'],
		options: {
			spawn: false
		}
	},
	views: {
		files: ['<%= paths.src %>/templates/views/**/{,*/}*.hbs'],
		tasks: ['handlebars', 'browserify']
	}
};