module.exports = {
  css: { loaderOptions: { css: { url: false } } },
  configureWebpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: require('path').resolve(__dirname, 'node_modules/leader-line/'),
        loader: 'skeleton-loader',
        options: { procedure: (content) => `${content} export default LeaderLine` },
      },
    ]
  },
  // proxy 代理设置
  // https://segmentfault.com/a/1190000023549881
  devServer: {
    port: 8080, // 端口
    proxy: {
      '/dev/api': {
        target: 'http://localhost:3001/api',
        changeOrigin: true, 
        pathRewrite: {
          '^/dev/api': '',
        },
      },
      '/prod/api': {
        target: 'http://localhost:3001/api',
        changeOrigin: true, 
        pathRewrite: {
          '^/prod/api': '',
        },
      }
    }
  }

}
