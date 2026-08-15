# calculator project

q1. What method can be used to check if a value is a number in JavaScript?
ans: The `isNaN()` function can be used to check if a value is a number in JavaScript. It returns `true` if the value is not a number, and `false` if it is a number.
and use parseInt() or parseFloat() to convert a string to a number before checking with isNaN().

q2. What technique is recommended for initializing code in JavaScript?
ans: The recommended technique for initializing code in JavaScript is to use the `DOMContentLoaded` event. This event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. By wrapping your initialization code inside an event listener for `DOMContentLoaded`, you ensure that your code runs only after the DOM is fully constructed.
create an init() function and call it when the DOMContentLoaded event is fired.
