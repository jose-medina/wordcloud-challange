module.exports = {
	options: {
		assets: '<%= paths.dist %>',
		layout: '<%= paths.src %>/templates/layouts/default.hbs',
		partials: '<%= paths.src %>/templates/partials/*.hbs',
		flatten: true
	},
	app: {
		files: {
			'<%= paths.dist %>/' : '<%= paths.src %>/templates/pages/index.hbs'
		}
	}
};