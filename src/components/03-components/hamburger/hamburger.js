"use strict";

class Hamburger {
  constructor(options) {
    this.options = options;
    this.hamburger = document.querySelector(".js-hamburger");
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { onClick } = this.options;

    onClick();

    event.preventDefault();
  }

  render() {
    this.hamburger.addEventListener("click", this.onClick);
  }
}

export default Hamburger;
