const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // 통신할 backEnd를 설정, proxy|cors 문제를 해결
  // baseUrl이 되기에 axios로 통신할 때 url부분에 뒷부분만 기재해주면 됨
  devServer: {
    proxy: 'http://localhost:8090/'
  }
}