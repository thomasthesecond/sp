"use strict";

// Import page module
import HomePage from "../components/05-pages/home";

// Import page-specific components
import "../components/03-components/cover-photo";
import CoverVideo from "../components/03-components/cover-video";
import "../components/03-components/image-block";
import "../components/03-components/introduction";
import LocationFinder from "../components/03-components/location-finder";
import "../components/03-components/location-finder-button";
import "../components/03-components/masthead";
import "../components/03-components/more-link";
import "../components/03-components/tagline";

// Import animations
import "./scss/animations.scss";

const homePage = new HomePage();
const coverVideo = new CoverVideo();
const locationFinder = new LocationFinder();

homePage.render();
coverVideo.render();
locationFinder.render();
