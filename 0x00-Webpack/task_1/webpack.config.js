// webpack.config.js
const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Update this with your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
};
