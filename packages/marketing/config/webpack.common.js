// webpack.common.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // Matches both .js and .mjs files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
