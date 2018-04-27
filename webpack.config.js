const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'builder.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'fin-tag.js'
	}
};

