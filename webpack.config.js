/* eslint-disable */
module.exports = {
	entry: './dist/react-leaflet-d3-svg-overlay.min.js',
	output: {
		library: {
			root: 'D3SvgOverlay',
			amd: 'react-leaflet-d3-svg-overlay',
			commonjs: 'react-leaflet-d3-svg-overlay'
		},
		libraryExport: '',
		libraryTarget: 'umd'
	},
	externals: {
		leaflet: {
			commonjs: 'leaflet',
			commonjs2: 'leaflet',
			root: 'L'
		},
		'react-leaflet': {
			commonjs: 'react-leaflet',
			commonjs2: 'react-leaflet',
			root: 'ReactLeaflet'
		}
	},
	mode: 'production'
};
