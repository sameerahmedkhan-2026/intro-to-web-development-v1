// objects in javascript

// objects are a collection of key-value pairs. They are used to store data and functions together in a single entity. Objects can be created using object literals, constructor functions, or classes.

// object literal
const person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    },
};

// we can access the properties of an object using dot notation or bracket notation
console.log(person.name); // John
console.log(person["age"]); // 30

// we can also call the methods of an object
person.greet(); // Hello, my name is John

// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("Hello, my name is " + this.name);
    };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 35);

console.log(person1.name); // Alice
console.log(person2.age); // 35
person1.greet(); // Hello, my name is Alice
person2.greet(); // Hello, my name is Bob

// classes
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

const person3 = new PersonClass("Charlie", 40);
console.log(person3.name); // Charlie
person3.greet(); // Hello, my name is Charlie

// objects are a fundamental part of JavaScript and are used in many different ways, including to create complex data structures, to represent real-world entities, and to implement object-oriented programming concepts.
