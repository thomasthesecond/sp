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

    // new ScrollMagic.Scene({ triggerElement: ".js-banner" })
    //   .setClassToggle(".Banner", this.className)
    //   .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-sub-navigation" })
      .setClassToggle(".SubNavigation", this.className)
      .addTo(this.controller);

    // new ScrollMagic.Scene({ triggerElement: ".js-masthead" })
    //   .setClassToggle(".Masthead", this.className)
    //   .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-masthead" })
      .setClassToggle(".CoverPhoto", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-masthead" })
      .setClassToggle(".Masthead-title", this.className)
      .addTo(this.controller);

    // new ScrollMagic.Scene({ triggerElement: ".Masthead" })
    //   .setClassToggle(".Masthead .MoreLink", this.className)
    //   .addTo(this.controller);
    //
    // new ScrollMagic.Scene({ triggerElement: ".js-location-finder" })
    //   .setClassToggle(".LocationFinder", this.className)
    //   .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-introduction" })
      .setClassToggle(".Introduction", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-physician-practices", offset: 500 })
      .setClassToggle(".ImageBlock#physician-practices", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-ambulatory-surgery-centers", offset: 500 })
      .setClassToggle(".ImageBlock#ambulatory-surgery-centers", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-surgical-hospitals", offset: 500 })
      .setClassToggle(".ImageBlock#surgical-hospitals", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-healthcare-systems", offset: 500 })
      .setClassToggle(".ImageBlock#healthcare-systems", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-feature", offset: 500 })
      .setClassToggle(".Feature .CoverPhoto", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-feature", offset: 500 })
      .setClassToggle(".Feature .Testimonial", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-testimonial-1", offset: 500 })
      .setClassToggle(".js-testimonial-1", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-testimonial-2", offset: 500 })
      .setClassToggle(".js-testimonial-2", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-testimonial-3", offset: 500 })
      .setClassToggle(".js-testimonial-3", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-testimonial-4", offset: 500 })
      .setClassToggle(".js-testimonial-4", this.className)
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
