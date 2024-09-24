import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getWeather, getForecast } from '../../redux/slices/weatherSlice';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }: any) => {
  const [city, setCity] = useState('');
  const dispatch = useAppDispatch();
  const { currentWeather, status, error } = useAppSelector((state:any) => state.weather);

  const handleSearch = () => {
    dispatch(getWeather(city));
    dispatch(getForecast(city));
  };

  return (
    <LinearGradient colors={['#74ebd5', '#ACB6E5']} style={styles.container}>
      <Text style={styles.title}>Weather App</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter city"
        placeholderTextColor="#999"
        value={city}
        onChangeText={setCity}
      />

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {status === 'loading' ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : currentWeather ? (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Temperature: {currentWeather.main.temp}°C</Text>
          <Text style={styles.weatherText}>Humidity: {currentWeather.main.humidity}%</Text>
          <Text style={styles.weatherText}>Wind Speed: {currentWeather.wind.speed} m/s</Text>
          <Text style={styles.weatherText}>Condition: {currentWeather.weather[0].description}</Text>

          <TouchableOpacity
            style={[styles.button, styles.forecastButton]}
            onPress={() => navigation.navigate('Forecast')}
          >
            <Text style={styles.buttonText}>5-Day Forecast</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6F61',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 20,
    color: '#ff6961',
    textAlign: 'center',
    marginTop: 20,
  },
  weatherContainer: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
  forecastButton: {
    marginTop: 20,
    backgroundColor: '#4A90E2',
  },
});

export default HomeScreen;
