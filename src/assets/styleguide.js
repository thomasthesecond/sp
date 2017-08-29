"use strict";

// Import global modules
import "picturefill";
import "normalize.css/normalize.css";
import "./scss/global.scss";
import "./scss/styleguide.scss";

// Import icons
import "../components/_icon/icon.scss";

// Import layout modules
import "./scss/layout.scss";

// Import components
import Banner from "../components/03-components/banner";
import "../components/03-components/blockquote";
import "../components/03-components/breadcrumbs";
import "../components/03-components/button";
import "../components/03-components/contact-form";
import Contentinfo from "../components/03-components/contentinfo";
import "../components/03-components/cover-photo";
import CoverVideo from "../components/03-components/cover-video";
import "../components/03-components/feature";
import "../components/03-components/feed";
import "../components/03-components/file-download";
import "../components/03-components/filter";
import "../components/03-components/hamburger";
import "../components/03-components/heading";
import "../components/03-components/help-tip";
import "../components/03-components/highlight";
import "../components/03-components/hr";
import "../components/03-components/image-block";
import "../components/03-components/input";
import "../components/03-components/introduction";
import "../components/03-components/leadership-team";
import "../components/03-components/list";
import LocationFinder from "../components/03-components/location-finder";
import "../components/03-components/location-finder-button";
import "../components/03-components/location-list";
import "../components/03-components/location-map-legend";
import "../components/03-components/logo";
import "../components/03-components/map-widget";
import "../components/03-components/masthead";
import Modal from "../components/03-components/modal";
import "../components/03-components/more-link";
import "../components/03-components/navigation";
import "../components/03-components/news-article";
import "../components/03-components/next-page";
import "../components/03-components/no-results";
import "../components/03-components/overlay";
import "../components/03-components/pagination";
import "../components/03-components/paragraph";
import "../components/03-components/press-release-bio";
import "../components/03-components/press-release-contact";
import "../components/03-components/resources-list";
import "../components/03-components/search";
import "../components/03-components/select";
import "../components/03-components/service-card";
import "../components/03-components/service-cards";
import "../components/03-components/stock-chart";
import "../components/03-components/stock-chart-filter";
import "../components/03-components/stock-price";
import "../components/03-components/stock-price-card";
import "../components/03-components/sub-navigation";
import "../components/03-components/table";
import "../components/03-components/tagline";
import "../components/03-components/team-list";
import "../components/03-components/team-member";
import "../components/03-components/testimonial";
import "../components/03-components/textarea";
import "../components/03-components/timeline";
import "../components/03-components/utility-links";

import "./scss/utils.scss";

// Import utils
import {
  objectFitCover,
  replaceNoJsClassName,
} from "./js/utils";

if (document.querySelector(".CoverVideo")) {
  const coverVideo = new CoverVideo();
  coverVideo.render();
}

if (document.querySelector(".Contentinfo")) {
  const contentinfo = new Contentinfo();
  contentinfo.render();
}

if (document.querySelector(".Banner")) {
  const banner = new Banner();
  banner.render();
}

if (document.querySelector(".js-location-finder")) {
  const locationFinder = new LocationFinder();
  locationFinder.render();
}

if (document.getElementById("modal-with-trigger-example")) {
  const modal = new Modal();
  const modalTrigger = document.querySelector(".js-modal-trigger");

  if (modalTrigger) {
    modalTrigger.addEventListener("click", () => {
      modal.open();
    });
  }
}

if (document.getElementById("modal-with-dynamic-content-example")) {
  const modal = new Modal();
  const modalTrigger = document.querySelector(".js-modal-trigger");
  const content = `
    <h2 id="modal-with-dynamic-content-example-title">Dynamic content example</h2>
    <p id="modal-with-dynamic-content-example-description">This content has been loaded dyanmically via JavaScript.</p>
  `;

  if (modalTrigger) {
    modalTrigger.addEventListener("click", () => {
      modal.open(content);
    });
  }
}

replaceNoJsClassName();
objectFitCover();

require("smoothscroll-polyfill").polyfill();
