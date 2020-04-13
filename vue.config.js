const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');

const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-boilerplate/' : '/',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))


  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    }
  }
};
