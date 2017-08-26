"use strict";

// Import global modules
import "picturefill";
import "normalize.css/normalize.css";
import "./scss/global.scss";
import "../components/03-components/heading/heading.scss";
import "../components/03-components/list/list.scss";
import "../components/03-components/paragraph/paragraph.scss";
import "../components/03-components/table/table.scss";

// Import icons
import "../components/_02-icons/icons.scss";

// Import layout modules
import "../components/04-layout/layout.scss";

// Import global components
import "../components/03-components/_skip-link";
import Banner from "../components/03-components/banner";
import "../components/03-components/button";
import Contentinfo from "../components/03-components/contentinfo";
import "../components/03-components/hr";
import "../components/03-components/input";
import "../components/03-components/next-page";
import "../components/03-components/select";

// Import global modules
import "./scss/utils.scss";
import "./scss/print.scss";

// Import utils
import {
  objectFitCover,
  replaceNoJsClassName,
} from "./js/utils";

const contentinfo = new Contentinfo();
const banner = new Banner();

contentinfo.render();
banner.render();

replaceNoJsClassName();
objectFitCover();
