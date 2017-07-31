"use strict";

import Hamburger from "../hamburger";

export default class GlobalHeader {
  constructor(options) {
    this.options = options;

    this.hamburger = document.querySelector(".js-hamburger");
    this.navigation = document.querySelector(".js-navigation");
    this.overlay = document.querySelector(".js-overlay");
    this.mql = window.matchMedia("(max-width: 619px)");

    this.openClassName = "is-open";

    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.hideNavigation = this.hideNavigation.bind(this);
    this.showNavigation = this.showNavigation.bind(this);
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
      this.navigation.classList.remove(this.openClassName);
      this.overlay.classList.remove(this.openClassName);
    }
  }

  showNavigation() {
    if (!this.navigation.classList.contains(this.openClassName)) {
      this.navigation.classList.add(this.openClassName);
      this.overlay.classList.add(this.openClassName);
    }
  }

  clickOutside(event) {
    const isHamburger = this.hamburger.contains(event.target);
    const isNavigation = this.navigation.contains(event.target);

    if (!isHamburger && !isNavigation) {
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
      onClick: (event) => {
        this.showNavigation();
        document.addEventListener("click", this.clickOutside, false);
      }
    });

    hamburger.render();

    this.checkScreenSize(this.mql);
    this.mql.addListener(this.checkScreenSize);

    this.onEscapePress();
  }
}
