// Import global modules
import "picturefill";
import "normalize.css/normalize.css";
import "./scss/global.scss";
import "./scss/styleguide.scss";

// Import layout modules
import "../components/04-layout/layout.scss";

// Import components
import "../components/03-components/alert";
import "../components/03-components/blockquote";
import "../components/03-components/button";
import "../components/03-components/cover-photo";
import "../components/03-components/cover-video";
import "../components/03-components/feature";
import GlobalFooter from "../components/03-components/global-footer";
import GlobalHeader from "../components/03-components/global-header";
import "../components/03-components/hamburger";
import "../components/03-components/home-block";
import "../components/03-components/introduction";
import "../components/03-components/leadership-team";
import LocationFinder from "../components/03-components/location-finder";
// import LocationSelect from "../components/03-components/location-select";
import "../components/03-components/location-finder-button";
import "../components/03-components/logo";
import "../components/03-components/masthead";
import "../components/03-components/more-link";
import "../components/03-components/navigation";
import "../components/03-components/search";
import "../components/03-components/select";
import "../components/03-components/service-card";
import "../components/03-components/service-cards";
import "../components/03-components/skip-link";
import "../components/03-components/statistic";
import "../components/03-components/sub-navigation";
import "../components/03-components/tagline";
import "../components/03-components/team-member";
import "../components/03-components/timeline";

import "./scss/utils.scss";

if (document.querySelector(".GlobalFooter")) {
  const globalFooter = new GlobalFooter();
  globalFooter.render();
}

if (document.querySelector(".GlobalHeader")) {
  const globalHeader = new GlobalHeader();
  globalHeader.render();
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
