"use strict";

const color = require("color");
const toRGB = hex => color(hex).rgb().string();

module.exports = {
  "default": {
    "hex": "#fff",
    "rgb": toRGB("#fff"),
    "name": "White"
  },
  "footer": {
    "hex": "#152640",
    "rgb": toRGB("#152640"),
    "name": "Big Stone"
  },
  "cover-gradient-start": {
    "hex": "#b5955d",
    "rgb": toRGB("#b5955d"),
    "name": "Muddy Waters"
  },
  "cover-gradient-end": {
    "hex": "#5d91a1",
    "rgb": toRGB("#5d91a1"),
    "name": "Horizon"
  },
  "section-gradient-start": {
    "hex": "#fcfaf7",
    "rgb": toRGB("#fcfaf7"),
    "name": "Vista White"
  },
  "section-gradient-end": {
    "hex": "#fff",
    "rgb": toRGB("#fff"),
    "name": "White"
  },
  "overlay": {
    "hex": "#000",
    "rgb": toRGB("#000"),
    "name": "Black"
  },
  "button-default": {
    "hex": "#5d91a1",
    "rgb": toRGB("#5d91a1"),
    "name": "Horizon"
  },
  "button-dark": {
    "hex": "#152640",
    "rgb": toRGB("#152640"),
    "name": "Big Stone"
  },
  "input": {
    "hex": "#fff",
    "rgb": toRGB("#fff"),
    "name": "White"
  },
  "input-dark": {
    "hex": "#152640",
    "rgb": toRGB("#152640"),
    "name": "Big Stone"
  },
  "sub-navigation-marker": {
    "hex": "#b5955d",
    "rgb": toRGB("#b5955d"),
    "name": "Muddy Waters"
  }
};
