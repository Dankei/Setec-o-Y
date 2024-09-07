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
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Usando babel-loader
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Configurando presets
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"], // Processando CSS com loaders adequados
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Para poder importar arquivos JS e JSX sem especificar a extensão
  },
};

