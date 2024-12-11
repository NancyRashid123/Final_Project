import React, { useState, useEffect } from "react";

const WeatherAndAnalysis = () => {
    // State to store weather data and user inputs
    const [weatherData, setWeatherData] = useState({});
    const [temperatureInput, setTemperatureInput] = useState("");
    const [humidityInput, setHumidityInput] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    const city = "Cairo"; // City name
    const apiKey = "e46ffcb35637f4ff6149724f7f415ac0"; // OpenWeatherMap API key
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

    // Fetch weather data when the component mounts
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`; // Corrected
                const response = await fetch(url);
                const data = await response.json();

                if (data.cod === 200) {
                    setWeatherData(data); // Update state with the weather data
                } else {
                    throw new Error("Weather data not found");
                }
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeatherData();
        // Update the clock every second
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Functions to handle the user inputs and predictions
    const getSunlightPrediction = (temperature) => {
        if (temperature > 30) {
            return "Full Sun";
        } else if (temperature > 20) {
            return "Partial Sun";
        } else {
            return "Shade";
        }
    };

    const getSeasonPrediction = (temperature) => {
        if (temperature > 25) {
            return "Summer";
        } else if (temperature > 15) {
            return "Spring/Fall";
        } else {
            return "Winter";
        }
    };

    const getHumidityLevel = (humidity) => {
        if (humidity > 70) {
            return "High Humidity";
        } else if (humidity > 40) {
            return "Normal Humidity";
        } else {
            return "Low Humidity";
        }
    };

    const handleSubmit = () => {
        const temperatureValue = parseFloat(temperatureInput);
        const humidityValue = parseFloat(humidityInput);

        if (isNaN(temperatureValue) || isNaN(humidityValue)) {
            alert("Please enter valid numbers for both temperature and humidity.");
            return;
        }

        const sunlightValue = getSunlightPrediction(temperatureValue);
        const seasonsValue = getSeasonPrediction(temperatureValue);
        const humidityLevel = getHumidityLevel(humidityValue);

        // Update the stat boxes with values (could be stored in state)
        document.getElementById("sunlightStat").querySelector("p").textContent = sunlightValue;
        document.getElementById("seasonsStat").querySelector("p").textContent = seasonsValue;
        document.getElementById("humidityStat").querySelector("p").textContent = humidityLevel;

        // Update the circles (could be stored in state)
        updateTemperatureCircle(temperatureValue);
        updateMoistureCircle(humidityValue);
    };

    // Function to update the temperature circle
    const updateTemperatureCircle = (temperature) => {
        const temperatureCircle = document.getElementById("temperatureCircle");
        if (temperature > 30) {
            temperatureCircle.style.backgroundColor = "orange";
            temperatureCircle.textContent = "High Temp!";
        } else if (temperature > 20) {
            temperatureCircle.style.backgroundColor = "yellow";
            temperatureCircle.textContent = "Moderate Temp";
        } else {
            temperatureCircle.style.backgroundColor = "blue";
            temperatureCircle.textContent = "Cool Temp!";
        }
    };

    // Function to update the moisture circle
    const updateMoistureCircle = (humidity) => {
        const moistureCircle = document.getElementById("moistureCircle");
        if (humidity > 70) {
            moistureCircle.style.backgroundColor = "green";
            moistureCircle.textContent = "Adequate Moisture";
        } else if (humidity > 40) {
            moistureCircle.style.backgroundColor = "yellow";
            moistureCircle.textContent = "Normal Moisture";
        } else {
            moistureCircle.style.backgroundColor = "red";
            moistureCircle.textContent = "Low Moisture!";
        }
    };

    // Weather data rendering
    const { main, weather, wind, visibility } = weatherData;
    const temperature = main ? main.temp : "";
    const feelsLike = main ? main.feels_like : "";
    const weatherCondition = weather ? weather[0].description : "";
    const lowTemp = main ? main.temp_min : "";
    const airQuality = main ? main.pressure : "";
    const windSpeed = wind ? wind.speed : "";
    const humidity = main ? main.humidity : "";
    const visibilityValue = visibility ? visibility / 1000 : "";
    const pressure = main ? main.pressure : "";
    const dewPoint = main ? (main.temp - ((100 - humidity) / 5)).toFixed(2) : "";
    const iconCode = weather ? weather[0].icon : "";

    const iconUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}.png` : ""; // Corrected

    return (
        <section className="analysis-cards px py">
            {/* Weather Info */}
            <div id="weather-container">
                <h3 className="title">Weather Information</h3>
                <div className="wheatherRowContainer">
                    <div className="weather-row">
                        <img id="weather-icon-img" alt="Weather Icon" src={iconUrl} />
                        <p id="temperature">{temperature}°C</p>
                        <p id="feels-like">Feels like: {feelsLike}°C</p>
                    </div>
                    <div className="weather-row">
                        <p id="weather-description">{weatherCondition}</p>
                        <p id="low-temperature">Low: {lowTemp}°C</p>
                        <p id="air-quality">Air Quality: {airQuality} hPa</p>
                    </div>
                    <div className="weather-row">
                        <p id="wind-speed">Wind: {windSpeed} km/h</p>
                        <p id="humidity-value">Humidity: {humidity}%</p>
                        <p id="visibility-value">Visibility: {visibilityValue} km</p>
                    </div>
                    <div className="weather-row">
                        <p id="pressure-value">Pressure: {pressure} hPa</p>
                        <p id="dew-point">Dew Point: {dewPoint}°C</p>
                        <p id="current-time">Time: {currentTime}</p>
                    </div>
                </div>
            </div>
            <div className="StateWhether">
                {/* Water Content and Temperature Cards */}
                <div className="stat-box-container">
                    <div className="stat-box" id="sunlightStat">
                        <h3>Sunlight:</h3>
                        <p></p>
                    </div>
                    <div className="stat-box" id="seasonsStat">
                        <h3>Seasons:</h3>
                        <p></p>
                    </div>
                    <div className="stat-box" id="humidityStat">
                        <h3>Humidity:</h3>
                        <p></p>
                    </div>
                </div>

                {/* Temperature and Moisture Circles */}
                <div className="circle-container">
                    <div id="temperatureCircle" className="circle">Temperature</div>
                    <div id="moistureCircle" className="circle">Moisture</div>
                </div>

                {/* Form for user input */}
                <div className="input-container">
                    <input
                        type="number"
                        id="temperatureInput"
                        value={temperatureInput}
                        onChange={(e) => setTemperatureInput(e.target.value)}
                        placeholder="Enter temperature (°C)"
                    />
                    <input
                        type="number"
                        id="humidityInput"
                        value={humidityInput}
                        onChange={(e) => setHumidityInput(e.target.value)}
                        placeholder="Enter humidity (%)"
                    />

                    <button id="submitButton" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WeatherAndAnalysis;

