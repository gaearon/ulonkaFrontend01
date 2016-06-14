var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  // Same entry point as in development.
  entry: './src/index.js',
  // For production builds, specify output options.
  output: {
    // We'll just put everything in a "dist" directory.
    // It will contain both the scripts and the generated HTML file.
    path: path.join(__dirname, 'dist'),
    // Name template for scripts.
    // [hash] ensures filename changes when content changes--useful to bust caches.
    filename: '[name].[hash].js',
    // publicPath is "how does HTML reference script files?"
    // So if your script.js is accessible from mywebsite.com/script.js, then leave it as '/'.
    // If your script.js will be accessible from mywebsite.com/myapp/script.js, make it '/myapp/'.
    publicPath: '/'
  },
  plugins: [
    // Generate HTML
    new HtmlWebpackPlugin({ title: 'Ulonka Frontend' }),
    // Specify we're in production mode! This makes React much faster but disables warnings.
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    // Helps ensure consistent builds.
    new webpack.optimize.OccurrenceOrderPlugin(),
    // Uglify!
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
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
