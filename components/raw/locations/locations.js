"use strict";

export default class LocationsPage {
  constructor(options) {
    this.options = options;

    this.locationFinder = document.querySelector(".js-location-finder");
  }

  render() {
    window.addEventListener("scroll", () => {
      setTimeout(() => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // console.log(scrollPosition, this.locationFinder.parentNode.offsetTop);

        if (scrollPosition >= this.locationFinder.parentNode.offsetTop) {
          this.locationFinder.classList.add("is-sticky");
          // this.locationFinder.parentNode.classList.remove("container");
          // console.log("is-sticky");
        } else {
          this.locationFinder.classList.remove("is-sticky");
          // this.locationFinder.parentNode.classList.add("container");
          // console.log("is-not-sticky");
        }
      }, 100);
    });
  }
}
