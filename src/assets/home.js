"use strict";

// Import page module
import HomePage from "../components/05-pages/home";

// Import page-specific components
import "../components/components/cover-photo";
import CoverVideo from "../components/components/cover-video";
import "../components/components/image-block";
import "../components/components/introduction";
import LocationFinder from "../components/components/location-finder";
import "../components/components/location-finder-button";
import "../components/components/masthead";
import "../components/components/more-link";
import "../components/components/tagline";

// Import animations
import "./scss/animations.scss";

const homePage = new HomePage();
const coverVideo = new CoverVideo();
const locationFinder = new LocationFinder();

homePage.render();
coverVideo.render();
locationFinder.render();
