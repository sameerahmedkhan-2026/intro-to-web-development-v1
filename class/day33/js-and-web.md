# JavaScript and the Web

Now we're going to start using JavaScript to interact with your webpage.
this is a unique feature of JavaScript that allows you to make your webpage dynamic and interactive.

The way that JavaScript and HTML/CSS interact with each other is a thing called the DOM, the Document Object Model.
The DOM is basically a bunch of objects and methods that you can call from JavaScript to interact with the HTML/CSS of the page.

The DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.
The DOM represents the document as a tree of nodes, where each node is an object representing a part of the document.

<div class="red-square"></div>

```css
.red-square {
  color: crimson;
  width: 100px;
  height: 100px;
}
```

```js
const redSquare = document.querySelector(".red-square");
// it returns to you the first one of that matches selector.
// even if you have many of them on the page, you get just the first one.
redSquare.style.backgroundColor = "limegreen";
// style is a property of the element that allows you to change the CSS styles of that element directly from JavaScript.
// kebab-case in CSS becomes camelCase in JavaScript when you access it through the style property. So background-color becomes backgroundColor.
```

here, we used JavaScript to change the color of the square from crimson to limegreen.

if we had multiple elements and we wanted to modify all at once.

<ul>
  <li class="js-target">Unchanged</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
</ul>

```js
const jsTargets = document.querySelectorAll(".js-target");
// it returns a NodeList of all the elements that match the selector.
jsTargets.forEach((element) => {
  element.innerText = "Modified by JavaScript!";
});

const elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerText = "Modified by JavaScript!";
}
```

In this code, we select all the elements with the class "js-target" and then use the `forEach` method and also a `for` loop to iterate over each element and change its text content.

To access an element in the DOM, we can use various methods such as `getElementById`, `getElementsByClassName`, `getElementsByTagName`, and `querySelector`.
Once we have access to an element, we can manipulate it using properties and methods.

the document object provides various properties and methods to manipulate the DOM. For example, we can use the `textContent` property to change the text of an element, or the `appendChild` method to add a new element to the page.

For example, if we want to change the text of a heading with the id "myHeading", we can do it like this:

```html
<h1 id="myHeading">Old Heading Text</h1>
```

```javascript
const heading = document.getElementById("myHeading");
heading.textContent = "New Heading Text";
```

This code selects the element with the id "myHeading" and changes its text content to "New Heading Text".

We can also add new elements to the page. For example, if we want to add a new paragraph to a div with the id "myDiv", we can do it like this:

```html
<div id="myDiv"></div>
```

```javascript
const myDiv = document.getElementById("myDiv");

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

myDiv.appendChild(newParagraph);
```

This code creates a new paragraph element, sets its text content, and then appends it to the div with the id "myDiv".

In addition to manipulating elements, we can also add event listeners to make our webpage interactive.
For example, if we want to change the background color of a button when it's clicked, we can do it like this:

```javascript
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
  myButton.style.backgroundColor = "blue";
});
```

This code adds a click event listener to the button with the id "myButton". When the button is clicked, its background color changes to blue.

Overall, JavaScript allows us to create dynamic and interactive webpages by manipulating the DOM.
By understanding how to access and manipulate elements in the DOM, we can create engaging user experiences on our websites.

// show network calls for a local html page, client and server.

q1. what happens when a browser first receives an HTML page from a server?
When a browser first receives an HTML page from a server, it begins to parse the HTML content and constructs the DOM tree.
The browser also identifies any linked resources such as CSS files, JavaScript files, images, and other media.
It then makes additional network requests to fetch these resources.
Once all resources are loaded, the browser renders the page for the user to view and interact with.

q2. what is the difference between the DOM and the HTML source code?
The HTML source code is the raw markup that is sent from the server to the browser. It represents the structure and content of the webpage as written by the developer.
The DOM, on the other hand, is a live representation of the webpage that the browser constructs based on the HTML source code.
The DOM allows for dynamic manipulation of the webpage through JavaScript, enabling changes to the structure, style, and content of the page after it has been loaded.

q3. how does JavaScript interact with the DOM?
JavaScript interacts with the DOM by using various methods and properties to access and manipulate elements on the webpage.

q4. how does a browser handle javascript file loading?
ans: When a browser encounters a `<script>` tag in the HTML, it pauses the parsing of the HTML document and starts downloading the JavaScript file specified in the `src` attribute.
Once the JavaScript file is downloaded, the browser executes the script. After the script execution is complete, the browser resumes parsing the HTML document.
If the `<script>` tag has the `defer` attribute, the browser will continue parsing the HTML document while downloading the JavaScript file, and will execute the script after the HTML parsing is complete.
If the `<script>` tag has the `async` attribute, the browser will download the JavaScript file asynchronously and execute it as soon as it is downloaded, without waiting for the HTML parsing to complete. This can lead to scripts being executed in an unpredictable order if multiple scripts are loaded asynchronously.

q5. what are some popular platforms for hosting web applications?
Some popular platforms for hosting web applications include:

- GitHub Pages: A free hosting service for static websites directly from a GitHub repository.
- Netlify: A platform that provides continuous deployment and hosting for static websites and serverless functions.
- Vercel: A cloud platform for static sites and serverless functions, optimized for frontend frameworks and static site generators.
- Heroku: A cloud platform that allows developers to build, run, and operate applications entirely in the cloud, supporting multiple programming languages.
- AWS (Amazon Web Services): A comprehensive cloud platform that offers a wide range of services for hosting web applications, including EC2, S3, and Lambda.
- Google Cloud Platform: A suite of cloud computing services that provides hosting for web applications, including App Engine and Cloud Functions.
- Microsoft Azure: A cloud computing service that provides hosting for web applications, including Azure App Service and Azure Functions.
- DigitalOcean: A cloud infrastructure provider that offers scalable virtual servers and managed databases for hosting web applications.

whatever api is available in DOM, is not available in node.js, because node.js is a server-side runtime environment and does not have access to the DOM, which is a client-side API for interacting with HTML and CSS in a web browser.

$0 in the console refers to the currently selected element in the Elements panel of the browser's developer tools. It allows you to interact with that element directly from the console, making it easier to manipulate and inspect the DOM.
const x = $0; // assigns the currently selected element to the variable x
x.style.backgroundColor = "yellow"; // changes the background color of the selected element to yellow

x.classList.add("highlight"); // adds the "highlight" class to the selected element
x.classList.remove("highlight"); // removes the "highlight" class from the selected element
