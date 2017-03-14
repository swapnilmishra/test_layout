const {resolve} = require("path");
const webpack = require("webpack");

module.exports = function(env) {
  return {
    entry: [
      "react-hot-loader/patch",
      // activate HMR for React
      "webpack-dev-server/client?http://localhost:8080",
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      "webpack/hot/only-dev-server",
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      // the entry point of our app
      "./index.js"
    ],
    output: {
      filename: "bundle.js",
      // the output bundle
      path: resolve(__dirname, "dist"),
      // necessary for HMR to know where to load the hot update chunks
      publicPath: "/"
    },
    context: resolve(__dirname, "src"),
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      // enable HMR on the server
      contentBase: resolve(__dirname, "dist"),
      // match the output path
      // match the output `publicPath`
      publicPath: "/"
    },
    module: {
      rules: [
        {test: /\.(js|jsx)$/, use: ["babel-loader"], exclude: /node_modules/}
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally
      // prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin()
    ],
    resolve: {
      alias: {
        containers: resolve(__dirname, "src/containers"),
        components: resolve(__dirname, "src/components"),
        store: resolve(__dirname, "src/store"),
        api: resolve(__dirname, "src/api")
      }
    }
  };
};
