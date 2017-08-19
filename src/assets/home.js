// Import page module
import "../components/05-pages/home";

// Import page-specific components
import CoverVideo from "../components/03-components/cover-video";
import "../components/03-components/image-block";
import "../components/03-components/introduction";
import "../components/03-components/masthead";
import LocationFinder from "../components/03-components/location-finder";
import "../components/03-components/location-finder-button";

const coverVideo = new CoverVideo();
const locationFinder = new LocationFinder();

coverVideo.render();
locationFinder.render();

console.info("Home loaded");
