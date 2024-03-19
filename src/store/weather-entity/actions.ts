import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "core/api/axios";
import { API } from "core/api/entity.api";
import { CITY_WEATHER } from "../actions-types";
import { WEATHER_API_KEY } from "core/constants/api";

export const getWeather = createAsyncThunk(
  CITY_WEATHER,
  async (location: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(API.WEATHER, {
        params: {
          q: location,
          appid: WEATHER_API_KEY,
          units: "Metric",
          lang: "en",
        },
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);
