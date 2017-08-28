"use strict";

import ScrollMagic from "scrollmagic";

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
    // this.controller = new ScrollMagic.Controller({
    //   globalSceneOptions: {
    //     triggerHook: "onLeave",
    //   },
    // });
    //
    // new ScrollMagic.Scene({ triggerElement: ".js-location-finder" })
    //   .setClassToggle(".js-location-finder", "is-sticky")
    //   .addTo(this.controller);

    if (typeof window.CSS !== "undefined" && window.CSS.supports("position", "sticky")) {
      this.toggleSticky();
    }
  }
}
