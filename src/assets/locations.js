"use strict";

// Import page module
import LocationsPage from "../components/pages/locations";

// Import page-specific components
import "../components/components/cover-photo";
import LocationFinder from "../components/components/location-finder";
import "../components/components/location-list";
import "../components/components/location-map-legend";
import "../components/components/map-widget";
import "../components/components/masthead";

// Import animations
import "./scss/animations.scss";

const locationsPage = new LocationsPage();
const locationFinder = new LocationFinder();

locationsPage.render();
locationFinder.render();
