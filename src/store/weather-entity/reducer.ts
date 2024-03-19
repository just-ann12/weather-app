import { createSlice } from "@reduxjs/toolkit";
import { IWeatherState } from "./interface";
import {
  addCityToListOperation,
  deleteCityFromListOperation,
  getWeatherOperation,
  pendingOperation,
  rejectedOperation,
  updateCityListOperation
} from "./operations";
import { getWeather } from "./actions";

const initialValue: IWeatherState = {
  cityWeather: null,
  citiesWeatherList: [],
  isLoading: false,
};

export const weatherStore = createSlice({
  name: "weather",
  initialState: initialValue,
  reducers: {
    addCityToList: addCityToListOperation,
    deleteCityFromList: deleteCityFromListOperation,
    updateCityList: updateCityListOperation,
  },
  extraReducers: (builder) => {
    // getWeather
    builder.addCase(getWeather.pending, pendingOperation);
    builder.addCase(getWeather.fulfilled, getWeatherOperation);
    builder.addCase(getWeather.rejected, rejectedOperation);
  },
});

export const { addCityToList, deleteCityFromList, updateCityList } = weatherStore.actions;
export default weatherStore.reducer;
