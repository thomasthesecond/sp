"use strict";

import ScrollMagic from "scrollmagic";
import { forEach } from "../../../assets/js/utils";

export default class HomePage {
  constructor() {
    this.controller = null;
    this.className = "animate";

    this.mql = window.matchMedia("(min-width: 1024px)");
    this.reduceMotion = window.matchMedia("(prefers-reduced-motion)");

    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.create = this.create.bind(this);
    this.animate = this.animate.bind(this);
    this.destroy = this.destroy.bind(this);
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
      .setClassToggle(".Masthead", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-masthead" })
      .setClassToggle(".CoverVideo", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-masthead" })
      .setClassToggle(".Masthead .Tagline", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".Masthead" })
      .setClassToggle(".Masthead .MoreLink", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-location-finder" })
      .setClassToggle(".LocationFinder", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-introduction", offset: 0 })
      .setClassToggle(".Introduction", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-partnerships-section", offset: 100 })
      .setClassToggle("#partnerships-section", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-investors-section", offset: 100 })
      .setClassToggle("#investors-section", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-careers-section", offset: 100 })
      .setClassToggle("#careers-section", this.className)
      .addTo(this.controller);
  }

  render() {
    if (this.reduceMotion.matches) {
      document.documentElement.classList.add("disable-animations");
    } else {
      window.scrollTo(0, 0);
      this.checkScreenSize(this.mql);
      this.mql.addListener(this.checkScreenSize);
    }
  }
}
