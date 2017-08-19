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
    this.clickOutside = this.clickOutside.bind(this);
    this.onEscapePress = this.onEscapePress.bind(this);
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
      this.document.classList.remove("no-scroll");
      this.header.classList.remove(this.openClassName);
      this.navigation.classList.remove(this.openClassName);
      this.hamburger.classList.remove(this.openClassName);
    }
  }

  showNavigation() {
    if (!this.navigation.classList.contains(this.openClassName)) {
      this.isOpen = true;
      this.document.classList.add("no-scroll");
      this.header.classList.add(this.openClassName);
      this.navigation.classList.add(this.openClassName);
      this.hamburger.classList.add(this.openClassName);
    }
  }

  toggleNavigation() {
    return this.isOpen ? this.hideNavigation() : this.showNavigation();
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

  render() {
    const hamburger = new Hamburger({
      onClick: () => {
        this.toggleNavigation();

        document.addEventListener("click", this.clickOutside, false);
      }
    });

    hamburger.render();

    this.checkScreenSize(this.mql);
    this.mql.addListener(this.checkScreenSize);

    this.onEscapePress();
  }
}
