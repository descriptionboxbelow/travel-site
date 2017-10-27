const path = require('path');

module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: path.join(__dirname, "./app/temp/scripts"),
    filename: 'App.js'
  }
}
