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
import "../components/03-components/more-link";
import "../components/03-components/select";

// Import global modules
import "./scss/utils.scss";
import "./scss/print.scss";

console.info("Main loaded");

const contentinfo = new Contentinfo();
const banner = new Banner();
const doc = document.documentElement;

contentinfo.render();
banner.render();

doc.className = doc.className.replace("no-js", "js");


/**
 * Polyfill object-fit: cover
 */
if ("objectFit" in document.documentElement.style === false) {
	document.addEventListener("DOMContentLoaded", () => {
		Array.prototype.forEach.call(document.querySelectorAll(".CoverPhoto"), (el) => {
      const image = el.querySelector("img");
			(el.runtimeStyle || el.style).background = `url("${image.src}") no-repeat 50% / cover`;
      (image.runtimeStyle || image.style).display = "none";
		});
	});
}
