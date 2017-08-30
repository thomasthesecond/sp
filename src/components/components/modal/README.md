# Modal component

To use the modal component, first add the markup to the page.

```html
<body>
  …

  <div class="Modal js-modal hidden" id="team-member-modal" aria-labelledby="title" aria-describedby="description" role="alertdialog" tabindex="-1" aria-hidden="true">
    <button class="Modal-close js-modal-close" title="Close" aria-label="Close">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" aria-hidden="true"><use xlink:href="#icon-close"></use></svg>
    </button>
    <div class="Modal-content js-modal-content">
      <h2 id="title">Title</h2>
      <div id="description">
        …
      </div>
    </div>
  </div>

  <div class="Overlay js-overlay hidden">…</div>
</body>
```

Then add the modal in your JavaScript file

```js
const modal = new Modal();
const trigger = document.querySelector(".js-modal-trigger");

if (trigger) {
  trigger.addEventListener("click", () => {
    modal.open();
  });
}
```

### Passing content

The modal’s content should be HTML markup. It can be hardcoded or added dynamically.

If the content is hardcoded, you can just add the content to the markup like so:

```html
<div class="Modal-content js-modal-content">
  This is content that is hardcoded.
</div>
```

If you wish to pass content dynamically, you should leave the `.Modal-content` element blank

```html
<div class="Modal-content js-modal-content"></div>
```

and then in the JavaScript, you can pass dynamic content into the `Modal.open` method.

```js
const content = `
  This content is added by JavaScript.
`;

trigger.addEventListener("click", (event) => {
  modal.open(content);
  event.preventDefault();
}, false);
```
