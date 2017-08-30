"use strict";

// Import page module
import InvestorsPage from "../components/pages/investors";

// Import page-specific components
import "../components/components/breadcrumbs";
import "../components/components/feed";
import "../components/components/file-download";
import "../components/components/filter";
import "../components/components/help-tip";
import "../components/components/more-link";
import "../components/components/news-article";
import "../components/components/pagination";
import "../components/components/press-release-bio";
import "../components/components/press-release-contact";
import "../components/components/resources-list";
import "../components/components/search";
import "../components/components/stock-chart";
import "../components/components/stock-chart-filter";
import "../components/components/stock-price";
import "../components/components/stock-price-card";
import "../components/components/sub-navigation";
import "../components/components/team-list";
import "../components/components/team-member";
import "../components/components/utility-links";

const investorsPage = new InvestorsPage();

investorsPage.render();
