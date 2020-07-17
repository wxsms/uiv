const path = require('path')
const _ = require('lodash')

const baseConfig = require('./rollup.base')
const { name } = require('../package.json')

module.exports = _.merge({}, baseConfig, {
  input: path.join(__dirname, '..', 'src', 'index.js'),
  output: [
    {
      format: 'cjs',
      file: path.join(__dirname, '..', 'dist', `${name}.common.js`),
      sourcemap: true
    }
  ]
})
