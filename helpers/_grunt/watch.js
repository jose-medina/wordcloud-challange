module.exports = {
	configFiles: {
		options: {
			reload: true
		},
		files: [
			'<%= paths.helper %>/_grunt/*.js',
			'Gruntfile.js'
		]
	},
    js: {
        files: '<%= paths.src %>/js/{,*/}*.js',
        tasks: 'sync:js'
    },
    data: {
        files: '<%= paths.src %>/data/**/*.json',
        tasks: 'sync:assets'
    },
    assets: {
        files: [
			'<%= paths.src %>/assets/**/*',
			'!<%= paths.src %>/assets/img/svg/**/*'
			],
        tasks: 'sync:assets'
    },
	scss: {
		files: '<%= paths.src %>/scss/**/*',
		tasks: ['sass:dist', 'autoprefixer'],
	    options: {
			spawn: false
		}
	},
	templates: {
		files: ['<%= paths.src %>/{data,templates/layouts,templates/partials}/**/{,*/}*.{md,hbs,yml,json}'],
	    tasks: ['newer:assemble'],
	    options: {
			spawn: false
		}
	}
};