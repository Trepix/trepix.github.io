// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const common_assets = ['./themes/trepix/static/assets/css/icons.css',
  './themes/trepix/static/assets/css/main.css',
  './themes/trepix/static/assets/css/navbar.css',
  './themes/trepix/static/assets/js/navbar.js'];

module.exports = {
    entry: {
      homepage: [
        './themes/trepix/static/assets/css/about.css',
        './themes/trepix/static/assets/css/achievements.css',
        './themes/trepix/static/assets/css/experiences.css',
        './themes/trepix/static/assets/css/home.css',
        './themes/trepix/static/assets/css/projects.css',
        './themes/trepix/static/assets/css/recent-posts.css',
        './themes/trepix/static/assets/css/skills.css',
        './themes/trepix/static/assets/js/home.js',
      ].concat(common_assets),
      blog: [
        './themes/trepix/static/assets/css/list.css',
        './themes/trepix/static/assets/js/list.js'
      ].concat(common_assets),
      post: [
        "./themes/trepix/static/assets/css/single.css",
        "./themes/trepix/static/assets/js/single.js"
      ].concat(common_assets),
      404: [
        "./themes/trepix/static/assets/css/404.css"
      ].concat(common_assets)
    },
    output: {
      path: path.resolve('./themes/trepix/static/assets/dist'),
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css'
      })
    ],
  };