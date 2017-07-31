const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const loaders = {
  css: {
    loader: "css-loader",
    options: {
      minimize: false
    }
  },
  postcss: {
    loader: "postcss-loader",
    options: {
      plugins: (loader) => [
        autoprefixer()
      ]
    }
  },
  sass: {
    loader: "sass-loader",
    options: {
      outputStyle: "expanded",
      // indentedSyntax: false,
      includePaths: [
        path.resolve(__dirname, "./node_modules")
      ],
    }
  }
}

module.exports = {
  // entry: "./src/index.js",
  entry: {
    main: "./src/assets/main.js",
    // home: ["./src/assets/main.js", "./src/assets/home.js"],
    // about: ["./src/assets/main.js", "./src/assets/about.js"],
    home: "./src/assets/home.js",
    about: "./src/assets/about.js",
    styleguide: "./src/assets/styleguide.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /(\.js?)$/,
        loader: "babel-loader",
        query: {
          "plugins": ["transform-decorators-legacy"],
          "presets": ["es2015"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: loaders.css
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          // use: ["css-loader", "sass-loader"]
          use: [loaders.css, loaders.postcss, loaders.sass]
        })
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.svg$|\.png$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};

// const config = {
//   entry: {
//     app: ["./src/index"]
//   },
//
//   module: {
//     rules: [
//       // {
//       //   test: /\.js$/,
//       //   exclude: /node_modules/,
//       //   use: ["babel-loader"]
//       // },
//       {
//         test: /\.scss$/,
//         use: ExtractTextPlugin.extract({
//           fallback: "style-loader",
//           use: [loaders.css, loaders.postcss, loaders.sass]
//         })
//       }
//     ]
//   },
//
//   output: {
//     filename: "[name].js",
//     path: path.join(__dirname, "./public"),
//     publicPath: "/public"
//   },
//
//   plugins: [new ExtractTextPlugin("[name].css")],
//
//   resolve: {
//     extensions: [".js", ".scss"],
//     modules: [path.join(__dirname, "./src"), "node_modules"]
//   }
// };
//
// module.exports = config;
