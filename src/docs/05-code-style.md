---
title: Code style
label: Code style
---

This document details the coding style and conventions used in this project.

## Linting

Code linting helps avoid errors and enforces a consistent coding style. Run `yarn run lint` to lint both .js and .scss files.

### JavaScript

To enforce a consistent JavaScript code style, this project uses [ESLint](https://eslint.org/) and [Airbnb’s style guide](https://github.com/airbnb/javascript). Some additional rules are defined in `.eslintrc` which lives at the project root. Run `yarn run eslint` to run the linter on .js files.

### CSS / SCSS

[stylelint](https://stylelint.io/) is used to enforce consistent conventions in stylesheets. Its configuration file `.stylelintrc` is located at the root. Run `yarn run stylelint` to run the linter on .scss files.

## editorconfig

> [EditorConfig](http://editorconfig.org/) helps developers define and maintain consistent coding styles between different editors and IDEs.

The `.editorconfig` file at the root of this project defines the desired coding style. For the config file to work, you must [install a plugin](http://editorconfig.org/#download) for your editor.

## Naming components

Components follow the [SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) naming convention.

```
.ComponentName { … }
.ComponentName--modifierName { … }
.ComponentName-descendentName { … }
.ComponentName-descendentName--modifierName { … }
.ComponentName.is-stateOfComponent { … }
```

JavaScript modules for the corresponding component are named the same, however, they should not need to use the `modifierName` or `descendentName` pattern.

```
export default class ComponentName { … }
```

Utility classnames are the exception to the SUIT CSS naming methodology. They are not prefixed with `u-` nor are they written in camelCase; they are written lowercase and hyphenated.

```
.container { … }
.text-block { … }
```

## Naming files

File and folder names are lowercase and hyphenated.
