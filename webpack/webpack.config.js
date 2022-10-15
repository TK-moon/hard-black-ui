const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');

const { ESBuildMinifyPlugin } = require('esbuild-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const webpackDevConfig = require('./webpack.config.dev');
const webpackProdConfig = require('./webpack.config.prod');
const webpackLocalConfig = require('./webpack.config.local');

const getWebpackConfigByMode = (mode) => {
  switch (mode) {
    case 'development':
      return webpackDevConfig;
    case 'production':
      return webpackProdConfig;
    default:
      return webpackLocalConfig;
  }
};

module.exports = (env, argv) => {
  const PRODUCTION_MODE = argv.mode; // production | development | none(localhost)

  const commonConfig = {
    entry: ['./src/components/Button'],
    target: 'web',
    output: {
      filename: '[name].[chunkhash].js',
      publicPath: 'auto',
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@/': path.resolve(__dirname, './src'),
      },
    },
    optimization: {
      minimizer: [new ESBuildMinifyPlugin({ target: 'es2015' })],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015',
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
  };

  const webpackConfig = getWebpackConfigByMode(PRODUCTION_MODE);

  return merge(commonConfig, webpackConfig);
};
