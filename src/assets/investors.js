"use strict";

// Import page module
import InvestorsPage from "../components/05-pages/investors";

// Import page-specific components
import "../components/03-components/breadcrumbs";
import "../components/03-components/feed";
import "../components/03-components/file-download";
import "../components/03-components/filter";
import "../components/03-components/help-tip";
import "../components/03-components/more-link";
import "../components/03-components/news-article";
import "../components/03-components/pagination";
import "../components/03-components/press-release-bio";
import "../components/03-components/press-release-contact";
import "../components/03-components/resources-list";
import "../components/03-components/search";
import "../components/03-components/stock-chart";
import "../components/03-components/stock-chart-filter";
import "../components/03-components/stock-price";
import "../components/03-components/stock-price-card";
import "../components/03-components/sub-navigation";
import "../components/03-components/team-list";
import "../components/03-components/team-member";
import "../components/03-components/utility-links";

const investorsPage = new InvestorsPage();

investorsPage.render();
