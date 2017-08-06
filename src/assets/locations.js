// Import page module
import "../components/05-pages/locations";

// Import page-specific components
import LocationFinder from "../components/03-components/location-finder";
import "../components/03-components/location-map-legend";
import "../components/03-components/masthead";

const locationFinder = new LocationFinder();

locationFinder.render();

const loc = document.querySelector(".js-location-finder");

window.addEventListener("scroll", (event) => {
  setTimeout(() => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    console.log(scrollPosition, loc.parentNode.offsetTop);

    if (scrollPosition >= loc.parentNode.offsetTop) {
      loc.classList.add("is-sticky");
      // loc.parentNode.classList.remove("container");
      // console.log("is-sticky");
    } else {
      loc.classList.remove("is-sticky");
      // loc.parentNode.classList.add("container");
      // console.log("is-not-sticky");
    }
  }, 100);
});

console.info("Locations loaded");
