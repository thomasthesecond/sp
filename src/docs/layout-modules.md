---
title: Layout modules
status: draft
---

Layout modules are general-purpose and easily reusable; generally these modules wrap components and help lay out sections on a page.

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

## Grid layout module

The grid layout module uses CSS grid layout by applying the `grid` classname.

### Browser support for CSS grid layout

[View browser support on Can I use](http://caniuse.com/#feat=css-grid)

For browsers that do not support grid, fallback styles can be added using flexbox or floats. The `@supports` at-rule, a.k.a feature queries, can be used to isolate grid styles.

### Markup

```html
<div class="grid">
  …
</div>
```

### Resources

* [CSS grid layout at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [Grid by Example](https://gridbyexample.com/learn/)
* [@supports at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

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
