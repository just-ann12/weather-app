import { StoreType } from "../root";

export const selectorGetCityWeather = (store: StoreType) => store.weatherStore.cityWeather;

export const selectorGetIsWeatherLoading = (store: StoreType) => store.weatherStore.isLoading;

export const selectorGetCitiesWeatherList = (store: StoreType) => store.weatherStore.citiesWeatherList;