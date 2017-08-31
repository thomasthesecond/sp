"use strict";

const path = require("path");

module.exports = {
  context: {
    "background-color": require(path.join(process.cwd(), "src/tokens/background-color.js")),
    "border-color": require(path.join(process.cwd(), "src/tokens/border-color.js")),
    "text-color": require(path.join(process.cwd(), "src/tokens/text-color.js")),
    "dimensions": require(path.join(process.cwd(), "src/tokens/dimensions.json")),
    "opacity": require(path.join(process.cwd(), "src/tokens/opacity.json")),
    "shadow": require(path.join(process.cwd(), "src/tokens/shadow.json")),
    "timing": require(path.join(process.cwd(), "src/tokens/timing.json")),
    "font-family": require(path.join(process.cwd(), "src/tokens/font-family.json")),
    "font-size": require(path.join(process.cwd(), "src/tokens/font-size.json")),
    "font-weight": require(path.join(process.cwd(), "src/tokens/font-weight.json")),
    "line-height": require(path.join(process.cwd(), "src/tokens/line-height.js")),
    "spacing": require(path.join(process.cwd(), "src/tokens/spacing.json")),
    "z-index": require(path.join(process.cwd(), "src/tokens/z-index.json")),
  },
};
