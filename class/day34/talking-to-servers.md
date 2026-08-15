We need some standard language that your frontend website can speak with your backend, someway to encode messages.
we need some way that both the sender and receiver of messages can encode their messages so it's understood by both.

This is what JSON is. It stands for JavaScript Object Notation and it looks a lot like, JavaScript objects.

ajax - Asynchronous JavaScript and XML, is a technique used in web development to create asynchronous web applications.
It allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes.
This means that it is possible to update parts of a web page, without reloading the whole page.

earlier xml was used for data exchange, but nowadays JSON (JavaScript Object Notation) is more commonly used due to its simplicity and ease of use with JavaScript.

ex of xml:

```xml
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```

ex of json:

```json
{
  "note": {
    "to": "Tove",
    "from": "Jani",
    "heading": "Reminder",
    "body": "Don't forget me this weekend!"
  }
}
```

benefit of json over xml:

1. **Lightweight**: JSON is less verbose than XML, which means it uses fewer characters to represent the same data. This results in smaller payloads and faster transmission over the network.
2. json is a valid javascript object, which means it can be easily parsed and manipulated using JavaScript. This makes it easier to work with JSON data in web applications.
3. **Readability**: JSON has a simpler and more readable syntax compared to XML. It uses key-value pairs and does not require closing tags, making it easier for developers to understand and work with the data.

Let's pretend we submitted a request to a server and got back a response. The response will always come back as a string so we have to convert it to an object.

```javascript
const response = '{"name": "Abdul Razzaq", "age": 30, "city": "new delhi"}';
const obj = JSON.parse(response);
```

In the above code, we have a JSON string `response` that contains information about a person. We use `JSON.parse()` to convert this string into a JavaScript object `obj`. Now we can access the properties of the object like this:

````javascript
console.log(obj.name); // Output: Abdul Razzaq
console.log(obj.age);  // Output: 30
console.log(obj.city); // Output: new delhi
```This allows us to easily work with the data we received from the server in a structured way.
Now let's say we want to send some data to the server. We can create a JavaScript object and then convert it to a JSON string before sending it.

```javascript
const data = {
  name: "Vinod Kumar",
  age: 25,
  city: "Mumbai"
};
const jsonData = JSON.stringify(data);
```In this code, we have a JavaScript object `data` that contains information about a person. We use `JSON.stringify()` to convert this object into a JSON string `jsonData`. Now we can send this JSON string to the server as part of an AJAX request or any other method of communication with the server. This allows us to easily transmit structured data from our frontend to the backend in a format that can be easily parsed and understood by the server.
````

Let's say you have a big object and you want to print it out in a useful way.

````javascript
const data = {
  name: "Vinod Kumar",
  age: 25,
  city: "Mumbai",
  hobbies: ["reading", "traveling", "coding"],
  education: {
    degree: "Bachelor's",
    major: "Computer Science",
    university: "Osmania University"
  }
};
console.log(JSON.stringify(data, null, 2));
```In this code, we have a JavaScript object `data` that contains various properties about a person. We use `JSON.stringify()` to convert this object into a JSON string, and we pass `null` as the second argument to indicate that we don't want to modify the stringification process, and we pass `2` as the third argument to specify that we want to use an indentation of 2 spaces for better readability. When we run this code, it will print the JSON string in a nicely formatted way, making it easier to read and understand the structure of the data. This is especially useful when dealing with large objects or nested structures, as it helps to visually organize the data and makes it easier to identify the different properties and their values.
````

<pre>
  <code id="code-block"></code>
</pre>

```javascript
const codeBlock = document.getElementById("code-block");
codeBlock.innerText = JSON.stringify(data, null, 4);
```

What is an API?

An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines how requests and responses should be structured, enabling developers to integrate third-party services or access data from other applications without needing to understand the underlying implementation details.

An application programming interface is a URL endpoint that allows you to send and receive data from a server. It acts as a bridge between your frontend application and the backend server, enabling seamless communication and data exchange.

Let's say you're making a weather page where the user enters their zip code and gets back their forecast for the day.

- The user navigates to your page and the page loads.
- The user types 98109 into the search bar and hits enter.
- Your app makes a request to api.example.com/weather?zip=98109
- The API response { "temperature": 75, units: "F" }
- Your app decodes the string to an object using JSON.parse
- Your app updates the page to say "The current weather is 75ºF"

Requests take time. You need to have the ability to wait in your code. This is called async code, the A in AJAX.
JavaScript has several ways of dealing with this.

- promises: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. we can use the `.then()` method to handle the resolved value of a promise and the `.catch()` method to handle any errors that may occur during the asynchronous operation.

- async/await: This is a more modern approach to handling asynchronous code, making it look and behave more like synchronous code. we can use the `async` keyword to define an asynchronous function and the `await` keyword to pause the execution of the function until a promise is resolved or rejected. along with try/catch blocks, we can handle errors in a more straightforward manner.

fetch() is a modern way to make HTTP requests in JavaScript. It returns a Promise that resolves to the Response object representing the response to the request. it takes a URL as an argument.

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

q1. What method in JavaScript converts a JSON string to a JavaScript object?
The method in JavaScript that converts a JSON string to a JavaScript object is `JSON.parse()`.

q2. What method in JavaScript converts a JavaScript object to a JSON string?
The method in JavaScript that converts a JavaScript object to a JSON string is `JSON.stringify()`.

q3. What is a Promise in JavaScript?
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more manageable way, avoiding callback hell and making it easier to handle asynchronous operations.

q4. What method is used to make an HTTP request in the browser?
The method used to make an HTTP request in the browser is the `fetch()` method. It provides a modern and flexible way to make network requests and handle responses, returning a Promise that resolves to the Response object representing the response to the request.

use async/ await for ajax requests
caniuse.com - check browser support for fetch and async/await
it's been in firefox from 2017.
it's simple than promises.

a function having async will return a promise. you can use await inside an async function to wait for a promise to resolve.
async functions always return a Promise, even if the function simply return a value.

Promise, Promise.all(), Promise.race(), Promise.resolve(), Promise.reject(), Promise.finally() are all methods related to promises in JavaScript.

q. what does Promise.all() do when handling multiple promises?
`Promise.all()` is a method that takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises in the array reject. It allows you to wait for multiple asynchronous operations to complete before proceeding with further actions.

q. when calling an async function without using `await`, how do you access the resolved value of the promise it returns?
When calling an async function without using `await`, you can access the resolved value of the promise it returns by using the `.then()` method. You can chain a `.then()` method to the async function call, which will receive the resolved value as an argument when the promise is fulfilled.

q. what does the `await` keyword do in an async function?
The `await` keyword is used in an async function to pause the execution of the function until a Promise is resolved or rejected. It allows you to write asynchronous code in a more synchronous-like manner, making it easier to read and understand. When the `await` keyword is used, the function will wait for the Promise to settle (either fulfilled or rejected) before continuing with the execution of the rest of the code in the function. If the Promise is resolved, it returns the resolved value; if the Promise is rejected, it throws an error that can be caught using a try/catch block

q. what header is used to specify the type of data being sent in an API request?
A. The "Content-Type" header is used to specify the type of data being sent in an API request. 'Content-Type: application/json' is used when sending JSON data in the request body, indicating that the server should expect the data to be in JSON format. This header helps the server understand how to parse and process the incoming data correctly.
