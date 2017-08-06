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
import "../components/_04-layout/layout.scss";

// Import global components
import "../components/03-components/_skip-link";
import "../components/03-components/button";
import GlobalFooter from "../components/03-components/global-footer";
import GlobalHeader from "../components/03-components/global-header";
import "../components/03-components/select";

// Import global modules
import "./scss/utils.scss";
import "./scss/print.scss";

console.info("Main loaded");

const globalFooter = new GlobalFooter();
const globalHeader = new GlobalHeader();
const doc = document.documentElement;

globalFooter.render();
globalHeader.render();

doc.className = doc.className.replace("no-js", "js");
