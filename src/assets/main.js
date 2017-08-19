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
import GlobalFooter from "../components/03-components/global-footer";
import "../components/03-components/hr";
import "../components/03-components/input";
import "../components/03-components/more-link";
import "../components/03-components/select";

// Import global modules
import "./scss/utils.scss";
import "./scss/print.scss";

console.info("Main loaded");

const globalFooter = new GlobalFooter();
const banner = new Banner();
const doc = document.documentElement;

globalFooter.render();
banner.render();

doc.className = doc.className.replace("no-js", "js");
