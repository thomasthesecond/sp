# Table component

### Striped table

Use the classname `table-striped` to create a striped table.

### Responsive table

Use the classname `table-responsive` to create a responsive table.

Responsive tables require a `thead`. Each table cell must have a `data-label` attribute that matches its corresponding `th` value.

```
<table class="table-responsive">
  <thead>
    <tr>
      <th>Filing Date</th>
      …
    </tr>
  </thead>

  <tbody>
    <tr>
      <td data-label="Filing Date">May 04, 2017</td>
      …
    </tr>
  </tbody>
</table>
```
