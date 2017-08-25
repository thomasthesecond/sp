/* eslint-disable class-methods-use-this */

"use strict";

import LocationSelect from "../location-select";

export default class Contentinfo {
  constructor(options) {
    this.options = options;
  }

  render() {
    const locationSelect = new LocationSelect();

    locationSelect.render();
  }
}
