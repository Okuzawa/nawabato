/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})*/
module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  pages: {
    index: {
      entry: "src/main.js",
      title: "nawabato"
    }
  }
}