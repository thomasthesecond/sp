---
title: Accessibility
---

Web accessibility (also referred to as a11y) is the design and creation of websites that can be used by everyone. Accessibility support is necessary to allow assistive technology to interpret Web pages.

## Skip link

A [“skip to content” link](http://a11yproject.com/posts/skip-nav-links/) has been added above the site banner. This link has been configured to be hidden from view until the tab key is pressed on the keyboard. It is the first item in the page’s tab order so it will always receive focus first.

## Alt tags for images

Any time an image is used, add the `alt` attribute on the `img` element. This will provide a clear text alternative of the image for screen reader users. The description in the `alt` attribute should be meaningful in the context of the Web page. An image should always include an `alt` attribute, even if its value is empty.

## Focus states

Interactive element, such as inputs, buttons and anchors, should always have a focus state to assist keyboard users when navigating the site.

Additionally, `outline: none;` should not be used for any interactive elements because it makes the site less accessible.

## Visually hidden content

Content which should be visually hidden, but remain accessible to assistive technologies such as screen readers, can be styled using the `.visuallyhidden` class. This can be useful in situations where additional visual information need to also be conveyed to non-visual users.

For visually hidden interactive controls, `.visuallyhidden` can be chained to the `.focusable` class. This will ensure that the control becomes visible once focused (for sighted keyboard users).

## no-js alternatives

A `no-js` classname has been added to the `html` element. When the page loads and if JavaScript is enabled, the `no-js` class is replaced with `js`. This is a way to apply different CSS rules depending on whether or not JavaScript available.

This technique can be used to progressively enhance the experience as well.

## Reduce motion

The [`prefers-reduced-motion` media feature](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) can be used to serve alternate animations that avoid motion sickness triggers experienced by some site visitors.

This feature is currently supported by WebKit browsers and can be used in a CSS `@media` block or through the `window.matchMedia()` interface in JavaScript.

## Resources
* http://a11yproject.com/resources.html
* https://developer.mozilla.org/en-US/docs/Web/Accessibility
* https://webkit.org/blog/7551/responsive-design-for-motion/

## Helpful checklists
* http://accessibility.voxmedia.com/
* http://accessibility.psu.edu/checklist/
* http://a11yproject.com/checklist.html
