const webpack = require('webpack');
const path = require('path');

module.exports = {
  watch: true,
  entry: {
    app: './src/js/app.js',
    app2: './src/js/app2.js',
    app3: './src/js/app3.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }]
    }, {
      // enforce: 'pre',
      // test: /\.js$/,
      // exclude: /node_modules/,
      // loader: 'eslint-loader'
    }]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     drop_console: true
    //   }
    // }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app', 'app2']
    })
  ]
};