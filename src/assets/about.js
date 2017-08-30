"use strict";

// Import page module
import AboutPage from "../components/05-pages/about";

// Import page-specific components
import "../components/components/cover-photo";
import "../components/components/feature";
import "../components/components/highlight";
import "../components/components/introduction";
import "../components/components/leadership-team";
import "../components/components/masthead";
import "../components/components/service-cards";
import SubNavigation from "../components/components/sub-navigation";
import "../components/components/team-member";
import "../components/components/timeline";

// Import animations
import "./scss/animations.scss";

const aboutPage = new AboutPage();
const subNavigation = new SubNavigation();

aboutPage.render();
subNavigation.render();
