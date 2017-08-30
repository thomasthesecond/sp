"use strict";

import ScrollMagic from "scrollmagic";
import { forEach } from "../../../assets/js/utils";

export default class LocationsPage {
  constructor() {
    this.controller = null;
    this.className = "animate";
    this.locationFinder = document.querySelector(".js-location-finder");

    this.mql = window.matchMedia("(min-width: 1024px)");
    this.reduceMotion = window.matchMedia("(prefers-reduced-motion)");

    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.create = this.create.bind(this);
    this.animate = this.animate.bind(this);
    this.destroy = this.destroy.bind(this);
    this.toggleSticky = this.toggleSticky.bind(this);
  }

  checkScreenSize(mql) {
    if (mql.matches) {
      this.animate();
    } else {
      this.destroy();
    }
  }

  create() {
    this.controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        reverse: false,
        triggerHook: "onEnter",
      },
    });
  }

  destroy() {
    if (this.controller) {
      const nodes = document.querySelectorAll(`.${this.className}`);

      forEach(nodes, (index, node) => {
        node.classList.remove(this.className);
      });

      this.controller.destroy(true);
    }
  }

  animate() {
    if (!this.controller) {
      this.create();
    }

    new ScrollMagic.Scene({ triggerElement: ".js-masthead" })
      .setClassToggle(".CoverPhoto", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-masthead" })
      .setClassToggle(".Masthead-title", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-location-finder" })
      .setClassToggle(".LocationFinder", this.className)
      .addTo(this.controller);
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
    if (this.reduceMotion.matches) {
      document.documentElement.classList.add("disable-animations");
    } else {
      window.scrollTo(0, 0);
      this.checkScreenSize(this.mql);
      this.mql.addListener(this.checkScreenSize);
    }

    if (typeof window.CSS !== "undefined" && window.CSS.supports("position", "sticky")) {
      this.toggleSticky();
    }
  }
}
