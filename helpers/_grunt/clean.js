module.exports = {
	dist: {
		files: [
			{
				filter: 'isFile',
				src: '<%= paths.dist %>/**'
			}
		]
	}
};
