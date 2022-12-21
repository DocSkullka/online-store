const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: './src/app.ts',
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css'
  }),
     new HtmlWebpackPlugin({
       template: './src/index.html'
      }),
    new HtmlWebpackPlugin({
      template: './src/basket.html',
      filename: 'basket.html',
    })],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.ts$/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}
