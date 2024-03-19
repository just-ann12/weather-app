import { WeatherData } from "core/types/weather.type";

export interface IWeatherState {
  cityWeather: WeatherData | null;
  citiesWeatherList: WeatherData[];
  isLoading: boolean;
}
