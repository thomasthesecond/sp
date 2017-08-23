"use strict";

export default class LocationFinder {
  constructor() {
    this.locationFinder = document.querySelector(".js-location-finder");
    this.locationFinderButton = document.querySelector(".js-location-finder-button");
    this.locationFinderSelect = this.locationFinder.querySelectorAll(".js-location-finder-select");

    this.buildFilterUrl = this.buildFilterUrl.bind(this);
  }

  buildFilterUrl(params) {
    const url = this.locationFinder.dataset.locationUrl;
    this.locationFinderButton.href = `${url}/${Object.values(params).join("/")}`;
  }

  render() {
    const params = {};

    this.locationFinderSelect.forEach((select, index) => {
      params[select.id] = select.value;

      [select][0].onchange = (event) => {
        params[select.id] = event.target.value;

        this.buildFilterUrl(params);
      }
    });

    this.buildFilterUrl(params);
  }
}
