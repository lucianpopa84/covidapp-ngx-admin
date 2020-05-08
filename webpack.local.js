const webpack = require('webpack')
// const merge = require('webpack-merge')
// const common = require('./webpack.common.js')

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      API_BACKEND_URL: '"http://local-api-covidapp.gdgcraiova.local"',
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].[hash:8].map'
    })
  ]
}
