import { PayloadAction } from "@reduxjs/toolkit";
import { IWeatherState } from "./interface";
import { WeatherData } from "core/types/weather.type";

export const pendingOperation = (state: IWeatherState) => {
	state.isLoading = true;
};

export const rejectedOperation = (state: IWeatherState) => {
	state.isLoading = false;
};

export const getWeatherOperation = (
  state: IWeatherState,
  { payload }: PayloadAction<WeatherData>
) => {
  state.cityWeather = payload;
  state.isLoading = false;
};

export const addCityToListOperation = (
  state: IWeatherState,
  { payload }: PayloadAction<WeatherData>
) => {
  const isUnique = state.citiesWeatherList.every(city => city.id !== payload.id);
  
  if (isUnique) {
    state.citiesWeatherList = [payload, ...state.citiesWeatherList];
  } 
};

export const deleteCityFromListOperation = (
  state: IWeatherState,
  { payload }: PayloadAction<WeatherData>
) => {
  state.citiesWeatherList = state.citiesWeatherList.filter(
    (item) => item.id !== payload.id
  );
};

export const updateCityListOperation = (
  state: IWeatherState,
  { payload }: PayloadAction<WeatherData>
) => {
  state.citiesWeatherList  = state.citiesWeatherList.map(
    (item) => {if(item.id===payload.id){return payload}else return item}
  );
};
