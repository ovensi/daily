const path = require('path')
const fs = require('fs')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

const PurgecssPlugin = require('purgecss-webpack-plugin'); //删除未使用的css
const glob = require('glob-all');

module.exports = {
  lintOnSave:false,//eslint错误不会导致编译失败
  pwa:{
    name:'My App',
    themColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCable: 'no',
    appleMobileWebAppStatusBarStyle:'default',

    workboxPluginMode: 'InjectManifest',
    workboxOptions:{
      swSrc: 'src/sw.js'
    }
  },
  configureWebpack(config){  //如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
    if (process.env.NODE_ENV === 'production') {
      return {

          plugins: [
              new PrerenderSPAPlugin({
                  // Required - The path to the webpack-outputted app to prerender.
                  staticDir: path.join(__dirname, 'dist'),
                  // Required - Routes to render.
                  routes: ['/', '/habit', '/setting'],
              }),
          ],
      }
    };
    },

  chainWebpack: config=>{
    config.optimization
      .clear('splitChunks')
      .splitChunks({
        cacheGroups: {
          vue: {
            name: 'vue',
            test: /[\\/]node_modules[\\/]vue[\\/]/,
            priority: 0,
            chunks: 'initial'
          },
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }        
      })
  }
  
}