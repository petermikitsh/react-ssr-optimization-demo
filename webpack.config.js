module.exports = {
  devtool: 'source-map',
  entry: './index.js',
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
  target: 'node'
};
