"use strict";

export default class HomePage {
  static debounce(callback) {
    setTimeout(() => {
      callback();
    }, 200);
  }

  constructor(options) {
    this.options = options;

    this.document = document.documentElement;
    this.sections = document.querySelectorAll(".js-animate-section");

    this.introduction = document.querySelector(".Introduction");
    this.partnerships = document.getElementById("partnerships-section");
    this.investors = document.getElementById("investors-section");
    this.careers = document.getElementById("careers-section");

    this.mql = window.matchMedia("(min-width: 1024px)");
    this.motionQuery = window.matchMedia("(prefers-reduced-motion)");

    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.reset = this.reset.bind(this);
    this.animate = this.animate.bind(this);
  }

  reset() {
    this.introduction.classList.remove("can-animate");
    this.partnerships.classList.remove("can-animate");
    this.investors.classList.remove("can-animate");
    this.careers.classList.remove("can-animate");

    this.introduction.classList.remove("will-animate");
    this.partnerships.classList.remove("will-animate");
    this.investors.classList.remove("will-animate");
    this.careers.classList.remove("will-animate");
  }

  checkScreenSize(mql) {
    if (mql.matches) {
      this.animate();
      window.addEventListener("scroll", this.animate, false);
    } else {
      this.reset();
      window.removeEventListener("scroll", this.animate, false);
    }
  }

  animate() {
    this.introduction.classList.add("can-animate");
    this.partnerships.classList.add("can-animate");
    this.investors.classList.add("can-animate");
    this.careers.classList.add("can-animate");

    if ((window.pageYOffset || document.documentElement.scrollTop) >= (this.introduction.offsetTop - 400)) {
      if (!this.introduction.classList.contains("will-animate")) {
        this.introduction.classList.add("will-animate");
      }
    }

    if ((window.pageYOffset || document.documentElement.scrollTop) >= (this.partnerships.offsetTop - 400)) {
      if (!this.partnerships.classList.contains("will-animate")) {
        this.partnerships.classList.add("will-animate");
      }
    }

    if ((window.pageYOffset || document.documentElement.scrollTop) >= (this.investors.offsetTop - 400)) {
      if (!this.investors.classList.contains("will-animate")) {
        this.investors.classList.add("will-animate");
      }
    }

    if ((window.pageYOffset || document.documentElement.scrollTop) >= (this.careers.offsetTop - 400)) {
      if (!this.careers.classList.contains("will-animate")) {
        this.careers.classList.add("will-animate");
      }
    }
  }

  render() {
    this.reset();

    if (!this.motionQuery.matches) {
      window.scrollTo(0, 0);
      this.checkScreenSize(this.mql);
      this.mql.addListener(this.checkScreenSize);
    }
  }
}
