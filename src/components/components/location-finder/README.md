# Location finder component

The data attribute `data-location-url` should be set to the URL where the locations page exist. It can be a relative or absolute URL, but the trailing slash should be omitted.

```
<div class="LocationFinder js-location-finder" data-location-url="/locations">
  …
</div>
```

This URL is then used in the JavaScript module to build the filter URL.

```
buildFilterUrl(params) {
  const url = this.locationFinder.dataset.locationUrl;
  this.locationFinderButton.href = `${url}/${Object.values(params).join("/")}`;
}
```

The values of each select option are used to build the URL. These values can be changed to reflect the URL structure that is desired.

For example, consider `data-location-url` is "/locations" and the following values have been selected:

```
<select class="js-location-finder-select" id="state-select" name="state-select">
  <option value="alabama">
    Alabama
  </option>
  …
</select>

<select class="js-location-finder-select" id="specialty-select" name="specialty-select">
  <option value="ear-nose-throat">
    Ear, Nose and Throat
  </option>
  …
</select>

<select class="js-location-finder-select" id="facility-select" name="facility-select">
  <option value="ambulatory-surgery-center">
    Ambulatory Surgery Center
  </option>
  …
</select>
```

The URL would be `/locations/alabama/ear-nose-throat/ambulatory-surgery-center`.
