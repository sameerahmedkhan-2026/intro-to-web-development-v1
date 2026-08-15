# css grid layout

any time we want to use Grid, we have to enable it by declaring `display: grid;` on the parent element.

This will change the parent element into a `Grid Container`.

On the outside, it will stay a block level element, but the direct children will be turned into `Grid Items`.

codepen: https://codepen.io/sameerahmedkhan-2026/pen/pvRbwrO

grid-template-columns creates columns
The gap property allows us to add space between our columns and rows. it only places the space between the Grid Items and not on the outside of them.

There is a special unit that can only be used when creating columns and rows with Grid: the fr unit, which distributes a fraction of the leftover space.
If you are familiar with flexbox's flex-grow, fr works the same way as flex-grow, but it is only used in Grid.

If you are creating columns that are all going to be the same size, you can use the repeat() function.

```css
.three-columns {
  display: grid;

  grid-template-columns: 1fr;

  @media (width > 780px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

What it means to be a grid item?

https://codepen.io/kevinpowell/pen/Ggovbpx/f315b8e8debf04163a60d493b01fec81

We’re going into a new Layout Mode, so the rules have changed, and those items are simply Grid Items now.

q1. what is fr unit in CSS Grid?

ans: The fr unit in CSS Grid stands for "fraction" and is used to distribute available space in a grid container. It represents a fraction of the leftover space after all fixed-size columns and rows have been allocated. The fr unit allows for flexible and responsive grid layouts without needing to specify exact pixel values.
The fr unit is unique to CSS Grid. It cannot be used anywhere else in CSS. It distributes available space proportionally among grid tracks. For example, 1fr 1fr creates two equal columns that fill the available space and grow or shrink responsively.

q2. What is the purpose of using a media query with CSS Grid columns?
ans: The purpose of using a media query with CSS Grid columns is to create responsive grid layouts that adapt to different screen sizes and devices. By applying a media query, you can change the number of columns, their size, or the overall grid structure based on the viewport width. This allows for a better user experience across various devices, ensuring that the content is displayed in an optimal way regardless of the screen size. For example, you might use a media query to switch from a single-column layout on mobile devices to a multi-column layout on larger screens.

q3. What syntax is used to start a media query in CSS?
ans: The syntax to start a media query in CSS is as follows:

```css
@media (condition) {
  /* CSS rules to apply when the condition is met */
}
```

The condition can be based on various factors such as screen width, height, orientation, resolution, and more. For example, to target screens wider than 780px, you would use:

```css
@media screen and (width >= 780px) {
  /* CSS rules for screens wider than 780px */
}
// media with min and max width
@media (min-width: 600px) and (max-width: 1200px) {
  /* CSS rules for screens between 600px and 1200px */
}
/* media query for portrait orientation  */
@media (orientation: portrait) {
  /* CSS rules for portrait-oriented screens */
}
/* media query for resolution */
@media (min-resolution: 2dppx) {
  /* CSS rules for high-resolution screens */
}
```

study more about media queries: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media
