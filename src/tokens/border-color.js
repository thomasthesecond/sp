"use strict";

const color = require("color");
const toRGB = hex => color(hex).rgb().string();

module.exports = {
  "default": {
    "hex": "#bfd0d8",
    "rgb": toRGB("#bfd0d8"),
    "name": "Jungle Mist"
  },
  "introduction": {
    "hex": "#b5955d",
    "rgb": toRGB("#b5955d"),
    "name": "Muddy Waters"
  },
  "pagination-active": {
    "hex": "#619ab1",
    "rgb": toRGB("#619ab1"),
    "name": "Hippie Blue"
  },
};
