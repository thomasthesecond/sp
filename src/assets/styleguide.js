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
import Banner from "../components/components/banner";
import "../components/components/blockquote";
import "../components/components/breadcrumbs";
import "../components/components/button";
import "../components/components/contact-form";
import Contentinfo from "../components/components/contentinfo";
import "../components/components/cover-photo";
import CoverVideo from "../components/components/cover-video";
import "../components/components/feature";
import "../components/components/feed";
import "../components/components/file-download";
import "../components/components/filter";
import "../components/components/hamburger";
import "../components/components/heading";
import "../components/components/help-tip";
import "../components/components/highlight";
import "../components/components/hr";
import "../components/components/image-block";
import "../components/components/input";
import "../components/components/introduction";
import "../components/components/leadership-team";
import "../components/components/list";
import LocationFinder from "../components/components/location-finder";
import "../components/components/location-finder-button";
import "../components/components/location-list";
import "../components/components/location-map-legend";
import "../components/components/logo";
import "../components/components/map-widget";
import "../components/components/masthead";
import Modal from "../components/components/modal";
import "../components/components/more-link";
import "../components/components/navigation";
import "../components/components/news-article";
import "../components/components/next-page";
import "../components/components/overlay";
import "../components/components/pagination";
import "../components/components/paragraph";
import "../components/components/press-release-bio";
import "../components/components/press-release-contact";
import "../components/components/resources-list";
import "../components/components/search";
import "../components/components/select";
import "../components/components/service-card";
import "../components/components/service-cards";
import "../components/components/stock-chart";
import "../components/components/stock-chart-filter";
import "../components/components/stock-price";
import "../components/components/stock-price-card";
import "../components/components/sub-navigation";
import "../components/components/table";
import "../components/components/tagline";
import "../components/components/team-list";
import "../components/components/team-member";
import "../components/components/testimonial";
import "../components/components/textarea";
import "../components/components/timeline";
import "../components/components/utility-links";

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
