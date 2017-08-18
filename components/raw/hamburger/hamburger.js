"use strict";

class Hamburger {
  constructor(options) {
    this.options = options;
    this.hamburger = document.querySelector(".js-hamburger");
    this.icon = this.hamburger.querySelector(".Hamburger-icon");
    this.onClick = this.onClick.bind(this);
    this.setIconLabel = this.setIconLabel.bind(this);
  }

  onClick(event) {
    const { onClick } = this.options;

    onClick();
    this.setIconLabel();

    event.preventDefault();
  }

  setIconLabel() {
    if (this.hamburger.classList.contains("is-open")) {
      this.icon.innerHTML = "Close menu";
    } else {
      this.icon.innerHTML = "Open menu";
    }
  }

  render() {
    this.hamburger.addEventListener("click", this.onClick);
  }
}

export default Hamburger;
