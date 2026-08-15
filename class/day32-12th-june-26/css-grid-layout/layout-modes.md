# layout modes

- layout modes are the different algorithms that the browser uses to create a layout.
- the display property is what determines the layout mode we are in.

go through the following examples and try to understand why the width property is not working in each case.

1. example of inline element: https://codepen.io/sameerahmedkhan-2026/pen/ogBxboy

```html
<span class="box">Not 1000px wide</span>
```

```css
.box {
  width: 1000px; // this will not work
  background-color: lightblue;
}
```

Do you know why it’s not 1000px wide?

It is because the element is a `<span>`, which is an inline element, where properties like width and height don’t work, and others, like margin and padding behave differently.
span element have display: inline by default, which means that it only takes up as much width as its content and does not allow for setting a specific width or height. To make the width property work, you would need to change the display property of the span to either block or inline-block. For example:

```css
.box {
  display: block; // or inline-block
  width: 1000px;
  background-color: lightblue;
}
```

2. example of flexbox: https://codepen.io/sameerahmedkhan-2026/pen/GgrZoOe

```html
<div class="flex-group">
  <div>one</div>
  <div>two</div>
  <div>three</div>
</div>
```

```css
.flex-group {
  display: flex;
  gap: 12px;
}

.flex-group > div {
  width: 1000px; // this will not work
  height: 250px;
  background-color: orangered;
}
```

this is because when we use different display values, we’re enabling different Layout Modes.
When we change a layout mode, we’re changing the algorithm the browser uses to create that layout.
we only need to think of what mode we’re in.

> when things don’t act as you’d expect them to, if you understand the layout mode you’re in, you’ll be able to pinpoint the reason down to the context you are working in, and find a solution much quicker.

## interview questions:

- What is a layout mode in CSS?
- How does the display property affect layout modes in CSS?
- Why doesn't a width property work on a span element by default?
- How can you make the width property work on an inline element like a span?
- What happens when you set display: flex on a parent element in terms of layout mode?
  - Answer: When you set display: flex on a parent element, it changes the layout mode to Flexbox. In this mode, the direct children of the flex container become flex items, and their layout is determined by the flexbox algorithm. This means that properties like width and height may not work as expected on the flex items, as their size and position are influenced by the flex container's properties such as flex-direction, justify-content, align-items, and others. To control the size of flex items, you may need to use flex properties like flex-grow, flex-shrink, and flex-basis instead of width and height.
