---
title: URL redirects
label: URL redirects
---

## surgerypartners.com vs. surgery-partners.com

There are currently two versions of the Surgery Partners website; http://www.surgerypartners.com/ and http://www.surgery-partners.com/. This is a problem because [Google has indexed both versions](https://cl.ly/0Z3n2N1a1e0e) and there is no canonical URL. The solution is to redirect all traffic to https://www.surgerypartners.com/ (note `https`). This includes:

* Non-www URLs
* Non-https URLs
* All surgery-partners.com URLs

## 301 redirects

301 redirects will need to be configured after the new URL structure is defined. Below is a small sample of URLs that will need to be redirected. A complete audit will need to be performed before configuring all redirects.

| Old URL | Proposed new URL |
| ------- | ---------------- |
| https://www.surgerypartners.com/content/who-we-are | https://www.surgerypartners.com/about/ |
| https://www.surgerypartners.com/content/about-us | https://www.surgerypartners.com/about/ |
| https://www.surgerypartners.com/management-team | https://www.surgerypartners.com/about/ |
| https://www.surgerypartners.com/content/our-story | https://www.surgerypartners.com/about/ |
| https://www.surgerypartners.com/content/our-partners | https://www.surgerypartners.com/partnerships/ |
| https://www.surgerypartners.com/content/become-partner | https://www.surgerypartners.com/partnerships/ |
| https://www.surgerypartners.com/content/ambulatory-surgery-centers | https://www.surgerypartners.com/partnerships/ |
| https://www.surgerypartners.com/content/physician-partnered-hospitals | https://www.surgerypartners.com/partnerships/ |
| https://www.surgerypartners.com/content/healthcare-systems | https://www.surgerypartners.com/partnerships/ |
| https://www.surgerypartners.com/development-team | https://www.surgerypartners.com/partnerships/ |
| http://www.surgerypartners.com/content/contact-us | https://www.surgerypartners.com/contact/ |

Again, this is not a complete list of redirects, only an example.
