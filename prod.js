const {resolve} = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
  return {
    entry: [
      "./index.js"
    ],
    output: {
      filename: "bundle.js",
      path: resolve(__dirname, "dist"),
      publicPath: "/"
    },
    context: resolve(__dirname, "src"),
    module: {
      rules: [
        {test: /\.(js|jsx)$/, use: ["babel-loader"], exclude: /node_modules/},
      ]
    },
    plugins: [
      new UglifyJSPlugin()
    ],
    resolve: {
      alias: {
        containers: resolve(__dirname, "src/containers"),
        components: resolve(__dirname, "src/components"),
        store: resolve(__dirname, "src/store"),
        api: resolve(__dirname, "src/api"),
        utils: resolve(__dirname, "src/utils")
      }
    }
  };
};
