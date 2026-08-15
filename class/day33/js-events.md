# events and event listeners

we wait for events to happen.
We respond to these events by having what are called event listeners.
We give an event listener a function to run whenever an event happens.

In JavaScript, events are actions or occurrences that happen in the browser, such as a user clicking a button, hovering over an element, or submitting a form.
Event listeners are functions that are called when a specific event occurs on an element.

list of events: click, mouseover, mouseout, keydown, keyup, submit, change, load, etc.

<button class="event-button">Click me!</button>

```javascript
const button = document.querySelector(".event-button");
button.addEventListener("click", function () {
  alert("Button was clicked!");
});
```

In this code, we select the button element with the class "event-button" and add a click event listener to it. When the button is clicked, an alert message will be displayed.

This function is often called a callback because it gets called back whenever the event happens.
alert comes from the DOM. it's technically window.alert, but we can just call it alert because of how the DOM works.

another example with an input tag.
<input placeholder="type into me!" class="input-to-copy" />

<p class="p-to-copy-to">Nothing has happened yet.</p>

```javascript
const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy-to");
input.addEventListener("keyup", function () {
  // keyup event fires when the user releases a key after pressing it down, try keydown instead to see the difference.
  paragraph.textContent = input.value;
  // or
  // paragraph.innerText = input.value;
  // innerHTML is another property that can be used to set the content of an element, but it allows you to include HTML tags as well. For example, if you want to set the content of a paragraph to include a bold tag, you can do it like this:
  // paragraph.innerHTML = "This is <strong>bold</strong> text.";
  // this is a security risk if you're using user input, because it can allow for cross-site scripting (XSS) attacks. It's generally safer to use textContent or innerText when dealing with user input.
});
```

> textContent and innerText are both properties that allow us to get or set the text content of an element. The main difference between them is that textContent returns the text content of an element, including hidden elements, while innerText returns the visible text content of an element, excluding hidden elements. In most cases, textContent is preferred for performance reasons, as it does not trigger a reflow of the page.

another example

```css
.color-box {
  background-color: limegreen;
  width: 100px;
  height: 100px;
}
```

<div class="color-box"></div>
<input class="color-input" placeholder="Type a color here!" />

```javascript
const colorBox = document.querySelector(".color-box");
const colorInput = document.querySelector(".color-input");
colorInput.addEventListener("change", function () {
  colorBox.style.backgroundColor = colorInput.value;
});
```

We can also use event listeners to add new elements to the page. For example, if we want to add a new list item to an unordered list when a button is clicked, we can do it like this:

```html
<button id="addItemButton">Add Item</button>
<ul id="itemList"></ul>
```

```javascript
const addItemButton = document.getElementById("addItemButton");
const itemList = document.getElementById("itemList");
addItemButton.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  itemList.appendChild(newItem);
});
```

In this code, we select the button and the unordered list elements, and then add a click event listener to the button. When the button is clicked, a new list item with the text "New Item" is created and appended to the unordered list.
In addition to the click event, there are many other events that we can listen for, such as mouseover, mouseout, keydown, keyup, submit, change, load, etc. We can use these events to create interactive and dynamic web pages that respond to user actions.
We can also use event listeners to manipulate multiple elements at once. For example, if we want to change the text of all elements with a certain class when a button is clicked, we can do it like this:

```html
<button id="changeAllTextButton">Change All Text</button>
<p class="js-target">This is the first paragraph.</p>
<p class="js-target">This is the second paragraph.</p>
<p class="js-target">This is the third paragraph.</p>
```

```javascript
const changeAllTextButton = document.getElementById("changeAllTextButton");
changeAllTextButton.addEventListener("click", function () {
  const elementsToChange = document.querySelectorAll(".js-target");
  elementsToChange.forEach(function (element) {
    element.innerText = "Modified by JavaScript!";
  });
});
```

In this code, we select the button and add a click event listener to it. When the button is clicked, we use `querySelectorAll` to select all elements with the class "js-target" and then use the `forEach` method to iterate over each element and change its text content to "Modified by JavaScript!".
Alternatively, we can also use a `for` loop to achieve the same result:

