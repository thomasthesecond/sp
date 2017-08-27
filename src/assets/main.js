"use strict";

// Import global modules
import "picturefill";
import "normalize.css/normalize.css";
import "./scss/global.scss";

// Import icons
import "../components/_02-icons/icons.scss";

// Import layout modules
import "../components/04-layout/layout.scss";

// Import global components
import "../components/03-components/_skip-link";
import Banner from "../components/03-components/banner";
import "../components/03-components/blockquote";
import "../components/03-components/button";
import Contentinfo from "../components/03-components/contentinfo";
import "../components/03-components/heading";
import "../components/03-components/hr";
import "../components/03-components/input";
import "../components/03-components/list";
import "../components/03-components/next-page";
import "../components/03-components/paragraph";
import "../components/03-components/select";
import "../components/03-components/table";
import "../components/03-components/textarea";

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

require("smoothscroll-polyfill").polyfill();
