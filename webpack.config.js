module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    library: 'video-description-generator',
    libraryTarget: 'umd',
    filename: 'main.js'
  }
};