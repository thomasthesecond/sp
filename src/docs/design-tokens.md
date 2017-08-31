---
title: Design tokens
label: Design tokens
---
[Design tokens](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

Design tokens are named entities that store visual design information. These are used in place of hard-coded values (such as hex values for color or pixels for spacing) in order to maintain a scalable, consistent system for UI development.

When using SCSS, use the token variable name. If using CSS, use the value.

Design tokens are split into the following groups:

* [Background color](#background-color)
* [Border color](#border-color)
* [Text color](#text-color)
* [Font family](#font-family)
* [Font size](#font-size)
* [Font weight](#font-weight)
* [Line height](#line-height)
* [Opacity](#opacity)
* [Dimensions](#dimensions)
* [Spacing](#spacing)
* [Shadow](#shadow)
* [Timing](#timing)
* [z-index](#z-index)

## Background color<a name="background-color"></a>

Use these tokens for background colors only. These tokens should not be used for border colors or text colors.

Token       | Value      | Reference name | Swatch
------------|------------|----------------|------------
{{#each background-color as |value key|}}
`$color-background-{{ key }}` | `{{ value.hex }}`<br>`{{ value.rgb }}` | {{ value.name }} | <div style="width: 24px; height: 24px; background-color:{{ this.hex }}; border: 1px solid rgba(0, 0, 0, .2);"></div>
{{/each}}

## Border color<a name="border-color"></a>

Use these tokens for border colors only. These tokens should not be used for background colors or text colors.

Token       | Value      | Reference name | Swatch
------------|------------|----------------|------------
{{#each border-color as |value key|}}
`$color-border-{{ key }}` | `{{ value.hex }}`<br>`{{ value.rgb }}` | {{ value.name }} | <div style="width: 24px; height: 24px; background-color:{{ this.hex }}; border: 1px solid rgba(0, 0, 0, .2);"></div>
{{/each}}

## Text color<a name="text-color"></a>

Use these tokens for background colors only. These tokens should not be used for background colors or border colors.

Token       | Value      | Reference name | Swatch
------------|------------|----------------|------------
{{#each text-color as |value key|}}
`$color-text-{{ key }}` | `{{ value.hex }}`<br>`{{ value.rgb }}` | {{ value.name }} | <div style="width: 24px; height: 24px; background-color:{{ this.hex }}; border: 1px solid rgba(0, 0, 0, .2);"></div>
{{/each}}

## Font family<a name="font-family"></a>

Font family tokens are used to change the font of elements. The `body` is set to use the sans-serif font.

Token       | Value
------------|------------
{{#each font-family as |value key|}}
`$font-family-{{ key }}` | {{ value }}
{{/each}}

## Font size<a name="font-size"></a>

Font size tokens are used to change the font size.

Token       | Value
------------|------------
{{#each font-size as |value key|}}
`$font-size-{{ key }}` | {{ value }}
{{/each}}

## Font weight<a name="font-weight"></a>

Font weight tokens are used to adjust the weight of the sans-serif font.

Token       | Value
------------|------------
{{#each font-weight as |value key|}}
`$font-weight-{{ key }}` | {{ value }}
{{/each}}

## Line height<a name="line-height"></a>

Use these tokens for changing the line-height of elements. Usually, the line-height-text is already inherited by default. Only set it if you need to apply it again.

Token       | Value
------------|------------
{{#each line-height as |value key|}}
`$line-height-{{ key }}` | {{ value }}
{{/each}}

## Opacity<a name="opacity"></a>

Opacity tokens are used for setting opacity and also for the alpha channel in `rgba` colors.

Token       | Value
------------|------------
{{#each opacity as |value key|}}
`${{ key }}` | {{ value }}
{{/each}}

## Dimensions<a name="dimensions"></a>

Dimensions tokens are used for setting widths.

Values are equivalent to `px` but are unitless so that they may be easily converted to `em`, percent (`%`) or viewport units (`vw`, `vh`).

Token       | Value
------------|------------
{{#each dimensions as |value key|}}
`${{ key }}` | {{ value }}
{{/each}}

## Spacing<a name="spacing"></a>

Spacing tokens are used for padding, margins and position coordinates.

Values are equivalent to `px` but are unitless so that they may be easily converted to `em`, percent (`%`) or viewport units (`vw`, `vh`).

Token       | Value
------------|------------
{{#each spacing as |value key|}}
`$spacing-{{ key }}` | {{ value }}
{{/each}}

## Shadow<a name="shadow"></a>

Shadow tokens are used for `text-shadow` and `box-shadow`.

Token       | Value
------------|------------
{{#each shadow as |value key|}}
`$shadow-{{ key }}` | {{ value }}
{{/each}}

## Timing<a name="timing"></a>

Timing tokens are used for transitions.

Token       | Value
------------|------------
{{#each timing as |value key|}}
`$timing-{{ key }}` | {{ value }}
{{/each}}

## z-index<a name="z-index"></a>

Use z-index tokens to set the order layering of elements on the z-axis.

Token       | Value
------------|------------
{{#each z-index as |value key|}}
`$z-index-{{ key }}` | {{ value }}
{{/each}}
