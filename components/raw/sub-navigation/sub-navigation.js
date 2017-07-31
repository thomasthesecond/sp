"use strict";

class SubNavigation {
  constructor(options) {
    this.options = options;
    this.subNavigation = document.querySelector(".js-sub-navigation");
    this.subNavigationMarker = this.subNavigation.querySelector(".js-sub-navigation-marker");
    this.subNavigationItems = this.subNavigation.querySelectorAll("li");

    this.updateMarker = this.updateMarker.bind(this);
    this.setMarkerWidth = this.setMarkerWidth.bind(this);
    this.setMarkerOffset = this.setMarkerOffset.bind(this);
    this.setMarkerTransition = this.setMarkerTransition.bind(this);
    this.listenForAnchorClick = this.listenForAnchorClick.bind(this);
    this.scrollSpy = this.scrollSpy.bind(this);

    this.margin = 14;
    this.subNavigationHeight = this.subNavigation.offsetHeight;
    this.activeClass = "is-active";
  }

  addActiveClass(item) {
    item.classList.add(this.activeClass);
  }

  removeActiveClass(item) {
    item.classList.remove(this.activeClass);
  }

  updateMarker(item) {
    const activeWidth = item.offsetWidth;
    const activeOffset = item.offsetLeft;

    this.setMarkerWidth(activeWidth);
    this.setMarkerOffset(activeOffset);
  }

  setMarkerWidth(width) {
    this.subNavigationMarker.style.width = `${width}px`;
  }

  setMarkerOffset(offset) {
    this.subNavigationMarker.style.transform = `translateX(${offset}px)`;
  }

  setMarkerTransition() {
    if (this.subNavigationMarker.style.transition === "") {
      this.subNavigationMarker.style.transition = "transform 200ms";
    }
  }

  listenForAnchorClick(anchor) {
    anchor.addEventListener("click", (event) => {
      const parent = anchor.parentNode;
      const hashId = anchor.hash.replace("#", "");

      if (!parent.classList.contains("is-active")) {
        this.removeActiveClass(this.subNavigation.querySelector(`.${this.activeClass}`));
        this.addActiveClass(parent);
      }

      document.getElementById(hashId).scrollIntoView();

      this.setMarkerTransition();
      this.updateMarker(anchor.parentNode);

      event.preventDefault();
    });
  };

  scrollSpy(settings) {
    // console.log(settings);
    // console.log(window.scrollTop);
    // console.log(document.body.scrollTop);
    console.log(window.pageYOffset || document.documentElement.scrollTop);
    console.log(
      document.getElementById("how-were-different").offsetTop,
      document.getElementById("how-were-different").offsetHeight
    );

  }

  render() {
    const sections = document.querySelectorAll(".js-spy-section");
    // const scrollSpySettings = [];
    const scrollSpySettings = {};

    sections.forEach((section) => {
      // scrollSpySettings.push({
      //   id: section.id,
      //   offset: section.offsetTop,
      //   height: section.offsetHeight,
      // });
      scrollSpySettings[section.id] = {
        offset: section.offsetTop,
        height: section.offsetHeight
      };
    });

    // console.log(scrollSpySettings);

    // this.scrollSpy(scrollSpySettings);
    // window.addEventListener("scroll", (event) => {
    //   setTimeout(() => {
    //     this.scrollSpy(scrollSpySettings);
    //   }, 100);
    // });

    this.subNavigationItems.forEach((item, index) => {
      const anchor = item.querySelector("a");
      // const isFirstItem = index === 0;

      if (item.classList.contains(this.activeClass)) {
        this.updateMarker(item);
      }

      // if ($item.classList.contains("is-active")) {
      //   updateMarker($item);
      // } else if (isFirstItem) {
      //   addActiveClass($item);
      //   updateMarker($item);
      // }

      this.listenForAnchorClick(anchor);
    });
  }
}

export default SubNavigation;
