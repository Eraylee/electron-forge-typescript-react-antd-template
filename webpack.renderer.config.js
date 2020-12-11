/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

// rules.push({
//   test: /\.css$/,
//   use: [{ loader: "style-loader" }, { loader: "css-loader" }],
// });

module.exports = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".less"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
