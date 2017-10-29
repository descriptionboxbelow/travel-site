const path = require('path');

module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: path.join(__dirname, "./app/temp/scripts"),
    filename: 'App.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        // this is a regex that webpack is expecting for the "test" value.
        // tells webpack we only want this babel-loader to be applied to *.JS files
        exclude: /node_modules/
        // tell webpack to ignore the node_modules folder at the root of our site
      }
    ]
  }
}
