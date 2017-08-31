"use strict";

import Hamburger from "../hamburger";

export default class Banner {
  constructor(options) {
    this.options = options;

    this.document = document.documentElement;
    this.header = document.querySelector(".js-banner");
    this.hamburger = document.querySelector(".js-hamburger");
    this.navigation = document.querySelector(".js-navigation");
    this.mql = window.matchMedia("(max-width: 619px)");

    this.openClassName = "is-open";
    this.isOpen = false;

    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.hideNavigation = this.hideNavigation.bind(this);
    this.showNavigation = this.showNavigation.bind(this);
    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.onEscapePress = this.onEscapePress.bind(this);
  }

  checkScreenSize(mql) {
    if (!mql.matches) {
      this.hideNavigation();
    }
  }

  hideNavigation() {
    if (this.navigation.classList.contains(this.openClassName)) {
      this.isOpen = false;
      document.documentElement.style.overflow = "";
      this.header.classList.remove(this.openClassName);
      this.navigation.classList.remove(this.openClassName);
      this.hamburger.classList.remove(this.openClassName);
    }
  }

  showNavigation() {
    if (!this.navigation.classList.contains(this.openClassName)) {
      this.isOpen = true;
      document.documentElement.style.overflow = "hidden";
      this.header.classList.add(this.openClassName);
      this.navigation.classList.add(this.openClassName);
      this.hamburger.classList.add(this.openClassName);
    }
  }

  toggleNavigation() {
    return this.isOpen ? this.hideNavigation() : this.showNavigation();
  }

  onEscapePress() {
    document.onkeyup = (event) => {
      if (event.keyCode === 27) {
        this.hideNavigation();
      }
    };
  }

  render() {
    const hamburger = new Hamburger({
      onClick: () => {
        this.toggleNavigation();
      },
    });

    hamburger.render();

    this.checkScreenSize(this.mql);
    this.mql.addListener(this.checkScreenSize);

    this.onEscapePress();
  }
}
