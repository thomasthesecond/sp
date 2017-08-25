"use strict";

import { forEach } from "../../../assets/js/utils";

class SubNavigation {
  static listenForAnchorClick(anchor) {
    anchor.addEventListener("click", (event) => {
      const hashId = anchor.hash.replace("#", "");

      window.scroll({
        top: document.getElementById(hashId).offsetTop,
        left: 0,
        behavior: "smooth",
      });

      event.preventDefault();
    });
  }

  constructor(options) {
    this.options = options;

    this.subNavigation = document.querySelector(".js-sub-navigation");
    this.subNavigationMarker = this.subNavigation.querySelector(".js-sub-navigation-marker");
    this.subNavigationItems = this.subNavigation.querySelectorAll("li");
    this.sections = document.querySelectorAll(".js-spy-section");

    this.updateMarker = this.updateMarker.bind(this);
    this.makeMarkerVisible = this.makeMarkerVisible.bind(this);
    this.makeMarkerInvisible = this.makeMarkerInvisible.bind(this);
    this.setMarkerWidth = this.setMarkerWidth.bind(this);
    this.setMarkerOffset = this.setMarkerOffset.bind(this);
    this.setMarkerTransition = this.setMarkerTransition.bind(this);
    this.scrollSpy = this.scrollSpy.bind(this);
    this.setUpScrollSpy = this.setUpScrollSpy.bind(this);
    this.setUpItems = this.setUpItems.bind(this);
    this.scrollActiveMarkerIntoView = this.scrollActiveMarkerIntoView.bind(this);

    this.activeClass = "is-active";
    this.currentItem = null;
    this.scrollSpySettings = [];

    this.motionQuery = window.matchMedia("(prefers-reduced-motion)");
  }

  addActiveClass(item) {
    item.classList.add(this.activeClass);
  }

  removeActiveClass(item) {
    if (item) {
      item.classList.remove(this.activeClass);
    }
  }

  scrollActiveMarkerIntoView(offset) {
    const list = this.subNavigation.querySelector("ul");

    list.scroll({
      top: 0,
      left: (offset - 24),
      behavior: "smooth",
    });
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

  scrollSpy(settings) {
    let currentId = null;

    settings.forEach((item) => {
      const top = document.getElementById(item.id).offsetTop;
      const bottom = top + document.getElementById(item.id).offsetHeight;

      if (
        (window.pageYOffset || document.documentElement.scrollTop) >= top &&
        (window.pageYOffset || document.documentElement.scrollTop) < bottom
      ) {
        currentId = item.id;
      }
    });

    this.currentItem = this.subNavigation.querySelector(`#${currentId}-item`);

    if (this.currentItem && !this.currentItem.classList.contains(this.activeClass)) {
      this.removeActiveClass(this.subNavigation.querySelector(`.${this.activeClass}`));
      this.addActiveClass(this.currentItem);
    }

    if (this.currentItem) {
      this.updateMarker(this.currentItem);
      window.addEventListener("resize", () => {
        setTimeout(() => {
          this.updateMarker(this.currentItem);
        }, 200);
      });
    } else {
      this.makeMarkerInvisible();
      this.removeActiveClass(this.subNavigation.querySelector(`.${this.activeClass}`));
    }
  }

  setUpScrollSpy() {
    this.sections.forEach((section) => {
      this.scrollSpySettings.push({
        id: section.id,
        top: section.offsetTop,
        bottom: (section.offsetTop + section.offsetHeight),
        height: section.offsetHeight,
      });
    });

    this.scrollSpy(this.scrollSpySettings);

    window.addEventListener("scroll", () => {
      setTimeout(() => {
        this.scrollSpy(this.scrollSpySettings);

        if (this.currentItem && !this.motionQuery.matches) {
          this.setMarkerTransition();
        }
      }, 100);
    });
  }

  setUpItems() {
    forEach(this.subNavigationItems, (index, item) => {
      const anchor = item.querySelector("a");

      if (item.classList.contains(this.activeClass)) {
        this.updateMarker(item);
      }

      SubNavigation.listenForAnchorClick(anchor);
    });
  }

  render() {
    this.setUpScrollSpy();
    this.setUpItems();
  }
}

export default SubNavigation;
