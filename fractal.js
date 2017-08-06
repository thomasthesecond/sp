"use strict";

/**
 * Import package.json
 */
const pkg = require("./package.json");

/**
 * Create a new Fractal instance
 */
const fractal = require("@frctl/fractal").create();

/**
 * Require mandelbrot for theming
 */
const mandelbrot = require("@frctl/mandelbrot");

/**
 * Set the title of the project
 */
fractal.set("project.title", pkg.title);

/**
 * How the collection of components will be referenced in navigation
 */
fractal.components.set("label", "Patterns");

/**
 * Path to the directory where the components live
 */
fractal.components.set("path", __dirname + "/src/components");

fractal.components.set("default.preview", "@preview");

/**
 * Path to the directory where the documentation pages live
 */
fractal.docs.set("path", __dirname + "/src/docs");

/**
 * Path to the directory where the static assets live
 * public/bar/foo.css will be served at http://localhost:3000/bar/foo.css
 */
fractal.web.set("static.path", __dirname + "/public");

/**
 * Path to the directory that the static HTML build will be exported to
 */
fractal.web.set("builder.dest", __dirname + "/build");

/**
 * Set Fractal theme
 */
fractal.web.theme(mandelbrot(pkg.theme));

/**
 * Export Fractal instance for use elsewhere if required
 */
module.exports = fractal;
