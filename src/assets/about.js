"use strict";

// Import page module
import AboutPage from "../components/05-pages/about";

// Import page-specific components
import "../components/03-components/cover-photo";
import "../components/03-components/feature";
import "../components/03-components/introduction";
import "../components/03-components/leadership-team";
import "../components/03-components/masthead";
import "../components/03-components/service-cards";
import SubNavigation from "../components/03-components/sub-navigation";
import "../components/03-components/team-member";
import "../components/03-components/timeline";

const aboutPage = new AboutPage();
const subNavigation = new SubNavigation();

aboutPage.render();
subNavigation.render();
