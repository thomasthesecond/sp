---
title: Open graph protocol
label: Open graph protocol
---

Open graph protocol is used by social networks such as Facebook and Twitter to read data from a website. This data can then be used by Facebook and Twitter when a user shares a link on one of those networks. It’s kind of like SEO for social networks.

## Properties

* `og:site_name`: Name of the site; always the same throughout the site
* `og:type`: Type of application; always the same throughout the site
* `og:title`: Title of the page; this should always be set on a per-page basis
* `og:description`: Description of the page; this should always be set on a per-page basis
* `og:image`: Absolute path to an image; ideally this would change on a per-page basis, but the same image can be used throughout the site if needed
* `og:url`: Canonical URL of the page; this should always be set on a per-page basis

## Sample markup

This markup should be placed in the document’s `head` on every page (ideally near the end of the `head`). It has been placed on every template provided, but it will need to be placed on any additional pages that are created.

Here’s what the about page would look like:

```html
<meta property="og:site_name" content="Surgery Partners">
<meta property="og:type" content="website">
<meta property="og:title" content="About us · Surgery Partners">
<meta property="og:description" content="Surgery Partners is a leading operator of surgical facilities and ancillary services with more than 180 locations nationwide. We provide exceptional integrated healthcare experiences between our providers and patients.">
<meta property="og:image" content="https://www.surgerypartners.com/assets/images/about-masthead@2x.jpg">
<meta property="og:url" content="https://www.surgerypartners.com/about/">
```

## Resources

* http://ogp.me/
