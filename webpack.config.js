var path      = require("path");
var webpack   = require("webpack");

module.exports = {
  watch: true,
  devtool: "source-map",
  entry: {
    app : "./app/client/main.ts",
    vendor: "./app/client/vendor.ts"
  },

  output: {
    path: path.join(__dirname, "wwwroot", "js"),
    filename: "[name].bundle.js"
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],

  module: {
    loaders: [
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
