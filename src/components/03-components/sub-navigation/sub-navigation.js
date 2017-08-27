"use strict";

import ScrollMagic from "scrollmagic";

class SubNavigation {
  constructor() {
    this.subNavigation = document.querySelector(".js-sub-navigation");
    this.subNavigationMarker = this.subNavigation.querySelector(".js-sub-navigation-marker");
    this.subNavigationItems = this.subNavigation.querySelectorAll("li");
    this.sections = document.querySelectorAll(".js-spy-section");

    this.listenForAnchorClick = this.listenForAnchorClick.bind(this);
    this.updateMarker = this.updateMarker.bind(this);
    this.makeMarkerVisible = this.makeMarkerVisible.bind(this);
    this.makeMarkerInvisible = this.makeMarkerInvisible.bind(this);
    this.setMarkerWidth = this.setMarkerWidth.bind(this);
    this.setMarkerOffset = this.setMarkerOffset.bind(this);
    this.setMarkerTransition = this.setMarkerTransition.bind(this);
    this.updateMarkerOffsetOnResize = this.updateMarkerOffsetOnResize.bind(this);
    this.setUpScrollSpy = this.setUpScrollSpy.bind(this);
    this.setUpItems = this.setUpItems.bind(this);
    this.scrollActiveMarkerIntoView = this.scrollActiveMarkerIntoView.bind(this);

    this.currentItem = null;

    this.motionQuery = window.matchMedia("(prefers-reduced-motion)");
  }

  listenForAnchorClick(anchor) {
    anchor.addEventListener("click", (event) => {
      const hashId = anchor.hash.replace("#", "");

      window.scroll({
        top: document.getElementById(hashId).offsetTop - this.subNavigation.offsetHeight,
        left: 0,
        behavior: "smooth",
      });

      event.preventDefault();
    });
  }

  scrollActiveMarkerIntoView(offset) {
    const list = this.subNavigation.querySelector("ul");

    if (typeof list.scroll === "function") {
      list.scroll({
        top: 0,
        left: (offset - 24),
        behavior: "smooth",
      });
    }
  }

  updateMarker(item) {
    const mql = window.matchMedia("(max-width: 1006px)");
    const activeWidth = item.offsetWidth;
    const activeOffset = item.offsetLeft;

    const padding = () => (mql.matches ? 10 : 0);
    mql.addListener(padding);

    this.makeMarkerVisible();
    this.setMarkerWidth(activeWidth);
    this.setMarkerOffset(activeOffset - padding());
    this.scrollActiveMarkerIntoView(activeOffset);
  }

  makeMarkerVisible() {
    this.subNavigationMarker.style.opacity = 1;
  }

  makeMarkerInvisible() {
    this.subNavigationMarker.style.opacity = 0;
  }

  setMarkerWidth(width) {
    this.subNavigationMarker.style.width = `${width}px`;
  }

  setMarkerOffset(offset) {
    this.subNavigationMarker.style.transform = `translateX(${offset}px)`;
  }

  setMarkerTransition() {
    setTimeout(() => {
      this.subNavigationMarker.style.transition = "opacity 200ms, transform 200ms";
    }, 200);
  }

  updateMarkerOffsetOnResize() {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        if (this.currentItem) {
          this.updateMarker(this.currentItem);
        }
      }, 100);
    });
  }

  setUpScrollSpy() {
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onEnter",
      },
    });

    this.updateMarkerOffsetOnResize();

    this.sections.forEach((section, index) => {
      const scene = new ScrollMagic.Scene({
        duration: document.getElementById(section.id).offsetHeight,
        offset: (document.getElementById(section.id).offsetTop - this.subNavigation.offsetHeight),
      }).addTo(controller);

      scene.on("enter", () => {
        this.currentItem = document.getElementById(`${section.id}-item`);
        this.updateMarker(this.currentItem);

        if (this.currentItem && !this.motionQuery.matches) {
          this.setMarkerTransition();
        }
      });

      scene.on("leave", (event) => {
        if (index === 0 && event.scrollDirection === "REVERSE") {
          this.makeMarkerInvisible();
        }

        if (index === this.sections.length - 1 && event.scrollDirection === "FORWARD") {
          this.makeMarkerInvisible();
        }
      });
    });
  }

  setUpItems() {
    this.subNavigationItems.forEach((item) => {
      const anchor = item.querySelector("a");

      this.listenForAnchorClick(anchor);
    });
  }

  render() {
    this.setUpScrollSpy();
    this.setUpItems();
  }
}

export default SubNavigation;
