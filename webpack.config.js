const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    hot: true,
  },
};
