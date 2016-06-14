var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  // Makes the source files displayed separately in DevTools instead of one bundle
  devtool: 'eval',
  // Where is the entry point to the app?
  // It's important that it stays in ./src because it is the only dir we tranpsile.
  // The entry point is the file that *renders* our root component to the DOM,
  // not the root component itself. Component is just a description, it won't do anything.
  entry: './src/index.js',
  plugins: [
    // This generates an HTML page.
    new HtmlWebpackPlugin({ title: 'Ulonka Frontend' }),
    // This is not required but we're explicitly saying we're using a dev build.
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
  ],
  module: {
    loaders: [{
      // /\.jsx?$/ matches both .js and .jsx (question mark makes last char optional).
      test: /\.jsx?$/,
      // Only transpile files inside ./src (this is why it's important our entry point is there.)
      // Note that since we specify `include`, there is no need to specify `exclude`.
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['transform-runtime']
      }
    }]
  }
};

module.exports = config;
