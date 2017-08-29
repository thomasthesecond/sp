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

    // this.checkScreenSize = this.checkScreenSize.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
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
        // this.modal.style.display = "none";
        // this.modalOverlay.style.display = "none";
        if (this.content) {
          this.modalContent.innerHTML = "";
        }
      }, 200);

      // this.modalOverlay.classList.remove(this.openClassName);
      // setTimeout(() => {
      //   document.body.removeChild(this.modalOverlay);
      // }, 200);

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
      // this.modal.style.display = "block";
      // this.modalOverlay.style.display = "block";
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

      // document.body.appendChild(this.modalOverlay);
      // setTimeout(() => {
      //   this.modalOverlay.classList.add(this.openClassName);
      // }, 10);
    }
  }

  clickOutside(event) {
    const isModal = this.modal.contains(event.target);
    // const isTrigger = this.modalTrigger.contains(event.target);

    // if (!isModal && !isTrigger) {
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

  render() {
    // this.checkScreenSize(this.mql);
    // this.mql.addListener(this.checkScreenSize);

    // console.log(this.modalOverlay());
    // console.log(this.mod());

    // this.modal.style.display = "none";
    // this.modalOverlay.style.display = "none";

    console.log(this.modalContent);

    // if (this.modalTrigger) {
    //   this.modalTrigger.addEventListener("click", () => {
    //     this.open();
    //
    //
    //     // document.body.innerHTML = this.modalOverlay();
    //     // $("body").append(this.modalOverlay());
    //     // $("body").find(".js-overlay").addClass("is-open");
    //     // this.document.querySelector(".js-overlay").classList.add("is-open");
    //
    //     // console.log(this.modalOverlay());
    //     // document.body.appendChild();
    //   });
    // }
  }
}
