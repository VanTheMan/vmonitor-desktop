var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
        main: path.join(__dirname, 'src/renderer/pages/main.js'),
        detail: path.join(__dirname, 'src/renderer/pages/detail.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [['es2015', {modules: false}],'react'],
                    plugins: ['syntax-dynamic-import']
                }
            }]
        },
        {
            test: /\.css$/,
            use: 'style-loader'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: 'file-loader'
        },
        {
            test: /\.css$/,
            use: 'css-loader'
        },
        {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader"
        }, 
        {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader"
        }, 
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader"
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader"
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            use: "file-loader?name=./[name].[ext]"
        },
        {
            test: /\.json$/,
            use: 'json-loader'
        }
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
      })  
  ],
  target: 'electron-main'
};
