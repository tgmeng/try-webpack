const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: false,
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
};
