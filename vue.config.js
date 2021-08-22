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
    // proxy: {`
    //   '/local/api': {
    //     target: 'http://localhost:3001/api',
    //     changeOrigin: true, 
    //     pathRewrite: {
    //       '^/local/api': '',
    //     },
    //   },
    //   '/staging/api': {
    //     target: 'http://localhost:3001/api',
    //     changeOrigin: true, 
    //     pathRewrite: {
    //       '^/staging/api': '',
    //     },
    //   },
    //   '/prod/api': {
    //     target: 'http://143.110.189.226/restful/api',
    //     changeOrigin: true, 
    //     pathRewrite: {
    //       '^/prod/api': '',
    //     },
    //   }
    // }
  }

}
