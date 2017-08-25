"use strict";

/**
 * forEach for NodeList
 */
const forEach = (array, callback, scope) => {
  for (let i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

/**
 * Polyfill object-fit: cover
 */
const objectFitCover = () => {
  if ("objectFit" in document.documentElement.style === false) {
    document.addEventListener("DOMContentLoaded", () => {
      const nodes = document.querySelectorAll(".object-fit-cover");

      forEach(nodes, (index, node) => {
        const image = node.querySelector("img");
        (node.runtimeStyle || node.style).background = `url("${image.src}") no-repeat 50% / cover`;
        (image.runtimeStyle || image.style).display = "none";
      });
    });
  }
};

export {
  forEach,
  objectFitCover,
};
