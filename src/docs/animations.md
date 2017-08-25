---
title: Animations
---

The home, about and partnership pages contain scrolling animations.

[ScrollMagic](http://scrollmagic.io/) is used to handle the animations.

Animations for each page is configured in their respective JavaScript module files located in `src/components/05-pages`.

All of the animation styles are contained in a single Sass partial, `home/animate.scss`.

Animations will not be run if:

* JavaScript is disabled or fails to load
* a user [prefers reduced motion](https://webkit.org/blog/7551/responsive-design-for-motion/)
* the screen width is less than 1024 pixels wide

The class `disable-animations` can be added to the `html` element to disable all animations on each of the pages.
