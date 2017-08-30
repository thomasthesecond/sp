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
      .setClassToggle(".CoverPhoto", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-masthead" })
      .setClassToggle(".Masthead-title", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-introduction" })
      .setClassToggle(".Introduction", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-physician-practices", offset: 100 })
      .setClassToggle("#physician-practices .ImageBlock", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-ambulatory-surgery-centers", offset: 100 })
      .setClassToggle("#ambulatory-surgery-centers .ImageBlock", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-surgical-hospitals", offset: 100 })
      .setClassToggle("#surgical-hospitals .ImageBlock", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-healthcare-systems", offset: 100 })
      .setClassToggle("#healthcare-systems .ImageBlock", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-feature", offset: 100 })
      .setClassToggle(".Feature .CoverPhoto", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-feature", offset: 100 })
      .setClassToggle(".Feature .Testimonial", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-testimonial-1", offset: 100 })
      .setClassToggle(".js-testimonial-1", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-testimonial-2", offset: 100 })
      .setClassToggle(".js-testimonial-2", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-testimonial-3", offset: 100 })
      .setClassToggle(".js-testimonial-3", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-testimonial-4", offset: 100 })
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
