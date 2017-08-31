"use strict";

const color = require("color");
const toRGB = hex => color(hex).rgb().string();

module.exports = {
  "default": { "hex": "#646e7e", "rgb": toRGB("#646e7e"), "name": "Pale Sky" },
  "heading": { "hex": "#25395d", "rgb": toRGB("#25395d"), "name": "Cloud Burst" },
  "overlay": { "hex": "#fff", "rgb": toRGB("#fff"), "name": "White" },
  "introduction": { "hex": "#25395d", "rgb": toRGB("#25395d"), "name": "Cloud Burst" },
  "hamburger": { "hex": "#275e70", "rgb": toRGB("#275e70"), "name": "Casal" },
  "hamburger-overlay": { "hex": "#fff", "rgb": toRGB("#fff"), "name": "White" },
  "service-card": { "hex": "#25395d", "rgb": toRGB("#25395d"), "name": "Cloud Burst" },
  "more-link": { "hex": "#12769f", "rgb": toRGB("#12769f"), "name": "Blue Chill" },
  "link-default": { "hex": "#619ab1", "rgb": toRGB("#619ab1"), "name": "Hippie Blue" },
  "link-default-hover": { "hex": "#819ba3", "rgb": toRGB("#819ba3"), "name": "Gumbo" },
  "input": { "hex": "#77919e", "rgb": toRGB("#77919e"), "name": "Gothic" },
  "input-dark": { "hex": "#fff", "rgb": toRGB("#fff"), "name": "White" },
  "help-tip": { "hex": "#6facc1", "rgb": toRGB("#6facc1"), "name": "Glacier" },
  "help-tip-hover": { "hex": "#8f9aa8", "rgb": toRGB("#8f9aa8"), "name": "Regent Gray" },
  "search-button": { "hex": "#6facc1", "rgb": toRGB("#6facc1"), "name": "Glacier" },
  "search-button-hover": { "hex": "#8f9aa8", "rgb": toRGB("#8f9aa8"), "name": "Regent Gray" },
  "meta": { "hex": "#b5955d", "rgb": toRGB("#b5955d"), "name": "Muddy Waters" },
  "positive": { "hex": "#6fc179", "rgb": toRGB("#6fc179"), "name": "Green" },
  "negative": { "hex": "#d90a0a", "rgb": toRGB("#d90a0a"), "name": "Red" },
  "blockquote": { "hex": "#25395d", "rgb": toRGB("#25395d"), "name": "Cloud Burst" },
  "arrow": { "hex": "#bfd0d8", "rgb": toRGB("#bfd0d8"), "name": "Jungle Mist" },
  "map-legend": { "hex": "#8f9aa8", "rgb": toRGB("#8f9aa8"), "name": "Regent Gray" },
  "table-cell-emphesis": { "hex": "#8f9aa8", "rgb": toRGB("#8f9aa8"), "name": "Regent Gray" },
  "logo": { "hex": "#717271", "rgb": toRGB("#717271"), "name": "Gray" },
  "logo-arrow-left": { "hex": "#c0cdd5", "rgb": toRGB("#c0cdd5"), "name": "Heather" },
  "logo-arrow-right": { "hex": "#619ab1", "rgb": toRGB("#619ab1"), "name": "Hippie Blue" },
  "skip-link": { "hex": "#446975", "rgb": toRGB("#446975"), "name": "Blue Bayoux" },
  "sub-nav": { "hex": "#446975", "rgb": toRGB("#446975"), "name": "Blue Bayoux" },
};
