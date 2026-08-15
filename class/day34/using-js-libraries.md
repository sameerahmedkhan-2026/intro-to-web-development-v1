# using an external js library - popmotion

https://github.com/popmotion/popmotion

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Animation</title>
    <link href="./animation.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <h1>Animation</h1>
    <div class="ball"></div>

    <script src="https://unpkg.com/popmotion@11.0.3/dist/popmotion.min.js"></script>
    <script src="./animation.js"></script>
  </body>
</html>
```

```css
.ball {
  width: 100px;
  height: 100px;
  background-color: #0074d9;
  border-radius: 50%;
  position: relative;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 400px;
}
```

```javascript
popmotion.animate({
  from: "0px",
  to: "100px",
  repeat: Infinity,
  repeatType: "mirror",
  type: "spring",
  onUpdate(update) {
    ball.style.left = update;
  },
});
```

q1. what is unpkg used for in web development?
ans: unpkg is a fast, global content delivery network (CDN) for everything on npm. It allows developers to include JavaScript libraries and other assets directly in their web projects without needing to download and host them locally. By using unpkg, developers can easily access the latest versions of libraries, reduce the size of their projects, and improve load times by leveraging the CDN's caching capabilities.

- but external cdn is not always the best option.
- we use node.js to install packages locally. lets install parcel (to build and bundle) our project and popmotion as a local dependency.

q2. what is the risk of relying on an external CDN for libraries in a web project in production?
ans: Relying on an external CDN for libraries in a web project in production can introduce several risks. If the CDN experiences downtime or becomes unavailable, it can lead to broken functionality in the application, negatively impacting the user experience. Additionally, if the library is updated or removed from the CDN, it can cause compatibility issues or unexpected behavior in the application. There are also security concerns, as using an external CDN may expose the application to potential vulnerabilities if the library is compromised. To mitigate these risks, it is often recommended to host critical libraries locally or use a package manager like npm to manage dependencies, ensuring that the application remains stable and secure.

q3. what is the purpose of the require() function in node.js?
ans: The `require()` function in Node.js is used to import modules, JSON, and local files into a Node.js application. It allows developers to include external libraries or their own modules, enabling code reuse and modularity. When a module is required, Node.js loads the module and returns its exports, which can then be used in the application. This function is essential for managing dependencies and organizing code in a Node.js environment, allowing developers to build scalable and maintainable applications.

q4. why type="module" is used in the script tag?
ans: The `type="module"` attribute in the `<script>` tag is used to indicate that the JavaScript file should be treated as an ES6 module. This allows developers to use `import` and `export` statements to organize code into reusable modules, enabling better code structure and maintainability. When a script is marked as a module, it is executed in strict mode by default, and it has its own scope, preventing variables and functions from polluting the global namespace. Additionally, modules can be loaded asynchronously, improving performance and allowing for better dependency management in modern web development.
