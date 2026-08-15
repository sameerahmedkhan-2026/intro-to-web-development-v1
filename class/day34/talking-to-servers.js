




/*
below is the code for the "Talking to Servers" exercise. It fetches a random image from the Picsum API and displays
 it on the page when the "Generate Image" button is clicked. 
*/
const picsum_url = "https://picsum.photos/200";

const imageTarget = document.getElementById("image-target");

function addRandomImage() {
    const promise = fetch(picsum_url);
    promise
        .then(function (response) {
            console.log("Response:", response); // log the response 

            const processingPromise = response.json(); // convert the response to a blob, blob is a binary representation of the image data.
            return processingPromise;
        })
        .then(function (processedResponse) {
            const imageUrl = URL.createObjectURL(processedResponse);
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Random image";
            img.onload = function () {
                URL.revokeObjectURL(imageUrl);
            };

            imageTarget.replaceChildren(img);
        });
}

document.getElementById("generate-image").addEventListener("click", addRandomImage);


/*
api call to open weather api
*/

const weatherEndpoint = "https://api.openweathermap.org/data/2.5/weather";

const weatherApiUrl = `${weatherEndpoint}?q=Hyderabad,india&APPID=2376a261a3c0158b0866dfb236ecc410`
// "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2376a261a3c0158b0866dfb236ecc410"
// "https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid=2376a261a3c0158b0866dfb236ecc410";

const weatherSearchButton = document.getElementById("weather-search");
const weatherInfo = document.getElementById("weather-target");

// function fetchWeather() {
//     fetch(weatherApiUrl)
//         .then(function (response) {
//             console.log("Response:", response); // log the response status
//             return response.json(); // convert the response to JSON
//         })
//         .then(function (data) {
//             console.log("Weather Data:", data); // log the weather data
//             weatherInfo.textContent = `Temperature in ${document.getElementById("weather-city").value}: ${data.main.temp}°C, Weather: ${data.weather[0].description}`;
//         })
//         .catch(function (error) {
//             console.error("Error fetching weather data:", error);
//         });
// }

weatherSearchButton.addEventListener("click", fetchWeather);

// using arrow functions inside the fetchWeather function
// function fetchWeather() {
//     fetch(weatherApiUrl)
//         .then((response) => {
//             return response.json(); 
//         })
//         .then((data) => {
//             weatherInfo.textContent = `Temperature in ${document.getElementById("weather-city").value}: ${data.main.temp}°C, Weather: ${data.weather[0].description}`;
//         })
//         .catch((error) => {
//             console.error("Error fetching weather data:", error);
//         });
// }

// using async/await syntax for better readability and error handling with arrow functions

const fetchWeather = async () => {
    // const response = await fetch(weatherApiUrl);
    // const data = await response.json();
    // weatherInfo.textContent = `Temperature in ${document.getElementById("weather-city").value}: ${data.main.temp}°C, Weather: ${data.weather[0].description}`;

    // You can also handle errors using try-catch
    try {
        const response = await fetch(weatherApiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        weatherInfo.textContent = `Temperature in ${document.getElementById("weather-city").value}: ${data.main.temp}°C, Weather: ${data.weather[0].description}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }

}

// q1. What does the await keyword do in an async function?
//ans: It pauses execution of the function and waits for a Promise to resolve, 
// then resumes execution with the resolved value once the Promise is complete.


// fetch with post api
const postApiData = async () => {
    const postData = {
        title: "foo",
        body: "bar",
        userId: 1,
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Post Response Data:", data);
    } catch (error) {
        console.error("Error posting data:", error);
    }
};

document.getElementById("post-data").addEventListener("click", postApiData);

