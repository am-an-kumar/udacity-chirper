const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "bundle_size_report.html"
    })
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
});
