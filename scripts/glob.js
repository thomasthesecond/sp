"use strict";

const { writeFileSync } = require("fs-extra");
const { touch } = require("shelljs");
const glob = require("glob");
// const watch = require("glob-watcher");
const watch = require("node-watch");
const rimraf = require("rimraf");

rimraf("./src/main.scss", [], () => touch("./src/main.scss"));

if (process.env.NODE_ENV === "development") {
  watch("./src/components", { recursive: true }, (evt, name) => {
    console.log('%s changed.', name);
    runGlob();
  });
}

const runGlob = () => glob("./src/components/**/*.scss", {}, (er, files) => {
  console.log("runGlob");
  const importGlobalSass = `@import "global";`;

  const sassImports = files
    .map((filePath) => filePath.replace("./src/", "").replace(".scss", ""))
    .map((component) => `@import "${component}";`)
    .join("\n");

  writeFileSync("./src/main.scss", `${importGlobalSass}\n${sassImports}`);
  console.log(`${"\n"}Imports:${"\n"}${sassImports}`);
});

runGlob();
