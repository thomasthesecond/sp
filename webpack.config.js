const production = process.env.NODE_ENV === "production";
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const autoprefixer = require("autoprefixer");

const filename = production ? "[name].min" : "[name]";

const loaders = {
  css: {
    loader: "css-loader",
    options: {
      minimize: production,
    },
  },
  postcss: {
    loader: "postcss-loader",
    options: {
      plugins: () => [
        autoprefixer(),
      ],
    },
  },
  sass: {
    loader: "sass-loader",
    options: {
      outputStyle: "expanded",
      includePaths: [
        path.resolve(__dirname, "./node_modules"),
      ],
    },
  },
};

const plugins = [
  new ExtractTextPlugin(`${filename}.css`),
  new CopyWebpackPlugin([
    {
      from: "src/assets/images",
      to: "images",
    },
  ]),
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    jquery: "jquery",
  }),
];

if (production) {
  plugins.push(new UglifyJSPlugin());
}

module.exports = {
  entry: {
    main: "./src/assets/main.js",
    home: "./src/assets/home.js",
    about: "./src/assets/about.js",
    locations: "./src/assets/locations.js",
    investors: "./src/assets/investors.js",
    partnerships: "./src/assets/partnerships.js",
    contact: "./src/assets/contact.js",
    styleguide: "./src/assets/styleguide.js",
  },
  output: {
    path: path.resolve(__dirname, "tmp/assets"),
    filename: `${filename}.js`,
  },
  module: {
    rules: [
      {
        test: /(\.js?)$/,
        loader: "babel-loader",
        query: {
          plugins: ["transform-decorators-legacy"],
          presets: ["es2015"],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: loaders.css,
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [loaders.css, loaders.postcss, loaders.sass],
        }),
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
      {
        test: /\.jpg$|\.png$|\.svg$/,
        loader: "file-loader?name=[name].[ext]",
      },
    ],
  },
  plugins,
};
