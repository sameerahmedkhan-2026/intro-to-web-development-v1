# word masters game

link: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/project

https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/word-masters.html

function to test if a string is a single alphabetical letter

```javascript
function isSingleAlphabeticalLetter(str) {
  return typeof str === "string" && str.length === 1 && /[a-zA-Z]/.test(str);
}
```

or

```javascript
function isSingleAlphabeticalLetter(str) {
  return typeof str === "string" && /^[a-zA-Z]$/.test(str);
}
isSingleAlphabeticalLetter("a"); // true
isSingleAlphabeticalLetter("Z"); // true
isSingleAlphabeticalLetter("ab"); // false
isSingleAlphabeticalLetter("1"); // false

document
  .querySelector(".tester-input")
  .addEventListener("keydown", function (event) {
    // uses the isSingleAlphabeticalLetter function from above
    if (!isSingleAlphabeticalLetter(event.key)) {
      event.preventDefault();
    }
  });
```

/\*
q1. how can event.preventDefault() be used in input validation?
ans: event.preventDefault() can be used in input validation to stop the default action of an event from occurring. For example, in the context of a form input, if a user tries to enter an invalid character (like a number or symbol when only letters are allowed), calling event.preventDefault() will prevent that character from being added to the input field. This allows developers to enforce specific input rules and ensure that only valid data is entered by the user.

it stops the default action of an event, which can be used to prevent users from entering invalid input, such as blocking non-alphabetical characters in a text field.

q2. what is a regular expression and how is it used in input validation?
ans: A regular expression (regex) is a sequence of characters that defines a search pattern. It is used in input validation to check if the input matches a specific pattern. For example, in the provided code, the regex `/^[a-zA-Z]$/` is used to validate that the input is a single alphabetical letter. If the input does not match the pattern defined by the regex, it can be rejected or handled accordingly. Regular expressions are powerful tools for validating strings against complex patterns.

q3. what do ^ and $ mean in a regular expression?
ans: In a regular expression, `^` and `$` are anchors that denote the start and end of a string, respectively. The `^` symbol indicates that the match must occur at the beginning of the string, while the `$` symbol indicates that the match must occur at the end of the string. For example, in the regex `/^[a-zA-Z]$/`, the `^` ensures that the match starts at the beginning of the string, and the `$` ensures that the match ends at the end of the string. This means that the entire string must consist of exactly one alphabetical letter for the regex to match successfully.

q4. what is the advantage of adding classes conditionally in CSS rather than directly manipulating styles with JavaScript?
ans: Adding classes conditionally in CSS rather than directly manipulating styles with JavaScript has several advantages. It promotes separation of concerns, keeping the styling logic in CSS and the behavior logic in JavaScript. This makes the code more maintainable and easier to read. Additionally, using classes allows for easier reuse of styles across different elements and components, and it can take advantage of CSS transitions and animations.

q5. why is the event listener set to keydown instead of keypress ?
ans: The event listener is set to `keydown` instead of `keypress` because `keydown` is triggered for all keys, including non-character keys (like Shift, Ctrl, and arrow keys), while `keypress` is only triggered for character keys. Using `keydown` allows for more comprehensive input validation, as it captures all key events and can prevent invalid input before it is processed. Additionally, `keypress` is considered deprecated in modern web development, making `keydown` the preferred choice for handling keyboard events.

q6. what is the purpose of naming an anonymous function?
ans: Naming an anonymous function can improve code readability and debugging. When a function has a name, it can be more easily identified in stack traces and error messages, making it easier to trace issues in the code. Additionally, named functions can be reused and referenced elsewhere in the code, whereas anonymous functions are typically used for one-time operations or callbacks. Naming functions also helps with self-documentation, as the name can describe the purpose or behavior of the function.

\*/
