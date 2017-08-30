"use strict";

import noScroll from "no-scroll";

export default class Modal {
  constructor() {
    this.document = document.documentElement;
    this.modal = document.querySelector(".js-modal");
    this.modalTrigger = document.querySelector(".js-modal-trigger");
    this.modalContent = document.querySelector(".js-modal-content");
    this.modalClose = document.querySelector(".js-modal-close");
    this.modalOverlay = document.querySelector(".js-overlay");
    this.mql = window.matchMedia("(min-width: 768px)");

    this.content = null;
    this.openClassName = "is-open";

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
    this.onEscapePress = this.onEscapePress.bind(this);
  }

  close() {
    if (this.modal.classList.contains(this.openClassName)) {
      noScroll.off();
      this.modalClose.removeEventListener("click", this.close, false);

      this.modal.setAttribute("tabindex", "-1");
      this.modal.setAttribute("aria-hidden", "true");
      this.modal.classList.remove(this.openClassName);
      this.modalOverlay.classList.remove(this.openClassName);

      setTimeout(() => {
        this.modal.classList.add("hidden");
        this.modalOverlay.classList.add("hidden");
        if (this.content) {
          this.modalContent.innerHTML = "";
        }
      }, 200);

      document.removeEventListener("click", this.clickOutside, false);
    }
  }

  open(content) {
    if (!this.modal.classList.contains(this.openClassName)) {
      noScroll.on();
      this.modalClose.addEventListener("click", this.close, false);
      document.addEventListener("click", this.clickOutside, false);
      this.onEscapePress();

      this.modal.setAttribute("tabindex", "0");
      this.modal.setAttribute("aria-hidden", "false");
      this.modal.classList.remove("hidden");
      this.modalOverlay.classList.remove("hidden");

      setTimeout(() => {
        this.modal.classList.add(this.openClassName);
        this.modalOverlay.classList.add(this.openClassName);
      }, 10);

      if (content) {
        this.content = content;
        this.modalContent.innerHTML = this.content;
      }
    }
  }

  clickOutside(event) {
    const isModal = this.modal.contains(event.target);

    if (!isModal) {
      this.close();
    }

    event.preventDefault();
  }

  onEscapePress() {
    document.onkeyup = (event) => {
      if (event.keyCode === 27) {
        this.close();
      }
    };
  }
}
