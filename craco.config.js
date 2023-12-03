const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = (pathname) => path.resolve(__dirname, pathname)
module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  // webpack
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://123.207.32.32:5000',
        pathRewrite: { '^/': '' }
      }
    }
  }
}
