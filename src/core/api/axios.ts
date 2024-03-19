import axios from "axios";

// Create an Axios instance
const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