```javascript
changeAllTextButton.addEventListener("click", function () {
  const elementsToChange = document.querySelectorAll(".js-target");
  for (let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Modified by JavaScript!";
  }
});
```

In this code, we use a `for` loop to iterate over the NodeList of elements returned by `querySelectorAll` and change the text content of each element to "Modified by JavaScript!".
In summary, events and event listeners are essential for creating interactive web pages. They allow us to respond to user actions and manipulate the DOM to create dynamic content. By using event listeners, we can make our web pages more engaging and user-friendly.

## event delegation and event bubbling

event delegation is a technique in JavaScript where we attach a single event listener to a parent element instead of attaching multiple event listeners to individual child elements. This approach takes advantage of event bubbling, which is the process by which an event propagates from the target element up through the DOM tree to its ancestors.

When an event occurs on an element, it first triggers the event on that element (the target), and then it "bubbles" up to its parent elements, allowing us to handle the event at a higher level in the DOM hierarchy. This can be particularly useful when we have many child elements that need to respond to the same event, as it reduces the number of event listeners we need to attach and can improve performance.

When event fires on an element, after that "bubbles" up to its parent, and then its parent, and its parent, etc. until it's at the root element.

<div class="button-container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>

```javascript
const buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener("click", function (event) {
  console.log("Button clicked:", event.target);
});
```

event.stopPropagation() can be used to stop the event from bubbling up to its parent elements. This can be useful if we want to prevent a parent element from responding to an event that occurred on a child element.

## unary operators

unary operators are operators that take a single operand and perform an operation on it. In JavaScript, unary operators include:

- `+` (unary plus): Converts its operand to a number.
- `-` (unary negation): Converts its operand to a number and negates it.
- `++` (increment): Increases its operand by one.
- `--` (decrement): Decreases its operand by one.

q1. what is an event listener in javascript?
An event listener in JavaScript is a function that waits for a specific event to occur on a particular element in the Document Object Model (DOM). When the specified event occurs, the event listener executes the associated callback function, allowing developers to respond to user interactions or other events in a web application.

q2. what is event delegation in javascript?
Event delegation in JavaScript is a technique where a single event listener is attached to a parent element, rather than attaching individual event listeners to multiple child elements. This approach takes advantage of event bubbling, allowing the parent element to handle events that occur on its child elements. Event delegation improves performance and simplifies code management, especially when dealing with dynamic content or a large number of child elements.

q3. what is event bubbling in javascript?
Event bubbling in JavaScript is a mechanism by which an event propagates from the target element (the element that triggered the event) up through the DOM tree to its ancestor elements. When an event occurs on an element, it first triggers the event on that element and then "bubbles" up to its parent elements, allowing those ancestors to respond to the event as well. This behavior enables event delegation and allows developers to handle events at higher levels in the DOM hierarchy.

q4. what is the difference between event delegation and event bubbling in javascript?
Event delegation and event bubbling are related concepts in JavaScript, but they serve different purposes:

- Event bubbling is the process by which an event propagates from the target element up through the DOM tree to its ancestor elements. It describes how events travel through the DOM hierarchy.
- Event delegation is a technique that takes advantage of event bubbling by attaching a single event listener to a parent element, allowing it to handle events that occur on its child elements. Event delegation is a strategy for managing event listeners efficiently, while event bubbling is the underlying mechanism that enables this strategy to work.

q5. what is the difference between keyup and keydown events in javascript?
The keyup and keydown events in JavaScript are both related to keyboard interactions, but they occur at different points in the key press process:

- The keydown event is triggered when a key is pressed down. It occurs as soon as the key is pressed, and it can be used to detect when a key is being held down or to perform actions while the key is pressed.
- The keyup event is triggered when a key is released after being pressed. It occurs after the key has been pressed and released, and it can be used to perform actions that should occur after the key press is complete, such as submitting a form or updating the UI based on the final input.
