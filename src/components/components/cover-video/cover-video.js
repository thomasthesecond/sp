"use strict";

export default class CoverVideo {
  static pauseVideo(video) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  constructor(options) {
    this.options = options;

    this.container = document.querySelector(".js-cover-video");
    this.image = this.container.querySelector("img");
    this.video = this.container.querySelector("video");
    this.mql = window.matchMedia("(min-width: 768px)");
    this.motionQuery = window.matchMedia("(prefers-reduced-motion)");

    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.createVideo = this.createVideo.bind(this);
    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);

    this.shouldLoadVideo = "objectFit" in document.documentElement.style;
  }

  checkScreenSize(mql) {
    if (mql.matches) {
      this.addVideo();
    } else {
      this.removeVideo();
    }
  }

  createVideo() {
    const src = this.container.dataset.src;
    const type = this.container.dataset.type;

    this.video = document.createElement("video");
    this.video.setAttribute("poster", this.image.src);
    this.video.setAttribute("preload", "auto");
    this.video.setAttribute("loop", "");
    this.video.setAttribute("muted", "");

    const source = document.createElement("source");
    source.setAttribute("src", src);
    source.setAttribute("type", type);

    this.video.appendChild(source);

    this.video.addEventListener("click", (event) => {
      CoverVideo.pauseVideo(event.target);
    });
  }

  addVideo() {
    const autoplay = !!this.container.dataset.autoplay;
    this.container.replaceChild(this.video, this.image);

    if (autoplay && !this.motionQuery.matches) {
      this.video.play();
    }
  }

  removeVideo() {
    if (this.video && this.video.parentNode) {
      this.video.currentTime = 0;
      this.video.removeEventListener("click", CoverVideo.pauseVideo);
      this.container.replaceChild(this.image, this.video);
    }
  }

  render() {
    if (this.shouldLoadVideo) {
      this.createVideo();
      this.checkScreenSize(this.mql);
      this.mql.addListener(this.checkScreenSize);
    }
  }
}
