"use strict";

// Import page module
import PartnershipsPage from "../components/05-pages/partnerships";

// Import page-specific components
import "../components/components/cover-photo";
import "../components/components/feature";
import "../components/components/introduction";
import "../components/components/image-block";
import "../components/components/masthead";
import SubNavigation from "../components/components/sub-navigation";
import "../components/components/testimonial";

// Import animations
import "./scss/animations.scss";

const partnershipsPage = new PartnershipsPage();
const subNavigation = new SubNavigation();

partnershipsPage.render();
subNavigation.render();
