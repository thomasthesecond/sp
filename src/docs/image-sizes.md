---
title: Image sizes
label: Image sizes
---

The HTML5 `picture` element is used on certain components to handle responsive images for screen width and densities.

## Markup

The markup looks like this:

```html
<picture>
  <source srcset="/assets/images/about-masthead-sm@2x.jpg" media="(min-device-pixel-ratio: 1.5), (min-resolution: 192dpi) and (max-width: 543px)">
  <source srcset="/assets/images/about-masthead@2x.jpg" media="(min-device-pixel-ratio: 1.5), (min-resolution: 192dpi)">
  <source srcset="/assets/images/about-masthead-sm.jpg" media="(max-width: 543px)">
  <source srcset="/assets/images/about-masthead.jpg">

  <img src="/assets/images/about-masthead@2x.jpg" alt="A group of ER doctors smiling happily">
</picture>
```

## Components

The following components use responsive images:

* <a href="{{path '/components/detail/cover-photo' }}">Cover Photo</a>; used in <a href="{{path '/components/detail/masthead' }}">Masthead</a> and <a href="{{path '/components/detail/feature' }}">Feature</a>
* <a href="{{path '/components/detail/image-block' }}">Image Block</a>

## Sizes

Here is a list of responsive images and their sizes.

### Home page

| Image | 1x size | 2x size |
| ----- | ------- | ------- |
| home-careers.jpg | 520 × 740 | 1040 × 1480 |
| home-careers-sm.jpg | 320 × 200 | 640 × 400 |
| home-investors.jpg | 660 × 668 | 1320 × 1336 |
| home-investors-sm.jpg | 320 × 200 | 640 × 400 |
| home-partnerships.jpg | 520 × 740 | 1040 × 1480 |
| home-partnerships-sm.jpg | 320 × 200 | 640 × 400 |
| home-video-poster.jpg | 1280 × 720 | 2560 × 1440 |
| home-video-poster-sm.jpg | 320 × 420 | 640 × 480 |

### About page

| Image | 1x size | 2x size |
| ----- | ------- | ------- |
| about-feature.jpg | 1524 × 1000 | 3048 × 2000 |
| about-feature-sm.jpg | 320 × 660 | 640 × 1320 |
| about-masthead.jpg | 1524 × 556 | 3048 × 1112 |
| about-masthead-sm.jpg | 320 × 178 | 640 × 356 |

### Partnerships page

| Image | 1x size | 2x size |
| ----- | ------- | ------- |
| partnerships-feature.jpg | 1524 × 508 | 3048 × 1016 |
| partnerships-feature-sm.jpg | 320 × 446 | 640 × 892 |
| partnerships-healthcare-systems.jpg | 520 × 740 | 1040 × 1480 |
| partnerships-healthcare-systems-sm.jpg | 320 × 200 | 640 × 400 |
| partnerships-masthead.jpg | 1524 × 556 | 3048 × 1112 |
| partnerships-masthead-sm.jpg | 320 × 178 | 640 × 356 |
| partnerships-physician-practices.jpg | 520 × 740 | 1040 × 1480 |
| partnerships-physician-practices-sm.jpg | 320 × 200 | 640 × 400 |
| partnerships-surgery-centers.jpg | 660 × 668 | 1320 × 1336 |
| partnerships-surgery-centers-sm.jpg | 320 × 200 | 640 × 400 |
| partnerships-surgical-hospitals.jpg | 660 × 668 | 1320 × 1336 |
| partnerships-surgical-hospitals-sm.jpg | 320 × 200 | 640 × 400 |

### Locations page

| Image | 1x size | 2x size |
| ----- | ------- | ------- |
| locations-masthead.jpg | 1524 × 556 | 3048 × 1112 |
| locations-masthead-sm.jpg | 320 × 178 | 640 × 356 |
