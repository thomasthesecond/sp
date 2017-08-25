"use strict";

export default class LocationSelect {
  constructor() {
    this.locationSelect = document.querySelector(".js-location-select");
  }

  render() {
    this.locationSelect.onchange = (event) => {
      if (event.target.value) {
        window.location = event.target.value;
      }
    };
  }
}
