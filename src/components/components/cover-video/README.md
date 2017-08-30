# Cover video component

The cover video component takes a “mobile-first” approach. The component loads the video’s poster image by default and then uses JavaScript to load the video to enhance the experience if possible.

There are two conditions that must be met for the video to load:

1. If the browser supports `object-fit`
2. If the screen width is 768 px wide or greater (using `window.matchMedia` to test)

For the video to autoplay, `data-autoplay` must be set to `"true"` and the user must not [prefer reduced motion](https://webkit.org/blog/7551/responsive-design-for-motion/) (using `window.matchMedia` to test).

The video can be clicked to toggle pause and play. This is a hidden feature because it’s not explained to the user.

Data attributes on the component are required for the video to load.

* `data-src`: The URL of the video source
* `data-type`: The MIME type of the video
* `data-autoplay`: If the video should autoplay; value can be `"true"` or `"false"`; user settings can override `autoplay="true"`

The video component uses the CSS `object-fit` property and the class `object-fit-cover` to trigger a JavaScript fallback which uses `background-size: cover` for browsers that don’t support `object-fit`. This will be used only when the poster image is used as a cover photo and the video does not load.
