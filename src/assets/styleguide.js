// Import global modules
import "picturefill";
import "normalize.css/normalize.css";
import "./scss/global.scss";
import "../components/03-components/heading/heading.scss";
import "../components/03-components/list/list.scss";
import "../components/03-components/paragraph/paragraph.scss";
import "../components/03-components/table/table.scss";
import "./scss/styleguide.scss";

// Import icons
import "../components/_02-icons/icons.scss";

// Import layout modules
import "../components/04-layout/layout.scss";

// Import components
import Banner from "../components/03-components/banner";
import "../components/03-components/blockquote";
import "../components/03-components/breadcrumbs";
import "../components/03-components/button";
import "../components/03-components/cover-photo";
import CoverVideo from "../components/03-components/cover-video";
import "../components/03-components/feature";
import "../components/03-components/feed";
import "../components/03-components/filter";
import Contentinfo from "../components/03-components/contentinfo";
import "../components/03-components/hamburger";
import "../components/03-components/help-tip";
import "../components/03-components/highlight";
import "../components/03-components/hr";
import "../components/03-components/image-block";
import "../components/03-components/input";
import "../components/03-components/introduction";
import "../components/03-components/leadership-team";
import LocationFinder from "../components/03-components/location-finder";
// import LocationSelect from "../components/03-components/location-select";
import "../components/03-components/location-finder-button";
import "../components/03-components/location-list";
import "../components/03-components/location-map-legend";
import "../components/03-components/logo";
import "../components/03-components/map-widget";
import "../components/03-components/masthead";
import "../components/03-components/more-link";
import "../components/03-components/navigation";
import "../components/03-components/news-article";
import "../components/03-components/next-page";
import "../components/03-components/no-results";
import "../components/03-components/pagination";
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
import "../components/03-components/tagline";
import "../components/03-components/team-list";
import "../components/03-components/team-member";
import "../components/03-components/testimonial";
import "../components/03-components/timeline";
import "../components/03-components/utility-links";

import "./scss/utils.scss";

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

// if (document.querySelector(".js-location-select")) {
//   const locationSelect = new LocationSelect();
//   locationSelect.render();
// }

const doc = document.documentElement;
doc.className = doc.className.replace("no-js", "js");

console.info("Styleguide loaded");
