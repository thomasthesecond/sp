## Sticky layout module

The sticky layout module uses `position: sticky;` to fix itself and its children to an edge of the viewport; the default for this module being the top.

> You must specify a threshold with at least one of `top`, `right`, `bottom`, or `left` for sticky positioning to behave as expected. Otherwise, it will be indistinguishable from relative positioning.

Because browser support for `position: sticky;` is limited, this feature is considered an enhancement reserved for Tier 1 browsers. If the feature is not supported, the `position` value will fallback to `relative`.

### Resources

* [CSS sticky positioning at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Sticky_positioning)
* [Can I use data for CSS sticky positioning](http://caniuse.com/#feat=css-sticky)
