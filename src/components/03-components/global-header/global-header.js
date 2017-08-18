"use strict";

import Hamburger from "../hamburger";

export default class GlobalHeader {
  constructor(options) {
    this.options = options;

    this.header = document.querySelector(".js-global-header");
    this.hamburger = document.querySelector(".js-hamburger");
    this.navigation = document.querySelector(".js-navigation");
    this.mql = window.matchMedia("(max-width: 619px)");

    this.openClassName = "is-open";
    this.isOpen = false;

    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.hideNavigation = this.hideNavigation.bind(this);
    this.showNavigation = this.showNavigation.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
    this.onEscapePress = this.onEscapePress.bind(this);
    this.enableScrolling = this.enableScrolling.bind(this);
    this.disableScrolling = this.disableScrolling.bind(this);
  }

  checkScreenSize(mql) {
    if (mql.matches) {
    } else {
      this.hideNavigation();
    }
  }

  hideNavigation() {
    if (this.navigation.classList.contains(this.openClassName)) {
      this.isOpen = false;
      this.navigation.classList.remove(this.openClassName);
      this.hamburger.classList.remove(this.openClassName);
      this.enableScrolling();
    }
  }

  showNavigation() {
    if (!this.navigation.classList.contains(this.openClassName)) {
      this.isOpen = true;
      this.navigation.classList.add(this.openClassName);
      this.hamburger.classList.add(this.openClassName);
      this.disableScrolling();
    }
  }

  clickOutside(event) {
    const isHeader = this.header.contains(event.target);
    const isHamburger = this.hamburger.contains(event.target);
    const isNavigation = this.navigation.contains(event.target);

    if (!isHeader && !isHamburger && !isNavigation) {
      this.hideNavigation();
      document.removeEventListener("click", this.clickOutside, false);
    }

    event.preventDefault();
  }

  onEscapePress() {
    document.onkeyup = (event) => {
      if(event.keyCode === 27) {
        this.hideNavigation();
      }
    }
  }

  enableScrolling() {
    document.documentElement.style = null;
  }

  disableScrolling() {
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.position = "fixed";
    document.documentElement.style.top = 0;
    document.documentElement.style.width = "100%";
  }

  render() {
    const hamburger = new Hamburger({
      onClick: () => {
        if (this.isOpen) {
          this.hideNavigation();
        } else {
          this.showNavigation();
        }

        document.addEventListener("click", this.clickOutside, false);
      }
    });

    hamburger.render();

    this.checkScreenSize(this.mql);
    this.mql.addListener(this.checkScreenSize);

    this.onEscapePress();
  }
}
