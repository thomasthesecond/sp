"use strict";

// Import page module
import LocationsPage from "../components/05-pages/locations";

// Import page-specific components
import "../components/03-components/cover-photo";
import LocationFinder from "../components/03-components/location-finder";
import "../components/03-components/location-list";
import "../components/03-components/location-map-legend";
import "../components/03-components/map-widget";
import "../components/03-components/masthead";

const locationsPage = new LocationsPage();
const locationFinder = new LocationFinder();

locationsPage.render();
locationFinder.render();
