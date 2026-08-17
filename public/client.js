const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather.icon");

async function checkWeather(city) {

    if (!city.trim()) {
        return;
    }

    try {
        const response = await fetch(
            `/api/weather?city=${encodeURIComponent(city)}`
        );

        const data = await response.json();

        if (!response.ok) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }

        document.querySelector(".city").innerHTML = data.name;

        document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";

        document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";

        document.querySelector(".wind").innerHTML =
            data.wind.speed + " km/hr";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    } catch (error) {

        console.error("Error:", error);

        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});