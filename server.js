const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend
app.use(express.static("public"));

// Weather API route
app.get("/api/weather", async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({
            error: "City name is required"
        });
    }

    try {
        const apiUrl =
            `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${process.env.OPENWEATHER_API_KEY}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            return res.status(response.status).json({
                error: "City not found"
            });
        }

        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error("Weather API error:", error);

        res.status(500).json({
            error: "Unable to fetch weather data"
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});