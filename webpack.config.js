const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, "src/index.js") 
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name][contenthash].js',
    clean:true,
  },
  devtool : 'source-map',
   devServer: {
    static :{
      	directory : path.resolve(__dirname, "dist")
      },
      port : 3000,
      open : true,
      hot: true,
      compress : true,
      historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Webpack Example App',
      header: 'Webpack Example Title',
      metaDesc: 'Webpack Example Description',
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(__dirname, "src/index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
    ]
  },
};
