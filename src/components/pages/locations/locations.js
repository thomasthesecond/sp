"use strict";

export default class LocationsPage {
  constructor() {
    this.locationFinder = document.querySelector(".js-location-finder");

    this.toggleSticky = this.toggleSticky.bind(this);
  }

  toggleSticky() {
    window.addEventListener("scroll", () => {
      setTimeout(() => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollPosition >= this.locationFinder.parentNode.offsetTop) {
          this.locationFinder.classList.add("is-sticky");
        } else {
          this.locationFinder.classList.remove("is-sticky");
        }
      }, 100);
    });
  }

  render() {
    if (typeof window.CSS !== "undefined" && window.CSS.supports("position", "sticky")) {
      this.toggleSticky();
    }
  }
}
