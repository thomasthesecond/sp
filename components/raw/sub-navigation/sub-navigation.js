"use strict";

class SubNavigation {
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
    this.listenForAnchorClick = this.listenForAnchorClick.bind(this);
    this.scrollSpy = this.scrollSpy.bind(this);
    this.setUpScrollSpy = this.setUpScrollSpy.bind(this);
    this.setUpItems = this.setUpItems.bind(this);
    // this.updateSubNavigationOffset = this.updateSubNavigationOffset.bind(this);

    this.activeClass = "is-active";
    this.currentItem = null;
    this.scrollSpySettings = [];
    // this.subNavigationOffset = this.subNavigation.parentNode.offsetTop;
  }

  addActiveClass(item) {
    item.classList.add(this.activeClass);
  }

  removeActiveClass(item) {
    if (item) {
      item.classList.remove(this.activeClass);
    }
  }

  updateMarker(item) {
    const activeWidth = item.offsetWidth;
    const activeOffset = item.offsetLeft;

    this.makeMarkerVisible();
    this.setMarkerWidth(activeWidth);
    this.setMarkerOffset(activeOffset);
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

  listenForAnchorClick(anchor) {
    anchor.addEventListener("click", (event) => {
      const parent = anchor.parentNode;
      const hashId = anchor.hash.replace("#", "");

      // if (!parent.classList.contains("is-active")) {
      //   this.removeActiveClass(this.subNavigation.querySelector(`.${this.activeClass}`));
      //   this.addActiveClass(parent);
      // }

      window.scroll({
        top: document.getElementById(hashId).offsetTop,
        left: 0,
        behavior: "smooth"
      });

      // this.updateMarker(anchor.parentNode);

      event.preventDefault();
    });
  };

  scrollSpy(settings) {
    let currentId = null;

    settings.forEach((item) => {
      const top = document.getElementById(item.id).offsetTop;
      const bottom = top + document.getElementById(item.id).offsetHeight;

      if ((window.pageYOffset || document.documentElement.scrollTop) >= top && (window.pageYOffset || document.documentElement.scrollTop) < bottom) {
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
        height: section.offsetHeight
      });
    });

    this.scrollSpy(this.scrollSpySettings);

    window.addEventListener("scroll", (event) => {
      setTimeout(() => {
        this.scrollSpy(this.scrollSpySettings);

        if (this.currentItem) {
          this.setMarkerTransition();
        };

        // const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        //
        // if (scrollPosition >= this.subNavigationOffset) {
        //   this.subNavigation.classList.add("is-sticky");
        // } else {
        //   this.subNavigation.classList.remove("is-sticky");
        // }
      }, 100);
    });
  }

  setUpItems() {
    this.subNavigationItems.forEach((item, index) => {
      const anchor = item.querySelector("a");

      if (item.classList.contains(this.activeClass)) {
        this.updateMarker(item);
      }

      this.listenForAnchorClick(anchor);
    });
  }

  // updateSubNavigationOffset() {
  //   window.addEventListener("resize", (event) => {
  //     setTimeout(() => {
  //       this.subNavigationOffset = this.subNavigation.offsetTop;
  //     }, 200);
  //   });
  // }

  render() {
    this.setUpScrollSpy();
    this.setUpItems();
    // this.updateSubNavigationOffset();
  }
}

export default SubNavigation;