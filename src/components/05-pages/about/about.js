"use strict";

import ScrollMagic from "scrollmagic";
import { forEach } from "../../../assets/js/utils";

export default class AboutPage {
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
      .setClassToggle(".CoverPhoto", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-masthead" })
      .setClassToggle(".Masthead-title", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-introduction" })
      .setClassToggle(".Introduction", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-service-cards", offset: -300 })
      .setClassToggle(".ServiceCards", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-feature" })
      .setClassToggle(".Feature .CoverPhoto", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-feature" })
      .setClassToggle(".Feature .Highlight", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-leadership-team", offset: -300 })
      .setClassToggle(".LeadershipTeam", this.className)
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
