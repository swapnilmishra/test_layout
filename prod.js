const {resolve} = require("path");
const webpack = require("webpack");

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
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader?modules",
            "postcss-loader",
            "sass-loader"
          ]
        }
      ]
    },
    resolve: {
      alias: {
        container: resolve(__dirname, "src/container"),
        grid: resolve(__dirname, "src/components/grid/Grid.jsx"),
        header: resolve(__dirname, "src/components/header/Header.jsx"),
        actionbar: resolve(__dirname, "src/components/actionbar/Actionbar.jsx"),
        navbar: resolve(__dirname, "src/core/navbar"),
        dropdown: resolve(__dirname, "src/core/dropdown"),
        buttongroup: resolve(__dirname, "src/core/buttongroup/Buttongroup.jsx"),
        select: resolve(__dirname, "src/core/select/Select.jsx"),
        button: resolve(__dirname, "src/core/button/Button.jsx"),
        card: resolve(__dirname, "src/core/card"),
        placeholder : resolve(__dirname, "src/core/placeholder/Placeholder.jsx"),
        sidenav: resolve(__dirname, "src/core/sidenav/Sidenav.jsx"),
        sass: resolve(__dirname, "src/sass"),
        utils: resolve(__dirname, "src/utils")
      }
    }
  };
};
