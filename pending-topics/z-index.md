# z-index and stacking contexts

- The z-index property controls the stacking order of elements that overlap each other.
- Elements with a higher z-index value will be displayed on top of elements with a lower z-index value.
- The z-index property only works on elements that have a position value other than static (the default).
- When elements have the same z-index value, they will be stacked in the order they appear in the HTML, with the last element appearing on top.
- The z-index property can take both positive and negative values, as well as zero. A higher positive value will be displayed on top of a lower positive value, and a negative value will be displayed behind elements with a z-index of zero or higher.
- The z-index property can also be used to create stacking contexts, which are groups of elements that are treated as a single unit when it comes to stacking. A new stacking context is created when an element has a position value other than static and a z-index value other than auto. This means that the elements within that stacking context will be stacked relative to each other, but will be treated as a single unit when it comes to stacking with other elements outside of that context. This can be useful for creating complex layouts and controlling the stacking order of elements in a more granular way.

https://css-fundamentals.kevinpowell.co/3-layouts/positioning/zindex/
