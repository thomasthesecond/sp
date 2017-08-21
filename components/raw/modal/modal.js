"use strict";

export default class Modal {
  constructor(options) {
    this.options = options;

    this.document = document.documentElement;
    this.modal = document.querySelector(".js-modal");
    this.trigger = document.querySelector(".js-modal-trigger");
    this.close = document.querySelector(".js-modal-close");
    this.mql = window.matchMedia("(min-width: 768px)");

    this.openClassName = "is-open";

    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
    this.onEscapePress = this.onEscapePress.bind(this);
  }

  checkScreenSize(mql) {
    if (mql.matches) {
      console.log("matches");
    } else {
      console.log("no matches");
    }
  }

  closeModal() {
    if (this.modal.classList.contains(this.openClassName)) {
      this.document.classList.remove("no-scroll");
      this.modal.classList.remove(this.openClassName);
      this.close.removeEventListener("click", this.closeModal, false);
    }
  }

  openModal() {
    if (!this.modal.classList.contains(this.openClassName)) {
      this.document.classList.add("no-scroll");
      this.modal.classList.add(this.openClassName);
      this.close.addEventListener("click", this.closeModal, false);
      document.addEventListener("click", this.clickOutside, false);
      this.onEscapePress();
    }
  }

  clickOutside(event) {
    const isModal = this.modal.contains(event.target);
    const isTrigger = this.trigger.contains(event.target);

    if (!isModal && !isTrigger) {
      this.closeModal();
      document.removeEventListener("click", this.clickOutside, false);
    }

    event.preventDefault();
  }

  onEscapePress() {
    document.onkeyup = (event) => {
      if(event.keyCode === 27) {
        this.closeModal();
      }
    }
  }

  render() {
    this.checkScreenSize(this.mql);
    this.mql.addListener(this.checkScreenSize);

    this.trigger.addEventListener("click", (event) => {
      this.openModal();
    })
  }
}
