const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  externals: {
    'react-dom/server': "require('react-dom/server')",
    'electrode-react-ssr-caching': "require('electrode-react-ssr-caching')"
  },
  output: {
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
   new webpack.BannerPlugin(
    'global.SSRCaching = require("electrode-react-ssr-caching");',
      {
        raw: true,
        entryOnly: false
      }
    )
  ],
  target: 'node'
};
