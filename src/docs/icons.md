---
title: Icons
---

SVG icons can be found in `src/components/_icons`.

To use the icons, first include the icon sprite on the page (typically at the bottom of the `body`).

Then, using the icon’s ID, add it to the page like so:

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon">
  <use xlink:href="icon-arrow"></use>
</svg>
```


ID | Icon
---|-----
{{#each icon}}
  `{{ this.id }}` | <svg class="icon" viewBox="0 0 {{ this.size.[0] }} {{ this.size.[1] }}" width="32"><use xlink:href="#{{ this.id }}"></use></svg>
{{/each}}

{{render "@icon--sprite"}}
