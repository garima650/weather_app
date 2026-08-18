🌦️ Weather App

A simple and responsive Weather Application that provides real-time weather information for any location using the OpenWeather API.

The project focuses on creating a clean user experience while working with a real-world weather API and dynamically displaying weather data.

## 🌐 Live Demo

🚀 **Try the Weather App:**
👉 https://weather-app-ykc6.onrender.com/

Experience the application live and search for real-time weather information for any city.


✨ Features

🌍 Search weather by city name

🌡️ Real-time temperature information

☁️ Current weather conditions

💧 Humidity information

💨 Wind speed

🌅 Dynamic weather information based on the searched location

📱 Responsive and user-friendly interface

🔗 Integrated with the OpenWeather API

🛠️ Technologies Used

HTML – Structure of the application

CSS – Styling and responsive design

JavaScript – Application logic and API integration

Node.js & Express.js – Backend/server setup

OpenWeather API – Real-time weather data

🔌 API Integration

This project uses the OpenWeather API to fetch real-time weather information.

When a user searches for a city, the application sends a request to the OpenWeather API and retrieves relevant weather data such as:

Temperature

Weather condition

Humidity

Wind speed

Location details

The retrieved data is then dynamically displayed on the application.

📂 Project Structure
Weather-App/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
🚀 Getting Started
1. Clone the repository
git clone https://github.com/garima650/weather-app.git
2. Navigate to the project folder
cd weather-app
3. Install dependencies
npm install
4. Add your OpenWeather API Key

Create an API key on OpenWeather and configure it in your project according to the API setup used in server.js.

Important: Never upload your API key directly to GitHub. Store sensitive credentials in environment variables such as .env.

5. Start the application
node server.js

Then open the local URL shown by your server in the browser.

🎯 What I Learned

Through this project, I learned how to:

Work with REST APIs
Integrate a third-party API into a web application
Handle asynchronous JavaScript requests
Process and display JSON data dynamically
Build a simple backend using Node.js and Express
Connect frontend and backend functionality
Handle API responses and errors
Work with environment variables and API credentials
