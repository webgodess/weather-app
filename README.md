# Weather App README

This is a simple weather application built using React. It allows users to get the current weather conditions for their location or a default location (Paris) if geolocation is not available. The weather data is fetched from the OpenWeatherMap API, and weather icons are displayed based on the current weather condition.

## Features

- Display of current weather conditions including temperature, description, location, and more.
- Dynamic weather icons based on the current weather condition.
- Temperature conversion between Celsius and Fahrenheit.
- Information on "feels like" temperature, wind speed, and humidity.
- Geolocation-based weather data retrieval or default location (Paris) if geolocation is unavailable.

## Code Overview

### `iconMap`

A mapping of weather condition codes to image URLs for weather icons.

### `App` Component

- Initializes state with latitude, longitude, and other weather-related data.
- Uses `componentDidMount` to fetch weather data based on the user's geolocation or a default location (Paris) if geolocation is unavailable.
- Handles temperature conversion from Celsius to Fahrenheit when the "Convert" button is clicked.
- Renders weather information and icons based on the fetched data.

## Usage

To run this weather app, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Install the required dependencies using npm or yarn:

4. Obtain an API key from the [OpenWeatherMap API](https://openweathermap.org/api) and replace `API_KEY` in the code with your actual API key.

5. Start the development server:

6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to use the weather app.

## Dependencies

- React: A JavaScript library for building user interfaces.
- ReactDOM: A package for rendering React components in the DOM.
- OpenWeatherMap API: Used for fetching weather data.
- FontAwesome: A library for displaying icons.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Weather icons from FontAwesome.
- Weather data provided by the OpenWeatherMap API.
# weather_app
# weather-app
