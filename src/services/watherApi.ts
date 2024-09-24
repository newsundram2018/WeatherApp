import axios from 'axios';

const API_KEY = '77aeee7f5e2db0708ea44f9a70800aad';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  return response.data;
};

export const fetchWeatherForecast = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  console.log(JSON.stringify(response.data));
  return response.data;
};
