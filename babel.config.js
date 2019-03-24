const presets = [
	['@babel/preset-react'],
	[
		'@babel/env',
		{
			useBuiltIns: 'usage',
			targets: `last 1 version,> 1%,maintained node versions,not dead`
		}
	]
];

const plugins = [
	['@babel/plugin-proposal-class-properties'],
	[
		'babel-plugin-styled-components',
		{
			pure: true
		}
	]
];

module.exports = { presets, plugins };
