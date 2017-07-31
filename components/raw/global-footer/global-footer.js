"use strict";

import LocationSelect from "../location-select";

export default class GlobalFooter {
  constructor(options) {
    this.options = options;
  }

  render() {
    const locationSelect = new LocationSelect();

    locationSelect.render();
  }
}
