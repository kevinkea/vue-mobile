'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"http://movie.miguvideo.com"',
  BASE_API: '"https://easy-mock.com/mock/5b3db1b365fe1576b7fb8079/movie"'
})
