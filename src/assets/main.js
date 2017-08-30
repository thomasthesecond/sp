"use strict";

// Import global modules
import "picturefill";
import "normalize.css/normalize.css";
import "./scss/global.scss";

// Import icons
import "../components/_icon/icon.scss";

// Import layout modules
import "./scss/layout.scss";

// Import global components
import "../components/components/_skip-link";
import Banner from "../components/components/banner";
import "../components/components/blockquote";
import "../components/components/button";
import Contentinfo from "../components/components/contentinfo";
import "../components/components/heading";
import "../components/components/hr";
import "../components/components/input";
import "../components/components/list";
import "../components/components/next-page";
import "../components/components/paragraph";
import "../components/components/select";
import "../components/components/table";
import "../components/components/textarea";

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
