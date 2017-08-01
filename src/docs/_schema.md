---
title: Structured data / Schema.org
---

## What is Schema.org Structured Data?

Schema.org is the result of collaboration between Google, Bing, Yandex, and Yahoo! to help you provide the information their search engines need to understand your content and provide the best search results possible at this time. Adding Schema markup to your HTML improves the way your page displays in SERPs by enhancing the rich snippets that are displayed beneath the page title.

```html
<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "MedicalOrganization",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "40 Burton Hills Blvd, Suite 500",
      "addressLocality": "Nashville",
      "addressRegion": "Tennessee",
      "postalCode": "37215",
      "addressCountry": "United States"
    },
    "name": "Surgery Partners",
    "alternateName": [
      "B13",
      "Black 13",
      "Black 13 Tattoo Parlor"
    ],
    "legalName": "Black 13 Tattoo, LLC",
    "containedInPlace": "Cummins Station",
    "telephone": "615-234-5900",
    "faxNumber": "615-234-5998",
    "url": "https://www.surgerypartners.com/",
    "logo": "",
    "email": "",
    "description": "",
    "sameAs": [
      "https://www.facebook.com/black13tattoo/",
      "https://www.yelp.com/biz/black-13-tattoo-parlor-nashville",
      "https://twitter.com/black13tattoo",
      "https://www.instagram.com/black13tattoo/",
      "https://www.youtube.com/user/Black13Tattoo/"
    ],
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://black13tattoo.com/images/uploads/shop/waiting.jpg",
        "description": "tattoo parlor waiting room"
      },
      {
        "@type": "ImageObject",
        "url": "https://black13tattoo.com/images/uploads/shop/window.jpg",
        "description": "Black 13 entrance"
      },
      {
        "@type": "ImageObject",
        "url": "https://black13tattoo.com/images/uploads/shop/waiting-4.jpg",
        "description": "Black 13 waiting room"
      },
      {
        "@type": "ImageObject",
        "url": "https://black13tattoo.com/images/uploads/shop/workstation-3.jpg",
        "description": "tattoo workstations"
      }
    ]
  }
</script>
```

* http://schema.org/
* https://schema.org/docs/gs.html
* https://developers.google.com/search/docs/guides/intro-structured-data
* https://moz.com/learn/seo/schema-structured-data
