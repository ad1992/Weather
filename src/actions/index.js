import axios from 'axios';
const API_KEY = '88310c735e0662e7bd9e586fb012c4a6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('request is ', request)
  return {
    type: 'FETCH_WEATHER',
    payload: request
  }
}
