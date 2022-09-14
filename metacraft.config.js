const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const setEnvironments = (configs, internal) => {
	const { webpack } = internal.modules;
	const { DefinePlugin } = webpack;
	const env = internal.configs.env();
	const isProduction = internal.configs.isProduction(env);

	configs.plugins[0] = new DefinePlugin({
		process: { env: {} },
		__DEV__: !isProduction,
		ENV: JSON.stringify(env),
	});

	return configs;
};

const copyAssets = (configs) => {
	configs.plugins.push(
		new CopyPlugin({
			patterns: [
				{
					from: resolve(process.cwd(), 'assets/'),
					to: './',
					filter: (uri) => {
						const isFont = uri.indexOf('/fonts/') >= 0;
						const isTemplate = uri.endsWith('.ejs') || uri.endsWith('.sass');

						return !isFont && !isTemplate;
					},
				},
			],
		}),
	);

	return configs;
};

const externals = (configs) => {
	// configs.plugins.push(new BundleAnalyzerPlugin());

	configs.externals = {
		react: 'React',
		lodash: '_',
		'react-dom': 'ReactDOM',
		'react-art': 'ReactART',
	};

	return configs;
};

const customLoaders = (configs) => {
	configs.module.rules.push({
		test: /\.md$/i,
		type: 'asset/source',
	});

	return configs;
};

module.exports = {
	useBabel: true,
	buildId: () => 'app',
	webpackMiddlewares: [setEnvironments, copyAssets, externals, customLoaders],
	moduleAlias: {
		global: {
			'react-native': 'react-native-web',
		},
	},
};
