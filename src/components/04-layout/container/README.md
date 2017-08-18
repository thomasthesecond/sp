## Container layout module

The container layout module is used to:
* center blocks of content horizontally within the viewport (above a specified media query), and
* prevent content from touching the left and right edges of the viewport (below a specified media query).

This is achieved by setting a maximum width (`1290px`) along with left and right margins (`24px`) on the module.

Any type of content blocks can be wrapped with this module as it’s intended to be used many times per page when building layouts.

Avoid nesting containers because this will increase the horizontal spacing from the edge of the screen. There may be instances where this behavior is desirable, but in many cases it’s not.
