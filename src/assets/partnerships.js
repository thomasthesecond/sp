"use strict";

// Import page module
import PartnershipsPage from "../components/05-pages/partnerships";

// Import page-specific components
import "../components/03-components/cover-photo";
import "../components/03-components/feature";
import "../components/03-components/introduction";
import "../components/03-components/image-block";
import "../components/03-components/masthead";
import SubNavigation from "../components/03-components/sub-navigation";
import "../components/03-components/testimonial";

// Import animations
import "./scss/animations.scss";

const partnershipsPage = new PartnershipsPage();
const subNavigation = new SubNavigation();

partnershipsPage.render();
subNavigation.render();
