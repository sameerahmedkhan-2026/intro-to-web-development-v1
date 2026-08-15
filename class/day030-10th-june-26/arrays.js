// arrays in JavaScript

// Objects are un-ordered collections of data using keys and values. 
// Arrays, in contrast, are ordered collections of data. 
// If you put something in an array, it has an order. 
// For example, you might a list of the days of the week.
const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
console.log(daysOfWeek[0]); // Output: "Monday". the first element is index 0.
console.log(daysOfWeek[6]); // Output: "Sunday"

// Arrays are useful when you want to store a list of items in a specific order and access them by their index. 
// Objects are useful when you want to store data that is related to each other and access it using keys.

// Arrays can hold any type of data, including numbers, strings, objects, and even other arrays. 
// Arrays have a special property called length that keeps track of the number of elements in the array.

const myArray = [1, 2, 3, "hello", { name: "Alice" }, [4, 5]];
console.log(myArray.length); // Output: 6

// we can access elements in an array using their index, which starts at 0.
console.log(myArray[0]); // Output: 1
console.log(myArray[3]); // Output: "hello"
console.log(myArray[4].name); // Output: "Alice"
console.log(myArray[5][1]); // Output: 5

// we can modify elements in an array by assigning a new value to a specific index.
myArray[1] = "world";
console.log(myArray[1]); // Output: "world"

// arrays have many built-in methods that allow us to manipulate and work with the data they contain. 
// Some common array methods include push, pop, shift, unshift, slice, splice, indexOf, and forEach.

// let's see some examples of these methods in action.
const numbers = [1, 2, 3];
numbers.push(4); // adds 4 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4]
numbers.push(5, 6); // adds 5 and 6 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// numbers[2] = 10; // modifies the element at index 2
// console.log(numbers); // Output: [1, 2, 10, 4, 5, 6]

numbers.pop(); // removes the last element from the array
console.log(numbers); // Output: [1, 2, 3]

numbers.unshift(0); // adds 0 to the beginning of the array
console.log(numbers); // Output: [0, 1, 2, 3]

numbers.shift(); // removes the first element from the array
console.log(numbers); // Output: [1, 2, 3]

const slicedNumbers = numbers.slice(1, 3); // creates a new array with elements from index 1 to 2
console.log(slicedNumbers); // Output: [2, 3]

numbers.splice(1, 1); // removes 1 element at index 1
console.log(numbers); // Output: [1, 3]

console.log(numbers.indexOf(3)); // Output: 1

const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" | "));


// we can also use the forEach method to iterate over the elements of an array and perform a function on each element.
const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
];

// method 1
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// method 2
const printCity = function (city) {
    console.log(city);
};
cities.forEach(printCity);

// method 3
cities.forEach(function (city) {
    console.log(city);
});

// method 4
cities.forEach((city) => {
    console.log(city);
});

// passing functions as arguments to other functions is a common pattern in JavaScript, and it allows us to create more flexible and reusable code.
// this is a fundamental concept in JavaScript and is used extensively in functional programming and event handling.
// functions that take other functions as arguments are called higher-order functions.
// for example, the forEach method is a higher-order function because it takes a function as an argument and calls that function for each element in the array.
// functions that return other functions are also higher-order functions.
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// in this example, the createMultiplier function is a higher-order function because it returns another function that multiplies a number by a specified multiplier. 
// The double and triple functions are created by calling createMultiplier with different multiplier values, and they can be used to multiply numbers by 2 and 3, respectively.

// higher-order functions are a powerful tool in JavaScript and are used in many libraries and frameworks to create more flexible and reusable code.
// functions are first-class citizens in JavaScript, which means they can be treated like any other value. 
// They can be assigned to variables, passed as arguments to other functions, and returned from functions. 
// This allows for a lot of flexibility in how we write and organize our code.

// q. what is the difference between an array and an object in JavaScript?
// A. An array is an ordered collection of data, while an object is an unordered collection of key-value pairs. 
// Arrays are accessed using numeric indices, while objects are accessed using keys. 
// Arrays have a length property that keeps track of the number of elements, while objects do not have a length property. 
// Arrays are typically used for lists of items, while objects are used for more complex data structures that require key-value pairs.

// q2. What happens when you access an array index that is out of bounds?
// A. When you access an array index that is out of bounds, it returns undefined.
const myArray2 = [1, 2, 3];
console.log(myArray2[5]); // Output: undefined  

