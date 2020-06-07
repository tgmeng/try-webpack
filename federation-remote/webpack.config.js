const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: false,
  devServer: {
    port: 3002,
  },
  output: {
    publicPath: 'http://localhost:3002/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'federation-remote',
      library: { type: 'var', name: 'remote' },
      filename: 'remote.js',
      exposes: {
        index: './src/index.js',
      },
    }),
  ],
};
