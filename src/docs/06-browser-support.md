---
title: Browser support
---

## Graceful degradation

Graceful degradation is the practice of building a web site or application so it provides a good level of user experience in modern browsers. However, it will degrade gracefully for those using older browsers. The system may not be as pleasant or as pretty, but the basic functionality will work on older systems.

## Progressive enhancement

Progressive enhancement is a strategy for web design that emphasizes core webpage content first. This strategy then progressively adds more nuanced and technically rigorous layers of presentation and features on top of the content as the end-user's browser/internet connection allow.

## Browser tiers

The idea of graceful degradation means that the website may not look or function the same in every web browser, especially those that are outdated. This table groups web browsers into three tiers in an attempt to illustrate how the site will degrade. The "supported" column denotes if this website, surgery-partners.com, has been tested in and supports these web browsers.

<!-- The "supported" column denotes support for this website, surgery-partners.com. -->

| Tier | Description | Example | Rating | Supported? |
|------|-------------|---------|--------|------------|
| Tier 1 | Top-level browsers; sometimes considered cutting edge, but usually the most up-to-date browsers that support most of the newest features | Google Chrome, Firefox, Opera, Apple Safari | Great | <b style="color: green">Yes</b> |
| Tier 2 | Mid-level browsers; these browsers have the potential to fluctuate between Tiers 1 and 3; they might be a few years old but are still supported; they may require additional vendor prefixes or polyfills to work with newer features | Microsoft Edge, Internet Explorer 11, mobile web browsers | Good | <b style="color: green">Yes</b> |
| Tier 3 | Low-level browsers; includes legacy or unsupported browsers; could be browsers released five or more years ago | Internet Explorer 10, Android Browser 2.3 | Poor | <b style="color: red">No</b> |

<!-- * Tier 1: Top-level browsers
* Tier 2: Mid-level browsers
* Tier 3: Low-level browsers; includes legacy or unsupported browsers, could be browsers released five or more years ago, example: Internet Explorer 10 -->

## CSS vendor prefixes

Vendor prefixes for CSS properties are used where necessary. Flexbox, for example, is pretty well supported among all Tier 1 and Tier 2 browsers, however, some of these browsers still require a vendor prefix.

Vendor prefixing is done automatically with [Autoprefixer](https://github.com/postcss/autoprefixer) and configured with [browserlist](https://github.com/ai/browserslist) to `["> 5%", "last 2 versions"]` which uses versions selected by global usage greater than 5% and  the last 2 versions for each browser.

## Resources

* [Vendor prefixes at MDN](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)
