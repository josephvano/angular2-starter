var path      = require("path");
var webpack   = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: {
    app : "./app/client/main.ts",
    vendor: "./app/client/vendor.ts"
  },

  output: {
    path: path.join(__dirname, "public", "js"),
    filename: "[name].bundle.js"
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      "window.jQuery": "jquery"
    })
  ],

  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts"
      }
    ]
  },

  resolve : {
    extensions: ['', '.js', '.ts']
  }
};
