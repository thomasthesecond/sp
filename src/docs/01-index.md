---
title: Surgery Partners Pattern Library
---
You are viewing the front-end pattern library for Surgery Partners. It’s built with [Fractal](http://fractal.build), a tool that enables rapid development of components, templates and pages.

The patterns are split into two groups:

* **Components**: The building blocks of the site; when combined, create pages; each component has a specific purpose
* **Pages**: Fully formed webpages composed of components

## Setting up the project for development

If you made it this far, chances are you’re already up and running, but just incase you’re not, here’s what you need to do. *This information is also contained within the project’s README file at the root.*

### Requirements

#### Node.js

[Fractal](http://fractal.build/), and therefore this project, requires Node.js v4.4.7+ to run. While you can install Node a variety of ways, we highly recommend using [Node Version Manager](https://github.com/creationix/nvm) to install and manage Node versions.

#### Yarn

[Yarn](https://yarnpkg.com/en/) is a package manager for Node.js. Yarn is preferred over [npm](https://www.npmjs.com/) because it’s faster. However, if npm is already installed or you prefer it to Yarn, then `yarn` scripts can be replaced with `npm`.

https://yarnpkg.com/en/docs/install

### Getting started

Once you’ve installed Node and Yarn, you’re ready to install the project’s dependencies. To do that, run simply run `yarn` (or `npm install`).

To run the project and develop locally, run  `yarn start`. This will start Fractal and run a local development server at the address displayed by Fractal in your terminal window, usually the address is http://localhost:3000/.

You will also need to start webpack to watch and compile changes to the assets. In a separate console window, run `yarn run assets`. This command starts webpack with the `--watch` flag.

Now you may open http://localhost:3000/ in a web browser and begin developing.

### Commands

All commands should be run through `yarn run`.

| Command | Description |
| ------- | ----------- |
| `start`| Starts Fractal and the local development server |
| `assets`| Watches and compiles JS and SCSS assets with webpack |
| `build`| Builds and compiles production-ready files |
| `clean`| Deletes the build directories `tmp` and `www`; used within the `build` script |
| `eslint`| Lints JavaScript files with ESLint |
| `stylelint`| Lints SCSS files with stylelint |
| `lint`| Runs both `eslint` and `stylelint` scripts at once |
| `gh-pages`| Builds and deploys the project to Github pages |

### Dependencies

All dependencies are installed by running `yarn`. Here’s a brief overview of each dependency and its purpose. These packages will be compiled and run within the browser.

| Dependency | Description |
| ---------- | ----------- |
| `fractal` | Component library framework |
| `mandelbrot` | Default web UI theme for Fractal |
| `babel-core` | Babel compiler core; ES6/ES2015+ to ES5 JavaScript transpiler |
| `babel-polyfill` | Provides polyfills necessary for a full ES2015+ environment |
| `jquery` | JavaScript library for DOM operations |
| `no-scroll` | Disable the document’s scrolling |
| `normalize.css` | A modern alternative to CSS resets |
| `picturefill` | A responsive image polyfill |
| `scrollmagic` | JavaScript library for scroll interactions |
| `smoothscroll-polyfill` | Polyfill for smooth scroll behavior |

A separate list of `devDependencies` are used for compiling and building the project. These packages will not see the browser and are only run within the Node environment.

| Dependency | Description |
| ---------- | ----------- |
| `autoprefixer` | Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website |
| `babel-eslint` | Custom parser for ESLint |
| `babel-loader` | Babel loader module for webpack |
| `babel-plugin-transform-decorators-legacy` | A plugin for Babel 6 that (mostly) replicates the old decorator behavior from Babel 5 |
| `babel-preset-es2015` | Babel preset for all ES2015 plugins |
| `color` | Color conversion and manipulation with CSS string support |
| `copy-webpack-plugin` | Copy files and directories in webpack |
| `css-loader` | CSS loader module for webpack |
| `eslint` | An AST-based pattern checker for JavaScript |
| `eslint-config-airbnb-base` | Airbnb’s base JS ESLint config |
| `eslint-plugin-import` | Supports linting of ES6+/ES2015+ import/export syntax |
| `extract-text-webpack-plugin` | Extract text from bundle into a file |
| `file-loader` | File loader module for webpack |
| `gh-pages` | Publish to a gh-pages branch on GitHub |
| `handlebars-loader` | Handlebars loader module for webpack |
| `node-sass` | Wrapper around libsass to compile Sass/SCSS to CSS |
| `postcss` | Tool for transforming styles with JS plugins |
| `postcss-cli` | CLI for PostCSS |
| `postcss-loader` | PostCSS loader module for webpack |
| `rimraf` | A deep deletion module for node |
| `sass-loader` | Sass loader module for webpack |
| `style-loader` | Style loader module for webpack |
| `stylelint` | A mighty, modern CSS linter |
| `uglifyjs-webpack-plugin` | UglifyJS plugin for webpack |
| `webpack` | Packs CommonJs/AMD modules for the browser |

### Source vs. build files

The source code exists within the `src` directory at the root of the project.

Compiled build files are contained within the `www` directory at the root of the project.

Ideally, files within `src` should be edited and then compiled to `www` with webpack.

## Languages used

* **Handlebars**: HTML templating
* **SCSS**: CSS pre-processing
* **JavaScript**: vanilla JavaScript using ES6 spec
