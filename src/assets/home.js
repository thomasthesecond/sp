// Import page module
import HomePage from "../components/05-pages/home";

// Import page-specific components
import CoverVideo from "../components/03-components/cover-video";
import "../components/03-components/image-block";
import "../components/03-components/introduction";
import "../components/03-components/masthead";
import LocationFinder from "../components/03-components/location-finder";
import "../components/03-components/location-finder-button";

const homePage = new HomePage();
const coverVideo = new CoverVideo();
const locationFinder = new LocationFinder();

homePage.render();
coverVideo.render();
locationFinder.render();

console.info("Home loaded");
