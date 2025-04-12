// webpack.dev.js
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Path to your HTML template
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing:"marketing@http://localhost:8081/remoteEntry.js"
      },
      shared:packageJson.dependencies
    })
  
  ],
};

module.exports = merge(commonConfig, devConfig);
