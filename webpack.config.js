const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name]-boundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
};
