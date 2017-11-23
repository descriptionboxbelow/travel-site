const path = require('path');

module.exports = {
  // entry, which file to look at to create its bundle
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  // output, where the final product bundled file should be output to
  // is an object itself
  output: {
    path: path.join(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
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
};
