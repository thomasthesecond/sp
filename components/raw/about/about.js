"use strict";

import ScrollMagic from "scrollmagic";
import Modal from "../../03-components/modal";
import { forEach } from "../../../assets/js/utils";

export default class AboutPage {
  static teamMemberModal() {
    const modal = new Modal();
    const teamMembers = document.querySelectorAll(".TeamMember");
    const modalElement = document.querySelector(".js-modal");

    forEach(teamMembers, (index, member) => {
      const name = member.querySelector(".TeamMember-name").innerHTML;
      const title = member.querySelector(".TeamMember-title").innerHTML;
      const bio = member.querySelector(".TeamMember-bio").innerHTML;

      const content = `
        <div class="TeamMember">
          <h2 class="TeamMember-name" id="${modalElement.id}-title">${name}</h2>
          <div class="TeamMember-title">${title}</div>
          <p class="TeamMember-bio" id="${modalElement.id}-description">${bio}</p>
        </div>
      `;

      member.addEventListener("click", (event) => {
        modal.open(content);
        event.preventDefault();
      }, false);
    });
  }

  constructor() {
    this.controller = null;
    this.className = "animate";

    this.mql = window.matchMedia("(min-width: 1024px)");
    this.mqlModal = window.matchMedia("(max-width: 1014px)");
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

    new ScrollMagic.Scene({ triggerElement: ".js-service-cards", offset: -350 })
      .setClassToggle(".ServiceCards", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-feature" })
      .setClassToggle(".Feature .CoverPhoto", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-feature", offset: -350 })
      .setClassToggle(".Feature .Highlight", this.className)
      .addTo(this.controller);

    new ScrollMagic.Scene({ triggerElement: ".js-leadership-team", offset: -550 })
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

    AboutPage.teamMemberModal(this.mqlModal);
    this.mqlModal.addListener(AboutPage.teamMemberModal);
  }
}
