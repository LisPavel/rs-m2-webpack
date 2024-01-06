const { merge } = require("webpack-merge");
const commonCfg = require("./webpack.config.common");

module.exports = merge(commonCfg, {
  mode: "development",
  devtool: "inline-source-map",
});
