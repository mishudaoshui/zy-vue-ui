const path = require('path');
// const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  // CSS 的相关配置
  css: {
    extract: false,
    // 向 CSS 相关的 loader 传递选项
    loaderOptions: {
      // 向 postcss-loader 传递内容
      postcss: {
        plugins: [
          require('autoprefixer')(),
          require('postcss-pxtorem')({
            // 基准单位设置为 37.5，也就是 37.5px 为 1rem
            rootValue: 37.5,
            // border 相关的 px 单位不做转换
            propList: ['*', '!border*'],
          }),
        ],
      },
    },
  },
  // 传递第三方插件
  // 需要安装两个插件 style-resources-loader vue-cli-plugin-style-resources-loader
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve('packages/modules/styles/index.scss')],
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        return options;
      });
    config.resolve.alias.set('@e', path.resolve(__dirname, 'examples'));
    config.resolve.alias.set('@', path.resolve(__dirname, 'packages'));
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .end();
  },
};
