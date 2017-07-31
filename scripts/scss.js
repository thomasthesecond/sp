"use strict";

var sass = require("node-sass");
var { writeFileSync, readFileSync, readJSONSync, createWriteStream } = require("fs-extra");
var fs = require("fs");
var mkdirp = require("mkdirp");
var getDirName = require("path").dirname;
var { basename, resolve, join } = require("path");
var { touch, cp, mkdir } = require("shelljs");
var glob = require("glob");
// var autoprefixer = require("autoprefixer");
// var postcss = require("postcss");
// var normalize = require("normalize.css");
// console.log(normalize);
const rimraf = require("rimraf");

const env = process.env.NODE_ENV;
const devMode = env === "development";

function compileSass(options = {}) {
  // set default options
  options = Object.assign({
    // style: env === "development" ? "expanded" : "compressed"
    style: "expanded",
  }, options);

  // render the result
  var result = sass.renderSync({
    file: options.src,
    outputStyle: options.style
  });

  // write the result to file
  mkdirp(getDirName(options.dest), function(err) {
    if (err) return cb(err);
    fs.writeFile(options.dest, result.css);
  });

  // log successful compilation to terminal
  console.log(' ' + options.dest + ' built.');
};

// function createSassIndex(dir) {
//   const dirname = basename(dir);
//
//   const sassImports = glob.sync(join(dir, '*.scss'))
//     .map((filePath) => basename(filePath).replace('.scss', ''))
//     .map((component) => `@import '${dirname}/${component}';`)
//     .join('\n');
//
//   writeFileSync(`${dir}.scss`, sassImports);
// }

// const dirname = basename(dir);
// const sassImports = glob.sync(join(dir, '*.scss'))
//   .map((filePath) => basename(filePath).replace('.scss', ''))
//   .map((component) => `@import '${dirname}/${component}';`)
//   .join('\n');
// writeFileSync(`${dir}.scss`, sassImports);

// rimraf("./src/main.scss", [], () => touch("./src/main.scss"));
touch("./src/main.scss");

glob("./src/components/**/*.scss", {}, function(er, files) {
  // console.log(er, files);
  // files.forEach((filePath) => {
  //   let file = readFileSync(filePath, 'utf8');
  //   console.log(file);
  // });

  // const dirname = basename(dir);

  // console.log(files.map((filePath) => basename(filePath).replace(".scss", "")));
  // console.log(files.map((filePath) => getDirName(filePath).replace("./src/", "")));
  // console.log(files.map((filePath) => filePath.replace("./src/", "").replace(".scss", "")));

  // const sassImports = files
  //   .map((filePath) => basename(filePath).replace(".scss", ""))
  //   // .map((component) => `@import "${dirname}/${component}";`)
  //   .map((component) => `@import "dirname/${component}";`)
  //   .join("\n");

  const importGlobalSass = `@import "global";`;

  const sassImports = files
    .map((filePath) => filePath.replace("./src/", "").replace(".scss", ""))
    .map((component) => `@import "${component}";`)
    .join("\n");

  writeFileSync("./src/main.scss", `${importGlobalSass}\n${sassImports}`);
  console.log(`${"\n"}Imports:${"\n"}${sassImports}`);

  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
});

// glob.sync(resolve(intermediateBuild, './components/**/*.scss')).forEach((filePath) => {
//   const componentSass = resolve(components, basename(filePath));
//   let file = readFileSync(filePath, 'utf8');
//   file = removeSassImports(file);
//   file = namespaceSassClasses(filePath, file, classnameTokens);
//   writeFileSync(componentSass, file);
// });
//
// createSassIndex(components);
// createSassEntry();
// generateSassZip();
// }



// postcss([ autoprefixer ]).process(css).then(function(result) {
//   result.warnings().forEach(function(warn) {
//     console.warn(warn.toString());
//   });
//
//   console.log(result.css);
// });

// Expanded
compileSass({
  src: "./src/main.scss",
  dest: "./public/main.css"
});

compileSass({
  src: "./src/styleguide.scss",
  dest: "./public/styleguide.css"
});

// Minified
compileSass({
  src: "./src/main.scss",
  dest: "./public/main.min.css",
  style: "compressed"
});

compileSass({
  src: "./src/styleguide.scss",
  dest: "./public/styleguide.min.css",
  style: "compressed"
});
