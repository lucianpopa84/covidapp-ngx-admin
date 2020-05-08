const webpack = require('webpack')
// const merge = require('webpack-merge')
// const common = require('./webpack.common.js')

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      API_BACKEND_URL: '"http://api-covidapp.gdgcraiova.dev"',
    })
  ]
}
