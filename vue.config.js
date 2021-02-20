// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    devServer: {
      proxy: 'https://age-of-empires-2-api.herokuapp.com/'
    }
  }