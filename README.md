# Weather Forecasting Web App

## Overview

This is a simple weather forecasting web application that provides a 5-day weather forecast for any location. The app fetches weather data from the OpenWeather API and displays it in a user-friendly interface built with ReactJS.

## Features

- View the current weather and a 5-day forecast.
- Search for weather information by city name.
- Responsive design for seamless use on both desktop and mobile devices.

## Technologies Used

- ReactJS
- OpenWeather API
- CSS for styling

## Prerequisites

To run this project locally, you will need to have the following installed:

- Node.js (v12.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- An API key from OpenWeather (you can sign up for a free API key [here](https://home.openweathermap.org/users/sign_up))

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/VijayMakkad/react-weather-app.git
cd weather-forecasting-web-app
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Setup Environment Variables

Create a `.env` file in the root of the project and add your OpenWeather API key:

```
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

### 4. Run the Application

Using npm:
```bash
npm start
```

Or using yarn:
```bash
yarn start
```

The application will start in development mode and open in your default browser at `http://localhost:3000`.

## Project Structure

```
weather-forecasting-web-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── WeatherCard.js
│   │   ├── WeatherList.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

## Components

- **App.js**: The main component that handles the overall layout and state management.
- **WeatherCard.js**: A component that displays the weather details for a single day.
- **WeatherList.js**: A component that displays a list of `WeatherCard` components for the 5-day forecast.

## Usage

1. Enter the name of the city you want to get the weather forecast for in the search bar.
2. The app will display the current weather and the forecast for the next 5 days for the entered city.

## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [OpenWeather](https://openweathermap.org/) for providing the weather data API.

---

Feel free to customize this README file as per your project's specific details and requirements.
