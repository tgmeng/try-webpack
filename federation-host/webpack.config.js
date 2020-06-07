const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: false,
  devServer: {
    port: 3001,
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'federation-host',
      library: { type: 'var', name: 'host' },
      filename: 'host.js',
      remotes: {
        remote: 'remote',
      },
      shared: ['@try-webpack/shared'],
    }),
  ],
};
