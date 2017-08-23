"use strict";

import noScroll from "no-scroll";

export default class Modal {
  constructor(options) {
    this.options = options;

    this.document = document.documentElement;
    this.modal = document.querySelector(".js-modal");
    this.trigger = document.querySelector(".js-modal-trigger");
    this.content = document.querySelector(".js-modal-content");
    this.close = document.querySelector(".js-modal-close");
    this.overlay = document.querySelector(".js-overlay");
    this.mql = window.matchMedia("(min-width: 768px)");

    this.openClassName = "is-open";

    // this.checkScreenSize = this.checkScreenSize.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
    this.onEscapePress = this.onEscapePress.bind(this);
  }

  // checkScreenSize(mql) {
  //   if (mql.matches) {
  //     console.log("matches");
  //   } else {
  //     console.log("no matches");
  //   }
  // }

  closeModal() {
    if (this.modal.classList.contains(this.openClassName)) {
      noScroll.off();
      this.close.removeEventListener("click", this.closeModal, false);

      this.modal.setAttribute("tabindex", "-1");
      this.modal.setAttribute("aria-hidden", "true");
      this.modal.classList.remove(this.openClassName);
      this.overlay.classList.remove(this.openClassName);

      setTimeout(() => {
        this.modal.classList.add("hidden");
        this.overlay.classList.add("hidden");
        // this.modal.style.display = "none";
        // this.overlay.style.display = "none";
        this.content.innerHTML = "";
      }, 200);

      // this.overlay.classList.remove(this.openClassName);
      // setTimeout(() => {
      //   document.body.removeChild(this.overlay);
      // }, 200);

      document.removeEventListener("click", this.clickOutside, false);
    }
  }

  openModal(content) {
    if (!this.modal.classList.contains(this.openClassName)) {
      noScroll.on();
      this.close.addEventListener("click", this.closeModal, false);
      document.addEventListener("click", this.clickOutside, false);
      this.onEscapePress();

      this.modal.setAttribute("tabindex", "0");
      this.modal.setAttribute("aria-hidden", "false");
      // this.modal.style.display = "block";
      // this.overlay.style.display = "block";
      this.modal.classList.remove("hidden");
      this.overlay.classList.remove("hidden");

      setTimeout(() => {
        this.modal.classList.add(this.openClassName);
        this.overlay.classList.add(this.openClassName);
      }, 10);

      this.content.innerHTML = content;

      // document.body.appendChild(this.overlay);
      // setTimeout(() => {
      //   this.overlay.classList.add(this.openClassName);
      // }, 10);
    }
  }

  clickOutside(event) {
    const isModal = this.modal.contains(event.target);
    const isTrigger = this.trigger.contains(event.target);

    if (!isModal && !isTrigger) {
      this.closeModal();
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
    // this.checkScreenSize(this.mql);
    // this.mql.addListener(this.checkScreenSize);

    // console.log(this.overlay());
    // console.log(this.mod());

    // this.modal.style.display = "none";
    // this.overlay.style.display = "none";

    this.trigger.addEventListener("click", (event) => {
      this.openModal();


      // document.body.innerHTML = this.overlay();
      // $("body").append(this.overlay());
      // $("body").find(".js-overlay").addClass("is-open");
      // this.document.querySelector(".js-overlay").classList.add("is-open");

      // console.log(this.overlay());
      // document.body.appendChild();
    });
  }
}
