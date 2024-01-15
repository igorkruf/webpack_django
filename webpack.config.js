import path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import HtmlWebpackPugPlugin from "html-webpack-pug-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import __dirname from "./_dirname.js";
console.log(process.env);
const NODE_ENV = process.env.NODE_ENV || "development";
console.log(process.env.NODE_ENV);
export default {
  mode: NODE_ENV == "development" ? "development" : "production",
  entry: {
    main: "./src/scripts_styles/main.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../firstsite/static/scripts_style"),
  },

  devtool: NODE_ENV === "development" ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["glob-import-loader"],
      },
      {
        test: /\.scss$/i,
        // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: '@import "src/_global_vars.scss";',
            },
          },

          {
            loader: "glob-import-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),

    new CleanWebpackPlugin(),
    // new HtmlWebpackPugPlugin(),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({}),
      new TerserPlugin({
        terserOptions: {
          compress: {
            // drop_console: true,
          },
        },
      }),
    ],
  },
};
