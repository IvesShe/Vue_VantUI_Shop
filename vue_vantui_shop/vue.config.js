module.exports = {
  // 關閉eslint檢查
  lintOnSave: false,
  // 配置打包時的路徑，/直接使用會出現找不到資源
  publicPath: process.env.VUE_APP_NODE_ENV === 'production' ? './' : '/',
  devServer: {
    // 瀏覽器自動打開和端口配置
    open: true,
    port: 8088
  }
}