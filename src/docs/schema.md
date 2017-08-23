---
title: Structured data / Schema.org
---

## What is Schema.org Structured Data?

> Schema.org is the result of collaboration between Google, Bing, Yandex, and Yahoo! to help you provide the information their search engines need to understand your content and provide the best search results possible at this time. Adding Schema markup to your HTML improves the way your page displays in SERPs by enhancing the rich snippets that are displayed beneath the page title.

The following markup should be placed in the document’s `head` on every page (ideally near the end of the `head`). It has been placed on every template provided, but it will need to be placed on any additional pages that are created.

Please note that the URL for the logo may need to be updated depending on where it is uploaded in the back-end. The source file can be found at `src/assets/images/logo.png`.

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
    "telephone": "615-234-5900",
    "faxNumber": "615-234-5998",
    "url": "https://www.surgerypartners.com/",
    "logo": "https://www.surgerypartners.com/assets/images/logo.png",
    "description": "Surgery Partners is a leading operator of surgical facilities and ancillary services with more than 180 locations nationwide. We provide exceptional integrated healthcare experiences between our providers and patients."
  }
</script>
```

## Additional resources

* http://schema.org/
* https://schema.org/docs/gs.html
* https://developers.google.com/search/docs/guides/intro-structured-data
* https://search.google.com/structured-data/testing-tool
* https://moz.com/learn/seo/schema-structured-data
