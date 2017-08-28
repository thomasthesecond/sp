---
title: Layout modules
label: Layout modules
---

Layout modules are general-purpose and easily reusable; generally these modules wrap components and help lay out sections on a page.

Source code for layout modules exists in `src/assets/scss/layout`.

## Background layout module

Background layout modules provide consistent background styling. Available classnames include `background-gradient`.

### Markup

```html
<div class="background-gradient">
  …
</div>
```

## Container layout module

The container layout module is used to:
* center blocks of content horizontally within the viewport (above a specified media query), and
* prevent content from touching the left and right edges of the viewport (below a specified media query).

This is achieved by setting a maximum width (`1290px`) along with left and right margins (`24px`) on the module.

Any type of content blocks can be wrapped with this module as it’s intended to be used many times per page when building layouts.

Avoid nesting containers because this will increase the horizontal spacing from the edge of the screen. There may be instances where this behavior is desirable, but in many cases it’s not.

### Markup

```html
<div class="container">
  …
</div>
```

## Content layout module

The content layout module is used to create a centered container for text content. It’s different from `container` because its maximum width is only 630px.

### Markup

```html
<div class="content">
  …
</div>
```

## Grid layout module

The grid layout module uses CSS grid layout by applying the `grid` classname.

Chain the `two-column` classname to set up a two-column layout.

### Markup

```html
<div class="grid">
  …
</div>
```

When using a two-column layout, the markup must always follow this pattern.

```html
<div class="grid two-column padded container">
  <section class="grid-section">
    …
  </section>

  <aside class="grid-aside">
    …
  </aside>

  <section class="grid-section">
    …
  </section>
</div>
```

There are two classes than can be chained to `grid-aside` to modify the layout:

* `sticky`: Make the aside sticky on desktop-sized screens
* `full-bleed`: Make the aside break out of the container and touch the screen edges on mobile-sized screens

### Browser support for CSS grid layout

[View browser support on Can I use](http://caniuse.com/#feat=css-grid)

For browsers that do not support grid, fallback styles can be added using flexbox or floats. The `@supports` at-rule, a.k.a feature queries, can be used to isolate grid styles.

### Resources

* [CSS grid layout at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [Grid by Example](https://gridbyexample.com/learn/)
* [@supports at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

## Page layout module

The page layout module provides consistent margin for page sections. Available classnames include `page-content` and `page-footer`.

### Markup

```html
<div class="page-content">
  …
</div>

<div class="page-footer">
  …
</div>
```

## Sticky layout module

The sticky layout module uses `position: sticky;` to fix itself and its children to an edge of the viewport; the default for this module being the top.

> You must specify a threshold with at least one of `top`, `right`, `bottom`, or `left` for sticky positioning to behave as expected. Otherwise, it will be indistinguishable from relative positioning.

Because browser support for `position: sticky;` is limited, this feature is considered an enhancement reserved for Tier 1 browsers. If the feature is not supported, the browser will ignore the rule and use the initial value for `position` which is `static`.

### Markup

```html
<div class="sticky">
  …
</div>
```

### Resources

* [CSS sticky positioning at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Sticky_positioning)
* [Can I use data for CSS sticky positioning](http://caniuse.com/#feat=css-sticky)
