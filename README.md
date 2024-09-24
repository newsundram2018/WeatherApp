Here’s the updated `README.md` file with testing and chat functionality removed:

---

# Weather Forecasting App

A mobile weather forecasting app built using **React Native**, **TypeScript**, **Redux**, and integrated with the **OpenWeatherMap API**. The app allows users to search for a city's current weather conditions and view a 5-day weather forecast. The app also displays the temperature trends using a line chart.

## Features

- Search for weather information by city name.
- Display current weather conditions, including temperature, humidity, wind speed, and weather description.
- Show a 5-day weather forecast with daily highs and lows and weather conditions.
- Line chart displaying temperature trends over the next 5 days.
- Smooth navigation between screens using **React Navigation**.
- **Redux** for state management.
- **TypeScript** for type safety.

## Screenshots

*Add screenshots of your app here.*

## Tech Stack

- **React Native**: Front-end mobile framework.
- **TypeScript**: Type safety and better development practices.
- **Redux**: State management for handling city search and weather data.
- **React Native Chart Kit**: For displaying the temperature trend chart.
- **OpenWeatherMap API**: Third-party API for fetching weather data.
- **React Navigation**: Navigation between screens.

## Prerequisites

Ensure that you have the following tools installed:

- **Node.js** (v14+)
- **React Native CLI** or **Expo CLI**
- **Android Studio** or **Xcode** for emulators

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-forecasting-app.git
   cd weather-forecasting-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the **OpenWeatherMap API**:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) to get your API key.
   - Replace `your-api-key` in the API call within the codebase with your actual API key.

4. Install additional dependencies:

   ```bash
   npm install react-native-chart-kit react-native-svg
   ```

5. If you're running on iOS, navigate to the `ios` folder and install CocoaPods dependencies:

   ```bash
   cd ios && pod install && cd ..
   ```

6. Start the app:

   ```bash
   npx react-native run-android   # for Android
   npx react-native run-ios       # for iOS
   ```

## Usage

1. On the home screen, enter the name of a city in the search bar and click "Search".
2. View current weather conditions, including temperature, humidity, wind speed, and weather description.
3. Click on "5-Day Forecast" to navigate to the forecast screen, where you can see temperature trends over the next 5 days in a line chart.
4. Scroll down to see individual daily weather details.

## Project Structure

```bash
.
├── android               # Android specific files
├── ios                   # iOS specific files
├── src
│   ├── components        # Reusable UI components
│   ├── redux             # Redux actions, reducers, and store
│   ├── screens           # HomeScreen and ForecastScreen
│   └── App.tsx           # Entry point of the app
├── README.md             # Project documentation
└── package.json          # Dependencies and scripts
```

## API Reference

- **OpenWeatherMap API**:
  - Base URL: `https://api.openweathermap.org/data/2.5/`
  - Replace `your-api-key` with your actual API key in API requests.

Example API endpoint for a 5-day forecast:

```bash
https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=your-api-key
```

## Known Issues

- **Gesture Handler Error**: If you encounter the error `'RNGestureHandlerModule' could not be found`, try running:

  ```bash
  npm install react-native-gesture-handler
  cd ios && pod install && cd ..
  ```

## License

This project is licensed under the **MIT License**.

---

### Future Improvements

- Add more detailed weather metrics such as air pressure, visibility, and UV index.
- Implement a dark mode.
- Enable location-based weather fetching using GPS.

---

This `README.md` provides all the necessary details without the testing and chat functionality.
