const path = require("path");

module.exports = {
  mode: "development",
  entry: "./frontend/src/index.js",
  output: {
    path: path.resolve(__dirname, "./frontend/public"),
    filename: "main.js",
  },

  target: "web",
  devServer: {
    port: "3000",
    static: ["./frontend/public"],
    open: true,
    hot: true,
    liveReload: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};