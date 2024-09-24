import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeather, fetchWeatherForecast } from '../../services/watherApi';

export const getWeather = createAsyncThunk('weather/getWeather', async (city: string) => {
  return await fetchWeather(city);
});

export const getForecast = createAsyncThunk('weather/getForecast', async (city: string) => {
  return await fetchWeatherForecast(city);
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    currentWeather: null,
    forecast: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentWeather = action.payload;
      })
      .addCase(getWeather.rejected, (state:any, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getForecast.fulfilled, (state, action) => {
        state.forecast = action.payload.list;
      });
  },
});

export default weatherSlice.reducer;
